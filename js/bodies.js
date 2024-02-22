class Planet extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }

    draw() {
        this.drawBody();
        this.drawLabel();
        this.drawShortcut("10px");
    }
}


class Moon extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }

    draw() {
        this.drawBody();
        this.drawLabel();
    }
}


class Dwarf extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }
    draw() {
        this.drawBody();
        this.drawLabel();
        this.drawShortcut("5px");
    }
}

class Rings extends HeavenlyBody {
    constructor(name, radius, orbit, color) {
        super(name, radius, orbit, color);
    }

    draw() {
        this.drawBody();
    }
}
