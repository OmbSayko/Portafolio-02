function toggleHeader() {
    var x = document.getElementById("navbar");
    var toggleIcon = document.getElementById("toggleIcon");
    var hero = document.querySelector(".hero");
    var containers = document.querySelectorAll(".container");

    // Cambiar el estado antes de realizar la animación
    x.classList.toggle("expanded");

    if (x.classList.contains("expanded")) {
        toggleIcon.title = "Menú";
        setStyles("100%", "0");
        toggleIcon.className = "bx bx-menu";
    } else {
        toggleIcon.title = "Ocultar";

        // Obtener el ancho de la ventana
        var windowWidth = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;

        var originalWidth = "calc(100% - 200px)";
        var originalMarginLeft = "200px";

        if (windowWidth <= 1024) {
            originalWidth = "calc(100% - 150px)";
            originalMarginLeft = "150px";
        } else if (windowWidth <= 570) {
            originalWidth = "100%";
            originalMarginLeft = "0px";
        }

         // Aplicar las reglas
        setStyles(originalWidth, originalMarginLeft);
        toggleIcon.className = "bx bx-x";

        // Después de la transición, eliminarla para evitar conflictos
        setTimeout(function () {
            setStyles("", ""); // Restablecer estilos para evitar conflictos
        });
    }
}

// Función para aplicar estilos a los contenedores
function setStyles(width, marginLeft) {
    var hero = document.querySelector(".hero");
    var containers = document.querySelectorAll(".container");
    containers.forEach(function (container) {
        container.style.width = width;
        container.style.marginLeft = marginLeft;
    });

    hero.style.width = width;
    hero.style.marginLeft = marginLeft;
}

// Verificar el estado inicial al cargar la página
toggleHeader();

window.addEventListener("resize", toggleHeader);

var menuLinks = document.querySelectorAll("#navbar nav ul li a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        toggleHeader();
    });
});

hero.addEventListener("click", function () {
    toggleHeader();
});
