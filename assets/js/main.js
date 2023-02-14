// Read Json File to translate - TO DO
fetch('../lang/pt_br.json')
    .then((response) => response.json())
    .then((json) => console.log(json.test));