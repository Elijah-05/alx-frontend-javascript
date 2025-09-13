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

console.log(teacher1);

// Extending interfaces
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

console.log(director1);

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "Jane", lastName: "Smith" }));

// Writing a class

// Describe the class public API
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Describe the constructor signature
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of the class
const student1: StudentInterface = new StudentClass("Jane", "Smith");
console.log(student1.displayName()); // Jane
console.log(student1.workOnHomework()); // Currently working
