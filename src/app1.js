import $ from "jquery";
import "./app1.css";

const $number = $("#number");
const $btn1 = $("#add1");
const $btn2 = $("#minus1");
const $btn3 = $("#mul2");
const $btn4 = $("#divide2");
const num = localStorage.getItem("n");
$number.text(num || 100);

$btn1.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem("n", n);
  $number.text(n);
});

$btn2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n);
});

$btn3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});

$btn4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
