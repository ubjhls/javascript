let myAdd2 = function (a, b) {
    return a + b
}

let concat = function(str1, str2) {
    return str1 - str2
}

let check_long_str = function(string) {
    if (string.length > 10) {
        return true
    }
    else {
        return false
    }
}
if (concat('happy','hacking') === true) {
    console.log('LONG STRING')
}
else {
    console.log('SHORT STRING')
}