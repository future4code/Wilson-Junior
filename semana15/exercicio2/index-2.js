
    const num1 = Number(process.argv[3])

    const num2 = Number(process.argv[4])

if ( process.argv[2] == 'add' ) {

    return console.log(num1 + num2)

} else if ( process.argv[2] == 'sub' ){ 

    return console.log(num1 - num2)

} else if ( process.argv[2] == 'mult' ){ 

    return console.log(num1 * num2)

} else if ( process.argv[2] == 'div' ){ 

    return console.log(num1 / num2)

} else { console.log('Tente como primeiro argumento uma das seguintes operações add, sub, mult ou div')}