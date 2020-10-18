var SheetID = '1stX9PL4QHZSwgKOExJ8LvRp3ZX9obRqY6b83fsIARTg'; // スプレッドシートID
var SheetName = 'ISBN'; // シートの名前

function myFunction(){
    Logger.log("Hello World!");

    var ss = SpreadsheetApp.openById(SheetID);
    Logger.log(ss.getName());
    var sheet = ss.getSheetByName(SheetName);
    Logger.log(sheet.getSheetValues(1,1,1,1));
}