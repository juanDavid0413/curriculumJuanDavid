document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const submenu = document.querySelector(".submenu");

    dropdownToggle.addEventListener("click", function(event) {
        event.preventDefault(); 
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function(event) {
        if (!dropdownToggle.contains(event.target) && !submenu.contains(event.target)) {
            submenu.style.display = "none";
        }
    });
});

document.getElementById("phone").addEventListener("click", function() {
    const phoneNumber = this.textContent.trim(); 
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert("Número de teléfono copiado al portapapeles: " + phoneNumber);
    }).catch(err => {
        console.error("Error al copiar el número: ", err);
    });
});

const divs = document.querySelectorAll(".parteiz");

divs.forEach(div => {
    div.addEventListener("mouseover", function() {
        div.style.backgroundColor = "gray"; 
    });

    div.addEventListener("mouseout", function() {
        div.style.backgroundColor = "#ffffff"; 
    });
});

