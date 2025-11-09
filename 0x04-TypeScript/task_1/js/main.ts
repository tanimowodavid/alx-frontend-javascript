// 1. Building a Teacher interface
interface Teacher {
  readonly firstName: string; // modifiable only after initialized
  readonly lastName: string; // modifiable only after initialized
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // For the posibility to add extra attributes
}

// Example 1
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // this extra attribute was not listed above (no typed error)

  // NB: yearsOfExperience attribute was excluded but no typed error because it was set to optional (?)
};

// Example 2
const teacher4: Teacher = {
  firstName: "John",
  lastName: "Agalga",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "Accra",
  contract: false,
  department: "Science", // another extra attribute
};

console.log(teacher3);

// 2. Extending the Teacher class
interface Director extends Teacher {
  numberOfReports: number;
}

// Example 3
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// 3. Printing teachers
interface printTeacherFunction {
  firstName: string;
  lastName: string;
}
function printTeacher({ firstName, lastName }: printTeacherFunction) {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));

// 4. Writing a class
// Interface for Constructor of the class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    (this.firstName = firstName), (this.lastName = lastName);
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return `Hello, my name is ${this.firstName}`;
  }
}

// Example 4
const student1 = new StudentClass("Emmanuel", "Adi");
console.log(student1.workOnHomework());
console.log(student1.displayName());
