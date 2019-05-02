const BASE_URL = "https://swapi.co/api/";

export const getStarShips = page =>
  fetch(`${BASE_URL}starships/?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(error => {
      return { error, status: 0 };
    });
