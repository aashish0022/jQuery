// AJAX is not a language. 
// data recieved from server in form on JSON ==> JavaScript Objeect Notation
// Some sites send in the form of XML

// XML is used for recieving data from server although any format including plian text can be used

/* 
    Ajax uses XHTML for content, CSS for presentation along with document object model and JavaScript for dynamic content display.

    It is a web browser technology independent of web server software.
*/

// Where there is a need for real time data AJAX is used.
// API ==> Application Programming Interface

// API Brings partial data from the server to the client.

// AJAX is based upon open standards: 
/*
    1. Data fetch through XMLHttpRequest objects.
    2. Always use Async Mode for data transfer.
*/

// AJAX can't Work alone. It uses JavaScript and DOM requests.

let getBtn = document.querySelector('.btn-primary')
let showBtn = document.querySelector('.btn-secondary')

getBtn.addEventListener('click', () =>{
    console.log("You clicked the getBtn");

    // AJAX implementation

    // create a new instance of the xhr
    const xhr = new XMLHttpRequest();

    // Open request object
    // Note: GET means data will come, second paramter is source URL
    // third parameter is true ==> Means Async mode --> NON - BLOCKING MODE
    xhr.open('GET', "ajaxServer.txt", true)

    // Printing progress if required
    xhr.onprogress = function() {
        console.log("In Progress.....");
    }

    // When response is ready to be deliverd from server to client

    xhr.onload = function() {
        if(this.status === 200){
            console.log(this.responseText);
        }else{
            console.log(this.status);
        }
    }

    // send the request to server
    xhr.send()
})