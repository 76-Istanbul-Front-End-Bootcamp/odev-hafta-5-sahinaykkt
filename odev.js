import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

// Cities which are population bigger than 500.000.
const biggerButton = document.querySelector("#populationBigger");
biggerButton.addEventListener("click", (cities) => {
    const bigger500 = data.filter(cities => cities.population > 500000);
    createTableElements(bigger500,"allcities");
});

// Cities which are land area less than 1000.
const lessButton = document.querySelector("#landAreaLess");
lessButton.addEventListener("click", cities => {
    const less1000 = data.filter(cities => cities.landArea < 1000);
    createTableElements(less1000,"allcities");
});

// Does any city has population less than 100.000?
const alertLess100 = document.querySelector("#isPopulationLess");
alertLess100.addEventListener("click", (cities) => {
    const less100 = data.filter(cities => cities.population < 100000);
    if(less100.length > 0) {
      return alert("Yes");
    } else {
      return alert("No");
    };
});

// Does any city has land area bigger than 100?
const alertBigger100 = document.querySelector("#isLandBigger");
alertBigger100.addEventListener("click", (cities) => {
    const bigger100 = data.filter(cities => cities.landArea > 100);
    if(bigger100.length > 0) {
      return alert("Yes");
    } else {
      return alert("No");
    };
});
