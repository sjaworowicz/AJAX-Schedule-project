// https://jsonkeeper.com/b/C2DH

// const array = []; 

// const filteredArray = array.filter(element => {
//   return condition;
//  });

var inputField = $("#dayInput");
var submittedDayLetter = inputField.val();
  var scheduleBody = $("#scheduleList");
  var btn = $("#submitDay");

  btn.on("click", function() {
    $.ajax({
      url: 'https://www.jsonkeeper.com/b/C2DH',
      method: 'GET',
      success: function(result) {

      }
    })
  });

  inputField.change(function(){
    var submittedDayLetter = inputField.val();
    console.log(submittedDayLetter);
  });

 // const scheduleData = [
 //   {
 //     "name": "Physical Education",
 //     "room": "GYM1",
 //     "teacher": "Mrs. Pusz",
 //     "days": ["A", "B", "C", "E", "F"]
 //   },
 //   {
 //     "name": "Tech Systems & Design",
 //     "room": "Room C106",
 //     "teacher": "Mr. Ertel",
 //     "days": ["A", "B", "D", "E", "F"]
 //   },
 //   {
 //       "name": "Quantitative Reasoning",
 //       "room": "Room B207",
 //       "teacher": "Mrs. Heaney",
 //       "days": ["A", "C", "D", "E", "G"]
 //     },
 //     {
 //       "name": "Honors NJIT IS219 Advanced Website Development W",
 //       "room": "Room C104",
 //       "teacher": "Mrs. McDonalds",
 //       "days": ["B", "C", "D", "F", "G"]
 //     },
 //     {
 //       "name": "Graphic Design & Photography",
 //       "room": "Room C104",
 //       "teacher": "Mrs. McDonald",
 //       "days": ["A", "B", "D", "E", "G"]
 //     },
 //     {
 //       "name": "BCC ENG121/155",
 //       "room": "Room B108",
 //       "teacher": "Mrs. Robinson",
 //       "days": ["A", "B", "D", "F", "G"]
 //     },
 //     {
 //       "name": "Band 2",
 //       "room": "Room A101",
 //       "teacher": "Mr. Gross",
 //       "days": ["B", "C", "E", "F", "G"]
  //    },
 // ];

  
  function appendClasses(data) {
    var trl = $("<th></th>").text(data[i].className);
    var trl = $("<th></th>").text("");
    var trl = $("<th></th>").text("");
    var trl = $("<th></th>").text("");
    var trl = $("<th></th>").text("");




    console.log(result.className);
    scheduleBody.append()
  };

  // const aDayClasses = getClassesForDay('A');
  // console.log(aDayClasses);
