/* 
Input
    Nhập vào 1 số có 2 chữ số

Các bước xử lý
    Tạo biến n, ten, unit, sum
    Tách số hàng chục
    Tách số hàng đơn vị

Output
    Tính tổng 2 ký số của n:
        sum = ten + unit

*/

var inputEl = document.getElementById('inputSo')
var ketQuaEl = document.getElementById('ketQua')

function tongKySo(){
    var input = +inputEl.value
    var ten, unit
    ten = input/10
    ten = Math.floor(ten)
    unit = input%10
    var sum = ten + unit
    ketQuaEl.innerText = sum
}
