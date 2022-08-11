module.exports = function towelSort(matrix) {
  if (matrix.length == 0) {
    return []
  }
  let asc = true
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (asc) {
        result.push(matrix[i][j])
      } else {
        result.push(matrix[i][matrix[i].length - 1 - j]);
      }
    }
    asc = !asc;
  }
  return result
}