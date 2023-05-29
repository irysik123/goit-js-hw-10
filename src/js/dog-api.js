const BASE_URL = 'https://api.thedogapi.com/v1';
const API = 'live_aaG6QqJg881St8vdnPJfVlfSVPt8e9rZyDWrAQ978RvbTZlFztCGH8vouNCfcDpN';
const option = {
  headers: { 'x-api-key': API },
};

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`, option)
  .then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json()
  });
}

export function fetchDogByBreed(breedId) {
  return fetch(`${BASE_URL}/images/${breedId}`, option)
  .then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json()
  });
}

