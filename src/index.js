
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!arguments ||arguments.length === 0) return matrix=[]
    else
        return matrix.map((elem, i)=> i%2==0 ? elem : elem = elem.reverse()).flat(Infinity);
}
