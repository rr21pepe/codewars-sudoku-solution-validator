const hasAllNumbers = (numbers) => {
    return [...new Set(numbers)]
        .filter(number => number !== 0)
        .length === 9
}

const getColumns = board =>
    Array(9)
        .fill(null)
        .map((_, idx) => [...board].map(row => row[idx]))

const getBlocks = board => {
    const blocks = []

    for(let i = 0; i < 9; i += 3) {
        let block = []

        for(let j = 0; j < 9; j++) {
            block.push(board[i][j])
            block.push(board[i + 1][j])
            block.push(board[i + 2][j])
            
            if ((j + 1) % 3 === 0) {
                blocks.push(block)
                block = []
            }
        }
    }

    return blocks
}

const validate = (arr) => arr.filter(el => !hasAllNumbers(el)).length === 0

const validSolution = (board) => {
    const columns = getColumns(board)
    const blocks = getBlocks(board)
    const areValidColumns = validate(columns)
    const areValidBlocks = validate(blocks)
    const areValidRows = validate(board)

    return areValidColumns && areValidRows && areValidBlocks
}

console.log(
    validSolution(
        [
            [5, 3, 4, 6, 7, 8, 9, 1, 2], 
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ]
    )
)

console.log(
    validSolution(
        [
            [5, 3, 4, 6, 7, 8, 9, 1, 2], 
            [6, 7, 2, 1, 9, 0, 3, 4, 8],
            [1, 0, 0, 3, 4, 2, 5, 6, 0],
            [8, 5, 9, 7, 6, 1, 0, 2, 0],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 0, 1, 5, 3, 7, 2, 1, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 0, 0, 4, 8, 1, 1, 7, 9]
        ]
    )
)
