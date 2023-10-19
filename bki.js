let alertBoy = "Lütfen Boyunuzu Giriniz.";
let alertKilo = "Lütfen Kilonuzu Giriniz";
let bar = document.querySelector(".vorder");
let sonuc = document.querySelector("#sonuc");
var inputs = document.getElementsByClassName("input").value;
function hesapla() {
  var boy = document.getElementById("boy").value;
  var kilo = document.getElementById("kilo").value;
  var sonuc = document.getElementById("sonuc");
  var b = Number(boy) / 100;
  var k = Number(kilo);
  var ind = k / (b * b);
  if (b == "" && k != "") {
    sonuc.innerHTML = "Lütfen Boyunuzu Giriniz!";
    sonuc.style.backgroundColor = "blue";
  } else if (k == "" && b != "") {
    sonuc.innerHTML = "Lütfen Kilonuzu Giriniz";
    sonuc.style.backgroundColor = "blue";
  } else if (k == "" && b == "") {
    sonuc.innerHTML = "Lütfen Kilonuzu Ve Boyunuzu Giriniz";
    sonuc.style.backgroundColor = "blue";
  } else if (k <= 0 || b <= 0) {
    sonuc.innerHTML = "Pozitif değer girmelisiniz.";
    sonuc.style.backgroundColor = "red";
    sonuc.style.color = "white";
    inputs.reset();
    
  } else {
    if (ind < 18.5) {
      sonuc.innerHTML =
        "Zayıfsınız,sağlıklı bir şekile kilo almaya çalışmalısnız." +
        "indeksiniz : " +
        ind.toFixed(2);
      bar.style.backgroundColor = "lightblue";
      sonuc.style.backgroundColor = "blue";
    } else if (ind >= 18.5 && ind <= 24.9) {
      sonuc.innerHTML =
        "İdeal kilodasınız,kilonuzu koruyup spor aktiveteleri yapmanızı öneririz. " +
        "indeksiniz : " +
        ind.toFixed(2);
      bar.style.backgroundColor = "green";
      sonuc.style.backgroundColor = "blue";
    } else if (ind >= 25 && ind <= 29.9) {
      sonuc.innerHTML =
        "İdeal kilonuın üstündesiniz,kalori açığı yapıp kardyio çalışması yapmalısnız " +
        "indeksiniz : " +
        ind.toFixed(2);
      bar.style.backgroundColor = "orange";
      sonuc.style.backgroundColor = "blue";
    } else if (ind >= 30 && ind <= 39.9) {
      sonuc.innerHTML =
        "İdeal çok kilonuın üstündesiniz,kalori açığı yapıp kardyio çalışması yapmalısnız " +
        "indeksiniz : " +
        ind.toFixed(2);
      bar.style.backgroundColor = "red";
      sonuc.style.backgroundColor = "blue";
    } else {
      sonuc.innerHTML =
        "ideal kilonun çok üstünde  MORBİD OBEZSİNİZ,kalori açığı yapıp kardyio çalışması yapmalısnız " +
        "indeksiniz : " +
        ind.toFixed(2);
      bar.style.backgroundColor = "black";
      sonuc.style.backgroundColor = "blue";
    }
  }
}
