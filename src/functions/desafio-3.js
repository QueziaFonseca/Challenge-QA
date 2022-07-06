function multiplyMatrices(A, B){
    if (A[0].length != B.length) return null

    rows = A.length
    cols = B[0].length
    n    = A[0].length 
    
    let C = new Array(rows)
    for (let c = 0; c < C.length; c++) {
        C[c] = new Array(cols)
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            for (let k = 0; k < n; k++) {
                if(C[i][j]) {
                    C[i][j] = C[i][j] + A[i][k] * B[k][j]
                } else {
                    C[i][j] = A[i][k] * B[k][j]
                }
            }
        }
    }
    return C
}

module.exports = multiplyMatrices;