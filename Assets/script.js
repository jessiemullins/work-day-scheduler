//day.js current day
var today = dayjs();
$('#currentDay').text(today.format('[Today is] MMM D, YYYY, h:mm:ss a'));

  // Save button and local storage
  $('.saveBtn').click(function () {
    var description = $(this).siblings('.description').val().trim();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, description);
  });

//adds/removes past present future class
var currentHour = dayjs().hour();
$(".time-block").each(function () {
var timeBlock = $(this).attr("id").split("-")[1];
  
if (currentHour == timeBlock) {
  $(this).addClass("present");
} else if (currentHour < timeBlock) {
  $(this).removeClass("present");
  $(this).addClass("future");
} else if (currentHour > timeBlock) {
  $(this).removeClass("future");
  $(this).addClass("past");
}
});

  // the saved input from localStorage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
