
var prettyPrint = true;

function convert () {
    // Resultado
    let cookies = [];
    // Elementos
    let cookiesInput = document.getElementById('inputCookies');
    let cookiesOutput = document.getElementById('outputCookies');
    // Dados
    let lines = cookiesInput.value.split("\n");
    // Iterate
    lines.forEach(function(line, i) {
        var tokens = line.split("\t");
        // Imporante apenas linhas def de cookies válidas
        if (tokens.length == 7) {
            let cookie = {};
            // tokens
            tokens = tokens.map(function(e) { return e.trim(); });
            // Extraia os dados
            cookie.domain = tokens[0];
            cookie.httpOnly = tokens[1] === "TRUE";
            cookie.path = tokens[2];
            cookie.secure = tokens[3] === "TRUE";
            // Converter data para um formato legível
            let timestamp = tokens[4];
            if (timestamp.length == 17) {
            	timestamp = Math.floor(timestamp / 1000000 - 11644473600);
            }
            cookie.expirationDate = parseInt(timestamp);
            cookie.name = tokens[5];
            cookie.value = tokens[6];
            // Salva os cookies.
            cookies.push(cookie);
        }    
    });
    // Termina
    if (prettyPrint) {
        cookiesOutput.value = JSON.stringify(cookies, null, 2);
    } else {
        cookiesOutput.value = JSON.stringify(cookies);
    }
    // Focus e limpeza
    cookiesOutput.focus();
    cookiesInput.value = '';
}