type User = { id: number; name: string };

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const result = getUserNames(users);
