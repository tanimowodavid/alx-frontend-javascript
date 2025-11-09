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
interface Directors extends Teacher {
  numberOfReports: number; // this extends the Teacher class for Directors objects created
}

// Example 3
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// 3. Printing teachers
function printTeacher(firstName: string, lastName: string) {
  return firstName.slice(0, 1) + "." + " " + lastName; // It returns the first letter of the firstName and the full lastName
}
console.log(printTeacher("John", "Doe"));

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

class StudentClass implements StudentClassInterface {
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
