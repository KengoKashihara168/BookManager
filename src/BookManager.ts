const SheetID = '1stX9PL4QHZSwgKOExJ8LvRp3ZX9obRqY6b83fsIARTg'; // スプレッドシートID
const SheetName = 'ISBN'; // シートの名前

function myFunction(){
    Logger.log("Hello World!");
    
    var ss = GetSpreadsheet(SheetID); // スプレッドシート
    var sheet = GetSheet(SheetName,ss); // シート
    var range = sheet.getDataRange();
    Logger.log(range.getValue());
}

// スプレッドシートの取得
function GetSpreadsheet(sheetID){
    var ss = SpreadsheetApp.openById(sheetID);
    Logger.log(ss.getName() + "を取得");
    return ss;
}

// シートの取得
function GetSheet(sheetName,spreadSheet){
    var sheet = spreadSheet.getSheetByName(sheetName);
    Logger.log(sheet.getName() + "を取得");
    return sheet;
}