// type User = { id: number; name: string }; // already declared before
const user: User = { id: 1, name: 'Alice' };

type Coordinate = [number, number];
type UserWithCoords = { id: number; name: string; coords: Coordinate };
const userWithCoords: UserWithCoords = {
  id: 1,
  name: 'Alice',
  coords: [10, 20],
};

enum AnimalIds {
  cat = 'cat',
  dog = 'dog',
  fish = 'fish',
}
type Animal = {
  [AnimalIds.cat]: {
    meow: () => string;
  };
  [AnimalIds.dog]: {
    bark: () => string;
  };
  [AnimalIds.fish]: {
    swim: () => undefined;
  };
};
const cat: Animal[AnimalIds.cat] = {
  meow: () => 'Meow I am a cat.',
};
const dog: Animal[AnimalIds.dog] = {
  bark: () => 'Woof! I am a dog',
};
const fish: Animal[AnimalIds.fish] = {
  swim: () => undefined,
};

// type Fruits = { apples: number; bananas: number; oranges: number };
// type FrozenGoods = { iceCream: number; fish: number; berries: number };
type Goods = { [key: string]: number };
const fruits: Goods = { apples: 12, bananas: 12, oranges: 11 };
const frozenGoods: Goods = { iceCream: 23, fish: 12, berries: 34 };

type MixedType = { [key: string]: string | number };
const userInfo: MixedType = { name: 'Bob', age: 23 };
const bookDetails: MixedType = { title: 'Bible' };
