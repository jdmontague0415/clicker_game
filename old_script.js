let score = 0;
let adders = 0;
let superAdders = 0;
let megaAdders = 0;
let ultraAdders = 0;
let moaAdders = 0;

// code to save and load old scores (hopefully)
// function save() {
//   localStorage.setItem("score", score);
//   localStorage.setItem("autoAdd", adders);
//   localStorage.setItem("superAdd", superAdders);
//   localStorage.setItem("megaAdd", megaAdders);
// }

// oldScore = JSON.parse(localStorage.getItem("score"));
// oldAuto = JSON.parse(localStorage.getItem("autoAdd"));
// oldSuper = JSON.parse(localStorage.getItem("superAdd"));
// oldMega = JSON.parse(localStorage.getItem("megaAdd"));
// score = oldScore
// adders = oldAuto
// superAdders = oldSuper
// megaAdders = oldMega



//function to add to score
function addToScore() {
  score = score + 1;
  let number = score;
  number = number.toLocaleString();
  document.getElementById("score").innerHTML = `Score: ${number}`;
  
  if (score >= 10) {
    document.getElementById("cost").innerHTML = `Cost 10 points`;
    document.getElementById("cost").style.color = "black";
  }
  if (score >= 100) {
    document.getElementById("superCost").innerHTML = `Cost 100 points`;
    document.getElementById("superCost").style.color = "black";
  }
  if (score >= 1000) {
    document.getElementById("megaCost").innerHTML = `Cost 1,000 points`;
    document.getElementById("megaCost").style.color = "black";
  }
  if (score >= 1000000) {
    document.getElementById("ultraCost").innerHTML = `Cost 1,000,000 points`;
    document.getElementById("ultraCost").style.color = "black";
  }
  if (score >= 1000000000) {
    document.getElementById("moaCost").innerHTML = `Cost 1,000,000,000 points`;
    document.getElementById("moaCost").style.color = "black";
  }
}

function addToScore2() {
  score = score + 1000;
  let number = score;
  number = number.toLocaleString();
  document.getElementById("score").innerHTML = `Score: ${number}`;
  
  if (score >= 1000000000) {
    document.getElementById("moaCost").innerHTML = `Cost 1,000,000,000 points`;
    document.getElementById("moaCost").style.color = "black";
  }
}

//function to auto earn points
// test
// for (let i = 0; i < adders; i++) {
//   autoAdd2()
// }

// function autoAdd() {
//   if (score >= 10) {
//     score = score - 10;
//     adders = adders + 1; 
//     document.getElementById("autoAdd").innerHTML = `Auto Adders: ${adders}`;
//     setInterval(addToScore,1000);
//     document.getElementById("cost").innerHTML = `Cost 10 points`
//   }
//   else {
//     document.getElementById("cost").innerHTML = `NEED MORE POINTS!! Cost 10 points`
//     document.getElementById("cost").style.color = "red";
//   }  
// }

// function autoAdd2() {
//   adders = adders + 1; 
//   document.getElementById("autoAdd").innerHTML = `Auto Adders: ${adders}`;
//   setInterval(addToScore,1000);
// }

// actual
function autoAdd() {
  if (score >= 10) {
    score = score - 10;
    adders = adders + 1;
    let adderNumber = adders;
    adderNumber = adderNumber.toLocaleString();
    document.getElementById("autoAdd").innerHTML = `Auto Adders: ${adderNumber}`;
    setInterval(addToScore,1500);
    document.getElementById("cost").innerHTML = `Cost 10 points`
  }
  else {
    document.getElementById("cost").innerHTML = `NEED MORE POINTS!! Cost 10 points`
    document.getElementById("cost").style.color = "red";
  }  
}

function superAdd() {
  if (score >= 100) {
    score = score - 100;
    superAdders = superAdders + 1;
    let superNumber = superAdders;
    superNumber = superNumber.toLocaleString();
    document.getElementById("superAdd").innerHTML = `Super Adders: ${superNumber}`;
    setInterval(addToScore,1000);
    document.getElementById("superCost").innerHTML = `Cost 100 points`
  }
  else {
    document.getElementById("superCost").innerHTML = `NEED MORE POINTS!! Cost 100 points`
    document.getElementById("superCost").style.color = "red";
  }  
}

function megaAdd() {
  if (score >= 1000) {
    score = score - 1000;
    megaAdders = megaAdders + 1;
    let megaNumber = megaAdders;
    megaNumber = megaNumber.toLocaleString();
    document.getElementById("megaAdd").innerHTML = `Mega Adders: ${megaNumber}`;
    setInterval(addToScore,500);
    document.getElementById("megaCost").innerHTML = `Cost 1,000 points`
  }
  else {
    document.getElementById("megaCost").innerHTML = `NEED MORE POINTS!! Cost 1,000 points`
    document.getElementById("megaCost").style.color = "red";
  }  
}

function ultraAdd() {
  if (score >= 1000000) {
    score = score - 1000000;
    ultraAdders = ultraAdders + 1; 
    let ultraNumber = ultraAdders;
    ultraNumber = ultraNumber.toLocaleString();
    document.getElementById("ultraAdd").innerHTML = `Ultra Adders: ${ultraNumber}`;
    setInterval(addToScore,100);
    document.getElementById("ultraCost").innerHTML = `Cost 1,000,000 points`
  }
  else {
    document.getElementById("ultraCost").innerHTML = `NEED MORE POINTS!! Cost 1,000,000 points`
    document.getElementById("ultraCost").style.color = "red";
  }  
}

function moaAdd() {
  if (score >= 1000000000) {
    score = score - 1000000000;
    moaAdders = moaAdders + 1; 
    let moaNumber = moaAdders;
    moaNumber = moaNumber.toLocaleString();
    document.getElementById("moaAdd").innerHTML = `Mother of All Adders: ${moaNumber}`;
    for (let i = 0; i<10; i++) {
      setInterval(addToScore2,10);
    }
    
    document.getElementById("moaCost").innerHTML = `Cost 1,000,000,000 points`
  }
  else {
    document.getElementById("moaCost").innerHTML = `NEED MORE POINTS!! Cost 1,000,000,000 points`
    document.getElementById("moaCost").style.color = "red";
  }  
}
