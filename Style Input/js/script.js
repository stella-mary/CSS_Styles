let caja = document.querySelector(".caja")
let texto = document.querySelector(".texto")

texto.addEventListener("input", () => {
    caja.style.borderRadius = texto.value;
    caja.style.background = texto.value;
    caja.style.borderColor = texto.value;
    if (texto.value === "imagen") {
        caja.style.setProperty("background-image", "url('img/shark.png')")
    }
})
