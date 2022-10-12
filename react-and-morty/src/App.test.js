import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Characters from "./components/Characters-page";
import CharacterCards from "./components/CharacterCards";

// test("Unit test 1: the page loads successfully", () => {
//   const inspectedData = render(<App />);
//   expect(screen.getByText("RICK AND MORTY")).toBeInTheDocument();
//   expect(inspectedData).toMatchSnapshot();
// });

test("Unit test 2: more information shows up from the character, when we click on a character in the list", () => {
  render(
    <CharacterCards
      character={{
        results: [
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
              name: "Citadel of Ricks",
              url: "https://rickandmortyapi.com/api/location/3",
            },
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            episode: [
              "https://rickandmortyapi.com/api/episode/1",
              "https://rickandmortyapi.com/api/episode/2",
              "https://rickandmortyapi.com/api/episode/3",
              "https://rickandmortyapi.com/api/episode/4",
              "https://rickandmortyapi.com/api/episode/5",
              "https://rickandmortyapi.com/api/episode/6",
              "https://rickandmortyapi.com/api/episode/7",
              "https://rickandmortyapi.com/api/episode/8",
              "https://rickandmortyapi.com/api/episode/9",
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/11",
              "https://rickandmortyapi.com/api/episode/12",
              "https://rickandmortyapi.com/api/episode/13",
              "https://rickandmortyapi.com/api/episode/14",
              "https://rickandmortyapi.com/api/episode/15",
              "https://rickandmortyapi.com/api/episode/16",
              "https://rickandmortyapi.com/api/episode/17",
              "https://rickandmortyapi.com/api/episode/18",
              "https://rickandmortyapi.com/api/episode/19",
              "https://rickandmortyapi.com/api/episode/20",
              "https://rickandmortyapi.com/api/episode/21",
              "https://rickandmortyapi.com/api/episode/22",
              "https://rickandmortyapi.com/api/episode/23",
              "https://rickandmortyapi.com/api/episode/24",
              "https://rickandmortyapi.com/api/episode/25",
              "https://rickandmortyapi.com/api/episode/26",
              "https://rickandmortyapi.com/api/episode/27",
              "https://rickandmortyapi.com/api/episode/28",
              "https://rickandmortyapi.com/api/episode/29",
              "https://rickandmortyapi.com/api/episode/30",
              "https://rickandmortyapi.com/api/episode/31",
              "https://rickandmortyapi.com/api/episode/32",
              "https://rickandmortyapi.com/api/episode/33",
              "https://rickandmortyapi.com/api/episode/34",
              "https://rickandmortyapi.com/api/episode/35",
              "https://rickandmortyapi.com/api/episode/36",
              "https://rickandmortyapi.com/api/episode/37",
              "https://rickandmortyapi.com/api/episode/38",
              "https://rickandmortyapi.com/api/episode/39",
              "https://rickandmortyapi.com/api/episode/40",
              "https://rickandmortyapi.com/api/episode/41",
              "https://rickandmortyapi.com/api/episode/42",
              "https://rickandmortyapi.com/api/episode/43",
              "https://rickandmortyapi.com/api/episode/44",
              "https://rickandmortyapi.com/api/episode/45",
              "https://rickandmortyapi.com/api/episode/46",
              "https://rickandmortyapi.com/api/episode/47",
              "https://rickandmortyapi.com/api/episode/48",
              "https://rickandmortyapi.com/api/episode/49",
              "https://rickandmortyapi.com/api/episode/50",
              "https://rickandmortyapi.com/api/episode/51",
            ],
            url: "https://rickandmortyapi.com/api/character/1",
            created: "2017-11-04T18:48:46.250Z",
          },
        ],
      }}
    />
  );
  screen.debug();
});
