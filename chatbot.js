//
function returnTime() {
  var now = new Date(Date.now());
  return now;
}


var TheAnswer = {
    "hello": "hi",
    "bye": "adios",
    "where's Jonny?": "HERES JONNY!!! <img src='data:image/jpeg;base64,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'>",
    "who are you" : "im jonny the axe weilding maniac",
    "how old are you?" : "dont know, how bout you?",
    "what time is it?": "It is currently " + returnTime() + "."
  }

var fallBackArray = ["dont know","im busy","choppin time", "<img src='https://media.giphy.com/media/sCws69rOQwB0I/giphy.gif'"];

function speak() {
  var userInput = $("#userInput").val().toLowerCase();
  $("#chat-area").prepend(userInput + "<Br>");
  var answer = TheAnswer[userInput]

    if (answer == undefined) {

      var rand = Math.floor((Math.random() * fallBackArray.length));

      var fallback = fallBackArray[rand]
      $("#chat-area").prepend(fallback + "<Br>");
    } else {
      $("#chat-area").prepend(answer + "<Br>");
  }

}
//
