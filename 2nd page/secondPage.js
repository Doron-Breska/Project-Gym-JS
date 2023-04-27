// console.log(excersies)

// const spaceForCards = document.getElementById("data")

//  for (let j = 0 ; j< excersies.length; j++) {
//    const card = document.createElement("div");
//    card.classList.add("card-css");
//    spaceForCards.appendChild(card);
//    const name = document.createElement("h2");
//    name.innerHTML = `Exercise name: ${excersies[j].name}`;
//    card.appendChild(name);
//    const type = document.createElement("h4");
//    type.innerHTML = `Exercise type: ${excersies[j].type}`;
//    card.appendChild(type);
//    const muscle = document.createElement("h4");
//    muscle.innerHTML = `Muscle group: ${excersies[j].muscle}`;
//    card.appendChild(muscle);
//    const equipment = document.createElement("h4");
//    equipment.innerHTML = `Equipment needed: ${excersies[j].equipment.replace("_", " ")}`;
//    card.appendChild(equipment);
//    const difficulty = document.createElement("h4");
//    difficulty.innerHTML = `Difficulty: ${excersies[j].difficulty}`;
//    card.appendChild(difficulty);
//    const instructions = document.createElement("p");  
//    instructions.innerHTML = `Instructions: ${excersies[j].instructions}`;
//    card.appendChild(instructions);
// }   

// ************************* DO NOT TOUCH 

// const myHeaders = new Headers();
// myHeaders.append("X-Api-Key", "ZnrvaVI6dT6LcVxTFT8zeA==OpleFoWjfSvTVhrJ");

// const options = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// function getExcersies () {
// fetch("https://api.api-ninjas.com/v1/exercises?", options)
// .then(function(resp){
//     console.log(`response :${resp}`);
//     return resp.json()
// })
// .then(function(resu){
//     console.log(`result :${resu}`);
//     const filteredData = resu.filter((exercise) => exercise.difficulty === "beginner");
//     console.log(resu);
//     console.log(filteredData);
//     showCards(filteredData);
// })
// .catch(function(error){
//     console.log(error)
// })
// }

// getExcersies()

// const spaceForCards = document.getElementById("data")

// function showCards (excersies) {
//  for (let j = 0 ; j< excersies.length; j++) {
//    const card = document.createElement("div");
//    card.classList.add("card-css");
//    spaceForCards.appendChild(card);
//    const name = document.createElement("h2");
//    name.innerHTML = excersies[j].name;
//    card.appendChild(name);
//    const type = document.createElement("h4");
//    type.innerHTML = excersies[j].type;
//    card.appendChild(type);
//    const muscle = document.createElement("h4");
//    muscle.innerHTML = excersies[j].muscle;
//    card.appendChild(muscle);
//    const equipment = document.createElement("h4");
//    equipment.innerHTML = excersies[j].equipment;
//    card.appendChild(equipment);
//    const difficulty = document.createElement("h4");
//    difficulty.innerHTML = excersies[j].difficulty;
//    card.appendChild(difficulty);
//    const instructions = document.createElement("p");
//    instructions.innerHTML = excersies[j].instructions;
//    card.appendChild(instructions);
// }   
// }

// ***********************************

// https://api.api-ninjas.com/v1/exercises?muscle=glutes&difficulty=beginner


// function getExcersies () {
// fetch("https://api.api-ninjas.com/v1/exercises?", options)
// .then(function(resp){
//     console.log(`response :${resp}`);
//     return resp.json()
// })
// .then(function(resu){
//     console.log(`result :${resu}`);
//     const filteredData = resu.filter((exercise) => exercise.difficulty === "beginner");
//     console.log(resu);
//     console.log(filteredData);
//     showCards(filteredData);
// })
// .catch(function(error){
//     console.log(error)
// })
// }

// getExcersies()


// const myHeaders = new Headers();
// myHeaders.append("X-Api-Key", "ZnrvaVI6dT6LcVxTFT8zeA==OpleFoWjfSvTVhrJ");

// const options = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// function createOptions() { 
//    const select = document.getElementById("muscle-group");
//    const bicepsOption = document.createElement("option")
//    bicepsOption.setAttribute("value", biceps)

// }
//************************************************* */

// function fetchData() {
//   const noResDiv = document.getElementById("no-r-div")
//   let muscleGroup = document.getElementById("muscle-group").value;
//   let radios = document.getElementsByName("difficulty");
//   let searchInput = document.getElementById("name-search").value;
//   const spaceForCards = document.getElementById("data");
//     const selectedRadio = Array.from(radios).find(radio => radio.checked)?.value || '';
//       const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}&difficulty=${selectedRadio}&name=${searchInput}`
//       fetch(url, options)
//       .then(response => response.json()) 
//       .then(function(resu){
//         console.log(resu);
//         if (resu.length === 0){
//           createNoResultsBubble() 
//           scrollDown()
//         }
//         else{
//         noResDiv.innerHTML = "";
//         noResDiv.classList.remove("nothing-found")
//         spaceForCards.innerHTML = "";
//         showCards(resu);
//         }
//        })
//       .catch(error => {
//        console.log(error);
//       });
//     }

  /////////
