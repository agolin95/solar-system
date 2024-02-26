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
    constructor(name, radius, orbit) {
        super(name, radius, orbit, "#c0bebf");
    }

    draw() {
        this.drawWrapper("moon");
        this.drawBody();
        this.drawLabel();
    }
}


class Dwarf extends HeavenlyBody {
    constructor(name, radius, orbit) {
        super(name, radius, orbit, "#ccc");
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
    constructor(name, orbit) {
        super(name, 0, orbit, "white");
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
}
