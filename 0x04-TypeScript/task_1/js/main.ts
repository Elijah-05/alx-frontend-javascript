interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
  contract: false,
  age: 30,
  subject: "Mathematics",
};

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Los Angeles",
  numberOfReports: 5,
  age: 40,
  department: "Science",
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// const printTeacherVar: printTeacherFunction = printTeacher;

console.log(teacher1);
console.log(director1);
console.log(printTeacher("Jane", "Smith"));
