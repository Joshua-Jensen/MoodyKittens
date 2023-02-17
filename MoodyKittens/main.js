let possibleColor = ["orange", "brown", "black", "golden", "grey", "white"]
let currentColor = white
function draw() {
  
}

let Kittens =[]

function createKitten(event){
  event.preventDefault()
  let form = event.target

  let KittenName = (form.KittenName.value)
  console.log(KittenName)
  form.reset()
  let kittenInput = Kittens.find(Kitten => kitten.name == KittenName)
  if(!kittenInput){
    let i = Math.floor(Math.random() * possibleColor.length);
    currentColor = possibleColor[i]
    kittenInput = {name: KittenName, mood: 10, temperament: 0, color: currentColor}
    generateKittens()
  }
  }

function generateKittens(){
  

}
function kittenGame(){
  // mood and how temperament affects 
  // 3 play interactions that change mood effected by temperament toy play, laser play, 
  // mood decay
  // food levels
  // 3 types of food 
  // food decay
  // mood and food levels visible effects
  // death and running away 
}