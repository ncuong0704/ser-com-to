# Cấu hình Cloudinary cho Strapi

## Vấn đề đã được khắc phục

Vấn đề ảnh từ Cloudinary không hiển thị trong dashboard đã được khắc phục bằng cách:

1. **Cấu hình Content Security Policy (CSP)**: Cho phép tải ảnh từ `res.cloudinary.com`
2. **Cấu hình CORS**: Cho phép truy cập từ các domain Cloudinary
3. **Cấu hình Upload Provider**: Đảm bảo URL ảnh được trả về đúng định dạng HTTPS

## Biến môi trường cần thiết

Thêm các biến môi trường sau vào file `.env`:

```env
# Cloudinary
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
```

## Các file đã được cập nhật

1. `config/middlewares.ts` - Cấu hình CSP và CORS
2. `config/plugins.ts` - Cấu hình upload provider chung
3. `config/env/development/plugins.ts` - Cấu hình cho development
4. `config/env/production/plugins.ts` - Cấu hình cho production
5. `config/env/production/middlewares.ts` - Middleware cho production

## Cách khắc phục

1. Đảm bảo các biến môi trường Cloudinary được cấu hình đúng
2. Khởi động lại server Strapi
3. Kiểm tra trong dashboard admin, ảnh từ Cloudinary sẽ hiển thị bình thường

## Lưu ý

- Ảnh sẽ được lưu trong folder `strapi-uploads` trên Cloudinary
- URL ảnh sẽ sử dụng HTTPS để đảm bảo bảo mật
- Cấu hình đã được tối ưu cho cả môi trường development và production
