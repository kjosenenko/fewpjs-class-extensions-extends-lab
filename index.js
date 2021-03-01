class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let sum = 0;
        for (var int of this.sides) {
            sum += int
        }
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area() {
        if (this.isValid) {
            let side = this.sides[0]
            return side * side
        }

    }
}