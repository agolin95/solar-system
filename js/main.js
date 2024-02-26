$(function () {

    let sun = new Planet("Sun", 695508, 0, "#fda835").draw();

    let mercury = new Planet("Mercury", 2439.7, .3871, "#ad8a6c").draw();

    let venus = new Planet("Venus", 6051.8, .7233, "#ca6b16").draw();

    let earth = new Planet("Earth", 6371, 1.0000, "#38569a").draw();
    let luna = new Moon("Luna", 1737.5, 1.002569544, "#c0bebf").draw();

    let mars = new Planet("Mars", 3389.5, 1.5273, "#b92e1a").draw();
    // let phobos = new Moon("Phobos", 11, 1.5273626747, "#c0bebf").draw();
    // let deimos = new Moon("Deimos", 6.2, 1.5274568418, "#c0bebf").draw();

    let asteroidstart = new Boundary("Asteroid-Belt-Start", 0, 2.1, "white").draw();
    let ceres = new Dwarf("Ceres", 469.7, 2.76596, "#ccc").draw();
    let asteroidend = new Boundary("Asteroid-Belt-End", 0, 3.3, "white").draw();


    let jupiter = new Planet("Jupiter", 69911, 5.2028, "#bc6328").draw();
    let io = new Moon("Io", 1821.6, 5.205619, "#c0bebf").draw();
    let europa = new Moon("Europa", 1560.8, 5.20728469, "#c0bebf").draw();
    let ganymede = new Moon("Ganymede", 2634.1, 5.209955182, "#c0bebf").draw();
    let callisto = new Moon("Callisto", 2410.3, 5.21538507, "#c0bebf").draw();


    let saturnOrbit = 9.5388;
    let saturnringe = new Ring("Saturn-Ring-E", 480000, saturnOrbit, "rgba(255,255,255,0.05)").draw();
    let huygensgap = new Ring("Huygens-Gap", 173500, saturnOrbit, "black").draw();
    let saturnringg = new Ring("Saturn-Ring-G", 167500, saturnOrbit, "rgba(255,255,255,0.05)").draw();
    let maxwellgap = new Ring("Maxwell-Gap", 141100, saturnOrbit, "black").draw();
    let maxwellfiller = new Ring("Maxwell-Filler", 140900, saturnOrbit, "#e0a859").draw();
    let saturnringf = new Ring("Saturn-Ring-F", 140180, saturnOrbit, "rgba(255,255,255,0.05)").draw();
    let colombogap = new Ring("Colombo-Gap", 139800, saturnOrbit, "black").draw();
    let colombofiller = new Ring("Colombo-Filler", 13400, saturnOrbit, "#e0a859").draw();
    let keelergap = new Ring("Keeler-Gap", 137300, saturnOrbit, "black").draw();
    let saturnringa = new Ring("Saturn-Ring-A", 136500, saturnOrbit, "#e0a859").draw();
    let enckegap = new Ring("Encke-Gap", 133780, saturnOrbit, "black").draw();
    let enckefiller = new Ring("Encke-Filler", 133600, saturnOrbit, "#e0a859").draw();
    let cassinidivision = new Ring("Cassini-Division", 122200, saturnOrbit, "black").draw();
    let saturnringb = new Ring("Saturn-Ring-B", 117500, saturnOrbit, "#e0a859").draw();
    let saturnringc = new Ring("Saturn-Ring-C", 92000, saturnOrbit, "#e0a859").draw();
    let saturnringd = new Ring("Saturn-Ring-D", 74500, saturnOrbit, "#e0a859").draw();
    let saturngap = new Ring("Saturn-Gap", 66900, saturnOrbit, "black").draw();
    let saturn = new Planet("Saturn", 58232, saturnOrbit, "#fdca95").draw();

    let uranus = new Planet("Uranus", 25362, 19.1914, "#87d7de").draw();

    let kuiperstart = new Boundary("Kuiper-Belt-Start", 0, 30, "white").draw();

    let neptune = new Planet("Neptune", 24622, 30, "#446afc").draw();

    let orcus = new Dwarf("Orcus", 917, 39.174, "#ccc").draw();
    let pluto = new Dwarf("Pluto", 1151, 39.5294, "#ccc").draw();
    let salacia = new Dwarf("Salacia", 854, 42.184, "#ccc").draw();
    let varuna = new Dwarf("Varuna", 668, 42.718, "#ccc").draw();
    let haumea = new Dwarf("Haumea", 780, 43.335, "#ccc").draw();
    let quaoar = new Dwarf("Quaoar", 543, 43.694, "#ccc").draw();
    let makemake = new Dwarf("Makemake", 715, 45.791, "#ccc").draw();

    let kuiperend = new Boundary("Kuiper-Belt-End", 0, 50, "white").draw();

    let gonggong = new Dwarf("Gonggong", 615, 67.5, "#ccc").draw();
    let eris = new Dwarf("Eris", 1163, 67.6681, "#ccc").draw();
    // let sedna = new Dwarf("Sedna", 995, 506, "#ccc").draw();

    let heliosheath = new Boundary("Heliosheath", 0, 90, "white").draw();
    let heliopause = new Boundary("Heliopause", 0, 150, "white").draw();
    let bowshock = new Boundary("Bow-Shock", 0, 250, "white").draw();

    $(".music-control").on("click", function () {
        const elem = document.getElementById("nightbus");
        elem.paused ? elem.play() : elem.pause();
        $(".music-control").toggle();
    });
});