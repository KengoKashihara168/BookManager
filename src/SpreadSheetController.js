var SheetID = '1stX9PL4QHZSwgKOExJ8LvRp3ZX9obRqY6b83fsIARTg'; // スプレッドシートID
var SheetName = 'ISBN'; // シートの名前

// スプレッドシートの取得
function GetSpreadsheet(sheetID) {
    var ss = SpreadsheetApp.openById(sheetID); // スプレッドシート
    //Logger.log(ss.getName() + "を取得");
    return ss;
}

// シートの取得
function GetSheet(sheetName) {
    var ss    = GetSpreadsheet(SheetID);      // スプレッドシート
    var sheet = ss.getSheetByName(sheetName); // シート
    //Logger.log(sheet.getName() + "を取得");
    return sheet;
}

// セルの取得
function GetCell(sheetName,row,column){
    var sheet = GetSheet(sheetName);        // シート
    var cell  = sheet.getRange(row,column); // 指定したセル
    //Logger.log(cell.getValue() + "を取得");
    return cell;
}

// ISBNの取得
function GetISBN(){
    var cell = GetCell(SheetName,1,1); // セル
    var isbn = cell.getValue();        // ISBN

    return isbn;
}

// セルにデータを入力
function SetCell(cell,text){
    cell.setValue(text);
}

// セルを検索
function FindCell(header){
    var sheet      = GetSheet(SheetName);            // シート
    var textFinder = sheet.createTextFinder(header); // シートのデータ検索オブジェクト
    var findCell   = textFinder.findNext();          // 検索したセルの取得
    return findCell;
}

// 最終セルを取得
function GetLastCell(column){
    var sheet    = GetSheet(SheetName);                                // シート
    var range    = sheet.getRange(sheet.getMaxRows(),column);          // シートの最終行
    var lastCell = range.getNextDataCell(SpreadsheetApp.Direction.UP); // 指定した列の最終セル
    return lastCell;
}

// 次のセルを取得
function GetNextCell(header){
    var findCell = FindCell(header);     // 見出しのセルを取得
    var column   = findCell.getColumn(); // 見出しの列
    var lastCell = GetLastCell(column);  // 最終セル
    var nextCell = lastCell.offset(1,0); // １つ下のセル
    return nextCell;
}