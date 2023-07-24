export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => {
    return person.firstName + " " + person.lastName;
  });
}

export function getNameAndAge(people) {
  return people.map((person) => {
    return person.lastName + ` (${person.age})`;
  });
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => {
    return person.age === age;
  });
}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => {
      return person.age > age;
    })
    .map((person) => person.firstName + " " + person.lastName);
}

export function getPeopleByLastName(people, lastName) {
  return people
    .filter((person) => {
      return person.lastName === lastName;
    })
    .map((person) => person.firstName + " " + person.lastName);
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getFullNamesSortedByAge(people) {
  //-------------logs
  // console.log("slice:", people.slice());
  // console.log(
  //   "sort:",
  //   people.sort((a, b) => a.age - b.age)
  // );
  // console.log(
  //   "map:",
  //   people
  //     .slice()
  //     .sort((a, b) => a.age - b.age)
  //     .map((person) => person.firstName + " " + person.lastName)
  // );
  //----------------------
  return people
    .slice()
    .sort((a, b) => a.age - b.age)
    .map((person) => {
      return person.firstName + " " + person.lastName;
    });
}

// const people = [
//   {
//     id: 1,
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 21,
//   },
//   {
//     id: 2,
//     firstName: "John",
//     lastName: "Doe",
//     age: 18,
//   },
//   {
//     id: 3,
//     firstName: "Max",
//     lastName: "Mustermann",
//     age: 32,
//   },
//   {
//     id: 4,
//     firstName: "Erika",
//     lastName: "Musterfrau",
//     age: 38,
//   },
//   {
//     id: 5,
//     firstName: "Luke",
//     lastName: "Skywalker",
//     age: 23,
//   },
// ];
// getFullNamesSortedByAge(people);
