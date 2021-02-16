function fizzBuzz() {
    // Your code here
    function multiple(valor, multiple) {
        resto = valor % multiple;
        if (resto == 0)
            return true;
        else
            return false;
    }
    for (let index = 1; index <= 100; index++) {

        if (multiple(index, 3)) {
            console.log("Fizz");
        }
        else if (multiple(index, 5)) {
            console.log("Buzz");
        } else {
            console.log(index);
        }

    }



}

fizzBuzz();