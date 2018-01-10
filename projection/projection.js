var itemList = [
 {
     title: 'react&知乎日报',
     images: [
         './images/zhihuiribao/1.jpg',
         './images/zhihuiribao/2.jpg',
         './images/zhihuiribao/3.jpg'
     ],
     shortIntro: 'React搭建的SPA-知乎日报应用,结合redux管理应用状态,redux-saga处理异步action,页面UI部分使用antd组件,部分自己搭建;仅作react学习之用',
     see:'https://amumu233.duapp.com',
     code: ''
 }   
];
var html = '';
for(var i = 0;i < itemList.length;i++){

    

    let images = itemList[i].images;
    var thumbHtml = `<div class="images">`;
    for (var j = 0;j<images.length;j++){ thumbhtml="" +="`<div" class="image">
                        <img src="/projection/${images[j]}" alt="" title="点击查看大图">
                     </images.length;j++){></div>`;
    };
    thumbHtml += "";


    html += `<div class="item item${i}" data-title="${itemList[i].title}">
                <h4>${itemList[i].title}</h4>
                ${thumbHtml}
                <div class="webui-popover-content" style="font-size: 14px;">
                    <div class="container shortIntro">
                        <span class="label">项目简介:</span>
                        <p class="detail">${itemList[i].shortIntro}</p>
                    </div>
                    <div class="container code">
                        <a href="${itemList[i].code}">查看代码</a>
                        <a href="${itemList[i].see}">效果预览</a>
                    </div>
                </div>
            </div>`
}

$('.list').html(html);
$('.images').webuiPopover({ 
    trigger: 'hover', 
    style: 'inverse', 
    closeable: true, 
    animation: 'pop', 
    arrow: true, 
    delay: { show: null, hidden: null },
    placement: 'left',
});