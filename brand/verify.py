#!/usr/bin/env python3
"""Kiểm asset trong brand/export/ theo yêu cầu từng kênh (spec kb/specs/2026-10-11-logo-branding-assets.md).

    python3 brand/verify.py        # in từng kiểm tra, thoát 1 nếu có fail

Yêu cầu kênh lấy từ trang thứ ba/trang trợ giúp, chưa đối chiếu tài liệu chính thức — xem brand/README.md.
"""
import pathlib
import struct
import sys

from PIL import Image

EXPORT = pathlib.Path(__file__).resolve().parent / "export"
KB = 1024
fails = []


def check(name, ok, detail=""):
    print(("ok   " if ok else "FAIL ") + name + (f" — {detail}" if detail else ""))
    if not ok:
        fails.append(name)


def info(rel):
    p = EXPORT / rel
    im = Image.open(p)
    return im, p.stat().st_size


def has_alpha(im):
    return "A" in im.getbands()


def transparent_somewhere(im):
    a = im.convert("RGBA").getchannel("A")
    return a.getextrema()[0] < 255


def size_mode(rel, size, alpha):
    im, _ = info(rel)
    check(f"{rel} {size[0]}x{size[1]}", im.size == size, f"thực tế {im.size}")
    check(
        f"{rel} {'có' if alpha else 'không'} kênh alpha",
        has_alpha(im) == alpha,
        f"mode {im.mode}",
    )
    return im


def ico_sizes(path):
    data = path.read_bytes()
    _, kind, count = struct.unpack("<HHH", data[:6])
    out = set()
    for i in range(count):
        w, h = struct.unpack("BB", data[6 + 16 * i : 8 + 16 * i])
        out.add((w or 256, h or 256))
    return kind, out


def main():
    # Google Play
    im = size_mode("google-play/icon-512.png", (512, 512), True)
    check("google-play/icon-512.png ≤ 1024 KB", info("google-play/icon-512.png")[1] <= 1024 * KB)
    size_mode("google-play/feature-graphic-1024x500.png", (1024, 500), False)

    # App Store: không alpha, ô góc đã tô màu (không phải trắng/đen trống)
    im = size_mode("app-store/icon-1024.png", (1024, 1024), False)
    corner = im.getpixel((0, 0))
    check("app-store/icon-1024.png ô góc (0,0) đã tô màu", corner not in ((0, 0, 0), (255, 255, 255)), f"{corner}")
    check("app-store/icon-1024.png ô góc (1023,1023) đã tô màu", im.getpixel((1023, 1023)) not in ((0, 0, 0), (255, 255, 255)))

    # Google Workspace
    im = size_mode("google-workspace/logo-320x132.png", (320, 132), True)
    check("google-workspace/logo-320x132.png ≤ 30 KB", info("google-workspace/logo-320x132.png")[1] <= 30 * KB,
          f"{info('google-workspace/logo-320x132.png')[1]} B")
    check("google-workspace/logo-320x132.png nền trong suốt", transparent_somewhere(im))

    # Mạng xã hội
    size_mode("social/avatar-1024.png", (1024, 1024), False)
    size_mode("social/cover-1640x624.png", (1640, 624), False)
    size_mode("social/og-1200x630.png", (1200, 630), False)

    # Web
    im = size_mode("web/icon-192.png", (192, 192), True)
    check("web/icon-192.png góc trong suốt", im.getpixel((0, 0))[3] == 0)
    im = size_mode("web/icon-512.png", (512, 512), True)
    check("web/icon-512.png góc trong suốt", im.getpixel((0, 0))[3] == 0)
    size_mode("web/apple-touch-icon-180.png", (180, 180), False)
    size_mode("web/icon-maskable-512.png", (512, 512), False)
    kind, sizes = ico_sizes(EXPORT / "web/favicon.ico")
    check("web/favicon.ico là ICO", kind == 1)
    check("web/favicon.ico chứa 16/32/48", {(16, 16), (32, 32), (48, 48)} <= sizes, f"có {sorted(sizes)}")

    print(f"\n{len(fails)} fail")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
