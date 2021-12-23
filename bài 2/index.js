/* 
Input:
    5 số thực

Các bước xử lý:
    Tạo biến float1, float2, float3, float4, float5, average

Output:
    Tính giá trị trung bình: 
    average = (float1 + float2 + float3 + float4 + float 5)/5
*/

var soThuc1El = document.getElementById('soThuc1')
var soThuc2El = document.getElementById('soThuc2')
var soThuc3El = document.getElementById('soThuc3')
var soThuc4El = document.getElementById('soThuc4')
var soThuc5El = document.getElementById('soThuc5')
var ketQuaEl = document.getElementById('ketQua')

function trungBinh(){
  var soThuc1 = soThuc1El.value * 1 
  var soThuc2 = soThuc2El.value * 1
  var soThuc3 = soThuc3El.value * 1
  var soThuc4 = soThuc4El.value * 1 
  var soThuc5 = soThuc5El.value * 1 

  var ketQua = (soThuc1+soThuc2+soThuc3+soThuc4+soThuc5)/5

  ketQuaEl.innerText = ketQua
}
