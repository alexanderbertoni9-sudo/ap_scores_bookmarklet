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
    var items = document.getElementsByClassName("apscores-card");

    for (var i = 0; i < items.length; i++) {
        var parent = items[i];
        var children = parent.getElementsByClassName("apscores-badge");

        for (var j = 0; j < children.length; j++) {
            var child = children[j];

            /* loop through all child nodes (including text nodes) */
            for (var k = 0; k < child.childNodes.length; k++) {
                var node = child.childNodes[k];

                /* nodeType 3 = text node */
                if (node.nodeType === 3) {
                    var value = node.textContent.trim();
                    if (value) {
                        console.log(value);
                    }
                }
            }
        }
    }
}

returnScores();