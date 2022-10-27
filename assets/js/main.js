function game() {

    // Player 1
    const ageNum1 = parseInt(document.getElementById("ageInput1").value);
    const sizeNum1 = parseInt(document.getElementById("sizeInput1").value);

    let output1 = "";

    // Player 2
    const ageNum2 = parseInt(document.getElementById("ageInput2").value);
    const sizeNum2 = parseInt(document.getElementById("sizeInput2").value);

    let output2 = "";


    // Compare
    output1 = ageNum1 * 5 + sizeNum1
    output2 = ageNum2 * 5 + sizeNum2

    if (output1 > output2) {
        output = "Player 1 - Wins !";
    } else if (output1 < output2) {
        output = "Player 2 - Wins !";
    } else {
        output = "DRAW !";
    }

    document.getElementById("output").innerHTML = output;
}





