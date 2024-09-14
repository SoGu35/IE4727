var price_java = 2;
var price_au_lait = 3;
var price_cupp = 5.75;

function au_lait_s() {
    price_au_lait = 2;
    updateTotal()
}
function au_lait_d() {
    price_au_lait = 3;
    updateTotal()
}
function cupp_s() {
    price_cupp = 4.75;
    updateTotal()
}
function cupp_d() {
    price_cupp = 5.75;
    updateTotal()
}

function updateTotal() {
var sub1, sub2, sub3, total;
sub1 = price_java * q1.value;
sub2 = price_au_lait * q2.value;
sub3 = price_cupp * q3.value;
total = sub1 + sub2 + sub3;
document.getElementById("Sub1").innerHTML = sub1;
document.getElementById("Sub2").innerHTML = sub2;
document.getElementById("Sub3").innerHTML = sub3;
document.getElementById("Total").innerHTML = total;
}

c1 = document.getElementById("au_lait_s");
c1.addEventListener("change", au_lait_s);

c2 = document.getElementById("au_lait_d");
c2.addEventListener("change", au_lait_d);

c3 = document.getElementById("cupp_s");
c3.addEventListener("change", cupp_s);

c4 = document.getElementById("cupp_d");
c4.addEventListener("change", cupp_d);

q1 = document.getElementById("Quantity1");
q2 = document.getElementById("Quantity2");
q3 = document.getElementById("Quantity3");
q1.addEventListener("change", updateTotal);
q2.addEventListener("change", updateTotal);
q3.addEventListener("change", updateTotal);