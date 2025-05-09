function addNumbers() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
  
    // Convert inputs to numbers to avoid string concatenation
    let sum = Number(a) + Number(b);
  
    document.getElementById('result').innerText = 'Result: ' + sum;
  }
  