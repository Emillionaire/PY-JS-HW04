function getPasswordChecker(password) {
    return guess => password == guess
}

let password1 = getPasswordChecker('truepassword')

console.log(password1('falsepas'))
console.log(password1('truepassworda'))
console.log(password1('truepassword'))
console.log(password1('truepassword0'))