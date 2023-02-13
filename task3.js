const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })

const question = function question(text) {
    return new Promise((resolve, reject) => {
        rl.question(text, (answer) => {
            resolve(answer)
        })
    })
}

async function guessNumber() {
    let number = Math.floor(Math.random() * 100)

    console.log(number)

    let answer = await question('I generate number, try to guess: ');
    
    while (true) {
        if (answer > number) {
            answer = await question('Wrong, my number smaller! Try again! ')
        } else if (answer < number) {
            answer = await question('Wrong, my number bigger! Try again! ')
        } else if (!isNaN(answer)) {
            console.log('Correct!')
            rl.close()
            return
        }
    }
}

guessNumber()