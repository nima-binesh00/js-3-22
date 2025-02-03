//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

console.log(2 % 6);
// "dddd".le
//Answer
let h3 = document.querySelector("h3");
let div = document.querySelector("#destination");
let num33 = document.createElement("h4");
async function num() {
  try {
    let index = 0;
    let num1 = await fetch(
      "https://handlers.education.launchcode.org/static/planets.json"
    );

    let data = await num1.json();
    console.log(data);
    h3.innerText = data[index].name;
    num33.innerText = `Distance from Earth: ${data[index].distance}`;
    div.append(num33);
    div.addEventListener("click", () => {
      index = (index + 1) % data.length;
      h3.innerText = data[index].name;
      num33.innerText = `Distance from Earth: ${data[index].distance}`;
      div.append(num33);
    });
  } catch (e) {
    console.log(e);
  }
}
num();
