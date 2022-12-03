function merge(col1, col2) {
    var i = 0;
    var j = 0;
    var len_col1 = col1.length;
    var len_col2 = col2.length;
    var res = [];
    while (i < len_col1 && j < len_col2) {
        if (col1[i] <= col2[j]) {
            res.push(col1[i]);
            i++;
        }
        else {
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
    return res;
}
module.exports = merge;
