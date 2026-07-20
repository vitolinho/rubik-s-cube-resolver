import { describe, it, expect, beforeEach } from 'vitest'
import { Face } from '~/utils/Face.js'
import { Cube } from '~/utils/Cube.js'

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
