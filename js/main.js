import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';






// Make something fade to bigger

setTimeout(function() {

  $('.original').removeClass('end').addClass('big');

}, 5000);







// Alert on Click

$('.box1').on('click', function() {
  alert('you clicked me');
});







// Transition on Click

$('.box2').on('click', function() {
  $('.box2').addClass('newStyle');
});






// Show something on Hover

$('.box3').on('mouseenter', function() {
  $('.box4').removeClass('none');
});

$('.box3').on('mouseleave', function() {
  $('.box4').addClass('none');
});






// Tab structure layout

$('.box5').on('click', function() {
  $('.button5text').removeClass('hidden');
  $('.button6text').addClass('hidden');
  $('.button7text').addClass('hidden');
});

$('.box6').on('click', function() {
  $('.button6text').removeClass('hidden');
  $('.button5text').addClass('hidden');
  $('.button7text').addClass('hidden');
});

$('.box7').on('click', function() {
  $('.button7text').removeClass('hidden');
  $('.button6text').addClass('hidden');
  $('.buttontext').addClass('hidden');
});





// Using the date/time object

function getTime() {

  var newClock = $('#clock');
  var time = new Date ();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  var hoursX = (hours > 12) ? (hours - 12): hours;
  var minutesX = (minutes < 10) ? '0' + minutes: minutes;
  var secondsX = (seconds < 10) ? '0' + seconds: seconds;

  var currentTime = hoursX + ':' + minutesX + ':' + secondsX;

  newClock.text(currentTime);
}

setInterval(getTime, 1000);












