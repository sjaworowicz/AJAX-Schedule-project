// https://jsonkeeper.com/b/C2DH

var inputField = $("#dayInput");
var submittedDayLetter = inputField.val();
  var scheduleBody = $("#scheduleList");
  var btn = $("#submitDay");

  btn.on("click", function(){
    $.ajax({
      url: 'class-schedule.json',
      method: 'GET',
      success: function(result) {
        appendClasses(result);

      }
    });
  });

  inputField.change(function(){
    var submittedDayLetter = inputField.val();
    console.log(submittedDayLetter);
  });

function appendClasses(data) {

    // Function to filter classes for a specific day
  function getClassesForDay(day) {
    return data.filter(classInfo => classInfo.days.includes(day));
  }

  console.log(appendClasses);

  // Example usage: Get classes for 'A' day
  const aDayClasses = getClassesForDay(inputField.val());
  console.log(aDayClasses);

      scheduleBody.append()
};