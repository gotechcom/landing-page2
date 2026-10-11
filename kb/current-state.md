# Hiện trạng — repo này

**Đo ngày 2026-10-11.**

Landing page GoTechCom: Next.js 16 (App Router) + Tailwind 4, triển khai lên Cloudflare bằng OpenNext
(`pnpm deploy`). Đây là file **duy nhất** trong `kb/` phải luôn đúng: ai đổi hệ thì đổi file này
trong cùng PR. Khuôn thêm một dòng: `.github/instructions/xung-dot-tai-lieu.instructions.md`
mục "Thêm một dòng vào sổ hiện trạng" ở repo hub.

## Nhận diện / logo

- **11/10: bộ asset logo chuẩn hoá** (intent `2026-10-11-logo-branding-assets`): nguồn SVG ở `brand/svg/`, PNG/ICO theo kênh ở `brand/export/`.
  Mark hexagon "GT" giữ nguyên ý tưởng, bỏ chi tiết circuit nhỏ; có bản màu, trắng, đen, một màu xanh, icon app và lockup ngang (chữ Geist Bold đã thành path).
  Trang web dùng bộ này: `public/favicon.svg`, `public/icon-{192,512}.png`, `public/icon-maskable-512.png`, `public/apple-touch-icon.png`, `public/og.png`, `src/app/favicon.ico`, `src/app/manifest.ts`, `src/components/Logo.tsx`.
  Dựng lại: `python3 brand/build.py`; kiểm: `python3 brand/verify.py`. Cách dùng từng file: `brand/README.md`.
  Đo 11/10: `python3 brand/verify.py` → `0 fail`; `pnpm build` → thành công, có route `/manifest.webmanifest`.
  Giới hạn: không nộp lên console/store nào; cover chỉ có khổ 1640×624 (Facebook), kênh khác cần cắt lại.
  *Chưa kiểm:* yêu cầu kích thước từng kênh chưa đối chiếu tài liệu chính thức của Apple và Google Play — nguồn là trang thứ ba; mark chưa xem trên thiết bị thật.

## Lint

- `pnpm lint` đang đỏ **sẵn từ trước** ở hai file không thuộc việc logo: `src/components/ThemeProvider.tsx:49` và `src/i18n/index.ts:47` (cùng lỗi `react-hooks/set-state-in-effect`).
  Đo 11/10: `pnpm exec eslint src/components/Logo.tsx src/app/layout.tsx src/app/manifest.ts` → sạch.
