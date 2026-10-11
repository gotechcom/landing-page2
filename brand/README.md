# GoTechCom — bộ asset logo

Nguồn chuẩn là SVG trong `svg/`; mọi PNG/ICO trong `export/` được dựng từ đó. **Đừng sửa file trong `export/` bằng tay.**

```bash
python3 brand/build.py     # dựng lại export/ và đồng bộ phần web vào public/, src/app/
python3 brand/verify.py    # kiểm kích thước, alpha, dung lượng theo từng kênh
```

`build.py` cần Google Chrome (đặt biến `CHROME` nếu không ở đường dẫn macOS mặc định) và Pillow. Không cần font.

## Lấy file nào, upload ở đâu

| Kênh | File | Ghi chú |
|---|---|---|
| Google Play — icon | `export/google-play/icon-512.png` | Play Console → Store listing → App icon |
| Google Play — feature graphic | `export/google-play/feature-graphic-1024x500.png` | Không alpha |
| App Store — icon | `export/app-store/icon-1024.png` | Không alpha, góc vuông; hệ thống tự bo góc. Đặt vào bộ icon 1024 của bản build |
| Google Workspace | `export/google-workspace/logo-320x132.png` | Admin console → Account → Account settings → Personalization → Custom logo. Nền trong suốt, hợp với header trắng |
| Avatar mạng xã hội | `export/social/avatar-1024.png` | Mark nằm trong vòng tròn an toàn, bị cắt tròn vẫn đủ |
| Cover | `export/social/cover-1640x624.png` | Khổ Facebook. Kênh khác (LinkedIn, YouTube…) cần cắt lại — kích thước chưa kiểm |
| Ảnh chia sẻ (OG) | `export/social/og-1200x630.png` | Trang web đã dùng bản này (`public/og.png`) |
| Web | `export/web/` | `favicon.ico` (16/32/48), `icon-192/512.png`, `apple-touch-icon-180.png`, `icon-maskable-512.png` |

## Nguồn SVG

| File | Dùng khi |
|---|---|
| `svg/mark-color.svg` | Mark màu (gradient `#2563eb`→`#06b6d4`, chữ GT trắng), mọi nền |
| `svg/mark-white.svg` | Mark trắng, chữ GT khoét rỗng — nền tối hoặc ảnh |
| `svg/mark-black.svg` | Mark đen (`#0f172a`) — in một màu, văn bản pháp lý |
| `svg/mark-mono-blue.svg` | Mark một màu xanh `#2563eb` |
| `svg/app-icon.svg` | Icon app: nền gradient kín khung, mark trắng cao 60% (nằm trong vùng an toàn maskable 80%) |
| `svg/lockup-horizontal-color.svg` | Mark + chữ, nền sáng |
| `svg/lockup-horizontal-on-dark.svg` | Mark màu + chữ trắng, nền tối |
| `svg/lockup-horizontal-white.svg` | Toàn trắng, nền tối/ảnh |

Chữ "GoTechCom" trong lockup là Geist Bold đã chuyển thành path (Geist theo giấy phép SIL OFL), "GoTech" đậm và "Com" nhạt hơn — giữ cách nhấn của `Logo.tsx` cũ, dùng màu đặc thay cho `opacity`. Sinh lại bằng `tools/make_lockup.py` (cần `fonttools`, `uharfbuzz`, `Geist-Bold.ttf`; chạy trong venv ngoài repo); kết quả đã commit nên dựng asset không cần font.

`src/components/Logo.tsx` chép hình mark từ `svg/mark-color.svg` — đổi mark thì sửa cả hai.

## Chưa đối chiếu nguồn chính thức

Yêu cầu kích thước/định dạng từng kênh lấy từ trang hướng dẫn của bên thứ ba và trang trợ giúp Google Workspace (tìm ngày 11/10/2026), **không phải tài liệu chính thức của Apple và Google Play**. Kiểm lại trong console trước khi nộp: Play icon 512×512 PNG 32-bit ≤ 1024 KB; feature graphic 1024×500 không alpha; App Store icon 1024×1024 sRGB không alpha; Workspace logo 320×132 ≤ 30 KB (trang cũ ghi 30 KB, trang mới bỏ giới hạn nên dùng mức chặt hơn).
