// window.xpath = $x;
let DATA_XPATH = "//[]";
let loadedData;
while (true) {
        window.scrollTo({
                top: Number(document.body.scrollHeight),
                left: 0,
                behavior: 'smooth'
        });
        loadedData=window.xpath(DATA_XPATH).length;
        console.log(loadedPosts.length);
        document.querySelector('.load-more-wrapper > button').scrollIntoView();
        document.querySelector('.load-more-wrapper > button').click();
        await new Promise(r => setTimeout(r, 2000));
};
