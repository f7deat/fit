## 📌 Loại thay đổi (Type of Change)
<!-- Đánh dấu [x] vào loại phù hợp -->
- [ ] 🚀 Tính năng mới (New Feature)
- [ ] 🎨 Cải thiện giao diện / Trải nghiệm người dùng (UI/UX)
- [ ] 🐛 Sửa lỗi (Bug Fix)
- [ ] ♻️ Tái cấu trúc mã nguồn (Refactor)
- [ ] ⚡ Tối ưu hiệu năng (Performance Optimization)
- [ ] 📝 Cập nhật tài liệu / Cấu hình (Docs/Chore)

---

## 🎯 Mục tiêu & Bối cảnh (Summary)
<!-- Mô tả ngắn gọn: PR này giải quyết vấn đề gì? Tại sao cần làm? -->
- **Bối cảnh / Nhiệm vụ:** 
- **Thiết kế / Issue liên quan:** 

---

## 📸 Hình ảnh / Video bằng chứng (Evidence & Visuals)
<!-- BẮT BUỘC đối với các thay đổi liên quan đến UI/UX -->
<!-- Có thể kéo thả ảnh trực tiếp vào đây, hoặc dùng: gh pr create/edit --attach "path/to/screenshot.png#Tên ảnh" -->

| Trước thay đổi (Before) | Sau thay đổi (After) |
| :---: | :---: |
| *(Ảnh cũ nếu có)* | *(Ảnh mới)* |

> Đính kèm thêm các ảnh chụp màn hình tương tác / responsive (nếu có):
> - ![Mô tả ảnh](url_ảnh)

---

## 🛠️ Chi tiết các thay đổi (Key Changes)
- **Tên Component / File:** Mô tả cụ thể logic hoặc giao diện được thêm mới/chỉnh sửa.

---

## 🧪 Kiểm thử & Xác minh (Test Coverage & Verification)
<!-- Đánh dấu [x] các bước đã thực hiện và pass -->
- [ ] **Type Check:** `npx tsc --noEmit` (0 lỗi).
- [ ] **Build:** `npm run build` (thành công không lỗi/cảnh báo).
- [ ] **Responsive:** Đã kiểm tra hiển thị trên Mobile (375px+), Tablet, Desktop.
- [ ] **Tương tác:** Đã kiểm tra luồng nhập liệu form, validation và phản hồi UX.
- [ ] **Cross-browser:** Đã kiểm tra trên trình duyệt phổ biến (Chrome, Safari, Firefox).

---

## ⚠️ Lưu ý & Rủi ro (Notes & Potential Risks)
<!-- Có breaking changes nào không? Có cần thêm biến môi trường (.env) nào không? -->
- Không

---

## ✅ Checklist trước khi Merge
- [ ] Code tuân thủ coding convention của dự án.
- [ ] Đã tự review lại toàn bộ diff thay đổi (self-review).
- [ ] Đã đính kèm đầy đủ hình ảnh/video bằng chứng (nếu có UI).
- [ ] Không vô tình commit file rác, file nhạy cảm (`.env`, docs local).
