$(document).ready(function() {

$("#currentDay").text(moment().format("dddd, MMMM Do"));

// variable referencing hour-container
let hourDiv = $('#hour-container');

hourDiv.empty();

//Create Rows for each time slot 9-5
for (let hour = 9; hour <= 17; hour++){
    let rowDiv = $('<div>');
    rowDiv.addClass('row time-block');
    rowDiv.attr('hours', hour);
    
    //Create Row elements and add classes
    let timeDiv = $('<div>').addClass('col-md-1');
    let textAreaDiv = $('<textarea>').addClass('description col-md-10');
    let saveButton = $('<button>').addClass('save-btn col-md-1');
   
    let displayHour = 0;
    let ampm = "";
    // conditional statement to assign time either am/pm
    if (hour > 12) {
        displayHour = hour - 12;
        ampm = "pm";
    } else {
        displayHour = hour;
        ampm = "am";
    }

    timeDiv.text(displayHour + ampm);

    hourDiv.append(rowDiv)

    // Save Button
    saveButton.text('Save');
    
    // append tags
    rowDiv.append(timeDiv,textAreaDiv,saveButton);
    
}



//eventListener for saveButton onclick to edit input each row




//save button to save with localstorage



//save button to save with localstorage



//update row color based on current time





});