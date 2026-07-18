//Utility Functions

function classCount() {
  var className = prompt("Class name (without the dot):");

  if (className) {
    var elements = document.getElementsByClassName(className);
    alert(elements.length + ' elements with class "' + className + '"');
    console.log(elements);
  }
}

classCount();

// Actual Code

function returnScores(){
    var scores = {};

}