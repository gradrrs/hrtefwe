import { capitalize, escape } from "lodash"

//1
const A = (n) => {
    let massive = []
    for (let index = 0; index < n.length; index += 1){
        if (index % 3 == 0){
            massive.push(n[index])
        }
    }
    return massive
}

//2
const B = (n) => {
    let massive = []
    for (let x of n){
        if (x % 2 == 0){
            massive.push(x)
        }
    }
    return massive
}

//3
const C = (str) => {
    let massive = []
    for (let x of str){
        massive.push(x.capitelize())
    }
    return massive.join(' ')
}

//4 
const D = (str) => {
    let massive = []
    for (let x of str.split(' ')){
        x = x[x.length] + x.slice(1, x.length) + x[0]
        massive.push(x).join(' ')
    }
    return massive
}

//5
const E = (massive) => {
    let sp = []
    num = 1
    for (let x of massive){
        if (x > 0){
            sp.push(x)
        }else if (x < 0){
            num *= x
        }
    }
    return sp
}

//6
const F = (massive) => {
    let count = 0
    for (let x = 0; x < massive.length - 1; x += 1){
        if (massive[x] > massive[x+1]){
            count += 1
        }
    }
    return count
}

//7
const G = (massive, massive1) => {
    for (let x of massive){
        for (let x1 of massive){
            if (x == x1){
                return true
            }
        }
    }
    return false
}

//8
const H = (arr) => {
    for (let x = 0; x < arr.length; x += 1){
        for (let x1; x < arr.length; x += 1){
            if (arr[x] == arr[x1] && x != x1){
                return true
                break
            }
        }
    }
    return false
}

//9
const I = (matrix) => {
    let sum = 0
    for (let x = 0; x < matrix.length; x += 1){
        for (let x1 = 0; x1 < matrix.length; x1 += 1){
            sum += matrix[x][x1] 
        }
    }
    return sum
}

//10
const J = (matrix) => {
    let count = 0
    for (let x = 0; x < matrix.length; x += 1){
        for (let x1 = 0; x1 < matrix.length; x1 += 1){
            if (matrix[x][x1] > 10){
                count += 1
            }
        }
    }
    return count
}

//11
const K = (matrix) => {
    let index = 0
    let max = 0
    for (let x = 0; x < matrix.length; x += 1){
        for (let x1 = 0; x1 < matrix.length; x1 += 1){
            if (matrix[x][x1] > max){
                max = matrix[x][x1]
                index = `${x}${x1}`
            }
        }
    }
    return index
}