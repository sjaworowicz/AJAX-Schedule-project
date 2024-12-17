
const filteredArray = array.filter(element => {
    return condition;
  });

  const scheduleData = [
    {
      "name": "Physical Education",
      "room": "GYM1",
      "teacher": "MrS. Pusz",
      "days": ["A", "B", "C", "E", "F"]
    },
    {
      "name": "Tech Systems & Design",
      "room": "Room C106",
      "teacher": "Mr. Ertel",
      "days": ["A", "B", "D", "E", "F"]
    },
    {
        "name": "Quantitative Reasoning",
        "room": "Room B207",
        "teacher": "Mrs. Heaney",
        "days": ["A", "C", "D", "E", "G"]
      },
      {
        "name": "Honors NJIT IS219 Advanced Website Development W",
        "room": "Room C104",
        "teacher": "Mr. Ertel",
        "days": ["A", "B", "D", "E", "F"]
      },
      {
        "name": "Graphic Design & Photography",
        "room": "Room C104",
        "teacher": "Mrs. McDonald",
        "days": ["A", "B", "D", "E", "G"]
      },
      {
        "name": "BCC ENG121/155",
        "room": "Room B108",
        "teacher": "Mrs. Robinson",
        "days": ["A", "B", "D", "F", "G"]
      },
      {
        "name": "Band 2",
        "room": "Room A101",
        "teacher": "Mr. Gross",
        "days": ["B", "C", "E", "F", "G"]
      },
  ];
  
  // Function to filter classes for a specific day
  function getClassesForDay(day) {
    return scheduleData.filter(classInfo => classInfo.days.includes(day));
  }
  
  // Example usage: Get classes for 'A' day
  const aDayClasses = getClassesForDay('A');
  console.log(aDayClasses);
  