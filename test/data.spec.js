import {
  filterElements,
  sortElements,
  findCharacter,
  filterSearch,
} from "../src/data.js";

const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
    url: "https://rickandmortyapi.com/api/character/3",
    created: "2017-11-04T19:09:56.428Z",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image:
      "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/4.jpeg",
    url: "https://rickandmortyapi.com/api/character/4",
    created: "2017-11-04T19:22:43.665Z",
  },
];

describe("filterElements", () => {
  it("is a function", () => {
    expect(typeof filterElements).toBe("function");
  });

  it("returns an array of female characters by gender female", () => {
    const results = filterElements(characters, "gender", "Female");
    results.forEach((character) => {
      expect(character.gender).toBe("Female");
    });
  });
  it("returns an array of alive characters by status alive ", () => {
    const results = filterElements(characters, "status", "Alive");
    results.forEach((character) => {
      expect(character.status).toBe("Alive");
    });
  });
  it("returns an array of human characters by specie human", () => {
    const results = filterElements(characters, "species", "Human");
    results.forEach((character) => {
      expect(character.species).toBe("Human");
    });
  });
});

describe("sortElements", () => {
  it("is a function", () => {
    expect(typeof sortElements).toBe("function");
  });
  it("returns an arrangement of characters sorted in ascending order", () => {
    const ascendingSortNames = [
      "Beth Smith",
      "Morty Smith",
      "Rick Sanchez",
      "Summer Smith",
    ];
    const results = sortElements(characters, "asc");
    results.forEach((character, index) => {
      expect(character.name).toBe(ascendingSortNames[index]);
    });
  });
});

describe("findCharacter", () => {
  it("is a function", () => {
    expect(typeof findCharacter).toBe("function");
  });
  it("return and object with id 4 as in", () => {
    const result = findCharacter(characters, 4);
    expect(result.id).toBe(4);
  });
});

describe("filterSearch", () => {
  it("is a function", () => {
    expect(typeof filterSearch).toBe("function");
  });
  it("return an array of search name", () => {
    const search = "Morty";
    const results = filterSearch(characters, search);
    results.forEach((character) => {
      const isCorrectSearch = character.name
        .toLowerCase()
        .includes(search.toLowerCase());
      expect(isCorrectSearch).toBe(true);
    });
  });
});
