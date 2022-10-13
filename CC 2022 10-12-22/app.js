// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//P - number is always going to be a whole number
//R - not returning anything
//E - n = 5 -> 1,2,fizz,4,buzz
//P - n = 9 -> 1,2,fizz,4,buzz,fizz,7,8,fizz

function fizzBuzz(num){
    //for loop starting from 1 to num
    //conditional
    //if( num % 3 === 0 -> 'Fizz'
    //if num % 5 === 0 -> 'Buzz'
    //if num % 3 === 0 && num % 5 === 0  -> 'FizzBuzz'
    //else log the number

    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }else if(i % 3 === 0){
            console.log('Fizz')
        }else if(i % 5 === 0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(5)
fizzBuzz(9)
fizzBuzz(15)