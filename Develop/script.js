var timeDisplayEl = $('#time-display');
//displays the time in moment
function displayTime() {
    var rightNow = moment().format('LLLL');
    timeDisplayEl.text(rightNow);
  };

$(".saveBtn").on("click" , function() {
var text = $(this).siblings("textarea").val();
var time = $(this).parent("").attr("id");
// saves the text and the time to local storage
localStorage.setItem(time, text);

});

// const timeOfDay = [9,10,11,12,13,14,15,16,17]
// <div class="col-md-1 time-block">11am</div>

$("#9-text").val(localStorage.getItem("9-row"));
$("#10-text").val(localStorage.getItem("10-row"));
$("#11-text").val(localStorage.getItem("11-row"));
$("#12-text").val(localStorage.getItem("12-row"));
$("#13-text").val(localStorage.getItem("13-row"));
$("#14-text").val(localStorage.getItem("14-row"));
$("#15-text").val(localStorage.getItem("15-row"));
$("#16-text").val(localStorage.getItem("16-row"));
$("#17-text").val(localStorage.getItem("17-row"));
//displays the items saved in local storage


when();

setInterval(displayTime, 1000);


// var thisHour = moment().format('HH'); 
//   if(thisHour > rightNow) {
    
//   };