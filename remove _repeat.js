
let a = "google"
let obj = {}
let result= {}
for (let i = 0; i < a.length; i++) {
    if (obj[a[i]]) {
        obj[a[i]] = obj[a[i]] + 1
    } else {
        obj[a[i]] = 1
    }
}
// console.log(obj)
// VM1721: 10 { g: 2, o: 2, l: 1, e: 1 }
// undefined
// for (let i = 0; i < a.length; i++) {
//     if (obj[a[i]] === 1) { console.log(a[if]) }
// }
// VM1893: 2 Uncaught SyntaxError: Unexpected token 'if'
for (let i = 0; i < a.length; i++) {
    if (obj[a[i]] === 1) { console.log(a[i]) }
}
// VM1917: 2 l