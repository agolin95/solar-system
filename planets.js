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

});

class Planet {
    // radius in miles, orbit in AU
    constructor(name, radius, orbit, color) {
        this.name = name;
        this.id = this.name.toLowerCase();

        this.scalefactor = 2000;
        this.radius = radius / this.scalefactor;
        this.diameter = this.radius * 2
        this.orbit = (orbit * 92955807.3) / this.scalefactor;

        this.color = color;
        this.picture = `img/pictures/${this.id}.png`;
        this.icon = `img/icons/${this.id}.png`;
    }

    draw() {
        this.#drawPlanet();
        this.#drawShortcut();
    }

    #drawPlanet() {
        let top = `calc(${this.orbit - this.radius}px)`;
        let left = `calc(50vw - ${this.radius}px)`;
        let planetDOM = `
        <div id="${this.id}" class="planetwrap" style="top: ${top};">
            <div class="planet"></div>
            <h3 style="color:${this.color};">${this.name}</h3>
        </div>
        `
        $(".space").append(planetDOM);
        $(`#${this.id}>.planet`).css({
            // "background-image": `url(${this.picture})`,
            "background-color": `${this.color}`,
            "height": `${this.diameter}`,
            "width": `${this.diameter}`,
            "left": `${left}`
        });
    }

    #drawShortcut() {
        let sidebarDOM = `<li class="${this.id} sidebarplanet">${this.name.charAt(0)}</li>`
        $("#sidebar>ul").append(sidebarDOM);
        $(`.${this.id}.sidebarplanet`).css({
            "background-color": `${this.color}`,
        });

        let element = this.id;
        $(`.${this.id}.sidebarplanet`).click(function () {
            document.getElementById(element).scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        });
    }
}