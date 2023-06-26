const students = [
    {
      name: "bhaskarprasad",
      chemistryMarks: 80,
      biologyMarks: 90,
      dob: "14-07-2000"
    },
    {
      name: "Jagadish",
      chemistryMarks: 75,
      biologyMarks: 85,
      dob: "20-03-2000"
    },
    {
      name: "Rohit",
      chemistryMarks: 87,
      biologyMarks: 70,
      dob: "17-10-1999"
    },
    {
      name: "tharun",
      chemistryMarks: 80,
      biologyMarks: 90,
      dob: "14-07-2000"
    },
    // Add more student objects here
  ];
  
  students.sort((a, b) => {
    // Rule 1: Sort by total marks in descending order
    if (b.chemistryMarks + b.biologyMarks !== a.chemistryMarks + a.biologyMarks) {
      return (b.chemistryMarks + b.biologyMarks) - (a.chemistryMarks + a.biologyMarks);
    }
  
    // Rule 2: Sort by biology marks in descending order
    if (b.biologyMarks !== a.biologyMarks) {
      return b.biologyMarks - a.biologyMarks;
    }
  
    // Rule 3: Sort by date of birth in ascending order
    const dobA = new Date(a.dob.split("-").reverse().join("-"));
    const dobB = new Date(b.dob.split("-").reverse().join("-"));
    return dobA - dobB;
  });
  
  console.log(students);