var SheetID = '1stX9PL4QHZSwgKOExJ8LvRp3ZX9obRqY6b83fsIARTg'; // スプレッドシートID

function myFunction(){
    Logger.log("Hello World!");

    var ss = SpreadsheetApp.openById(SheetID);
    Logger.log(ss.getName());
}