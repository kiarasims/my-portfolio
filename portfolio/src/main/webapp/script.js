// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!', 'And if you can\'t do it, if you aren\'t willing to keep looking for light in the darkest of places without stopping, even when it seem imposssible, you will never succeed'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;

}
//document.getElementById("results").innerHtml = facts

function getRandomFacts(){
    
    fetch("/data").then(response => response.json()).then((facts) => {
    console.log(facts);
    const factsListElement = document.getElementById('greeting-container');
    factsListElement.innerHTML = "";
    factsListElement.appendChild(
        createListElement('fact1: ' + facts[0]));
    factsListElement.appendChild(
        createListElement('fact2: ' + facts[1]));
    factsListElement.appendChild(
        createListElement('fact3 ' + facts[2]));
    });

}


function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}