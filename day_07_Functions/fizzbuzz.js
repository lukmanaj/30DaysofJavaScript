// An implementation of FizzBuzz in JavaScript


function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        switch(true) {
            case (i % 3 === 0 && i % 5 === 0):
                console.log('FizzBuzz')
                break;
            case (i % 3 === 0 ):
                console.log('Fizz')
                break;
            case (i % 5 === 0):
                console.log('Buzz')
                break;
            default: 
                console.log(`${i}`)
        }
    }
}


fizzbuzz(30)

/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
*/