export class Cube {
    constructor(faces) {
        this.faces = faces
    }

    _copyFaces() {
        return this.faces.map(face => [...face])
    }

    U() {
        const copiedFace = this._copyFaces()

        const rotationTable = [6, 3, 0, 7, 4, 1, 8, 5, 2]

        // changement sur la face du dessus -> Blanche
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[0][rotationTableIndex] = copiedFace[0][rotationTable[rotationTableIndex]]
        }

        // La couronne du roi
        for (let index = 1; index <= 4; index++) {
            const isOrangeIndex = index === 4

            const sourceIndex = !isOrangeIndex ? index + 1 : 1

            this.faces[index][0] = copiedFace[sourceIndex][0]

            this.faces[index][1] = copiedFace[sourceIndex][1]

            this.faces[index][2] = copiedFace[sourceIndex][2]
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

        const rotationTable = [2, 5, 8, 1, 4, 7, 0, 3, 6]

        // changement sur la face du dessous -> Jaune
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[5][rotationTableIndex] = copiedFace[5][rotationTable[rotationTableIndex]]
        }

        // la couronne
        for (let index = 1; index <= 4; index++) {
            const isGreenIndex = index === 1

            const sourceIndex = !isGreenIndex ? index - 1 : 4

            this.faces[index][6] = copiedFace[sourceIndex][6]

            this.faces[index][7] = copiedFace[sourceIndex][7]

            this.faces[index][8] = copiedFace[sourceIndex][8]
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

        const rotationTable = [6, 3, 0, 7, 4, 1, 8, 5, 2]

        // changement sur la face en face de nous -> Verte
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[1][rotationTableIndex] = copiedFace[1][rotationTable[rotationTableIndex]]
        }

        // la couronne
        // face blanche
        this.faces[0][6] = copiedFace[4][8]

        this.faces[0][7] = copiedFace[4][5]

        this.faces[0][8] = copiedFace[4][2]

        // face rouge
        this.faces[2][0] = copiedFace[0][6]

        this.faces[2][3] = copiedFace[0][7]

        this.faces[2][6] = copiedFace[0][8]

        // face jaune
        this.faces[5][0] = copiedFace[2][6]

        this.faces[5][1] = copiedFace[2][3]

        this.faces[5][2] = copiedFace[2][0]

        // face orange
        this.faces[4][2] = copiedFace[5][0]

        this.faces[4][5] = copiedFace[5][1]

        this.faces[4][8] = copiedFace[5][2]
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

        const rotationTable = [6, 3, 0, 7, 4, 1, 8, 5, 2]

        // changement sur la face arrière -> Bleue
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[3][rotationTableIndex] = copiedFace[3][rotationTable[rotationTableIndex]]
        }

        // face blanche
        this.faces[0][0] = copiedFace[2][2]

        this.faces[0][1] = copiedFace[2][5]

        this.faces[0][2] = copiedFace[2][8]

        // face rouge
        this.faces[2][2] = copiedFace[5][8]

        this.faces[2][5] = copiedFace[5][7]

        this.faces[2][8] = copiedFace[5][6]

        // face orange
        this.faces[4][6] = copiedFace[0][0]

        this.faces[4][3] = copiedFace[0][1]

        this.faces[4][0] = copiedFace[0][2]

        // face jaune
        this.faces[5][8] = copiedFace[4][6]

        this.faces[5][7] = copiedFace[4][3]
        
        this.faces[5][6] = copiedFace[4][0]
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

        const rotationTable = [6, 3, 0, 7, 4, 1, 8, 5, 2]

        // changement sur la face arrière -> Rouge
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[2][rotationTableIndex] = copiedFace[2][rotationTable[rotationTableIndex]]
        }

        // face blanche
        this.faces[0][2] = copiedFace[1][2]

        this.faces[0][5] = copiedFace[1][5]

        this.faces[0][8] = copiedFace[1][8]

        // face verte
        this.faces[1][2] = copiedFace[5][2]

        this.faces[1][5] = copiedFace[5][5]

        this.faces[1][8] = copiedFace[5][8]

        // face jaune
        this.faces[5][2] = copiedFace[3][6]

        this.faces[5][5] = copiedFace[3][3]

        this.faces[5][8] = copiedFace[3][0]

        // face bleue
        this.faces[3][6] = copiedFace[0][2]

        this.faces[3][3] = copiedFace[0][5]

        this.faces[3][0] = copiedFace[0][8]
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

    // Pourquoi const rotationTable = [6, 3, 0, 7, 4, 1, 8, 5, 2] se répète 5 fois dans ma class ? 

    // éxiste une meilleur manire moins hardcodé et impossible de se souvenir ce que j'ai écris en revenant dessus dans 1 an sur les nouvelles positions des couleurs ? 

    L() {
        const copiedFace = this._copyFaces()

        const rotationTable = [6, 3, 0, 7, 4, 1, 8, 5, 2]

        // changement sur la face arrière -> Orange
        for (let rotationTableIndex = 0; rotationTableIndex < rotationTable.length; rotationTableIndex++) {
            this.faces[4][rotationTableIndex] = copiedFace[4][rotationTable[rotationTableIndex]]
        }

        // face blanche
        this.faces[0][0] = copiedFace[3][8]

        this.faces[0][3] = copiedFace[3][5]

        this.faces[0][6] = copiedFace[3][2]

        // face verte
        this.faces[1][0] = copiedFace[0][0]

        this.faces[1][3] = copiedFace[0][3]

        this.faces[1][6] = copiedFace[0][6]

        // face jaune
        this.faces[5][0] = copiedFace[1][0]

        this.faces[5][3] = copiedFace[1][3]

        this.faces[5][6] = copiedFace[1][6]

        // face bleue
        this.faces[3][2] = copiedFace[5][6]

        this.faces[3][5] = copiedFace[5][3]

        this.faces[3][8] = copiedFace[5][0]
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
}