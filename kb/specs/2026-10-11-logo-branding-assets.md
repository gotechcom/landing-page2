---
description: "Bộ asset logo GoTechCom chuẩn hoá (SVG nguồn + PNG/ICO theo kênh) để upload lên Google Workspace, Google Play, App Store, mạng xã hội và web"
---

# Bộ asset branding logo GoTechCom

Intent: kb/intent/2026-10-11-logo-branding-assets.md

## Bối cảnh

Người đặt nói logo công ty "chưa đầy đủ và chuẩn", cần asset để upload lên Google Workspace, Google Play, App Store và các kênh truyền thông. Đã chốt khi nhận việc: thương hiệu là GoTechCom, giữ ý tưởng hexagon "GT" và chuẩn hoá lại, phạm vi kênh gồm Google Play + App Store, Google Workspace, mạng xã hội/truyền thông, web (favicon, PWA).

Hiện trạng đo trong repo (11/10/2026):

- Chỉ có `public/favicon.svg` (32px, viewBox 64), `public/logo-og.svg` (1200×630) và `src/components/Logo.tsx`. Không có PNG nào, không có bản trắng/đen/1 màu, không có bản ngang kèm tên chữ.
- Mark hiện tại mang các đường circuit 0,7–0,8px và chấm 1–1,5px (viewBox 64) — không đọc được ở 16–48px; nhiều chi tiết dùng `rgba(255,255,255,0.x)` nên không chuyển được sang bản 1 màu.
- `src/app/layout.tsx` đang trỏ cả `icon` lẫn `apple` về `/favicon.svg`; iOS không dùng SVG làm apple-touch-icon.
- Máy không có `rsvg-convert`, `magick`, `inkscape`; có Google Chrome (xuất PNG từ SVG qua headless) và Pillow (ghi ICO, kiểm alpha/kích thước).

Yêu cầu kênh dùng để chốt kích thước (tìm 11/10/2026; **nguồn là trang thứ ba và trang trợ giúp Google, chưa đối chiếu tài liệu chính thức của Apple/Google Play** — kiểm lại ở console trước khi nộp):

| Kênh | Yêu cầu |
|---|---|
| Google Play — icon | PNG 512×512, 32-bit có alpha, ≤ 1024 KB |
| Google Play — feature graphic | 1024×500, JPEG hoặc PNG 24-bit **không alpha** |
| App Store — icon | PNG 1024×1024, sRGB, **không alpha**, góc vuông (hệ thống tự bo) |
| Google Workspace — logo tuỳ chỉnh | PNG 320×132, ≤ 30 KB (trang cũ ghi 30 KB, trang mới bỏ giới hạn — dùng mức chặt hơn) |

## Mục tiêu

Sau khi xong, người đặt có một thư mục `brand/` để lấy asset upload thẳng, không phải chỉnh tay:

- **Nguồn SVG chuẩn hoá** của mark hexagon "GT": bản màu (gradient `#2563eb`→`#06b6d4` theo design system GoTechCom), bản trắng, bản đen, bản 1 màu xanh; mark đọc rõ ở 16px; không còn chi tiết mảnh hơn 1px ở viewBox 64.
- **Lockup ngang** (mark + chữ "GoTechCom") ở bản màu cho nền sáng và bản trắng cho nền tối; chữ là path, không phụ thuộc font cài sẵn.
- **Bản xuất theo kênh**, đặt tên theo kênh và kích thước: Google Play (icon + feature graphic), App Store (icon), Google Workspace (logo 320×132), mạng xã hội (avatar vuông + cover + OG 1200×630), web (favicon.ico, icon 192/512, apple-touch-icon 180, maskable 512).
- **Một lệnh dựng lại** toàn bộ từ SVG nguồn và **một lệnh kiểm** kích thước, alpha, dung lượng theo bảng ở Bối cảnh.
- Trang web dùng đúng bộ này: `layout.tsx` trỏ `icon`/`apple` về file PNG/ICO thật, có `manifest`; `src/components/Logo.tsx` và `public/favicon.svg` cùng hình với nguồn mới.
- `brand/README.md` ghi bảng "kênh → file nào → upload ở đâu", và ghi rõ các yêu cầu kênh chưa đối chiếu nguồn chính thức.

