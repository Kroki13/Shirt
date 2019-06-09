(function() {

    const img = document.querySelector(".goods-frame__image");
    if (img) {
        const radios = document.querySelectorAll(".color__input");

        console.log(radios);

        radios.forEach(function(radio) {
            radio.addEventListener('click', function(e) {

                const color = radio.getAttribute("data-filter");
                img.setAttribute("src", "./image/web-ready/tshirts/tshirt_" + color + ".png");

            });
        });
    }
})();