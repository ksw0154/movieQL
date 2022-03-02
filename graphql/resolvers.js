const people = [
  {
    id: "1",
    name: "Abel",
    age: 20,
    gender: "male",
  },
  {
    id: "2",
    name: "Abel",
    age: 21,
    gender: "male",
  },
  {
    id: "3",
    name: "Abel",
    age: 22,
    gender: "male",
  },
  {
    id: "4",
    name: "Abel",
    age: 23,
    gender: "male",
  },
];

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
  },
};

const getById = (id) => {
  const filteredPeople = people.filter((person) => id === parseInt(person.id));
  return filteredPeople[0];
};

export default resolvers;
