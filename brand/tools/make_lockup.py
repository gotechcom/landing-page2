#!/usr/bin/env python3
"""Sinh brand/svg/lockup-horizontal-*.svg: mark + chữ "GoTechCom" (Geist Bold) đã chuyển thành path.

Chạy một lần khi đổi chữ/khoảng cách; kết quả được commit, nên `build.py` không cần font.
Cần: fonttools, uharfbuzz (cài trong venv ngoài repo) và file Geist-Bold.ttf (SIL OFL, gói npm `geist`).

    python3 brand/tools/make_lockup.py --font /path/to/Geist-Bold.ttf
"""
import argparse
import pathlib

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont

SVG_DIR = pathlib.Path(__file__).resolve().parent.parent / "svg"
HEX = "M32 2L58 16V48L32 62L6 48V16Z"
G = "M14 22H30V27H19V37H23V32H30V42H14Z"
T = "M34 22H50V27H44.5V42H39.5V27H34Z"
TEXT = "GoTechCom"
SPLIT = 6  # "GoTech" nhấn mạnh, "Com" nhạt hơn — giữ cách nhấn của Logo.tsx cũ
CAP_UNITS = 24  # chiều cao chữ hoa trong hệ toạ độ mark (mark cao 60)
GAP = 14
TRACKING_EM = -0.025  # design system: heading luôn -0.025em

GRADIENT = (
    '<linearGradient id="gt" x1="6" y1="2" x2="58" y2="62" gradientUnits="userSpaceOnUse">'
    '<stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#06b6d4"/></linearGradient>'
)

VARIANTS = {
    # tên: (mark, màu "GoTech", màu "Com")
    "color": ("color", "#0f172a", "#475569"),       # nền sáng
    "on-dark": ("color", "#ffffff", "#cbd5e1"),     # nền tối, giữ mark gradient
    "white": ("white", "#ffffff", "#cbd5e1"),       # nền tối/ảnh, hoàn toàn trắng
}


def shape(font_path):
    font = TTFont(font_path)
    glyphs = font.getGlyphSet()
    order = font.getGlyphOrder()
    upem = font["head"].unitsPerEm
    cap = font["OS/2"].sCapHeight
    blob = hb.Blob.from_file_path(str(font_path))
    hb_font = hb.Font(hb.Face(blob))
    buf = hb.Buffer()
    buf.add_str(TEXT)
    buf.guess_segment_properties()
    hb.shape(hb_font, buf, {"kern": True, "liga": False})
    scale = CAP_UNITS / cap
    parts = {"a": [], "b": []}
    x = 0.0
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        pen = SVGPathPen(glyphs, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
        glyphs[order[info.codepoint]].draw(pen)
        d = pen.getCommands()
        if d:
            parts["a" if info.cluster < SPLIT else "b"].append((x, d))
        x += pos.x_advance * scale + TRACKING_EM * upem * scale
    width = x - TRACKING_EM * upem * scale
    return parts, scale, width


def path_group(items, scale, base_y, x0, fill):
    out = []
    for x, d in items:
        out.append(
            f'<path transform="translate({x0 + x:.2f} {base_y}) scale({scale:.5f} {-scale:.5f})" d="{d}"/>'
        )
    return f'<g fill="{fill}">{"".join(out)}</g>'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--font", required=True)
    args = ap.parse_args()
    parts, scale, width = shape(args.font)
    base_y = 32 + CAP_UNITS / 2
    x0 = 58 + GAP  # ngay sau mép phải của hexagon
    total_w = x0 + width - 6
    for name, (mark, c1, c2) in VARIANTS.items():
        if mark == "color":
            defs = f"<defs>{GRADIENT}</defs>"
            mark_svg = f'<path d="{HEX}" fill="url(#gt)"/><path d="{G}" fill="#fff"/><path d="{T}" fill="#fff"/>'
        else:
            defs = ""
            mark_svg = f'<path fill="#fff" fill-rule="evenodd" d="{HEX} {G} {T}"/>'
        svg = (
            f'<svg xmlns="http://www.w3.org/2000/svg" width="{total_w * 4:.0f}" height="240" '
            f'viewBox="6 2 {total_w:.2f} 60" fill="none" role="img" aria-label="GoTechCom">'
            f"{defs}{mark_svg}"
            f"{path_group(parts['a'], scale, base_y, x0, c1)}"
            f"{path_group(parts['b'], scale, base_y, x0, c2)}</svg>\n"
        )
        (SVG_DIR / f"lockup-horizontal-{name}.svg").write_text(svg)
        print("wrote", f"lockup-horizontal-{name}.svg", f"viewBox width {total_w:.1f}")


if __name__ == "__main__":
    main()
