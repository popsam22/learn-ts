let her_name: string = "Joy";
let noOfWheels: number = 4;
let isStudent: boolean = false;

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: Address;
};

type Address = {
  street: string;
  city: string;
  country: string;
};

let person: Person = {
  name: "joy",
  age: 21,
  isStudent: true,
  address: {
    street: "Bailey Street",
    city: "Lagos",
    country: "Nigeria",
  },
};

let person2: Person = {
  name: "Adaeze Okenwa",
  age: 23,
  isStudent: true,
  address: {
    street: "St Finbarr's Road",
    city: "Lagos",
    country: "Nigeria",
  },
};

let ages: (string | number)[] = [23, 26, 28, "joy", "1"];
let prices: number[] = [11, 500, 234, 1050];
let humans: Person[] = [person, person2];

const name1: "Bob" = "Bob";

type User = {
  username: string;
  role: UserRole;
};

type UserRole = "admin" | "guest" | "member";

const users: User[] = [
  { username: "John", role: "admin" },
  { username: "Ada", role: "guest" },
  { username: "Christy", role: "member" },
];

const fetchUserDetails = (username: string): User => {
  const user = users.find((user) => user.username === username);
  if (!user) throw new Error(`User with user ${username} not found`);
  return user;
};
