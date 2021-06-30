const hasAllNumbers = (numbers) => {
    return [...new Set(numbers)]
        .filter(number => number !== 0)
        .length === 0
}

const getColumns = board =>
    Array(9)
        .fill(null)
        .map((_, idx) => board.map(row => row[idx]))

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

const validSolution = (board) => {
    const columns = getColumns(board)
    const blocks = getBlocks(board)

    console.log('columns', columns)
    console.log('blocks', blocks)
}

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
