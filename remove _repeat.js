
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

for (let i = 0; i < a.length; i++) {
    if (obj[a[i]] === 1) { console.log(a[i]) }
}
