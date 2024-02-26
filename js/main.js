$(function () {

    let moonColor = "#c0bebf";

    let sun = new Planet("Sun", 695508, 0, "#fda835").draw();

    let mercury = new Planet("Mercury", 2439.7, .3871, "#ad8a6c").draw();

    let venus = new Planet("Venus", 6051.8, .7233, "#ca6b16").draw();

    let earthOrbit = 1;
    let earth = new Planet("Earth", 6371, earthOrbit, "#38569a").draw();
    let luna = new Moon("Luna", 1737.5, earthOrbit - 0.002569544, moonColor).draw();

    let mars = new Planet("Mars", 3389.5, 1.5273, "#b92e1a").draw();
    // let phobos = new Moon("Phobos", 11, 1.5273626747, moonColor).draw();
    // let deimos = new Moon("Deimos", 6.2, 1.5274568418, moonColor).draw();

    let asteroidstart = new Boundary("Asteroid-Belt-Start", 0, 2.1, "white").draw();
    let ceres = new Dwarf("Ceres", 469.7, 2.76596, "#ccc").draw();
    let asteroidend = new Boundary("Asteroid-Belt-End", 0, 3.3, "white").draw();


    let jupiterOrbit = 5.2028;
    let jupiter = new Planet("Jupiter", 69911, jupiterOrbit, "#bc6328").draw();
    let io = new Moon("Io", 1821.6, jupiterOrbit - 0.002819559, moonColor).draw();
    let europa = new Moon("Europa", 1560.8, jupiterOrbit - 0.004486026, moonColor).draw();
    let ganymede = new Moon("Ganymede", 2634.1, jupiterOrbit - 0.007155182, moonColor).draw();
    let callisto = new Moon("Callisto", 2410.3, jupiterOrbit - 0.01258507, moonColor).draw();


    let saturnOrbit = 9.5388;
    let saturnRingColor = "#a07535";
    let saturnOuterColor = "rgba(255,255,255,0.08)";
    let saturnringe = new Ring("Saturn-Ring-E", 480000, saturnOrbit, saturnOuterColor).draw();
    let huygensgap = new Ring("Huygens-Gap", 173500, saturnOrbit, "black").draw();
    let saturnringg = new Ring("Saturn-Ring-G", 167500, saturnOrbit, saturnOuterColor).draw();
    let maxwellgap = new Ring("Maxwell-Gap", 141100, saturnOrbit, "black").draw();
    let maxwellfiller = new Ring("Maxwell-Filler", 140900, saturnOrbit, saturnRingColor).draw();
    let saturnringf = new Ring("Saturn-Ring-F", 140180, saturnOrbit, saturnOuterColor).draw();
    let colombogap = new Ring("Colombo-Gap", 139800, saturnOrbit, "black").draw();
    let colombofiller = new Ring("Colombo-Filler", 13400, saturnOrbit, saturnRingColor).draw();
    let keelergap = new Ring("Keeler-Gap", 137300, saturnOrbit, "black").draw();
    let saturnringa = new Ring("Saturn-Ring-A", 136500, saturnOrbit, saturnRingColor).draw();
    let enckegap = new Ring("Encke-Gap", 133780, saturnOrbit, "black").draw();
    let enckefiller = new Ring("Encke-Filler", 133600, saturnOrbit, saturnRingColor).draw();
    let cassinidivision = new Ring("Cassini-Division", 122200, saturnOrbit, "black").draw();
    let saturnringb = new Ring("Saturn-Ring-B", 117500, saturnOrbit, saturnRingColor).draw();
    let saturnringc = new Ring("Saturn-Ring-C", 92000, saturnOrbit, saturnRingColor).draw();
    let saturnringd = new Ring("Saturn-Ring-D", 74500, saturnOrbit, saturnRingColor).draw();
    let saturngap = new Ring("Saturn-Gap", 66900, saturnOrbit, "black").draw();
    let saturn = new Planet("Saturn", 58232, saturnOrbit, "#fdca95").draw();
    let titan = new Moon("Titan", 5149.46 / 2, saturnOrbit - 0.008167897, moonColor).draw();
    let rhea = new Moon("Rhea", 1527.6 / 2, saturnOrbit - 0.003524114, moonColor).draw();
    let iapetus = new Moon("Iapetus", 1468.6 / 2, saturnOrbit - 0.02380849, moonColor).draw();
    let dione = new Moon("Dione", 1122 / 2, saturnOrbit - 0.002524769, moonColor).draw();
    let tethys = new Moon("Tethys", 1062.2 / 2, saturnOrbit - 0.001971953, moonColor).draw();
    let enceladus = new Moon("Enceladus", 504.2 / 2, saturnOrbit - 0.001593606, moonColor).draw();
    let mimas = new Moon("Mimas", 396.4 / 2, saturnOrbit - 0.001243333, moonColor).draw();

    let uranusOrbit = 19.1914;
    let uranus = new Planet("Uranus", 25362, uranusOrbit, "#87d7de").draw();
    let titania = new Moon("Titania", 1576.8 / 2, uranusOrbit - 0.002913878, moonColor).draw();
    let oberon = new Moon("Oberon", 1522.8 / 2, uranusOrbit - 0.00390059, moonColor).draw();
    let umbriel = new Moon("Umbriel", 1169.4 / 2, uranusOrbit - 0.001780106, moonColor).draw();
    let ariel = new Moon("Ariel", 1157.8 / 2, uranusOrbit - 0.00127689, moonColor).draw();
    let miranda = new Moon("Miranda", 471.6 / 2, uranusOrbit - 0.0008649187, moonColor).draw();

    let neptuneOrbit = 30;
    let neptune = new Planet("Neptune", 24622, neptuneOrbit, "#446afc").draw();
    let triton = new Moon("Triton", 2705.2 / 2, neptuneOrbit - 0.002371417, moonColor).draw();


    let kuiperstart = new Boundary("Kuiper-Belt-Start", 0, 30, "white").draw();

    let orcus = new Dwarf("Orcus", 917, 39.174, "#ccc").draw();

    let plutoOrbit = 39.5294;
    let pluto = new Dwarf("Pluto", 1151, plutoOrbit, "#ccc").draw();
    // let charon = new Moon("Charon", 1212 / 2, plutoOrbit - 0.0001172209, moonColor).draw();




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