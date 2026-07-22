import { describe, it, expect, beforeEach } from 'vitest'
import { Face } from '~/utils/Face.js'
import { Cube } from '~/utils/Cube.js'

const scrambleTests = [
    {
        name: "scramble CubeTime 1",
        moves: "D' L' F D' B2 F2 D L2 D2 L2 D L2 B2 R B2 F2 U' R2 F' R'",
        expected: [
            ["B", "R", "O", "B", "W", "B", "B", "O", "W"],
            ["O", "W", "B", "G", "G", "G", "Y", "Y", "O"],
            ["O", "R", "G", "W", "R", "B", "G", "Y", "B"],
            ["W", "Y", "R", "W", "B", "W", "R", "O", "R"],
            ["Y", "O", "Y", "R", "O", "R", "G", "Y", "R"],
            ["G", "O", "Y", "G", "Y", "B", "W", "G", "W"],
        ]
    },
    {
        name: "scramble simple",
        moves: "R U R' U'",
        expected: [
            ["W", "W", "O", "W", "W", "G", "W", "W", "G"],
            ["G", "G", "Y", "G", "G", "W", "G", "G", "G"],
            ["R", "R", "W", "B", "R", "R", "W", "R", "R"],
            ["B", "R", "R", "B", "B", "B", "B", "B", "B"],
            ["B", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["Y", "Y", "R", "Y", "Y", "Y", "Y", "Y", "Y"],
        ]
    }
]

const createSolvedCube = () => {
    return new Cube([
        new Face('W').face,
        new Face('G').face,
        new Face('R').face,
        new Face('B').face,
        new Face('O').face,
        new Face('Y').face
    ])
}

describe('U()', () => {
    let cube

    beforeEach(() => {
        cube = createSolvedCube()
        // Mélanger un peu le cube
        cube.D()
        cube.F()
        cube.D()
    })

    it('4x U = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.U()
        cube.U()
        cube.U()
        cube.U()

        expect(cube.faces).toEqual(initialState)
    })

    it ('U + U\' = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.UPrime()
        cube.U()

        expect(cube.faces).toEqual(initialState)
    })

    it('2x U2 = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.U2()
        cube.U2()

        expect(cube.faces).toEqual(initialState)
    })
})

describe('D()', () => {
    let cube

    beforeEach(() => {
        cube = createSolvedCube()
        // Mélanger un peu le cube
        cube.F()
        cube.U()
        cube.F()
    })

    it('4x D = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.D()
        cube.D()
        cube.D()
        cube.D()

        expect(cube.faces).toEqual(initialState)
    })

    it ('D + D\' = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.DPrime()
        cube.D()

        expect(cube.faces).toEqual(initialState)
    })

    it('2x D2 = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.D2()
        cube.D2()

        expect(cube.faces).toEqual(initialState)
    })
})

describe('F()', () => {
    let cube

    beforeEach(() => {
        cube = createSolvedCube()
        // Mélanger un peu le cube
        cube.D()
        cube.U()
        cube.D()
    })

    it('4x F = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.F()
        cube.F()
        cube.F()
        cube.F()

        expect(cube.faces).toEqual(initialState)
    })

    it ('F + F\' = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.FPrime()
        cube.F()

        expect(cube.faces).toEqual(initialState)
    })

    it('2x F2 = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.F2()
        cube.F2()

        expect(cube.faces).toEqual(initialState)
    })
})

describe('B()', () => {
    let cube

    beforeEach(() => {
        cube = createSolvedCube()
        // Mélanger un peu le cube
        cube.D()
        cube.U()
        cube.D()
    })

    it('4x B = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.B()
        cube.B()
        cube.B()
        cube.B()

        expect(cube.faces).toEqual(initialState)
    })

    it ('B + B\' = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.BPrime()
        cube.B()

        expect(cube.faces).toEqual(initialState)
    })

    it('2x B2 = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.B2()
        cube.B2()

        expect(cube.faces).toEqual(initialState)
    })
})

describe('R()', () => {
    let cube

    beforeEach(() => {
        cube = createSolvedCube()
        // Mélanger un peu le cube
        cube.F()
        cube.D()
        cube.F()
    })

    it('4x R = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.R()
        cube.R()
        cube.R()
        cube.R()

        expect(cube.faces).toEqual(initialState)
    })

    it ('R + R\' = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.RPrime()
        cube.R()

        expect(cube.faces).toEqual(initialState)
    })

    it('2x R2 = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.R2()
        cube.R2()

        expect(cube.faces).toEqual(initialState)
    })
})

describe('L()', () => {
    let cube

    beforeEach(() => {
        cube = createSolvedCube()
        // Mélanger un peu le cube
        cube.F()
        cube.D()
        cube.F()
    })

    it('4x L = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.L()
        cube.L()
        cube.L()
        cube.L()

        expect(cube.faces).toEqual(initialState)
    })

    it ('L + L\' = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.LPrime()
        cube.L()

        expect(cube.faces).toEqual(initialState)
    })

    it('2x L2 = identité', () => {
        const initialState = structuredClone(cube.faces)

        cube.L2()
        cube.L2()

        expect(cube.faces).toEqual(initialState)
    })
})

describe('applyMoves()', () => {
    it('applyMoves("U") devrait produire le même résultat que cube.U()', () => {
        const cubeA = createSolvedCube()
        const cubeB = createSolvedCube()

        cubeA.applyMoves('U')
        cubeB.U()

        expect(cubeA.faces).toEqual(cubeB.faces)
    })

    it('applyMoves("R U R\' U\'") devrait appliquer les 4 mouvements dans l\'ordre', () => {
        const cubeA = createSolvedCube()
        const cubeB = createSolvedCube()

        cubeA.applyMoves("R U R' U'")
        cubeB.R()
        cubeB.U()
        cubeB.RPrime()
        cubeB.UPrime()

        expect(cubeA.faces).toEqual(cubeB.faces)
    })

    it('applyMoves("F2 B\' D") devrait gérer les variantes', () => {
        const cubeA = createSolvedCube()
        const cubeB = createSolvedCube()

        cubeA.applyMoves("F2 B' D")
        cubeB.F2()
        cubeB.BPrime()
        cubeB.D()

        expect(cubeA.faces).toEqual(cubeB.faces)
    })

    it('applyMoves("X Y Z") devrait lever une erreur', () => {
        const cube = createSolvedCube()

        expect(() => cube.applyMoves("X Y Z")).toThrow()
    })
})

describe('scrambles de référence', () => {
    for (const test of scrambleTests) {
        it(test.name, () => {
            const cube = createSolvedCube()

            cube.applyMoves(test.moves)

            expect(cube.faces).toEqual(test.expected)
        })
    }
})

describe('reset()', () => {
    it('reset() devrait ramener le cube à l\'état résolu', () => {
        const cube = createSolvedCube()

        cube.applyMoves("R U R'")
        cube.reset()
        
        expect(cube.faces).toEqual(createSolvedCube().faces)
    })
})

describe('clone()', () => {
    let original

    let cloned

    beforeEach(() => {
        original = createSolvedCube()
        
        original.applyMoves("R U R' F")

        cloned = original.clone()
    })


    it('devrait avoir le même contenu que l\'original', () => {
        expect(cloned.faces).toEqual(original.faces)
    })

    it('devrait être indépendant de l\'original', () => {
        cloned.U()

        expect(cloned.faces).not.toEqual(original.faces)
    })

    it('devrait retourner une instance de Cube', () => {
        expect(cloned).toBeInstanceOf(Cube)
    })
})
