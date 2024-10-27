var price_java = 0;
var price_au_lait = 0;
var price_cupp = 0;
namePricePairs = []
function au_lait_s() {
    price_au_lait = Object.values(namePricePairs)[1]
    updateTotal()
}
function au_lait_d() {
    price_au_lait = Object.values(namePricePairs)[2]
    updateTotal()
}
function cupp_s() {
    price_cupp = Object.values(namePricePairs)[3]
    updateTotal()
}
function cupp_d() {
    price_cupp = Object.values(namePricePairs)[4]
    updateTotal()
}

function updateTotal() {
var sub1, sub2, sub3, total;
price_java = Object.values(namePricePairs)[0]; //update price of java on reset cause no buttons
price_au_lait = document.getElementById("au_lait_s").checked ? Object.values(namePricePairs)[1] : Object.values(namePricePairs)[2];
price_cupp = document.getElementById("cupp_s").checked ? Object.values(namePricePairs)[3] : Object.values(namePricePairs)[4];
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

window.onload = function() {
    fetchPrices();
};

function fetchPrices() {
    fetch('get_prices.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            console.log(data); // Log the prices data

            // key: value iteration
            data.forEach(item => {
                const { name, prices } = item;
                namePricePairs[name] = prices;
                const priceElement = document.getElementById(`${name}-price`);
                if (priceElement) {
                    priceElement.textContent = prices;
                }
                //
            });
        })
        .catch(error => console.error('Error:', error));

        
}


// Submit q1.value, q2.value, q3.value to database
checkout = document.getElementById("out");
checkout.addEventListener("click", function() {
    const is_cafe = document.getElementById("au_lait_s").checked; //True = single
    const is_iced = document.getElementById("cupp_s").checked;
    fetch('checkout.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q1: q1.value,
            q2: q2.value,
            q3: q3.value,
            is_cafe: is_cafe,
            is_iced: is_iced
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});