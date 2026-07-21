export class Cube {
    // Face au-dessus
    static U = 0

    // Face en face
    static F = 1

    // Face à droite
    static R = 2

    // Face arrière
    static B = 3

    // Face à gauche
    static L = 4

    // Face au-dessous
    static D = 5

    static TOP_LEFT = 0

    static TOP_MID = 1

    static TOP_RIGHT = 2

    static MID_LEFT = 3

    static CENTER = 4

    static MID_RIGHT = 5

    static BOTTOM_LEFT = 6

    static BOTTOM_MID = 7

    static BOTTOM_RIGHT = 8

    static ROTATION_CLOCKWISE = [6, 3, 0, 7, 4, 1, 8, 5, 2]

    static NOTATION_TO_METHOD = {
        "U": "U",
        "U'": "UPrime",
        "U2": "U2",
        "D": "D",
        "D'": "DPrime",
        "D2": "D2",
        "F": "F",
        "F'": "FPrime",
        "F2": "F2",
        "B": "B",
        "B'": "BPrime",
        "B2": "B2",
        "R": "R",
        "R'": "RPrime",
        "R2": "R2",
        "L": "L",
        "L'": "LPrime",
        "L2": "L2"
    }

    constructor(faces) {
        this.faces = faces
    }

    _copyFaces() {
        return this.faces.map(face => [...face])
    }

    U() {
        const copiedFace = this._copyFaces()

        const rotationTable = Cube.ROTATION_CLOCKWISE

        // changement sur la face du dessus -> Blanche
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[Cube.U][rotationTableIndex] = copiedFace[Cube.U][rotationTable[rotationTableIndex]]
        }

        // La couronne du roi
        for (let index = 1; index <= 4; index++) {
            const isLIndex = index === Cube.L

            const sourceIndex = !isLIndex ? index + 1 : 1

            this.faces[index][Cube.TOP_LEFT] = copiedFace[sourceIndex][Cube.TOP_LEFT]

            this.faces[index][Cube.TOP_MID] = copiedFace[sourceIndex][Cube.TOP_MID]

            this.faces[index][Cube.TOP_RIGHT] = copiedFace[sourceIndex][Cube.TOP_RIGHT]
        }
    }

    UPrime() {
        this.U()
        this.U()
        this.U()
    }

    U2() {
        this.U()
        this.U()
    }

    D() {
        const copiedFace = this._copyFaces()

        const rotationTable = Cube.ROTATION_CLOCKWISE

        // changement sur la face du dessous -> Jaune
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[Cube.D][rotationTableIndex] = copiedFace[Cube.D][rotationTable[rotationTableIndex]]
        }

        // la couronne
        for (let index = 1; index <= 4; index++) {
            const isFIndex = index === Cube.F

            const sourceIndex = !isFIndex ? index - 1 : 4

            this.faces[index][Cube.BOTTOM_LEFT] = copiedFace[sourceIndex][Cube.BOTTOM_LEFT]

            this.faces[index][Cube.BOTTOM_MID] = copiedFace[sourceIndex][Cube.BOTTOM_MID]

            this.faces[index][Cube.BOTTOM_RIGHT] = copiedFace[sourceIndex][Cube.BOTTOM_RIGHT]
        }
    }

    DPrime() {
        this.D()
        this.D()
        this.D()
    }

    D2() {
        this.D()
        this.D()
    }

    F() {
        const copiedFace = this._copyFaces()

        const rotationTable = Cube.ROTATION_CLOCKWISE

        // changement sur la face en face de nous -> Verte
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[Cube.F][rotationTableIndex] = copiedFace[Cube.F][rotationTable[rotationTableIndex]]
        }

        // la couronne
        // face blanche
        this.faces[Cube.U][Cube.BOTTOM_LEFT] = copiedFace[Cube.L][Cube.BOTTOM_RIGHT]

        this.faces[Cube.U][Cube.BOTTOM_MID] = copiedFace[Cube.L][Cube.MID_RIGHT]

        this.faces[Cube.U][Cube.BOTTOM_RIGHT] = copiedFace[Cube.L][Cube.TOP_RIGHT]

        // face rouge
        this.faces[Cube.R][Cube.TOP_LEFT] = copiedFace[Cube.U][Cube.BOTTOM_LEFT]

        this.faces[Cube.R][Cube.MID_LEFT] = copiedFace[Cube.U][Cube.BOTTOM_MID]

        this.faces[Cube.R][Cube.BOTTOM_LEFT] = copiedFace[Cube.U][Cube.BOTTOM_RIGHT]

        // face jaune
        this.faces[Cube.D][Cube.TOP_LEFT] = copiedFace[Cube.R][Cube.BOTTOM_LEFT]

        this.faces[Cube.D][Cube.TOP_MID] = copiedFace[Cube.R][Cube.MID_LEFT]

        this.faces[Cube.D][Cube.TOP_RIGHT] = copiedFace[Cube.R][Cube.TOP_LEFT]

        // face orange
        this.faces[Cube.L][Cube.TOP_RIGHT] = copiedFace[Cube.D][Cube.TOP_LEFT]

        this.faces[Cube.L][Cube.MID_RIGHT] = copiedFace[Cube.D][Cube.TOP_MID]

        this.faces[Cube.L][Cube.BOTTOM_RIGHT] = copiedFace[Cube.D][Cube.TOP_RIGHT]
    }

    FPrime() {
        this.F()
        this.F()
        this.F()
    }

    F2() {
        this.F()
        this.F()
    }

    B() {
        const copiedFace = this._copyFaces()

        const rotationTable = Cube.ROTATION_CLOCKWISE

        // changement sur la face arrière -> Bleue
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[Cube.B][rotationTableIndex] = copiedFace[Cube.B][rotationTable[rotationTableIndex]]
        }

        // face blanche
        this.faces[Cube.U][Cube.TOP_LEFT] = copiedFace[Cube.R][Cube.TOP_RIGHT]

        this.faces[Cube.U][Cube.TOP_MID] = copiedFace[Cube.R][Cube.MID_RIGHT]

        this.faces[Cube.U][Cube.TOP_RIGHT] = copiedFace[Cube.R][Cube.BOTTOM_RIGHT]

        // face rouge
        this.faces[Cube.R][Cube.TOP_RIGHT] = copiedFace[Cube.D][Cube.BOTTOM_RIGHT]

        this.faces[Cube.R][Cube.MID_RIGHT] = copiedFace[Cube.D][Cube.BOTTOM_MID]

        this.faces[Cube.R][Cube.BOTTOM_RIGHT] = copiedFace[Cube.D][Cube.BOTTOM_LEFT]

        // face orange
        this.faces[Cube.L][Cube.BOTTOM_LEFT] = copiedFace[Cube.U][Cube.TOP_LEFT]

        this.faces[Cube.L][Cube.MID_LEFT] = copiedFace[Cube.U][Cube.TOP_MID]

        this.faces[Cube.L][Cube.TOP_LEFT] = copiedFace[Cube.U][Cube.TOP_RIGHT]

        // face jaune
        this.faces[Cube.D][Cube.BOTTOM_RIGHT] = copiedFace[Cube.L][Cube.BOTTOM_LEFT]

        this.faces[Cube.D][Cube.BOTTOM_MID] = copiedFace[Cube.L][Cube.MID_LEFT]

        this.faces[Cube.D][Cube.BOTTOM_LEFT] = copiedFace[Cube.L][Cube.TOP_LEFT]
    }

    BPrime() {
        this.B()
        this.B()
        this.B()
    }

    B2() {
        this.B()
        this.B()
    }

    R() {
        const copiedFace = this._copyFaces()

        const rotationTable = Cube.ROTATION_CLOCKWISE

        // changement sur la face arrière -> Rouge
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[Cube.R][rotationTableIndex] = copiedFace[Cube.R][rotationTable[rotationTableIndex]]
        }

        // face blanche
        this.faces[Cube.U][Cube.TOP_RIGHT] = copiedFace[Cube.F][Cube.TOP_RIGHT]

        this.faces[Cube.U][Cube.MID_RIGHT] = copiedFace[Cube.F][Cube.MID_RIGHT]

        this.faces[Cube.U][Cube.BOTTOM_RIGHT] = copiedFace[Cube.F][Cube.BOTTOM_RIGHT]

        // face verte
        this.faces[Cube.F][Cube.TOP_RIGHT] = copiedFace[Cube.D][Cube.TOP_RIGHT]

        this.faces[Cube.F][Cube.MID_RIGHT] = copiedFace[Cube.D][Cube.MID_RIGHT]

        this.faces[Cube.F][Cube.BOTTOM_RIGHT] = copiedFace[Cube.D][Cube.BOTTOM_RIGHT]

        // face jaune
        this.faces[Cube.D][Cube.TOP_RIGHT] = copiedFace[Cube.B][Cube.BOTTOM_LEFT]

        this.faces[Cube.D][Cube.MID_RIGHT] = copiedFace[Cube.B][Cube.MID_LEFT]

        this.faces[Cube.D][Cube.BOTTOM_RIGHT] = copiedFace[Cube.B][Cube.TOP_LEFT]

        // face bleue
        this.faces[Cube.B][Cube.BOTTOM_LEFT] = copiedFace[Cube.U][Cube.TOP_RIGHT]

        this.faces[Cube.B][Cube.MID_LEFT] = copiedFace[Cube.U][Cube.MID_RIGHT]

        this.faces[Cube.B][Cube.TOP_LEFT] = copiedFace[Cube.U][Cube.BOTTOM_RIGHT]
    }

    RPrime() {
        this.R()
        this.R()
        this.R()
    }

    R2() {
        this.R()
        this.R()
    }

    L() {
        const copiedFace = this._copyFaces()

        const rotationTable = Cube.ROTATION_CLOCKWISE

        // changement sur la face arrière -> Orange
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[Cube.L][rotationTableIndex] = copiedFace[Cube.L][rotationTable[rotationTableIndex]]
        }

        // face blanche
        this.faces[Cube.U][Cube.TOP_LEFT] = copiedFace[Cube.B][Cube.BOTTOM_RIGHT]

        this.faces[Cube.U][Cube.MID_LEFT] = copiedFace[Cube.B][Cube.MID_RIGHT]

        this.faces[Cube.U][Cube.BOTTOM_LEFT] = copiedFace[Cube.B][Cube.TOP_RIGHT]

        // face verte
        this.faces[Cube.F][Cube.TOP_LEFT] = copiedFace[Cube.U][Cube.TOP_LEFT]

        this.faces[Cube.F][Cube.MID_LEFT] = copiedFace[Cube.U][Cube.MID_LEFT]

        this.faces[Cube.F][Cube.BOTTOM_LEFT] = copiedFace[Cube.U][Cube.BOTTOM_LEFT]

        // face jaune
        this.faces[Cube.D][Cube.TOP_LEFT] = copiedFace[Cube.F][Cube.TOP_LEFT]

        this.faces[Cube.D][Cube.MID_LEFT] = copiedFace[Cube.F][Cube.MID_LEFT]

        this.faces[Cube.D][Cube.BOTTOM_LEFT] = copiedFace[Cube.F][Cube.BOTTOM_LEFT]

        // face bleue
        this.faces[Cube.B][Cube.TOP_RIGHT] = copiedFace[Cube.D][Cube.BOTTOM_LEFT]

        this.faces[Cube.B][Cube.MID_RIGHT] = copiedFace[Cube.D][Cube.MID_LEFT]

        this.faces[Cube.B][Cube.BOTTOM_RIGHT] = copiedFace[Cube.D][Cube.TOP_LEFT]
    }

    LPrime() {
        this.L()
        this.L()
        this.L()
    }

    L2() {
        this.L()
        this.L()
    }

    applyMoves(notation) {
        const splittedNotation = notation.split(' ')

        for (const movement of splittedNotation) {
            if (movement !== '') {
                const movementName = Cube.NOTATION_TO_METHOD[movement]

                if (!movementName) throw new Error("Inexistant movement")

                this[movementName]()
            }
        }
    }

    reset() {
        this.faces[Cube.U] = Array(9).fill('W')
        this.faces[Cube.F] = Array(9).fill('G')
        this.faces[Cube.R] = Array(9).fill('R')
        this.faces[Cube.B] = Array(9).fill('B')
        this.faces[Cube.L] = Array(9).fill('O')
        this.faces[Cube.D] = Array(9).fill('Y')
    }
}