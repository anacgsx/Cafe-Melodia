document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".ver-mais");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const coffeeId = this.getAttribute("data-coffee");
            const description = document.getElementById(coffeeId);

            if (description.style.display === "none" || description.style.display === "") {
                description.style.display = "block";
                this.textContent = "Ver Menos";
            } else {
                description.style.display = "none";
                this.textContent = "Ver Mais";
            }
        });
    });
});