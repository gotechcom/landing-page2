#!/usr/bin/env python3
"""Dựng toàn bộ PNG/ICO trong brand/export/ từ SVG nguồn ở brand/svg/, rồi đồng bộ phần web vào public/ và src/app/.

    python3 brand/build.py

Cần: Google Chrome (headless, để rasterize SVG) và Pillow. Không cần font — chữ trong lockup đã là path
(sinh bằng brand/tools/make_lockup.py). Chạy lại luôn ra cùng byte.
"""
import os
import pathlib
import shutil
import subprocess
import sys
import tempfile

from PIL import Image

BRAND = pathlib.Path(__file__).resolve().parent
ROOT = BRAND.parent
SVG = BRAND / "svg"
EXPORT = BRAND / "export"
CHROME = os.environ.get(
    "CHROME", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
)

DARK_BG = "linear-gradient(135deg,#0f172a 0%,#1e293b 100%)"


def img(name, w=None, h=None, style=""):
    size = (f"width:{w}px;" if w else "") + (f"height:{h}px;" if h else "")
    return f'<img src="file://{SVG / name}" style="display:block;{size}{style}">'


def centered(inner):
    return (
        '<div style="position:absolute;inset:0;display:flex;align-items:center;'
        f'justify-content:center">{inner}</div>'
    )


# (đường dẫn trong export/, rộng, cao, có alpha, nền CSS hoặc None, html bên trong)
JOBS = [
    ("google-play/icon-512.png", 512, 512, True, None, img("app-icon.svg", 512, 512)),
    (
        "google-play/feature-graphic-1024x500.png", 1024, 500, False, DARK_BG,
        centered(img("lockup-horizontal-on-dark.svg", 600)),
    ),
    ("app-store/icon-1024.png", 1024, 1024, False, None, img("app-icon.svg", 1024, 1024)),
    (
        "google-workspace/logo-320x132.png", 320, 132, True, None,
        centered(img("lockup-horizontal-color.svg", 288)),
    ),
    ("social/avatar-1024.png", 1024, 1024, False, None, img("app-icon.svg", 1024, 1024)),
    (
        "social/cover-1640x624.png", 1640, 624, False, DARK_BG,
        centered(img("lockup-horizontal-on-dark.svg", 760)),
    ),
    (
        "social/og-1200x630.png", 1200, 630, False, DARK_BG,
        centered(img("lockup-horizontal-on-dark.svg", 760)),
    ),
    ("web/icon-192.png", 192, 192, True, None, img("mark-color.svg", 192, 192)),
    ("web/icon-512.png", 512, 512, True, None, img("mark-color.svg", 512, 512)),
    ("web/apple-touch-icon-180.png", 180, 180, False, None, img("app-icon.svg", 180, 180)),
    ("web/icon-maskable-512.png", 512, 512, False, None, img("app-icon.svg", 512, 512)),
    ("web/_favicon-source-256.png", 256, 256, True, None, img("mark-color.svg", 256, 256)),
]

# export/ -> chỗ trang web thật sự đọc
SYNC = {
    "web/icon-192.png": "public/icon-192.png",
    "web/icon-512.png": "public/icon-512.png",
    "web/apple-touch-icon-180.png": "public/apple-touch-icon.png",
    "web/icon-maskable-512.png": "public/icon-maskable-512.png",
    "social/og-1200x630.png": "public/og.png",
    "web/favicon.ico": "src/app/favicon.ico",
}


def render(chrome_profile, work, out, w, h, alpha, bg, inner):
    page = work / "page.html"
    page.write_text(
        "<!doctype html><meta charset=utf-8><style>"
        f"html,body{{margin:0;width:{w}px;height:{h}px;overflow:hidden;"
        f"background:{bg or 'transparent'}}}</style>"
        f"<body style='position:relative'>{inner}</body>"
    )
    raw = work / "raw.png"
    cmd = [
        CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
        "--force-device-scale-factor=1", f"--user-data-dir={chrome_profile}",
        "--default-background-color=00000000", f"--window-size={w},{h}",
        f"--screenshot={raw}", f"file://{page}",
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    im = Image.open(raw)
    if im.size != (w, h):
        im = im.crop((0, 0, w, h))
    im = im.convert("RGBA" if alpha else "RGB")
    out.parent.mkdir(parents=True, exist_ok=True)
    im.save(out, optimize=True)


def main():
    if not pathlib.Path(CHROME).exists():
        sys.exit(f"Không thấy Chrome ở {CHROME} — đặt biến CHROME trỏ tới binary.")
    built = []
    with tempfile.TemporaryDirectory() as tmp:
        tmp = pathlib.Path(tmp)
        profile = tmp / "profile"
        for rel, w, h, alpha, bg, inner in JOBS:
            render(profile, tmp, EXPORT / rel, w, h, alpha, bg, inner)
            built.append(rel)

    # favicon.ico: 16/32/48 từ bản 256 trong suốt
    src = EXPORT / "web/_favicon-source-256.png"
    ico = EXPORT / "web/favicon.ico"
    Image.open(src).save(ico, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    src.unlink()
    built = [b for b in built if not b.startswith("web/_")] + ["web/favicon.ico"]

    for rel, dest in SYNC.items():
        shutil.copyfile(EXPORT / rel, ROOT / dest)
    shutil.copyfile(SVG / "mark-color.svg", ROOT / "public/favicon.svg")

    for rel in built:
        print("export/" + rel)
    print("đã đồng bộ:", ", ".join(SYNC.values()), "public/favicon.svg")


if __name__ == "__main__":
    main()