## Ngoài phạm vi

- Không đổi nhận diện: không đổi màu, không đổi hình khối hexagon, không đổi tên thương hiệu; chỉ vẽ lại sạch và bổ sung biến thể.
- Không thiết kế screenshot cửa hàng, splash screen, banner quảng cáo, brand guideline PDF.
- Không tạo logo cho BetinyAI hay sản phẩm con khác.
- Không cài thư viện vào `package.json` của landing page (công cụ dựng chạy bằng Chrome + Python, không thêm dependency runtime).
- Không nộp lên bất kỳ console/store nào — người đặt tự upload.

## Tiêu chí chấp nhận

1. `python3 brand/build.py` → thoát `0`, in danh sách file đã dựng; chạy lần hai cho git diff rỗng (`git status --porcelain brand/` rỗng sau lần chạy thứ hai).
2. `python3 brand/verify.py` → `0 fail`; kiểm: Play icon `512×512` có alpha và ≤ 1024 KB; Play feature graphic `1024×500` không alpha; App Store icon `1024×1024` không alpha, ô góc `(0,0)` đã tô màu; Workspace logo `320×132` ≤ 30 KB; OG `1200×630`; favicon.ico chứa 16/32/48.
3. `grep -L "<text" brand/svg/*.svg` → liệt kê **mọi** file SVG (không file nào chứa phần tử `<text>`, tức chữ đã thành path).
4. `grep -cE "rgba\(|opacity=" brand/svg/mark-white.svg brand/svg/mark-black.svg brand/svg/mark-mono-blue.svg` → `0` cho từng file (bản 1 màu không dùng độ trong suốt).
5. Mở `brand/preview.html` bằng Chrome headless chụp ảnh → mark 16px, 32px, 48px đọc được chữ "GT" (người đặt xem ảnh chụp và xác nhận; máy không chứng minh được "đọc được").
6. `pnpm build` → thoát `0`; và `grep -nE "favicon.svg" src/app/layout.tsx` → không còn dòng `apple:` trỏ về `.svg`.
7. `pnpm lint` → thoát `0`.
8. PR có mục `## Bằng chứng chạy` ghi output thật của các lệnh trên.

## Thiết kế

Chọn hướng, không phải chép từ lời người đặt — người duyệt sửa được.

- **Vị trí:** `brand/` ở gốc repo (không để trong `public/` để khỏi triển khai cả bộ lên web). Chỉ file web thật sự dùng (favicon, icon, manifest) đặt ở `public/` hoặc `src/app/`.
  - `brand/svg/` — nguồn; `brand/export/<kênh>/` — PNG/ICO đã dựng; `brand/build.py`, `brand/verify.py`, `brand/preview.html`, `brand/README.md`.
- **Dựng PNG:** Chrome headless (`--screenshot`, nền trong suốt cho bản có alpha) và Pillow để ghép ICO, ép bỏ alpha (nền đặc) cho các bản "không alpha". Phương án bị loại: `pnpm add sharp` — thêm dependency native vào landing page chỉ để dựng asset một lần.
- **Mark chuẩn hoá:** giữ hexagon + chữ G, T; bỏ các đường circuit và chấm trang trí; bản icon app là mark **không kèm chữ GoTechCom**, đệm đủ vùng an toàn cho maskable (nội dung nằm trong vòng tròn 80% tâm).
- **Icon App Store/Play:** tô nền gradient kín cả khung vuông (không bo góc), mark trắng ở giữa — cùng một nguồn cho cả hai để khỏi lệch.
- **Chữ "GoTechCom":** dùng Geist 700 (đúng design system), chuyển thành path. Công cụ chuyển chữ→path chưa có sẵn trên máy (`fontTools` chưa cài) — cách làm chốt ở bước plan, nếu cần thì dùng venv ngoài repo.

### Điểm còn mở cho người duyệt

1. Icon cửa hàng chỉ có mark, không có chữ — đúng ý chưa?
2. Repo chưa có label `intent` nên issue theo dõi chưa tạo được (branch đã có); tạo label hay bỏ issue?
3. PR này mang cả commit dựng khung `kb/` (`kb/` chưa có trên `origin/main`). Gộp chung, hay merge PR dựng khung trước?
