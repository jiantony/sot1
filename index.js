function showAlert() {
    // Reading from the html element
    var myText = document.getElementById('message').value;

    // display the message on screen as alert
    alert(`You have a message: ${myText}`);

    // changing the message in the text box
    document.getElementById('message').value = "Message displayed, no more new messages";
}


