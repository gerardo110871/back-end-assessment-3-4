let fortuneBtn = document.getElementById('fortuneBtn');
let radioBtn = document.getElementById('radioBtn');
let submitBtn = document.getElementById('submit');
let newFortune = document.getElementById('newFortune');
let input = document.getElementById('input');


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

function newFor() {
    
    const fortuneInput = input.value

    axios.post("http://localhost:4000/api/fortune")
    .then (function (res){
        console.log(fortuneInput)
        const fortune = fortuneInput
        return fortune
    })
};
    
function checkBox() {
    axios.get("http://localhost:4000/api/checkbox")
    .then (function (res) {
        const check = res.data
        alert(check)
    })
};



fortuneBtn.addEventListener("click", getFortunes);
radioBtn.addEventListener("click", radBtn);
submitBtn.addEventListener('click', checkBox)
newFortune.addEventListener('click', newFor)