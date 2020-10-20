function GetNDL(isbn){
    var cql = "isbn=\"" + isbn + "\"";
    Logger.log(cql);
    var encode = encodeURI(cql);
    Logger.log(encode);
}