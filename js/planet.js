class Planet {
    // Radius in miles, orbit in AU
    constructor(name, radius, orbit, color) {
        this.name = name;
        this.id = this.name.toLowerCase();
        this.radius = radius;
        this.scalefactor = 1000;
        this.diameter = this.radius * 2 / this.scalefactor;
        this.orbit = orbit;
        this.picture = `img/pictures/${this.id}.png`;
        this.icon = `img/icons/${this.id}.png`;
    }

    draw() {
        let planetDOM = `
        <div class="planetwrap">
            <h3 class="planetname">${this.name}</h3>
            <div id="${this.id}" class="planet"></div>
        </div>
        `
        $(".space").append(planetDOM);

        $(`#${this.id}`).css({
            "background-image": `url(${this.picture})`,
            "height": `${this.diameter}`,
            "width": `${this.diameter}`,
        })
    }
}