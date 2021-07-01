const range = n =>
  Array(n)
    .fill()
    .map((_, i) => i)

const toXY = (i, width) => [i % width, Math.floor(i / width)]

const hasAllNumbers = numbers =>
  [...new Set(numbers)].filter(number => number !== 0).length === 9

const getColumns = board => range(9).map(idx => board.map(row => row[idx]))

const getBlocks = board =>
  range(9).map(i => {
    const [blockX, blockY] = toXY(i, 3)

    return range(9).map(j => {
      const [cellX, cellY] = toXY(j, 3)

      return board[cellY + 3 * blockY][cellX + 3 * blockX]
    })
  })

const validate = arr => arr.every(hasAllNumbers)

const validSolution = board => {
  const columns = getColumns(board)
  const blocks = getBlocks(board)
  const areValidColumns = validate(columns)
  const areValidBlocks = validate(blocks)
  const areValidRows = validate(board)

  return areValidColumns && areValidRows && areValidBlocks
}

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ]),
)

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ]),
)
