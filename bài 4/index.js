/* 
Input
    Chiều dài và chiều rộng hình chữ nhật

Các bước xử lý
    Tạo biến chieuDai, chieuRong, chuVi, dienTich

Output
    Tính ra diện tích và chu vi của hình chữ nhật 
        Diện tích = dài * rộng
        Chu vi = (dài + rộng) * 2
*/

var chieuDaiEl = document.getElementById('chieuDai')
var chieuRongEl = document.getElementById('chieuRong')
var ketQuaEl = document.getElementById('ketQua')

function ketQua(){
    var chieuDai = +chieuDaiEl.value
    var chieuRong = +chieuRongEl.value
    var chuVi = (chieuDai+chieuRong)*2
    var dienTich = chieuRong*chieuDai

    ketQuaEl.innerHTML = "Chu vi là: " + chuVi + " " + "và" + " " + "Diện tích là: " + dienTich
}