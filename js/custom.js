(() => {
    //去除遮罩
    window.addEventListener('load', () => {
        const bodyWrap = document.getElementById('body-wrap');
        bodyWrap.style.zIndex = -2147483647;
        bodyWrap.style.background = `url(${location.origin}/img/background.jpg) center/cover no-repeat fixed`;
    });
    //随机颜色
    function generateRandomColorHexadecimal() {
        return `#${Math.round(Math.random() * parseInt('0xffffff', 16)).toString(16).padStart(6, '0')}`;
    }
    //主页侧边栏标签
    const sidebarTag = document.getElementsByClassName('card-tag-cloud')[0];
    if (sidebarTag) {
        const anchorList = sidebarTag.getElementsByTagName('a');
        for (let i = 0; i < anchorList.length; i++) {
            anchorList[i].style.color = generateRandomColorHexadecimal();
        }
    }
    //文章底部标签
    const postMetaTag = document.getElementsByClassName('post-meta__tag-list')[0];
    if (postMetaTag) {
        const anchorList = postMetaTag.getElementsByTagName('a');
        for (let i = 0; i < anchorList.length; i++) {
            anchorList[i].style.color = generateRandomColorHexadecimal();
        }
    }
    //标签页标签
    const mainTag = document.getElementsByClassName('tag-cloud-list')[0];
    if (mainTag) {
        const anchorList = mainTag.getElementsByTagName('a');
        for (let i = 0; i < anchorList.length; i++) {
            anchorList[i].style.color = generateRandomColorHexadecimal();
        }
    }
    //页脚版权
    const copyrightText = document.getElementById('copyright-text');
    if (copyrightText) {
        const publishYear = 2022;
        const prefix = `Copyright © ${publishYear}`;
        const suffix = 'Akaiamerin. All Rights Reserved.';
        const year = new Date().getFullYear();
        if (year > publishYear) {
            copyrightText.innerHTML = `${prefix} - ${year} ${suffix}`;
        }
        else {
            copyrightText.innerHTML = `${prefix} ${suffix}`;
        }
    }
    //页脚框架主题
    const frameworkText = document.getElementById('framework-text');
    if (frameworkText) {
        frameworkText.innerHTML = `
        <a href="https://github.com/hexojs/hexo" target="_blank" rel="noopener">
            <img src="https://img.shields.io/badge/Hexo-8.1.2-0e88cc" alt="Hexo">
        </a>
        <a href="https://github.com/jerryc127/hexo-theme-butterfly" target="_blank" rel="noopener">
            <img src="https://img.shields.io/badge/Butterfly-5.7.0-1ab1ad" alt="Butterfly">
        </a>`;
    }
    //页脚运行时间
    const runtimeText = document.getElementById('runtime-text');
    if (runtimeText) {
        const publishTimestamp = new Date('2022-08-10 00:00:00').getTime() / 1000;
        setInterval(() => {
            const currentTimestamp = new Date().getTime() / 1000;
            let diff = currentTimestamp - publishTimestamp;
            const dayText = Math.floor(diff / (24 * 60 * 60));
            diff %= 24 * 60 * 60;
            const hourText = Math.floor(diff / (60 * 60));
            diff %= 60 * 60;
            let minuteText = Math.floor(diff / 60);
            diff %= 60;
            let secondText = Math.round(diff);
            runtimeText.innerHTML = `
            <div>网站已运行</div>
            <div style="color: ${generateRandomColorHexadecimal()}">${dayText}</div>
            <div>天</div>
            <div style="color: ${generateRandomColorHexadecimal()}">${hourText}</div>
            <div>时</div>
            <div style="color: ${generateRandomColorHexadecimal()}">${minuteText}</div>
            <div>分</div>
            <div style="color: ${generateRandomColorHexadecimal()}">${secondText}</div>
            <div>秒</div>`;
        }, 1000);
    }
    //图标
    const arrowIcon = '<div class="arrow-icon-container"><div class="arrow"></div></div>';
    const categoriesIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="M7.425 9.475L11.15 3.4q.15-.25.375-.363T12 2.925t.475.113t.375.362l3.725 6.075q.15.25.15.525t-.125.5t-.35.363t-.525.137h-7.45q-.3 0-.525-.137T7.4 10.5t-.125-.5t.15-.525M17.5 22q-1.875 0-3.187-1.312T13 17.5t1.313-3.187T17.5 13t3.188 1.313T22 17.5t-1.312 3.188T17.5 22M3 20.5v-6q0-.425.288-.712T4 13.5h6q.425 0 .713.288T11 14.5v6q0 .425-.288.713T10 21.5H4q-.425 0-.712-.288T3 20.5m14.5-.5q1.05 0 1.775-.725T20 17.5t-.725-1.775T17.5 15t-1.775.725T15 17.5t.725 1.775T17.5 20M5 19.5h4v-4H5zM10.05 9h3.9L12 5.85zm7.45 8.5"/></svg>';
    const tagsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-8.5 8.503a3.255 3.255 0 0 1-4.597.001L3.489 16.06a3.25 3.25 0 0 1-.004-4.596l8.5-8.51a3.25 3.25 0 0 1 2.3-.953zm0 1.5h-5.466c-.464 0-.91.185-1.238.513l-8.512 8.523a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.477 0l8.5-8.503a1.75 1.75 0 0 0 .513-1.237V4.25a.75.75 0 0 0-.75-.75M17 5.502a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/></svg>';
    const createTimeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20.984 12.535a9 9 0 1 0-8.468 8.45M16 19h6m-3-3v6"/><path d="M12 7v5l3 3"/></g></svg>';
    const updateTimeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21 12a9 9 0 1 0-9.972 8.948q.48.051.972.052"/><path d="M12 7v5l2 2m4.42 1.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"/></g></svg>';
    const pageviewIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M12 18q-.492 0-.97-.05Q6.271 17.452 3 12q3.6-6 9-6q5.197 0 8.727 5.558M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"/></g></svg>';
    function replaceIcon(oldIcon, newIcon) {
        oldIcon.removeAttribute('class');
        oldIcon.innerHTML = newIcon;
    }
    //回到顶部
    const goUp = document.getElementById('go-up');
    if (goUp) {
        const oldArrowIcon = goUp.getElementsByTagName('i')[0];
        replaceIcon(oldArrowIcon, arrowIcon);
    }
    //侧边栏分类图标
    const cardCategories = document.getElementsByClassName('card-categories')[0];
    if (cardCategories) {
        const oldCategoriesIcon = cardCategories.getElementsByClassName('item-headline')[0].getElementsByTagName('i')[0];
        replaceIcon(oldCategoriesIcon, categoriesIcon);
    }
    //侧边栏标签图标
    const cardTags = document.getElementsByClassName('card-tags')[0];
    if (cardTags) {
        const oldTagsIcon = cardTags.getElementsByClassName('item-headline')[0].getElementsByTagName('i')[0];
        replaceIcon(oldTagsIcon, tagsIcon);
    }
    //主页最近文章设置信息顶置图标
    const articleTitle = document.getElementsByClassName('article-title');
    for (let i = 0; i < articleTitle.length; i++) {
        const oldArticleTitleIcon = articleTitle[i].getElementsByTagName('i')[0];
        if (oldArticleTitleIcon) {
            replaceIcon(oldArticleTitleIcon, '');
        }
    }
    //主页最近文章设置信息创建时间图标
    //主页最近文章设置信息更新时间图标
    const articleDate = document.getElementsByClassName('post-meta-date');
    for (let i = 0; i < articleDate.length; i++) {
        const oldCreateTimeIcon = articleDate[i].getElementsByTagName('i')[0];
        replaceIcon(oldCreateTimeIcon, createTimeIcon);
        const oldUpdateTimeIcon = articleDate[i].getElementsByTagName('i')[1];
        replaceIcon(oldUpdateTimeIcon, updateTimeIcon);
    }
    //主页最近文章设置信息分类图标
    const articleCategories = document.getElementsByClassName('article-meta');
    for (let i = 0; i < articleCategories.length; i++) {
        const oldCategoriesIcon = articleCategories[i].getElementsByTagName('i')[0];
        replaceIcon(oldCategoriesIcon, categoriesIcon);
    }
    //主页最近文章设置信息标签图标
    const articleTags = document.getElementsByClassName('article-meta tags');
    for (let i = 0; i < articleTags.length; i++) {
        const oldTagsIcon = articleTags[i].getElementsByTagName('i')[0];
        replaceIcon(oldTagsIcon, tagsIcon);
    }
    //文章设置信息创建时间图标
    //文章设置信息更新时间图标
    //文章设置信息分类图标
    //文章设置信息阅读数图标
    const metaFirstline = document.getElementsByClassName('meta-firstline')[0];
    const metaSecondline = document.getElementsByClassName('meta-secondline')[0];
    if (metaFirstline && metaSecondline) {
        const postDate = metaFirstline.getElementsByClassName('post-meta-date')[0].getElementsByTagName('i');
        const oldCreateTimeIcon = postDate[0];
        replaceIcon(oldCreateTimeIcon, createTimeIcon);
        const oldUpdateTimeIcon = postDate[1];
        replaceIcon(oldUpdateTimeIcon, updateTimeIcon);
        const oldCategoriesIcon = metaFirstline.getElementsByClassName('post-meta-categories')[0].getElementsByTagName('i')[0];
        replaceIcon(oldCategoriesIcon, categoriesIcon);
        const postPageview = metaSecondline.getElementsByClassName('post-meta-pv-cv')[0];
        const oldPageviewIcon = postPageview.getElementsByTagName('i')[0];
        replaceIcon(oldPageviewIcon, pageviewIcon);
        const postPageviewText = postPageview.getElementsByClassName('post-meta-label')[0];
        replaceIcon(postPageviewText, postPageviewText.innerHTML.substring(0, postPageviewText.innerHTML.length - 1) + ' ');
    }
})();