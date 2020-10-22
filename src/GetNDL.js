//var NDL_URL = 'https://iss.ndl.go.jp/api/sru?operation=searchRetrieve&maximumRecords=5&query='
var NDL_URL = 'https://iss.ndl.go.jp/api/oaipmh?operation=searchRetrieve&maximumRecords=5&query='

function GetNDL(isbn){
    // APIのURL
    var url = CreateURL(isbn);
    var query = UrlFetchApp.fetch(url); // APIのクエリ
    var xml = query.getContentText(); // xml
    var namespace = XmlService.getNamespace(xml);
    var document = XmlService.parse(xml); // xmlをドキュメントに変換
    var rootElement = document.getRootElement();
    //Logger.log(rootElement);
    var records = rootElement.getChildren("records",rootElement.getNamespace());
    //Logger.log(records[0].getName());
    var record = records[0].getChildren("record",records[0].getNamespace());
    for(var i = 0;i < record.length;i++)
    {
        Logger.log(record[i].getValue());
    }
    
}

// URLの生成
function CreateURL(isbn){
    var cql = "isbn=\"" + isbn + "\"";
    //Logger.log(cql);
    var encode = encodeURI(cql);
    //Logger.log(encode);
    var url = NDL_URL + encode;
    //Logger.log(url + "を生成");

    return url;
}