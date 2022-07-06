function secondLargest(array){
    let sortedArray = array.sort((a, b) => {
        if(a>b) return -1
        if(a<b) return 1
        return 0
    })

    if(sortedArray.length <=1) throw new Error('insira um array valido');

    let i = 0
    let secLargest = sortedArray[i+1]
    let largest = sortedArray[i]
    while (secLargest >= largest && i <= sortedArray.length) {
        i++
        secLargest = sortedArray[i+1]
        largest = sortedArray[i]
    }
    if (secLargest === undefined) throw new Error('insira um array valido');
    return secLargest
}

// console.log(secondLargest([10, 10, 10,1]));
module.exports = secondLargest;