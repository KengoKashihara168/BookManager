// Compiled using ts2gas 3.6.3 (TypeScript 3.9.7)

function myFunction() {
    Logger.log("Hello World!");
    var isbn = GetISBN(); // ISBNを取得
    Logger.log(isbn + "を検索");

    // OpenBDからJSONの取得
    //GetOpenBD(isbn);
    GetNDL(isbn);
}