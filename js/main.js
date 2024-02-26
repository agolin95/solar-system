$(function () {
    // Draw Rings
    for (const [key, value] of Object.entries(rings)) {
        for (const [k, v] of Object.entries(value)) {
            const planet = planets[key];
            const ring = new Ring(k, v["radius"], planet["orbit"], v["color"]);
            ring.draw();
        }
    }

    // Draw Planets
    for (const [key, value] of Object.entries(planets)) {
        const planet = new Planet(key, value["radius"], value["orbit"], value["color"]);
        planet.draw();
    }


    // Draw Dwarves
    for (const [key, value] of Object.entries(dwarves)) {
        const dwarf = new Dwarf(key, value["radius"], value["orbit"], "#ccc");
        dwarf.draw();
    }


    // Draw Moons
    for (const [key, value] of Object.entries(moons)) {
        for (const [k, v] of Object.entries(value)) {
            const orbitInAU = v["semi-major-axis"] / 149597871;
            const planet = planets[key] || dwarves[key];
            const moon = new Moon(key, v["radius"], planet["orbit"] - orbitInAU, "#c0bebf");
            moon.draw();
        }
    }


    // Draw Boundaries
    for (const [key, value] of Object.entries(boundaries)) {
        const boundary = new Boundary(key, 0, value["orbit"], "white");
        boundary.draw();
    }


    // Add Music Controls
    $(".music-control").on("click", function () {
        const elem = document.getElementById("nightbus");
        elem.paused ? elem.play() : elem.pause();
        $(".music-control").toggle();
    });
});