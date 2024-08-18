import { TarjetaMadre, CPU, RAM, DiscoDuro } from "./dependencies";

/**
 * BAD
 * 
class Computador { 
    tarjetaMadre: TarjetaMadre
    cpu: CPU
    ram: RAM
    discoDuro: DiscoDuro

    constructor() {
        this.tarjetaMadre = new TarjetaMadre("T1")
        this.cpu = new CPU("i7")
        this.ram = new RAM(16)
        this.discoDuro = new DiscoDuro(256)
    }

    get() {
        return {
            tarjetaMadre: this.tarjetaMadre.get(),
            cpu: this.cpu.get(),
            ram: this.ram.get(),
            dd: this.discoDuro.get()
        }
    }
}

const computador1 = new Computador().get()
const computador2 = new Computador().get()

console.log({
    computador1,
    computador2
})
 */

/**
 * GOOD
 */
class Computador {
    tarjetaMadre: TarjetaMadre
    cpu: CPU
    ram: RAM
    dd: DiscoDuro

    constructor(tarjetaMadre: TarjetaMadre, cpu: CPU, ram: RAM, dd: DiscoDuro) {
        this.tarjetaMadre = tarjetaMadre
        this.cpu = cpu
        this.ram = ram
        this.dd = dd
    }

    get() {
        return {
            tarjetaMadre: this.tarjetaMadre.get(),
            cpu: this.cpu.get(),
            ram: this.ram.get(),
            dd: this.dd.get()
        }
    }
}

const computador1 = new Computador(
    new TarjetaMadre("T1"),
    new CPU("i5"),
    new RAM(16),
    new DiscoDuro(256)
).get()

const computador2 = new Computador(
    new TarjetaMadre("T2"),
    new CPU("i7"),
    new RAM(8),
    new DiscoDuro(500)
).get()

console.log({
    computador1,
    computador2
})
