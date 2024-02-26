class Planet extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }

    draw() {
        this.drawWrapper();
        this.drawBody();
        this.drawLabel();
        this.drawShortcut();
        $(`.${this.id}`).addClass("planet");
    }
}


class Moon extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }

    draw() {
        this.drawWrapper();
        this.drawBody();
        this.drawLabel();
        $(`.${this.id}`).addClass("moon");
    }
}


class Dwarf extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }
    draw() {
        this.drawWrapper();
        this.drawBody();
        this.drawLabel();
        this.drawShortcut();
        $(`.${this.id}`).addClass("dwarf");
    }
}

class Ring extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }

    draw() {
        this.drawWrapper();
        this.drawBody();
        $(`.${this.id}`).addClass("ring");
    }
}
