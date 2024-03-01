$(function () {
    searchWiki("Mercury");
})

async function searchWiki(searchterm) {
    var url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=${searchterm}`;
    makeReq(url, getWikiPage, searchterm)
}

async function getWikiPage(data, searchterm) {
    console.log("Pages found: ", data);
    let pages = data.query.pages
    let title = pages[Object.keys(pages)[0]].title
    for (var i in pages) {
        if (pages[i].title == searchterm)
            title = pages[i].title
    }
    let pageUrl = `https://en.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&page=${title}&format=json`
    makeReq(pageUrl, log)
}

async function makeReq(url, callback, params) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        var data = JSON.parse(this.response);
        callback(data, params)
    }
    xhr.send()
}

function log(data) {
    console.log("Page retrieved: ", data.parse.text['*']);
}