// $(".carousel").carousel({
//   interval: 2000,
// });
// $(".carousel").carousel("prev");

// chat
function chat() {
  const c = document.getElementById("chat-main");
  c.classList.toggle("display");
}
// let btnx = document.getElementsByClassName("btn-close");
let popup = document.getElementById("popup");
// btnx.onclick = function (e) {
//   popup.style.display = "none";
// };
function Close() {
  popup.style.display = "none";
}
//
// $(function () {
//   var includes = $("[data-include]");
//   $.each(includes, function () {
//     var file = "views/" + $(this).data("include") + ".html";
//     $(this).load(file);
//   });
// });
//cart
//kho qua ha sufu, chạy rieneng k sao, vào chung là bị. sufu ?
let money = document.getElementById("p-money");
let total = document.getElementById("total");
let totalMoney = document.getElementById("total-money");
let count = 1;
// console.log(popup);
function Add() {
  count++;
  console.log(count);
  let value = document.getElementById("inpput");
  value.value = count;
  money.textContent = count * 200 + ".000";
  total.textContent = "Tổng thanh toán ( " + count + " sản phẩm):";
  totalMoney.textContent = money.textContent;
}
function Minus() {
  count--;
  let value = document.getElementById("inpput");
  value.value = count;
  money.textContent = count * 200 + ".000";
  total.textContent = "Tổng thanh toán (" + count + "sản phẩm):";
  totalMoney.textContent = money.textContent;
}
