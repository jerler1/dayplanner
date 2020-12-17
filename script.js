//psuedo code

// make the html dynamically
//--for loop making elements
//-- 3 step process for making 3 columns

// on load access local storage to retrieve text boxes

// make the text boxes get saved to local storage when the save button is clicked

// check the time to reassess the color schemes of the rows
// -- use day js to check the hour and check - do a if statement on class creation to change color

//basic array for how many hours are in our day to iterate over
var arrayOfTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// setting the time and formatting and setting currentday id to this.
var hour = dayjs().format("HH");
var day = dayjs().format("MMMM DD YYYY hh:mm:ss A");
$("#currentDay").text(day);
console.log(hour);


for (let i = 0; i < arrayOfTime.length; i++) {

    //making the row to append things onto and this appends to container
    let rowOfTime = $("<div></div>");
    rowOfTime.attr("class", "row time-block");
    $(".containerOfTime").append(rowOfTime);

    // making the time identifier
    let divOfTime = $("<div></div>");
    divOfTime.attr("class", "hour col-1");
    if (i < 3) {
        divOfTime.text(arrayOfTime[i] + " AM");
    } else if (i === 3) {
        divOfTime.text(arrayOfTime[i] + " PM");
    } else {
        divOfTime.text(arrayOfTime[i] - 12 + " PM");
    }
    rowOfTime.append(divOfTime);

    //making the text areas and appending to row 
    let textOfTime = $("<textarea>");
    if (arrayOfTime[i] < hour) {
        textOfTime.attr("class", "past description col-10");
    } else if (arrayOfTime[i] > hour) {
        textOfTime.attr("class", "future description col-10");
    } else {
        textOfTime.attr("class", "present description col-10");
    }
    
    rowOfTime.append(textOfTime);

    // making the button area and appending to row
    let buttonOfTime = $("<button>");
    buttonOfTime.attr("class", "saveBtn col-1");
    rowOfTime.append(buttonOfTime);

    
}

$()