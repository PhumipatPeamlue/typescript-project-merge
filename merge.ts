function merge(col1: number[], col2: number[]): number[] {
  let i: number = 0;
  let j: number = 0;
  let len_col1: number = col1.length;
  let len_col2: number = col2.length;
  let res: number[] = [];

  while (i < len_col1 && j < len_col2) {
    if (col1[i] <= col2[j]) {
      res.push(col1[i]);
      i++;
    } else {
      res.push(col2[j]);
      j++;
    }
  }

  while (i < len_col1) {
    res.push(col1[i]);
    i++;
  }
  while (j < len_col2) {
    res.push(col2[j]);
    j++;
  }

  return res
}

module.exports = merge;
