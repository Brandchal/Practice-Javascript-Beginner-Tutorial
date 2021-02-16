function getColor(colorNumber = 0) {
    //make sure parameter is a number and not a string by converting the value to int:
    colorNumber = parseInt(colorNumber);
    switch (colorNumber) {
        case 1: return "red";
            break;
        case 2: return "yellow";
            break;
        case 3: return "blue";
            break;
        case 4: return "green";
            break;
        default: return "black";
            break;
    }
}

function getAllStudentColors() {

    //your loop here

    for (let index = 1; index < 11; index++) {
        let random = ["1", "2", "3", "4"];
        let num = Math.floor(Math.random() * random.length); //Números aleatoros del tamaño de la funsión del Switch
        var exampleColor = getColor(num); //le pasamos un número a la funsión, para que nos retorne un color del switch
        console.log("Estudent # "+index+ " "+exampleColor);

    }



}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

