class Planet extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
        this.type = "planet";
    }
}


class Moon extends HeavenlyBody {
    constructor(name, radius, orbit) {
        super(name, radius, orbit, "#c0bebf");
        this.type = "moon";
    }

    draw() {
        this.drawWrapper();
        this.drawBody();
        this.drawLabel();
    }
}


class Dwarf extends HeavenlyBody {
    constructor(name, radius, orbit) {
        super(name, radius, orbit, "#ccc");
        this.type = "dwarf";
    }
}

class Ring extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
        this.type = "ring";
    }

    draw() {
        this.drawWrapper();
        this.drawBody();
    }
}

class Boundary extends HeavenlyBody {
    constructor(name, orbit) {
        super(name, 0, orbit, "white");
        this.type = "boundary";
    }

    drawBody() {
        $(`#${this.id}`).append(`<div class="body"></div>`);
        $(`#${this.id}>.body`).css({
            "background-color": `${this.color}`,
        });
    }
}
