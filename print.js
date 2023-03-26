function validateTxt() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let mark1 = document.getElementById("mark1").value;
    let mark2 = document.getElementById("mark2").value;
    let mark3 = document.getElementById("mark3").value;
  
    let errorMessages = "";
  
    if (firstName === "") {
      errorMessages += "Please enter your first name.<br>";
    }
  
    if (lastName === "") {
      errorMessages += "Please enter your last name.<br>";
    }
  
    if (mark1 === "" || isNaN(mark1) || mark1 < 0 || mark1 > 100) {
      errorMessages += "Please enter a valid mark for Mark 1.<br>";
    }
  
    if (mark2 === "" || isNaN(mark2) || mark2 < 0 || mark2 > 100) {
      errorMessages += "Please enter a valid mark for Mark 2.<br>";
    }
  
    if (mark3 === "" || isNaN(mark3) || mark3 < 0 || mark3 > 100) {
      errorMessages += "Please enter a valid mark for Mark 3.<br>";
    }
  
    document.getElementById("result").innerHTML = errorMessages;
  }
  
  function printResult() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let mark1 = parseFloat(document.getElementById("mark1").value);
    let mark2 = parseFloat(document.getElementById("mark2").value);
    let mark3 = parseFloat(document.getElementById("mark3").value);
  
    let average = (mark1 + mark2 + mark3) / 3;
  
    let grade = "";
  
    if (average >= 90) {
      grade = "Awesome";
    } else if (average >= 80) {
      grade = "Very Good";
    } else if (average >= 50) {
      grade = "OK";
    } else {
      grade = "Fail";
    }
  
    let resultMessage = `${firstName} ${lastName}, your average mark is ${average.toFixed(2)}. Grade: ${grade}`;
  
    document.getElementById("result").innerHTML = resultMessage;
  }
  