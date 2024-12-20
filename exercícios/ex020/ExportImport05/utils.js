//utils.js

const date = new Date()
const greeting = name => `hello ${name}`


export default function(argument){ // O nome da função é dado no default no qual o nome é 'funcaoPadrao'
    console.log(date, greeting(argument))
}


export {date, greeting}

