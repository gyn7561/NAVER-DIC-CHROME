

function createMenuFunc(baseUrl) {
    return function genericOnClick(info, tab) {
        let word = info.selectionText;
        chrome.tabs.create({
            url: baseUrl + encodeURI(word)
        });
    }
}

let menus = [
    {
        id: "NAVER_KR-ZH",
        title: "查询韩中字典",
        baseUrl: "https://korean.dict.naver.com/kozhdict/#/search?query="
    },
    {
        id: "NAVER_KR-JP",
        title: "查询韩日字典",
        baseUrl: "https://korean.dict.naver.com/kojadict/#/search?query="
    },
    {
        id: "NAVER_ZH-KR",
        title: "查询中韩字典",
        baseUrl: "https://zh.dict.naver.com/#/search?query="
    }
];

menus.forEach(config => {
    chrome.contextMenus.create({
        type: 'normal',
        title: config.title,
        id: config.id,
        contexts: ['all'],
        onclick: createMenuFunc(config.baseUrl)
    }, function () {
    });
});


// alert(1);