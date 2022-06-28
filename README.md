# Trình tự chạy chương trình

## Môi trường
- python version > 3.8
- Node version > 14

## Crawl dữ liệu từ Ambition Box
- Di chuyển vào thư mục raw data
```bash
cd raw\ data/
```
- Cài đặt thư viện
```bash
npm install
```
- Chạy file index để crawl dữ liệu và lưu vào file db.json
```bash
node index.js
```
- Chạy file eda.ipynb để chuyển file db.json thành raw data.csv và xem các mô tả về dữ liệu.

## Làm sạch dữ liệu
- Chạy file clean.ipynb để thu được clean_data.csv trong thư mục clean data.

## Trích xuất đặc trưng và mô hình hóa dữ liệu
- Chạy file main.ipynb để thu được kết quả từ việc mô hình hóa dữ liệu.