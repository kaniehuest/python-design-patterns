export class TarjetaMadre {
    constructor(public name: string) {}

    get() {
        return this.name
    }
}

export class CPU {
    constructor(public name: string) {}

    get() {
        return this.name
    }
}

export class RAM {
    constructor(public size: number) {}

    get() {
        return this.size
    }
}

export class DiscoDuro {
    constructor(public size: number) {}

    get() {
        return this.size
    }
}