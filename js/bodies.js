class Planet extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }

    draw() {
        this.drawWrapper("planet");
        this.drawBody();
        this.drawLabel();
        this.drawShortcut("planet");
    }
}


class Moon extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }

    draw() {
        this.drawWrapper("moon");
        this.drawBody();
        this.drawLabel();
    }
}


class Dwarf extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }
    draw() {
        this.drawWrapper("dwarf");
        this.drawBody();
        this.drawLabel();
        this.drawShortcut("dwarf");
    }
}

class Ring extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }

    draw() {
        this.drawWrapper("ring");
        this.drawBody();
    }
}

class Boundary extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }

    draw() {
        this.drawWrapper("boundary");
        this.drawBody();
        this.drawLabel();
        this.drawShortcut("boundary");
    }

    drawBody() {
        $(`#${this.id}`).append(`<div class="body"></div>`);
        $(`#${this.id}>.body`).css({
            "background-color": `${this.color}`,
        });
    }

    drawShortcut(type) {
        let sidebarDOM = `
        <li class="sidebar-body ${type}" 
        style="background:${this.color};"
        onclick="teleport('${this.id}')"></li>`
        $("#sidebar>ul").append(sidebarDOM);
    }
}
