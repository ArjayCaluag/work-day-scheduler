$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do"));


    // variable referencing hour-container
    let hourDiv = $('#hour-container');

    hourDiv.empty();

    //Create Rows for each time slot 9-5 with for loop
    for (let hour = 9; hour <= 17; hour++) {
        let rowDiv = $('<div>');
        rowDiv.addClass('row time-block');
        rowDiv.attr('hours', hour);

        //Create Row elements and add classes
        let timeDiv = $('<div>').addClass('col-md-1');
        let textAreaDiv = $('<textarea>').addClass('description col-md-10');
        // set attribute to be called on for localStorage
        let saveButton = $('<button>').addClass('save-btn col-md-1').attr('id', hour);

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
        saveButton.text('Save');

        // append tags
        rowDiv.append(timeDiv, textAreaDiv, saveButton);

        rowColor()



        // Conditional function to change colors based on time
        function rowColor() {
            let currentTime = moment().format('H');

            if (hour < currentTime) {
                textAreaDiv.css("background-color", "lightgrey")
            } else if (hour > currentTime) {
                textAreaDiv.css("background-color", "green")
            } else {
                textAreaDiv.css("background-color", "red")
            }
            console.log(hour, currentTime);

        }

    }

    //Save button eventlisten to store with local storage
    // $(this) is a reference to '.save-btn', which calls the function
    // Grabs id associated with specific time slot
    // .val used to return the value of an input field/text area.
    $('.save-btn').on('click', function () {
        let time = $(this).attr('id')
        let value = $(this).siblings('textarea').val()
        console.log(time, value);
        localStorage.setItem(time, value);

    });

    // for loop to get stored local storage for each row
    // Template literals to consolidate multiple strings
    for (let i = 9; i <= 17; i++) {
        $(`#${i}`).siblings('textarea').val(localStorage.getItem(i));
    }

});