import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import CharacterCards from "./components/CharacterCards";
import LocationCards from "./components/LocationCards";

test("THE PAGE LOADS SUCCESSFULLY", async () => {
  const inspectedData = render(<App />);
  expect(await screen.findByText("Webcatalog")).toBeInTheDocument();
  expect(inspectedData).toMatchSnapshot();
});

test("BY CLICKING AT CHARACTERCARD IN LIST, MORE INFO SHOW UP", () => {
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
            episode: ["https://rickandmortyapi.com/api/episode/1"],
            url: "https://rickandmortyapi.com/api/character/1",
            created: "2017-11-04T18:48:46.250Z",
          },
        ],
      }}
    />
  );

  fireEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("button").className).toBe(
    "char-card-viewport clicked"
  );
});

test("BY CLICKING AT LOCATIONCARD IN LIST, MORE INFO SHOW UP", () => {
  render(
    <LocationCards
      location={{
        results: [
          {
            id: 1,
            name: "Earth (C-137)",
            type: "Planet",
            dimension: "Dimension C-137",
            residents: ["https://rickandmortyapi.com/api/character/38"],
            url: "https://rickandmortyapi.com/api/location/1",
            created: "2017-11-10T12:42:04.162Z",
          },
        ],
      }}
    />
  );

  fireEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("button").className).toBe(
    "location-card-viewport clicked"
  );
});
