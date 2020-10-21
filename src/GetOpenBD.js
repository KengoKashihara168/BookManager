var OpenBD_URL = 'https://api.openbd.jp/v1/get?isbn=';
var title = '';
var author = '';
var publisher = '';
var label = '';
var price = '';
var format = '';

function GetOpenBD(isbn){
    var url = API_URL + isbn + '&pretty';
    var query = UrlFetchApp.fetch(url);
    var json = JSON.parse(query);
    Logger.log(json[0].summary.title);
    Logger.log(json[0].summary.author);
    Logger.log(json[0].summary.publisher);
    Logger.log(json[0].onix.DescriptiveDetail.Collection.TitleDetail.TitleElement[0].TitleText.content);
    Logger.log(json[0].onix.ProductSupply.SupplyDetail.Price[0].PriceAmount);
    Logger.log(json[0].onix.DescriptiveDetail.ProductFormDetail);

    title = json[0].summary.title;
    author = json[0].summary.author;
    publisher = json[0].summary.publisher;
    label = json[0].onix.DescriptiveDetail.Collection.TitleDetail.TitleElement[0].TitleText.content;
    price = json[0].onix.ProductSupply.SupplyDetail.Price[0].PriceAmount;
    format = json[0].onix.DescriptiveDetail.ProductFormDetail;
}