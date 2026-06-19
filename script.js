function checkPrime() {
    let num = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");

    if (num <= 1) {
        result.innerHTML = num + " is not a Prime Number";
        return;
    }

    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.innerHTML = num + " is a Prime Number ";
    } else {
        result.innerHTML = num + " is not a Prime Number ";
    }
}