// const selectEvents = (exercisesArray)=> {
//   const select = document.getElementById("muscle-group")
//   select.addEventListener("change", (e)=> {
//  console.log("e.target.value", e.target.value)
//  matchingCard(exercisesArray)
//   })
// }


// const matchingCard = (exercisesArray)=> {
//  console.log("exercisesArray", exercisesArray)

//  const selectValue = document.getElementById("muscle-group").value
//  console.log(selectValue)

// const filteredCards = exercisesArray.filter((exercise)=>{
// return exercise.muscle === selectValue;
// })

// console.log("filteredCards", filteredCards)
// showCards(filteredCards)
// }

  ////////

function showCards (excersies) {
const spaceForCards = document.getElementById("data")
spaceForCards.innerText = ""
const noResDiv = document.getElementById("no-r-div")
noResDiv.style.display = 'none';
 for (let j = 0 ; j< excersies.length; j++) {
   const card = document.createElement("article");
   card.classList.add("card-css");
   spaceForCards.appendChild(card);
   const name = document.createElement("h2");
   name.innerHTML = `Exercise name: ${excersies[j].name}`;
   card.appendChild(name);
   const type = document.createElement("h4");
   type.innerHTML = `Exercise type: ${excersies[j].type.replace("_", " ")}`;
   card.appendChild(type);
   const muscle = document.createElement("h4");
   muscle.classList.add("muscles-name")
   muscle.innerHTML = `${excersies[j].muscle.replace("_", " ")}`;
   card.appendChild(muscle);
   const equipment = document.createElement("h4");
   equipment.innerHTML = `Equipment needed: ${excersies[j].equipment.replace("_", " ")}`;
   card.appendChild(equipment);
   const difficulty = document.createElement("h4");
   difficulty.innerHTML = `Difficulty: ${excersies[j].difficulty}`;
   card.appendChild(difficulty);
  //  const instructionButton = document.createElement("button");
  //  instructionButton.innerHTML = 'Show instructions';
  //  instructionButton.classList.add("muscles-name");
  //  card.appendChild(instructionButton);
   const instructions = document.createElement("p");  
  //  instructions.classList.add("hidden");
   instructions.innerHTML = `Instructions: ${excersies[j].instructions}`;
   card.appendChild(instructions);

}   
}

// here just for deployment - 

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "ZnrvaVI6dT6LcVxTFT8zeA==OpleFoWjfSvTVhrJ");

const options = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

//


    function fetchDataDefult() {
      const spaceForCards = document.getElementById("data");
          const url = `https://api.api-ninjas.com/v1/exercises?`
          fetch(url, options)
          .then(response => response.json()) 
          .then(function(results){
            spaceForCards.innerHTML = "";
            showCards(results);
            console.log(results)
          createSelectOptions(results)
            createRadioButtons(results)
            selectEvents(results)
           })
          .catch(error => {
           console.log(error);
          });
        }

        fetchDataDefult()



  function selectEvents(results) {

    const select = document.getElementById("muscle-group");
    select.addEventListener("change", function () {
      filterResults(results);
    });
  }

  function filterResults(results) {
    const spaceForCards = document.getElementById("data")
    const noResDiv = document.getElementById("no-r-div")
    spaceForCards.innerHTML = "";
    noResDiv.innerHTML = "";
    noResDiv.style.display = 'none';
    const selectedDifficulty = document.querySelector(
      'input[name="difficulty"]:checked'
    ).value;
  
    const selectedMuscle = document.getElementById("muscle-group").value;
  
    const filteredResults = results.filter(
      (result) =>
        result.difficulty === selectedDifficulty &&
        (selectedMuscle === "..." || result.muscle === selectedMuscle)
    );
  
    if (filteredResults.length === 0) {
      createNoResultsBubble();
      scrollDown() 
    } else {
      showCards(filteredResults);
    }
  }

  

 function createRadioButtons(results) {
  let radio = document.getElementById("radio");
      const radios = document.querySelectorAll('input[type="radio"]');
          for (let i = 0; i < radios.length; i++) {
            radios[i].innerHTML = '';
            radios[i].parentNode.removeChild(radios[i]);
   };
   const labelss = document.getElementsByClassName("labels")
             for (let i = 0; i < labelss.length; i++) {
            labelss[i].innerHTML = ''; };
          
  const difficulties = new Set();
  for (let singleResult of results) {
    difficulties.add(singleResult.difficulty);
  }
   //test
     const defaultRadioInput = document.createElement("input");
  defaultRadioInput.type = "radio";
  defaultRadioInput.id = "all";
  defaultRadioInput.name = "difficulty";
  defaultRadioInput.value = "";
  defaultRadioInput.checked = true; // Pre-select the "All" radio button
  radio.appendChild(defaultRadioInput);
  defaultRadioInput.addEventListener("change", function () {
    filterResults(results);
  });
   
   
        const allOptionLabel = document.createElement("label");
  allOptionLabel.for = "all";
  allOptionLabel.innerText = "All";
  allOptionLabel.classList.add("labels");
    radio.appendChild(allOptionLabel);
   
   
   //

  const arrayOfDifficulties = Array.from(difficulties);
  for (let i = 0; i < arrayOfDifficulties.length; i++) {
    const dOptionInput = document.createElement("input");
    dOptionInput.type = "radio";
    dOptionInput.id = arrayOfDifficulties[i];
    dOptionInput.name = "difficulty";
    dOptionInput.value = arrayOfDifficulties[i];
    radio.appendChild(dOptionInput);
    dOptionInput.addEventListener("change", function () {
      filterResults(results);
    });


    const dOptionLabel = document.createElement("label");
    dOptionLabel.for = arrayOfDifficulties[i];
    dOptionLabel.innerText = arrayOfDifficulties[i];
    dOptionLabel.classList.add("labels")
    radio.appendChild(dOptionLabel);
  }
}


  function createSelectOptions(results) {
    const muscleGroup = document.getElementById("muscle-group");
    muscleGroup.innerHTML = ''
    const mOption = document.createElement("option");
    mOption.innerText = "..."
    muscleGroup.appendChild(mOption);
  
    const muscles = new Set();
    for (let singleResult of results) {
      muscles.add(singleResult.muscle);
    }
  
    const arrayOfMuscles = Array.from(muscles);
    for (let i = 0; i < arrayOfMuscles.length; i += 1) {
      const mOption = document.createElement("option");
      mOption.value = arrayOfMuscles[i];
      mOption.innerText = arrayOfMuscles[i].replace("_", " ");
      muscleGroup.appendChild(mOption);
    }
    
  }


  
