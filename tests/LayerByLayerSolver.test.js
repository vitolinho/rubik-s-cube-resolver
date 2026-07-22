import { describe, it, expect, beforeEach } from 'vitest'
import { LayerByLayerSolver } from '~/utils/LayerByLayerSolver'
import { createSolvedCube } from './Cube.test'

describe('isWhiteCrossSolved()', () => {
    let cube

    let solver

    beforeEach(() => {
        cube = createSolvedCube()

        solver = new LayerByLayerSolver()
    })

    it('devrait retourner true sur un cube résolu', () => {
        expect(solver.isWhiteCrossSolved(cube)).toBe(true)
    })

    it('devrait retourner false sur un cube salé', () => {
        cube.applyMoves('R2 B')

        expect(solver.isWhiteCrossSolved(cube)).toBe(false)
    })
})

describe('solveWhiteCross()', () => {
    let cube

    let solver

    beforeEach(() => {
        cube = createSolvedCube()

        solver = new LayerByLayerSolver()
    })

    it('devrait retourner une séquence qui produit la croix blanche', () => {
        cube.applyMoves("F' B U' L' B2 D R' U2 F R2 F2 L2 U2 L2 B D2 U R' U")

        const sequence = solver.solveWhiteCross(cube)

        cube.applyMoves(sequence.join(' '))

        expect(solver.isWhiteCrossSolved(cube)).toBe(true)
    })
})
