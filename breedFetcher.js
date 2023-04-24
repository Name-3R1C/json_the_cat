const breedName = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
const request = require('request');

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  if (body.length === 2) {
    console.log("Breed Not Found");
    return;
  }

  const data = JSON.parse(body);
  console.log(data[0].description);
});