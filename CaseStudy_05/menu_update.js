//Modal1
document.getElementById('update1').onclick = function() {
    document.getElementById('popupForm1').style.display = 'block';
};

document.getElementById('closePopup1').onclick = function() {
    document.getElementById('popupForm1').style.display = 'none';
};
//Modal2
document.getElementById('update2').onclick = function() {
    document.getElementById('popupForm2').style.display = 'block';
};
document.getElementById('closePopup2').onclick = function() {
    document.getElementById('popupForm2').style.display = 'none';
};
//Modal3
document.getElementById('update3').onclick = function() {
    document.getElementById('popupForm3').style.display = 'block';
}
document.getElementById('closePopup3').onclick = function() {
    document.getElementById('popupForm3').style.display = 'none';
}

        // Fetch prices when the page loads
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
                        const priceElement = document.getElementById(`${name}-price`);
                        if (priceElement) {
                            priceElement.textContent = prices;
                        }
                    });
                })
                .catch(error => console.error('Error:', error));
        }