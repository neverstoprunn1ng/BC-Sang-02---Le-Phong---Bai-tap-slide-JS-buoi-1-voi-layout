/* 
Input
    Tỉ giá USD = 23500 VND
    Số USD cần quy đổi

Các bước xử lý
    Tạo biến usd, vnd, tyGia

Output
    Tính số tiền sau quy đổi
        vnd = usd * tyGia
*/

var usdEl = document.getElementById('usd')
var ketQuaEl = document.getElementById('ketQua')

function tinhVaXuat(){
    var usd = +usdEl.value
    var ketQua = usd*23500

    ketQuaEl.innerText = ketQua
}