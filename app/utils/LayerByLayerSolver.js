import { Solver } from "./Solver"
import { Cube } from "./Cube"

export class LayerByLayerSolver extends Solver {
    _isEdgePlaced(cube, uIndex, faceIndex, color) {
        return cube.faces[Cube.U][uIndex] === 'W' && cube.faces[faceIndex][Cube.TOP_MID] === color
    }

    _areEdgesPlaced(cube, edges) {
        return edges.every(edge => this._isEdgePlaced(cube, edge.uIndex, edge.faceIndex, edge.color))
    }

    _bfs(startCube, isGoal, maxDepth = 8) {
        const possibleMoves = Object.keys(Cube.NOTATION_TO_METHOD)

        const queue = [
            {
                cube: startCube.clone(),
                path: []
            }
        ]
        
        const visited = new Set()

        visited.add(JSON.stringify(startCube.faces))

        while (queue.length > 0) {
            const current = queue.shift()

            if (isGoal(current.cube)) return current.path

            // opti 1 on cherche que de solution en maxDepth mouvements max
            if (current.path.length >= maxDepth) continue

            const lastMove = current.path[current.path.length - 1]

            for (const move of possibleMoves) {
                // opti 2 on ne fais pas 2 fois le meme mouvement ou son inverse
                if (lastMove && move.charAt(0) === lastMove.charAt(0)) continue
                
                const nextCube = current.cube.clone()

                nextCube.applyMoves(move)

                const serialized = JSON.stringify(nextCube.faces)

                if (!visited.has(serialized)) {
                    visited.add(serialized)
                
                    queue.push({ cube: nextCube, path: [...current.path, move] })
                }
            }
        }

        return null
    }

    solveWhiteCross(cube) {
        const edges = [
            { uIndex: Cube.BOTTOM_MID, faceIndex: Cube.F, color: 'G' },
            { uIndex: Cube.MID_RIGHT, faceIndex: Cube.R, color: 'R' },
            { uIndex: Cube.TOP_MID, faceIndex: Cube.B, color: 'B' },
            { uIndex: Cube.MID_LEFT, faceIndex: Cube.L, color: 'O' }
        ]
  
        let fullPath = []

        const currentCube = cube.clone()
  
        for (let i = 0; i < 4; i++) {
            const edgesToPreserve = edges.slice(0, i + 1)

            const goal = (c) => this._areEdgesPlaced(c, edgesToPreserve)
    
            const path = this._bfs(currentCube, goal, 6)
    
            if (path === null) throw new Error(`Impossible de placer l'arête ${i}`)
    
            currentCube.applyMoves(path.join(' ') || '')

            fullPath = [...fullPath, ...path]
        }
  
        return fullPath
    }

    isWhiteCrossSolved(cube) {
        return cube.faces[Cube.U][Cube.TOP_MID] === 'W' && cube.faces[Cube.U][Cube.MID_LEFT] === 'W' && cube.faces[Cube.U][Cube.MID_RIGHT] === 'W' && cube.faces[Cube.U][Cube.BOTTOM_MID] === 'W' && cube.faces[Cube.F][Cube.TOP_MID] === 'G' && cube.faces[Cube.R][Cube.TOP_MID] === 'R' && cube.faces[Cube.B][Cube.TOP_MID] === 'B' && cube.faces[Cube.L][Cube.TOP_MID] === 'O'
    }
}
