// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'] // tuple
// };

// enum Role { ADMIN, READ_ONLY, AUTHOR };
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}; 

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin'];

console.log(person.role);

let favoriteActivities: string[]; // any[]
favoriteActivities = ['Sports'];
favoriteActivities.push('Cooking');
// console.log(favoriteActivities);

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