function createNoResultsBubble() {
  const spaceForCards = document.getElementById("data")
  const noResDiv = document.getElementById("no-r-div")
  spaceForCards.innerHTML = "";
  noResDiv.innerHTML = "";
  noResDiv.style.display = 'block';
  console.log("no results found");
  noResDiv.classList.add("nothing-found");
  const noResults1 = document.createElement("h2");
  noResults1.innerHTML = `Nothing found :(`;
  noResDiv.appendChild(noResults1);
  const noResults2 = document.createElement("h2");
  noResults2.innerHTML = `Don't give up !`;
  noResDiv.appendChild(noResults2);
  const noResults3 = document.createElement("h2");
  noResults3.innerHTML = `pls try a diffrent combination.`;
  noResDiv.appendChild(noResults3);
  makeBubble();
}

function scrollDown() {
  window.scrollBy(0, window.innerHeight);
}





// bubbles animation



function makeBubble() {


const colors = ["#fac798", "#DAF7A6", "#daf0ee", "##b0e3a1", "#a1c9e3"];


const numBalls = 50;
const balls = [];


  const noResDiv = document.getElementById("no-r-div")
for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 150)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  noResDiv.append(ball);
}
// Keyframes
balls.forEach((el, i, ra) => {
let to = {
  x: Math.random() * (i % 2 === 0 ? -11 : 11),
  y: Math.random() * 12
};

let anim = el.animate(
  [
    { transform: "translate(0, 0)" },
    { transform: `translate(${to.x}rem, ${to.y}rem)` }
  ],
  {
    duration: (Math.random() + 1) * 2000, // random duration
    direction: "alternate",
    fill: "both",
    iterations: Infinity,
    easing: "ease-in-out"
  }
);
});

}



// ************** fetch search *************


function fetchSearch() {
  let searchInput = document.getElementById("name-search").value;

  const spaceForCards = document.getElementById("data");
      const url = `https://api.api-ninjas.com/v1/exercises?name=${searchInput}`
      fetch(url, options)
      .then(response => response.json()) 
      .then(function(results){
        if (results.length === 0){
          createNoResultsBubble() 
          scrollDown()
        }
        else {
        spaceForCards.innerHTML = "";
        showCards(results);
        console.log(results)
        createSelectOptions(results)
        createRadioButtons(results)
        selectEvents(results)
        makeRadioUnChecked ()
        }

       })
      .catch(error => {
       console.log(error);
      });
    }

 



function addEventsListener() {

  const searchBtn = document.getElementById("search-btn");
  
  searchBtn.addEventListener("click",fetchSearch);
  
  const searchInput = document.getElementById("name-search");
  
  searchInput.addEventListener("keydown", function(e) {
  
    if (e.key === "Enter") {
  
      e.preventDefault(); // Prevent default form submission behavior
  
      fetchSearch();
    }
  });
  }
  
  addEventsListener()
  
  function makeRadioUnChecked () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radioButton => {
      radioButton.checked = false;
    });
  }