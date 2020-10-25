// Compiled using ts2gas 3.6.3 (TypeScript 3.9.7)

function myFunction() {
    Logger.log("Hello World!");
    var isbn = GetISBN(); // ISBNを取得
    Logger.log(isbn + "を検索");

    // OpenBDからJSONの取得
    //GetOpenBD(isbn);
    //GetNDL(isbn);
    //SetCell(isbn);
}

/* API_URL : https://script.google.com/macros/s/AKfycbz9QzGEe0soP5p08BCbR7fqKOiWeAPgNBwWU4rUUfNTlCpgsiA/exec?text= */
function doGet(e){
    var isbn = e.parameter.text;
    console.log(isbn);
    if(isbn)
    {
        // セルに入力
        var lastCell = GetNextCell("ISBN");
        SetCell(lastCell,isbn);
    }
    else
    {
        // セルにエラーを入力
        var lastCell = GetNextCell("ISBN");
        SetCell(lastCell,"NULL");
    }
}