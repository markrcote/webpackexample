import { applyDiscount } from "./discounts/percentdiscount.js";

function updateTotal(e) {
  const price = document.querySelector('#price');
  const discount = document.querySelector('#discount');
  const total = document.querySelector('#total');

  total.value = applyDiscount(price.value, discount.value);
}

window.onload = function() {
  document.querySelector('#price').addEventListener('input', updateTotal);
  document.querySelector('#discount').addEventListener('input', updateTotal);
}
