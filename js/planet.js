class Planet {
    // radius in miles, orbit in AU
    constructor(name, radius, orbit, color, type) {
        this.name = name;
        this.id = this.name.toLowerCase();
        this.type = type;

        this.scalefactor = 1079.6;
        this.radius = radius / this.scalefactor;
        this.diameter = this.radius * 2
        this.orbit = (orbit * 92955807.3) / this.scalefactor;

        this.color = color;
        this.picture = `img/pictures/${this.id}.png`;
        this.icon = `img/icons/${this.id}.png`;
    }

    draw() {
        this.#drawPlanet();
        if (this.type != "Moon") {
            this.#drawShortcut();
        }
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

        if (this.type == "Dwarf") {
            $(`.${this.id}.sidebarplanet`).css({
                "height": "5px",
                "width": "5px",
                "font-size": "5px"
            });
        }

        let element = this.id;
        $(`.${this.id}.sidebarplanet`).click(function () {
            let target = $(`#${element}`)
            $('html').animate({
                scrollTop: target.offset().top - ($(window).height() / 2.5)
            }, 2000);
        });
    }
}