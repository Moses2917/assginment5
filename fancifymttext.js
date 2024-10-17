function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function fancyShmancyHandler() {
    if (document.getElementById("fancyShmancy").checked) {
        document.getElementById("textInput").style.fontWeight = "bold";
        document.getElementById("textInput").style.color = "blue";
        document.getElementById("textInput").style.textDecoration = "underline";
    }
}

function boringBettyHandler() {
    if (document.getElementById("boringBetty").checked) {
        document.getElementById("textInput").style.fontWeight = "normal";
        document.getElementById("textInput").style.color = "black";
        document.getElementById("textInput").style.textDecoration = "none";
    }
}

function mooifyText() {
    var text = document.getElementById("textInput").value.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim() !== "") {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    document.getElementById("textInput").value = sentences.join(". ").trim() + ".";
}