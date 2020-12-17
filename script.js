//psuedo code

// make the html dynamically
//--for loop making elements
//-- 3 step process for making 3 columns

// on load access local storage to retrieve text boxes

// make the text boxes get saved to local storage when the save button is clicked

// check the time to reassess the color schemes of the rows
// -- use day js to check the hour and check - do a if statement on class creation to change color

//basic array for how many hours are in our day to iterate over
$(document).ready(function () {
  var arrayOfTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // setting the time and formatting and setting currentday id to this.
  var hour = dayjs().format("HH");
  var day = dayjs().format("MMMM DD YYYY hh:mm:ss A");
  $("#currentDay").text(day);

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
    // retrieving local storage and adding arrayoftime[i] to the key to get it from the correct area.
    var textRetrieval = localStorage.getItem("textAreaData" + arrayOfTime[i]);
    if (textRetrieval === null) {
        textRetrieval = "";
    } else {
        textRetrieval = JSON.parse(textRetrieval);
    }
    textOfTime.val(textRetrieval);
    rowOfTime.append(textOfTime);

    // making the button area and appending to row
    let buttonOfTime = $("<button></button>");
    buttonOfTime.attr("class", "saveBtn col-1 fas fa-save");
    buttonOfTime.data("data-index", arrayOfTime[i]);
    rowOfTime.append(buttonOfTime);
  }
  //
  $(".saveBtn").on("click", function (e) {
    //get local data of the text area
    var textStoring = $(this).prev().val();
    // figure out how to set the data equal to the row
    // using $this.data to retrieve a number and attach that to the key to get a local data for each button.
    var buttonNumber = $(this).data("data-index");
    console.log(buttonNumber);
    //set local data of the text
    localStorage.setItem("textAreaData" + buttonNumber, JSON.stringify(textStoring));
  });
});
