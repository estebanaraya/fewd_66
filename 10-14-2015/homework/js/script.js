/* WEATHER APP PSEUDO CODE
 *
 * Receive input data
 * Write function that does:
 *      Takes Temp in Celcius
 *      Multiplies the temp by 1.8 and adds 32
 *      (T(°F) = T(°C) × 1.8 + 32)
 * Create temperature variable for our new data and place it on the page
 *
 * Temperature variable
 * Use conditionals if/else to change background of page
*/

// Button click event to get data
$('button').on('click', americanize);

// Function to Americanize the Celcius value
function americanize(event) {

    // Prevent the form from submitting
    event.preventDefault();

    // Saves input into a variable
    var number = $('input').val();

    // Run convertTemp function
    convertTemp(number);
}

// Function to convert our Temperature
function convertTemp(num) {
    var newTemp = num * 1.8 + 32;
    console.log(newTemp);
    updateHtmlTemp(newTemp);
    if (newTemp >= 100) {
      $('.colorCode').css("background-color", "#ff1604");
    } else if (newTemp >= 70) {
      $('.colorCode').css("background-color", "#FF9B1E");
    } else if (newTemp >= 50) {
      $('.colorCode').css("background-color", "#FFF365");
    } else if (newTemp >= 32) {
      $('.colorCode').css("background-color", "#BBFFFF");
    } else if (newTemp < 32) {
      $('.colorCode').css("background-color", "#73CEFF");
    } else {
      $('.colorCode').css("background-color", "#ed145b");
    }
}

// Function update our HTML
function updateHtmlTemp(num) {
    $('.tempFahrenheit').html(num);
    $('input').val('');
}
