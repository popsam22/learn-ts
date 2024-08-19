let personId = 1;

type User2 = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

const people: User2[] = [
  { username: "John", role: "member", id: personId++ },
  { username: "Ada", role: "admin", id: personId++ },
  { username: "Christy", role: "contributor", id: personId++ },
];

const addUser = (newUser: Omit<User2, "id">): User2 => {
  let user: User2 = { ...newUser, id: personId++ };
  people.push(user);
  return user;
};

const updateUser = (id: number, updates: Partial<User2>) => {
  const user = people.find((person) => person.id === id);
  if (!user) {
    return;
  }
  Object.assign(user, updates);
};

updateUser(1, { username: "John Wick" });
updateUser(3, { role: "admin" });
addUser({ username: "James Wick", role: "contributor" });
// console.log(people);

//Generics
const gameScores = [14, 21, 34, 56, 79, 90];
const favoriteThings = ["love", "talking to myself", "playing CODM"];
const voters = [
  { name: "Joy", age: 23 },
  { name: "Ramos", age: 34 },
];

const getLastItem = <T>(array: T[]): T | undefined => {
  return array[array.length - 1];
};

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
