$(function () {

    let sun = new Planet("Sun", 432450, 0).draw();
    let mercury = new Planet("Mercury", 1516, .387).draw();
    let venus = new Planet("Venus", 3760.4, .722).draw();
    let earth = new Planet("Earth", 3958.8, 1).draw();
    let mars = new Planet("Mars", 2106.1, 1.52).draw();
    let jupiter = new Planet("Jupiter", 43440.7, 5.20).draw();
    let saturn = new Planet("Saturn", 36183.7, 9.58).draw();
    let uranus = new Planet("Uranus", 15759.2, 19.2).draw();
    let neptune = new Planet("Neptune", 15299.4, 30.1).draw();
    let pluto = new Planet("Pluto", 715.2, 39.5).draw();

});