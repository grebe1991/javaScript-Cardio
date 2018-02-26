/* CHALLENGE 6: FIZZ BUZZ
 * returns the numbers from 0 to 100. For multiples of 3 it prints Fizz and for multiple of 5 Buzz, for both FizzBuzz
 */

fizzbuzz = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            console.log('Fizz');
            continue;
        }
        if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        }
        console.log(i + "\n");
    }
};



module.exports = fizzbuzz;