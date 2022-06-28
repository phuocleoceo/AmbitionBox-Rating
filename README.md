# Trình tự chạy chương trình

## Crawl dữ liệu từ Ambition Box
- Tại thư mục raw data, thực thi câu lệnh "npm install" trong terminal để khôi phục lại các thư viện cần thiết cho NodeJS.
- Chạy câu lệnh "node index.js" để tiến hành crawl. Kết quả thu được file db.json trong thư mục raw data.
- Chạy file eda.ipynb để chuyển file db.json thành raw data.csv và xem các mô tả về dữ liệu.

## Làm sạch dữ liệu
- Chạy file clean.ipynb để thu được clean_data.csv trong thư mục clean data.

## Trích xuất đặc trưng và mô hình hóa dữ liệu
- Chạy file main.ipynb để thu được kết quả từ việc mô hình hóa dữ liệu.