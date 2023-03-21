var qrcode = document.getElementById('qrcode');
var user_input = document.getElementById('input');
var gen_btn = document.getElementById('generate_qr');

gen_btn.addEventListener("click", () => {
  var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_input.value}`;
  qrcode.src=url;
});