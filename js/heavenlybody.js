class HeavenlyBody {
    // radius in km, orbit in AU
    constructor(name, radius, orbit, color) {
        this.name = name;
        this.id = this.name.toLowerCase();

        this.scalefactor = 1737.5;
        this.radius = radius / this.scalefactor;
        this.diameter = this.radius * 2
        this.orbit = (orbit * 92955807.3) / this.scalefactor;

        this.color = color;
        this.picture = `img/pictures/${this.id}.png`;
        this.icon = `img/icons/${this.id}.png`;
    }

    drawWrapper(type) {
        const top = this.orbit - this.radius;
        const wrapperDOM = `<div id="${this.id}" class="body-wrap ${type}" style="top: ${top}px;"></div>`
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
        let cleaned = this.name.replace(/-/g, " ");
        let labelDOM = `<h3 style="color:${this.color};">${cleaned}</h3>`;
        $(`#${this.id}`).append(labelDOM);
    }

    drawShortcut(type) {
        const orbit = this.orbit;
        const sidebarDOM = `
        <li class="sidebar-body ${type}" 
        style="background:${this.color};"
        onclick="teleport('${this.id}')"
        data-orbit="${orbit}">
            ${this.name.charAt(0)}
        </li>`

        const sidebarItems = $("#sidebar>ul>li");
        if (sidebarItems.length > 0) {
            sidebarItems.each(function () {
                if (orbit > $(this).attr('data-orbit')) { return; }
                else {
                    $(sidebarDOM).insertBefore($(this));
                    return false;
                }
            });
            $("#sidebar>ul").append(sidebarDOM);
        }
        else { $("#sidebar>ul").append(sidebarDOM); }
    }
}


function teleport(id) {
    let target = $(`#${id}`)
    $('html').animate({
        scrollTop: target.offset().top - ($(window).height() / 2.5)
    }, 2000);
}