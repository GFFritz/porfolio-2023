// Read user system language
function getLangFile() {
    let language = window.navigator.language;
    let languageFistTwo = language.substr(0, 2); // To only keep the first 2 characters.

    // Set the correct JSON file
    if (languageFistTwo == 'pt') {
        var langFile = "../lang/pt_br.json"
    } else {
        var langFile = "../lang/en_us.json"
    }

    return langFile;
}

// Read Json File to translate - TO DO
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

// Translate using the correct JSON file
readTextFile(getLangFile(), function(text){
    var array = JSON.parse(text);

    for (const [key, value] of Object.entries(array)) {
        $(`#${key}`).html(value)
    }
});