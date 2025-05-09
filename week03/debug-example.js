function filterEven() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const evens = numbers.filter(function(num) {
      // Bug: wrong comparison operator
    return num % 2 === 0;
    });

    document.getElementById('output').innerText = "Even Numbers: " + evens;
}
