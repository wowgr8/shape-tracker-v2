import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Triangle from './js/triangle.js';
import Rectangle from './js/rectangle.js';

$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const length1 = parseInt($('#length1').val());
    const length2 = parseInt($('#length2').val());
    const length3 = parseInt($('#length3').val());
    const triangle = new Triangle(length1, length2, length3);
    const response = triangle.checkType();
    $('#response').append(`<p>${response}</p>`);
  });

  $('#rectangle-area-form').submit(function(event) {
    event.preventDefault();
    const length1 = parseInt($('#rect-length1').val());
    const length2 = parseInt($('#rect-length2').val());
    const rectangle = new Rectangle(length1, length2);
    const response = rectangle.getArea();
    $('#response2').append(`<p> The area of the rectangle is ${response}.</p>`);
  });
});



// This was our code before importing rectangle. 
// We add parseInt() when we get the value of lengths from both forms. We don't want to have an issue with working with strings instead of numbers.
// When we append, we've updated the strings to use template literals. This cleans up the code a bit more.


// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import Triangle from './js/triangle.js';

// $(document).ready(function() {
//   $('#triangle-checker-form').submit(function(event) {
//     event.preventDefault();
//     debugger;
//     const length1 = $('#length1').val();
//     const length2 = $('#length2').val();
//     const length3 = $('#length3').val();
//     const triangle = new Triangle(length1, length2, length3);
//     const response = triangle.checkType();
//     $('#response').append("<p>" + response + "</p>");
//   });
// });