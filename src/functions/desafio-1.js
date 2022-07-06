function mirror(inteiro){
    reverso = 0
    while(inteiro > 0) {
        reverso = reverso * 10 + inteiro % 10
        inteiro = (inteiro - (inteiro % 10))/10
    }
    return reverso
}

// console.log(mirror(2344));

module.exports = mirror;
