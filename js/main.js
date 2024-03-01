$(function () {

  drawBodies()
  drawRuler(4814977, 100000)

  // Add Music Controls
  $(".music-control").on("click", function () {
    const elem = document.getElementById("nightbus");
    elem.paused ? elem.play() : elem.pause();
    $(".music-control").toggle();
  });


  // Sidebar Controls
  $("#sidebar>.controls>div").on("click", function () {
    $("#sidebar>ul").toggle();
    $("#sidebar>.controls>div").toggle();
  });



});

function drawRuler(length, count) {
  const ruler = document.getElementById('ruler')
  ruler.style.height = `${length}px`
  const interval = length / count
  for (let i = 0; i <= count; i++) {
    const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const y = interval * i
    tick.setAttribute('x1', '0');
    tick.setAttribute('y1', y);
    tick.setAttribute('x2', '20');
    tick.setAttribute('y2', y);
    tick.setAttribute('stroke', '#fff');
    ruler.appendChild(tick);
  }
}


function drawBodies() {
  drawRings()
  drawPlanets()
  drawDwarves()
  drawMoons()
  drawBoundaries()
}

function drawRings() {
  for (const [key, value] of Object.entries(rings)) {
    for (const [k, v] of Object.entries(value)) {
      const planet = planets[key];
      const ring = new Ring(k, v["radius"], planet["orbit"], v["color"]);
      ring.draw();
    }
  }
}

function drawPlanets() {
  for (const [key, value] of Object.entries(planets)) {
    const planet = new Planet(key, value["radius"], value["orbit"], value["color"]);
    planet.draw();
  }
}

function drawDwarves() {
  for (const [key, value] of Object.entries(dwarves)) {
    const dwarf = new Dwarf(key, value["radius"], value["orbit"]);
    dwarf.draw();
  }
}

function drawMoons() {
  for (const [key, value] of Object.entries(moons)) {
    for (const [k, v] of Object.entries(value)) {
      const orbitInAU = v["semi-major-axis"] / 149597871;
      const planet = planets[key] || dwarves[key];
      const moon = new Moon(k, v["radius"], planet["orbit"] - orbitInAU);
      moon.draw();
    }
  }
}

function drawBoundaries() {
  for (const [key, value] of Object.entries(boundaries)) {
    const boundary = new Boundary(key, value["orbit"]);
    boundary.draw();
  }
}