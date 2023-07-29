let max = parseInt(prompt("enter a max number u wish"));
while (!max) { //while - to run until v get a valid number
    max = parseInt(prompt("enter a valid number"));
}

const targetno = Math.floor(Math.random() * max);
console.log(targetno);

let guess = prompt("guess the number!");
alert("enter 'q' if u wish to quit");
let noOfGuess = 1;

while (parseInt(guess) != targetno) {

    if (guess == 'q') break;

    guess = parseInt(guess);
    if (guess > targetno) {
        guess = prompt("oops!! this is too high . Enter a different guess");
        noOfGuess++;
    }
    else if (guess < targetno) {
        guess = prompt("omg !! this is too low . Enter a different number");
        noOfGuess++;
    }
    else {
        guess = prompt("Invalid number :( . Enter a different number")
    }
}
if (guess == 'q') {
    alert("Im sry if this is annoying u");
}
else {
    alert(`Yes!! You guessed it right in ${noOfGuess} attempts :)`);
}