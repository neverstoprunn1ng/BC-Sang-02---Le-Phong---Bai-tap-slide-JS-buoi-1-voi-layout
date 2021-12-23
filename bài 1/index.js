/* 
Input:
    Lương 1 ngày: 100.000
    Số ngày làm
    
Các bước xử lý:
    Tạo biến salaryPerDay, workingDay, salaryTotal

Output:
    Tính lương của nhân viên: salaryTotal = salaryPerDay * workingDay
*/ 

var soNgayLamEl = document.getElementById("soNgayLam")
var ketQuaEl = document.getElementById("luong")

function tinhLuong(){
    var soNgayLam = soNgayLamEl.value
    var ketQua = soNgayLam*100000
    ketQuaEl.innerText = ketQua
}

