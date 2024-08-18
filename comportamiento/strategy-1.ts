const db = ["street1", "street2", "street3", "street4"]

class RouteContext {
    private strategy: Strategy

    constructor(strategy: Strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    calculate(x: string, y: string) {
        return this.strategy.calculate(x, y)
    }
}

interface Strategy {
    calculate(x: string, y: string): {x: string, y: string}[] | null 
}

class CarRoute implements Strategy {
    calculate(x: string, y: string): {x: string, y: string}[] | null {
        console.log("Car route")
        if (db.indexOf(x) > -1 && db.indexOf(y) > -1) {
            const route = [
                {x: "1111", y: "2222"},
                {x: "3333", y: "4444"}
            ]
            console.log(route)
            return route
        }

        console.log("No route found")
        return null
    }
}

class PublicTransport implements Strategy {
    calculate(x: string, y: string): {x: string, y: string}[] | null {
        console.log("Public transport route")
        if (db.indexOf(x) > -1 && db.indexOf(y) > -1) {
            const route = [
                {x: "8888", y: "5555"},
                {x: "2222", y: "6666"}
            ]
            console.log(route)
            return route
        }

        console.log("No route found")
        return null
    }
}

const route = new RouteContext(new PublicTransport())

route.calculate("street1", "street2")