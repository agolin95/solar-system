class HeavenlyBody {
    // radius in miles, orbit in AU
    constructor(name, radius, orbit, color) {
        this.name = name;
        this.id = this.name.toLowerCase();

        this.scalefactor = 1079.6 * 2;
        this.radius = radius / this.scalefactor;
        this.diameter = this.radius * 2
        this.orbit = (orbit * 92955807.3) / this.scalefactor;

        this.color = color;
        this.picture = `img/pictures/${this.id}.png`;
        this.icon = `img/icons/${this.id}.png`;
    }

    drawWrapper() {
        const top = `calc(${this.orbit - this.radius}px)`;
        const wrapperDOM = `<div id="${this.id}" class="body-wrap ${this.id}" style="top: ${top};"></div>`
        $(".space").append(wrapperDOM);
    }

    drawBody() {
        const left = `calc(50vw - ${this.radius}px)`;
        $(`#${this.id}`).append(`<div class="body"></div>`);
        $(`#${this.id}>.body`).css({
            // "background-image": `url(${this.picture})`,
            "background-color": `${this.color}`,
            "height": `${this.diameter}`,
            "width": `${this.diameter}`,
            "left": `${left}`
        });
    }

    drawLabel() {
        let labelDOM = `<h3 style="color:${this.color};">${this.name}</h3>`;
        $(`#${this.id}`).append(labelDOM);
    }

    drawShortcut() {
        let sidebarDOM = `
        <li class="sidebar-body ${this.id}" style="background:${this.color};">
            ${this.name.charAt(0)}
        </li>`
        $("#sidebar>ul").append(sidebarDOM);

        let id = this.id;
        $(`.sidebar-body.${id}`).click(function () {
            let target = $(`#${id}`)
            $('html').animate({
                scrollTop: target.offset().top - ($(window).height() / 2.5)
            }, 2000);
        });
    }
}