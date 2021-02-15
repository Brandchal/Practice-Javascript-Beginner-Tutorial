function getColor(selection) {
    switch (selection) {
        // Add more options here
     case "ROJO":
            return true;
            break;

        case "AZUL":
            return true;
            break;

        case "VERDE":
            return true;
            break;

        default:
            return false;  //returns false because the user picked an unavailable color
            break;
    }}
var colorname = prompt('What color do you want?').toUpperCase().trim();
var isAvailable = getColor(colorname);

if (isAvailable)
    console.log('Good news! That color is available');
else
    console.log('We are sorry, that color is not available');

