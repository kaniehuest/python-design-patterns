interface Forma {
    dibujar(): void
}

class Triangulo implements Forma {
    dibujar(): void {
        console.log("dibujar un triángulo")
    }
}

class Circulo implements Forma {
    dibujar(): void {
        console.log("dibujar un círculo")
    }
}

class Cuadrado implements Forma {
    dibujar(): void {
        console.log("dibujar un cuadrado")
    }
}

class FactoryForma {
    public obtenerForma(forma: string) {
        if (forma === "triangulo") {
            return new Triangulo()
        }

        if (forma === "cuadrado") {
            return new Cuadrado()
        }

        if (forma === "circulo") {
            return new Circulo()
        }

        throw Error("Forma no soportada")
    }
}

const factory = new FactoryForma()

const circulo = factory.obtenerForma("circulo")
circulo.dibujar()

const triangulo = factory.obtenerForma("triangulo")
triangulo.dibujar()

const cuadrado = factory.obtenerForma("cuadrado")
cuadrado.dibujar()