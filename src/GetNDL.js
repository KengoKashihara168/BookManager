var NDL_URL = 'https://iss.ndl.go.jp/api/sru?operation=searchRetrieve&maximumRecords=5&query='

function GetNDL(isbn){
    var cql = "isbn=\"" + isbn + "\"";
    //Logger.log(cql);
    var encode = encodeURI(cql);
    //Logger.log(encode);
    var url = NDL_URL + encode;
    Logger.log(url);
    var query = UrlFetchApp.fetch(url);
    Logger.log(query.getContent());
}