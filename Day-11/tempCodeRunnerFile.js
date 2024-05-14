  // function findTopStudent(school, courseName) {
  //   let topStudent = school.students.reduce((max, student) => {//using reduce function find out the max value 
  //     return student.scores[courseName] > max.scores[courseName] ? student : max;
  //   });
  //   return topStudent;
  // }
  
  // console.log(findTopStudent(school, 'math'));
  
  // // Problem 12: addNewDept
  // function addNewDept(school, newDepartment) {
  //   return { ...school, departments: { ...school.departments, ...newDepartment } };//using spread operator add new department
  // }
  
  // const newDepartment = { art: { teachers: 2, students: 50 } };
  // console.log(addNewDept(school, newDepartment));
  
  // // Problem 13: highestStudentCountDepartment
  // function highestStudentCountDepartment(school) {
  //   let maxStudents = 0;
  //   let department = '';
  //   for (const dept in school.departments) {
  //     if (school.departments.hasOwnProperty(dept)) {
  //       const studentsCount = school.departments[dept].students;
  //       if (studentsCount > maxStudents) {
  //         maxStudents = studentsCount;
  //         department = dept;
  //       }
  //     }
  //   }
  //   return department;
  // }
  
  // console.log(highestStudentCountDepartment(school));
  
  // // Problem 14: Greeting Message
  // function generateGreeting(name, language = 'English') {
  //   const greetings = {
  //     English: `Hello, ${name}!`,
  //     Spanish: `¡Hola, ${name}!`,
  //     French: `Bonjour, ${name}!`
  //   };
  //   return greetings[language];
  // }
  
  // console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
  // console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
  // console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
  