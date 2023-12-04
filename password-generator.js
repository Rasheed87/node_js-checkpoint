const generatePassword = require('generate-password')


const generateRandomPassword = () => {
    const password = generatePassword.generate({
        "lowercase": true,
        "uppercase": true,
        "length": 12,
        "numbers": true,
        "symbols": true

    })

    console.log(password)
}

generateRandomPassword()