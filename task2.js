const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })

function generateNumber() {
    let number = Math.floor(Math.random() * 100)
    
    console.log(number)

    return function userNumber(text = 'I generate number, try to guess: ') {
        rl.question(text, (answer) => {
            if (answer > number) {
                userNumber('Wrong, my number smaller! Try again! ')
            } else if (answer < number) {
                userNumber('Wrong, my number bigger! Try again! ')
            } else if (!isNaN(answer)) {
                console.log('Correct!')
                rl.close()
                return
            }
            userNumber()
        })
    }()
}

generateNumber()