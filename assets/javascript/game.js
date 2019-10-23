$(document).ready(function() {

  

  let randomNumber = Math.floor(Math.random() * 30) + 15;
  console.log("Random Number " + randomNumber);
  $(".randomNumber").append(randomNumber);
  totalScore = 0;

  $("#btn").on("click", function() {
    let newRandomNumber = Math.floor(Math.random() * 50) + 80;
    console.log("Random Number " + newRandomNumber);
    $(".randomNumber").text(newRandomNumber);
    totalScore = 0;
    randomNumber = newRandomNumber;
  })

  let number1 = Math.floor(Math.random() * 10) + 1;
  console.log("First rnumber " + number1);
  let number2 = Math.floor(Math.random() * 10) + 1;
  if (number2 % 2 != 0) {
    number2 = number2 + 1;
  }
  console.log("Second rnumber " + number2);
  let number3 = Math.floor(Math.random() * 10) + 1;
  console.log("Third rnumber " + number3);
  let number4 = Math.floor(Math.random() * 10) + 1;
  console.log("Fourth rnumber " + number4);

     

  $(".crystal1").on("click", function() {
    totalScore = totalScore + number1;
    
    $(".score").text(totalScore);
    result();
  });

  $(".crystal2").on("click", function() {
    totalScore = totalScore + number2;

    
    $(".score").text(totalScore);

    result();
  });

  $(".crystal3").on("click", function() {
    totalScore = totalScore + number3;
    
    $(".score").text(totalScore);

    result();
  });

  $(".crystal4").on("click", function() {
    totalScore = totalScore + number4;
    
    $(".score").text(totalScore);

    result();
  });


  let won = 0;
  let loss = 0;

  function result() {
    if (totalScore == randomNumber) {
      alert("you won");
      won++;
      $(".wins").text("Times won " + won);
      let newRandomNumber = Math.floor(Math.random() * 30) + 15;
      
      number1 = Math.floor(Math.random() * 10) + 1;
      console.log("New Crystal Number 1- " +number1);
      number2 = Math.floor(Math.random() * 10) + 1;
      if (number2 % 2 != 0) {
        number2 = number2 + 1;
      }
      console.log("New Crystal Number 2- " +number2);
      number3 = Math.floor(Math.random() * 10) + 1;
      console.log("New Crystal Number 3- " +number3);
      number4 = Math.floor(Math.random() * 10) + 1;
      console.log("New Crystal Number 4- " +number4);
      $(".randomNumber").text(newRandomNumber);
      console.log("New Random Number " + newRandomNumber);
      randomNumber = newRandomNumber;
      totalScore = 0;
      $(".score").text(totalScore);
      $(".winlosses").css({ "background-color": "green" });
      $(".wins").css({ color: "white" });
      $(".losses").css({ color: "white" });
      totalScore = 0;
      
      
      
    } else if (totalScore > randomNumber) {
      alert("You lost");
      loss++;
      $(".losses").text("Times lost " + loss);
      let newRandomNumber = Math.floor(Math.random() * 30) + 15;
      number1 = Math.floor(Math.random() * 10) + 1;
      console.log("New Crystal Number 1- " +number1);
      number2 = Math.floor(Math.random() * 10) + 1;
      if (number2 % 2 != 0) {
        number2 = number2 + 1;
      }
      console.log("New Crystal Number 2- " +number2);
      number3 = Math.floor(Math.random() * 10) + 1;
      console.log("New Crystal Number 3- " +number3);
      number4 = Math.floor(Math.random() * 10) + 1;
      console.log("New Crystal Number 4- " +number4);
      $(".randomNumber").text(newRandomNumber);
      console.log("New Random Number " + newRandomNumber);
      randomNumber = newRandomNumber;
      totalScore = 0;
      $(".score").text(totalScore);
      $(".winlosses").css({ "background-color": "red" });
      $(".wins").css({ color: "white" });
      $(".losses").css({ color: "white" });
      totalScore = 0;
      
    }
  }
});
