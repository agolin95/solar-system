$(function () {

    let sun = new Planet("Sun", 432450, 0, "#fda835").draw();
    let mercury = new Planet("Mercury", 1516, .387, "#ad8a6c").draw();
    let venus = new Planet("Venus", 3760.4, .722, "#ca6b16").draw();
    let earth = new Planet("Earth", 3958.8, 1, "#38569a").draw();
    let mars = new Planet("Mars", 2106.1, 1.52, "#ee6639").draw();
    let jupiter = new Planet("Jupiter", 43440.7, 5.20, "#503007").draw();
    let saturn = new Planet("Saturn", 36183.7, 9.58, "#fdca95").draw();
    let uranus = new Planet("Uranus", 15759.2, 19.2, "#1b6889").draw();
    let neptune = new Planet("Neptune", 15299.4, 30.1, "#446afc").draw();
    let pluto = new Planet("Pluto", 715.2, 39.5, "#b3aa9e").draw();

    $(".music-control").on("click", function () {
        let elem = document.getElementById("nightbus");
        elem.paused ? elem.play() : elem.pause();
        $(".music-control").toggle();
    });
});