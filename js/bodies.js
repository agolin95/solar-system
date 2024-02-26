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
