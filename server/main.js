let fortuneBtn = document.getElementById('fortuneBtn')

let radioBtn = document.getElementById('radioBtn')
//here im grabbing the fortune input box and button and assigning them to a value
const fortSubBtn = document.getElementById('fortSubBtn')
let fortuneInput = document.getElementById('fortuneInput')
//here im grabbing the delete box and button and assigning them to a value
let deleteBtn = document.getElementById('deleteBtn')
let deleteInput = document.getElementById('deleteInput')

//lets grab the dropdown and the submit button here:
let dropSubmitBtn = document.getElementById('dropSubmitBtn')
let dropdown = document.getElementById('cars')

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

function getFortunes() {
    axios.get("http://localhost:4000/api/fortunes") 
    .then(function(res) {
        // console.log(res.data)
        const fortune = res.data
        alert(fortune);
    })
};

function radBtn() {
    axios.get("http://localhost:4000/api/loveFood")
    .then (function (res){
        // console.log(res.data);
        const food = res.data
        alert(food)
    })
};

function createFortune() {
    newFortune = fortuneInput.value

    const body = {
        newFortune
    }

    axios.post("http://localhost:4000/api/add", body)
        .then((res) => {
            console.log(res.data)
            let fortune = res.data[res.data.length - 1] //this will grab the last item in the array
            alert(`You just added ${fortune}`) //%{fortune} sends the last index in the array as an alert

            fortuneInput.value = '' //this will clear out the input box after each submit
        })


};

function deleteFortune() {
    const newIndex = deleteInput.value //grabbing the input from the delete box

    axios.delete(`http://localhost:4000/api/delete/${newIndex}`)//${newIndex} is the param
        .then((res) => {
            alert(`You have deleted a fortune`)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data) //this sends an error message if input isn't a number
        })
};

function submitCar() {
    const selection = dropdown.value
    console.log(selection)

    const body = {
        selection
    }
    
    axios.post(`http://localhost:4000/api/cars`, body)
        .then((res) => {
            console.log(res.data)
            let lastCar = res.data[res.data.length - 1] //this will grab the last item in the array
            alert(`You just added ${lastCar}`)
        })


};



fortuneBtn.addEventListener("click", getFortunes);
radioBtn.addEventListener("click", radBtn);
fortSubBtn.addEventListener("click", createFortune)
deleteBtn.addEventListener('click', deleteFortune)
dropSubmitBtn.addEventListener('click', submitCar)