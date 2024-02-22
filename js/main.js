$(function () {

    let sun = new Planet("Sun", 432450, 0, "#fda835", "Planet").draw();
    let mercury = new Planet("Mercury", 1516, .3871, "#ad8a6c", "Planet").draw();
    let venus = new Planet("Venus", 3760.4, .7233, "#ca6b16", "Planet").draw();
    let earth = new Planet("Earth", 3958.8, 1.0000, "#38569a", "Planet").draw();
    let moon = new Planet("Moon", 1079.6, 1.002569544, "#c0bebf", "Moon").draw();
    let mars = new Planet("Mars", 2106.1, 1.5273, "#ee6639", "Planet").draw();
    let ceres = new Planet("Ceres", 291.858, 2.76596, "#ccc", "Dwarf").draw();
    let jupiter = new Planet("Jupiter", 43440.7, 5.2028, "#503007", "Planet").draw();
    let saturn = new Planet("Saturn", 36183.7, 9.5388, "#fdca95", "Planet").draw();
    let uranus = new Planet("Uranus", 15759.2, 19.1914, "#1b6889", "Planet").draw();
    let neptune = new Planet("Neptune", 15299.4, 30.0611, "#446afc", "Planet").draw();
    let pluto = new Planet("Pluto", 715.2, 39.5294, "#ccc", "Dwarf").draw();
    let haumea = new Planet("Haumea", 484.6695, 43.335, "#ccc", "Dwarf").draw();
    let makemake = new Planet("Makemake", 444.2804, 45.791, "#ccc", "Dwarf").draw();
    let eris = new Planet("Eris", 722.6547, 67.6681, "#ccc", "Dwarf").draw();

    $(".music-control").on("click", function () {
        const elem = document.getElementById("nightbus");
        elem.paused ? elem.play() : elem.pause();
        $(".music-control").toggle();
    });
});