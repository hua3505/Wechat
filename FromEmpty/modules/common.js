function onPageLoad2() {
    getApp().loadPagesNum++;
    console.log(getApp().loadPagesNum);
}

function onPageUnload() {
    getApp().loadPagesNum--;
    console.log(getApp().loadPagesNum);
}

exports.onPageLoad = onPageLoad2;
module.exports.onPageUnload = onPageUnload;
