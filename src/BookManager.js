// Compiled using ts2gas 3.6.3 (TypeScript 3.9.7)
var SheetID = '1stX9PL4QHZSwgKOExJ8LvRp3ZX9obRqY6b83fsIARTg'; // スプレッドシートID
var SheetName = 'ISBN'; // シートの名前
function myFunction() {
    Logger.log("Hello World!");
    var ss = GetSpreadsheet(SheetID); // スプレッドシート
    var sheet = GetSheet(SheetName, ss); // シート
    var range = GetCell(sheet,1,1); // セル
}

// スプレッドシートの取得
function GetSpreadsheet(sheetID) {
    var ss = SpreadsheetApp.openById(sheetID);
    Logger.log(ss.getName() + "を取得");
    return ss;
}

// シートの取得
function GetSheet(sheetName, spreadSheet) {
    var sheet = spreadSheet.getSheetByName(sheetName);
    Logger.log(sheet.getName() + "を取得");
    return sheet;
}

// セルの取得
function GetCell(sheet,row,column){
    var cell = sheet.getRange(row,column);
    Logger.log(cell.getValue() + "を取得");
    return cell;
}