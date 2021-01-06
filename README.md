# **Work Day Scheduler**
For this assignment, we are tasked to create a day scheduler where a user can edit text fields and include their plans for the day. We are expected to showcase our knowledge with the use of jQuery and to implement a third party api library such as moment.js. The rows must be responsive and in sync with the current time, color block themes to represent past,present, or future. The work day scheduler must allow utilize the use of local storage when the save button is clicked and the event in the text field must be available after refreshing the page unless cleared.

<br><br>

![image](https://user-images.githubusercontent.com/52800632/103729592-a3195580-4f95-11eb-9641-485078c374c9.png)


# **Installation**


Link javascript,jQuery, and moment.js to html file
```html
<script src="script.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"><script>

```

Clone repository from github, track changes and push onto your own Github Repository.

```bash
git clone [sshkeyurl]
```

```bash
git add .
```
```bash
git commit -m "message"
```
```bash
git push origin main
```

# **Built With**

<ul>
    <li> Javascript - scripting language that allows implementation of complex web features
    <li> jQuery - Javascript library that simplifies javascript programming.
    <li> Moment.js - Third party library that helps displaying date/time.
    <li> HTML - The standard markup language for web pages </li>
    <li> CSS - used to describe the presentation of markup langauges such as HTML </li>
</ul>

# **Code Snippet**

```js
    //displays current date
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    //declares current hour
    let currentTime = moment().format('H');
```
```js
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
```
# **Deployed Link**

https://arjaycaluag.github.io/work-day-scheduler/
# **Author**

Ron-Arjay Caluag

[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)
<br>
[Github](https://github.com/ArjayCaluag)

# **License**

The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
