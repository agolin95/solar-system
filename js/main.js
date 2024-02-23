$(function () {

    let sun = new Planet("Sun", 432168.6, 0, "#fda835").draw();

    let mercury = new Planet("Mercury", 1516, .3871, "#ad8a6c").draw();

    let venus = new Planet("Venus", 3760.4, .7233, "#ca6b16").draw();

    let earth = new Planet("Earth", 3958.8, 1.0000, "#38569a").draw();
    let moon = new Moon("Moon", 1079.6, 1.002569544, "#c0bebf").draw();

    let mars = new Planet("Mars", 2106.1, 1.5273, "#ee6639").draw();
    // let phobos = new Moon("Phobos", 6.884793, 1.5273626747, "#c0bebf").draw();
    // let deimos = new Moon("Deimos", 3.895997, 1.5274568418, "#c0bebf").draw();

    let ceres = new Dwarf("Ceres", 291.858, 2.76596, "#ccc").draw();

    let jupiter = new Planet("Jupiter", 43440.7, 5.2028, "#503007").draw();
    let io = new Moon("Io", 1131.89, 5.205619, "#c0bebf").draw();
    let europa = new Moon("Europa", 969.8362, 5.20728469, "#c0bebf").draw();
    let ganymede = new Moon("Ganymede", 1636.754, 5.209955182, "#c0bebf").draw();
    let callisto = new Moon("Callisto", 1497.691, 5.21538507, "#c0bebf").draw();

    let saturnrings = new Rings("SaturnRings", 84991.15, 9.5388, "#e0a859").draw();
    let saturn = new Planet("Saturn", 36183.7, 9.5388, "#fdca95").draw();

    let uranus = new Planet("Uranus", 15759.2, 19.1914, "#1b6889").draw();

    let neptune = new Planet("Neptune", 15299.4, 30.0611, "#446afc").draw();

    let pluto = new Dwarf("Pluto", 715.2, 39.5294, "#ccc").draw();
    let haumea = new Dwarf("Haumea", 484.6695, 43.335, "#ccc").draw();
    let makemake = new Dwarf("Makemake", 444.2804, 45.791, "#ccc").draw();
    let eris = new Dwarf("Eris", 722.6547, 67.6681, "#ccc").draw();

    $(".music-control").on("click", function () {
        const elem = document.getElementById("nightbus");
        elem.paused ? elem.play() : elem.pause();
        $(".music-control").toggle();
    });
});