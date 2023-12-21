let score = 0; //initialize score

//function to add to score
function addToScore() {
  score = score + 1;
  document.getElementById("score").innerHTML = `Score: ${score}`;
  if (score >= 10) {
    document.getElementById("cost").innerHTML = `Cost 10 points`;
    document.getElementById("cost").style.color = "black";
  }
  if (score >= 100) {
    document.getElementById("superCost").innerHTML = `Cost 100 points`;
    document.getElementById("superCost").style.color = "black";
  }
  if (score >= 1000) {
    document.getElementById("megaCost").innerHTML = `Cost 1000 points`;
    document.getElementById("megaCost").style.color = "black";
  }
}

//function to auto earn points
let adders = 0;
function autoAdd() {
  if (score >= 10) {
    score = score - 10;
    adders = adders + 1; 
    document.getElementById("autoAdd").innerHTML = `Auto Adders: ${adders}`;
    setInterval(addToScore,1000);
    document.getElementById("cost").innerHTML = `Cost 10 points`
  }
  else {
    document.getElementById("cost").innerHTML = `NEED MORE POINTS!! Cost 10 points`
    document.getElementById("cost").style.color = "red";
  }  
}

let superAdders = 0;
function superAdd() {
  if (score >= 100) {
    score = score - 100;
    superAdders = superAdders + 1; 
    document.getElementById("superAdd").innerHTML = `Super Adders: ${superAdders}`;
    setInterval(addToScore,500);
    document.getElementById("superCost").innerHTML = `Cost 100 points`
  }
  else {
    document.getElementById("superCost").innerHTML = `NEED MORE POINTS!! Cost 100 points`
    document.getElementById("superCost").style.color = "red";
  }  
}

let megaAdders = 0;
function megaAdd() {
  if (score >= 1000) {
    score = score - 1000;
    megaAdders = megaAdders + 1; 
    document.getElementById("megaAdd").innerHTML = `Mega Adders: ${megaAdders}`;
    setInterval(addToScore,100);
    document.getElementById("megaCost").innerHTML = `Cost 1000 points`
  }
  else {
    document.getElementById("megaCost").innerHTML = `NEED MORE POINTS!! Cost 1000 points`
    document.getElementById("megaCost").style.color = "red";
  }  
}




