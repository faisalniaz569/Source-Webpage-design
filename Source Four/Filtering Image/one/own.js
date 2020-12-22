var filterSelection;
var document;
var w3RemoveClass;
var w3AddClass;

filterSelection("all");


function filterSelection(c) {
    "use strict";
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";

    for (i = 0; i < x.length; i += 1) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
            w3AddClass(x[i], "show");
        }
    }
}

function w3AddClass(element, name) {
    "use strict";
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i += 1) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    "use strict";
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i += 1) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
var i;
for (i = 0; i < btns.length; i += 1) {
    btns[i].addEventListener("click", function () {
        "use strict";
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
