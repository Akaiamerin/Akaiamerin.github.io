(() => {
    //去除遮罩
    window.addEventListener('load', () => {
        const bodyWrap = document.getElementById('body-wrap');
        bodyWrap.style.zIndex = -2147483647;
        bodyWrap.style.background = `url(${location.origin}/img/background.jpg) center/cover no-repeat fixed`;
    });
    //随机颜色
    function randomColor() {
        return '#' + Math.round(Math.random() * parseInt('0xffffff', 16)).toString(16).padStart(6, '0');
    }
    //主页侧边栏标签
    const sidebarTag = document.getElementsByClassName('card-tag-cloud')[0];
    if (sidebarTag) {
        const anchorList = sidebarTag.getElementsByTagName('a');
        for (let i = 0; i < anchorList.length; i++) {
            anchorList[i].style.color = randomColor();
        }
    }
    //文章底部标签
    const postMetaTag = document.getElementsByClassName('post-meta__tag-list')[0];
    if (postMetaTag) {
        const anchorList = postMetaTag.getElementsByTagName('a');
        for (let i = 0; i < anchorList.length; i++) {
            anchorList[i].style.color = randomColor();
        }
    }
    //标签页标签
    const mainTag = document.getElementsByClassName('tag-cloud-list')[0];
    if (mainTag) {
        const anchorList = mainTag.getElementsByTagName('a');
        for (let i = 0; i < anchorList.length; i++) {
            anchorList[i].style.color = randomColor();
        }
    }
    //主页下箭头
    const downArrow = document.getElementsByClassName('scroll-down-effects')[0];
    if (downArrow) {
        setInterval(() => {
            downArrow.style.color = randomColor();
        }, 1500);
    }
    //页脚框架主题
    const frameworkText = document.getElementById('framework-text');
    if (frameworkText) {
        frameworkText.innerHTML = `
        <div>
            <a href="https://github.com/hexojs/hexo" target="_blank" rel="noopener">
                <img src="https://img.shields.io/badge/Hexo-7.3.0-0e88cc" alt="Hexo">
            </a>
            <a href="https://github.com/jerryc127/hexo-theme-butterfly" target="_blank" rel="noopener">
                <img src="https://img.shields.io/badge/Butterfly-5.2.2-1abbaa" alt="Butterfly">
            </a>
        </div>`;
    }
    //页脚运行时间
    const runtimeText = document.getElementById('runtime-text');
    if (runtimeText) {
        const publishTimestamp = new Date('2022-08-10 00:00:00').getTime() / 1000;
        setInterval(() => {
            const currentTimestamp = new Date().getTime() / 1000;
            let diff = currentTimestamp - publishTimestamp;
            let day = Math.floor(diff / (24 * 60 * 60));
            diff %= 24 * 60 * 60;
            let hour = Math.floor(diff / (60 * 60));
            diff %= 60 * 60;
            let minute = Math.floor(diff / 60);
            diff %= 60;
            let second = Math.round(diff);
            runtimeText.innerHTML = `
            <span>网站已运行</span>
            <span style="color: ${randomColor()}"> ${day} </span>
            <span>天</span>
            <span style="color: ${randomColor()}"> ${hour} </span>
            <span>时</span>
            <span style="color: ${randomColor()}"> ${minute} </span>
            <span>分</span>
            <span style="color: ${randomColor()}"> ${second} </span>
            <span>秒</span>`;
        }, 1000);
    }
    //图标
    const goUpIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#333333" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"/></g></svg>';
    const categoriesIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="M3 21q-.825 0-1.412-.587T1 19V6h2v13h17v2zm4-4q-.825 0-1.412-.587T5 15V4q0-.825.588-1.412T7 2h5l2 2h7q.825 0 1.413.588T23 6v9q0 .825-.587 1.413T21 17zm0-2h14V6h-7.825l-2-2H7zm0 0V4z"></path></svg>';
    const tagsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="M17.5 6.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-6.992-3.602A3.25 3.25 0 0 1 12.75 2h5.499A2.75 2.75 0 0 1 21 4.75v4.953a3.25 3.25 0 0 1-.97 2.316l-6.946 6.835a2.25 2.25 0 0 1-3.166-.01l-6.256-6.226a2.25 2.25 0 0 1 .034-3.223zm2.243.602c-.45 0-.883.173-1.208.484L4.73 10.48a.75.75 0 0 0-.011 1.075l6.257 6.226a.75.75 0 0 0 1.055.003l6.945-6.834a1.75 1.75 0 0 0 .523-1.247V4.75c0-.69-.56-1.25-1.25-1.25zm7.98 9.232l-1.475 1.451q-.06.082-.134.155l-5.334 5.229a3.25 3.25 0 0 1-4.575-.013L7.282 17.63l-2.411-2.386a1 1 0 0 1-.107-.12l-1.63-1.621a2.75 2.75 0 0 0 .682 2.807l4.356 4.311a4.75 4.75 0 0 0 6.666.016l5.334-5.229a2.75 2.75 0 0 0 .69-2.813a4 4 0 0 1-.131.136"></path></svg>';
    const infoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none"><path stroke="#333333" stroke-linejoin="round" stroke-width="4" d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"/><path fill="#333333" fill-rule="evenodd" d="M24 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"/><path stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.5 34V20h-2M21 34h7"/></g></svg>';
    const createIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="m12 11.6l2.5 2.5q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-2.8-2.8q-.15-.15-.225-.337T10 11.975V8q0-.425.288-.713T11 7q.425 0 .713.288T12 8v3.6ZM18 6h-2q-.425 0-.713-.287T15 5q0-.425.288-.713T16 4h2V2q0-.425.288-.713T19 1q.425 0 .713.288T20 2v2h2q.425 0 .713.288T23 5q0 .425-.288.713T22 6h-2v2q0 .425-.288.713T19 9q-.425 0-.713-.288T18 8V6Zm-7 15q-1.875 0-3.513-.7t-2.862-1.925Q3.4 17.15 2.7 15.512T2 12q0-1.875.7-3.513t1.925-2.862Q5.85 4.4 7.488 3.7T11 3q.275 0 .513.013t.512.062q.425 0 .713.288t.287.712q0 .425-.288.713t-.712.287q-.275 0-.513-.038T11 5Q8.05 5 6.025 7.025T4 12q0 2.95 2.025 4.975T11 19q2.95 0 4.975-2.025T18 12q0-.425.288-.713T19 11q.425 0 .713.288T20 12q0 1.875-.7 3.513t-1.925 2.862Q16.15 19.6 14.512 20.3T11 21Z"/></svg>';
    const updateIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="M12 21q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 12q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 3q2.05 0 3.888.875T19 6.35V5q0-.425.288-.713T20 4q.425 0 .713.288T21 5v4q0 .425-.288.713T20 10h-4q-.425 0-.713-.288T15 9q0-.425.288-.713T16 8h1.75q-1.025-1.4-2.525-2.2T12 5Q9.075 5 7.037 7.038T5 12q0 2.925 2.038 4.963T12 19q2.375 0 4.25-1.425t2.475-3.675q.125-.4.45-.6t.725-.15q.425.05.675.362t.15.688q-.725 2.975-3.15 4.888T12 21Zm1-9.4l2.5 2.5q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-2.8-2.8q-.15-.15-.225-.337T11 11.975V8q0-.425.288-.713T12 7q.425 0 .713.288T13 8v3.6Z"/></svg>';
    const pageviewSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#333333" d="M12 4c2.787 0 5.263 1.257 7.026 2.813c.885.781 1.614 1.658 2.128 2.531c.505.857.846 1.786.846 2.656c0 .87-.34 1.799-.846 2.656c-.514.873-1.243 1.75-2.128 2.531C17.263 18.743 14.786 20 12 20c-2.787 0-5.263-1.257-7.026-2.813c-.885-.781-1.614-1.658-2.128-2.531C2.34 13.799 2 12.87 2 12c0-.87.34-1.799.846-2.656c.514-.873 1.243-1.75 2.128-2.531C6.737 5.257 9.214 4 12 4m0 2c-2.184 0-4.208.993-5.702 2.312c-.744.656-1.332 1.373-1.729 2.047C4.163 11.049 4 11.62 4 12c0 .38.163.951.569 1.641c.397.674.985 1.39 1.729 2.047C7.792 17.007 9.816 18 12 18s4.208-.993 5.702-2.312c.744-.657 1.332-1.373 1.729-2.047c.406-.69.569-1.261.569-1.641c0-.38-.163-.951-.569-1.641c-.397-.674-.985-1.39-1.729-2.047C16.208 6.993 14.184 6 12 6m0 3c.088 0 .175.004.261.011a2 2 0 0 0 2.728 2.728A3 3 0 1 1 12 9"/></g></svg>';
    const tocIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>';
    function replaceIcon(oldIcon, newIcon) {
        oldIcon.removeAttribute('class');
        oldIcon.innerHTML = newIcon;
    }
    //回到顶部
    const goUp = document.getElementById('go-up');
    if (goUp) {
        const oldGoUpIcon = goUp.getElementsByTagName('i')[0];
        replaceIcon(oldGoUpIcon, goUpIcon);
    }
    //侧边栏分类图标
    const cardCategories = document.getElementsByClassName('card-categories')[0];
    if (cardCategories) {
        const oldCardCategoriesIcon = cardCategories.getElementsByClassName('item-headline')[0].getElementsByTagName('i')[0];
        replaceIcon(oldCardCategoriesIcon, categoriesIcon);
    }
    //侧边栏标签图标
    const cardTags = document.getElementsByClassName('card-tags')[0];
    if (cardTags) {
        const oldCardTagsIcon = cardTags.getElementsByClassName('item-headline')[0].getElementsByTagName('i')[0];
        replaceIcon(oldCardTagsIcon, tagsIcon);
    }
    //侧边栏网站信息图标
    const cardWebinfo = document.getElementsByClassName('card-webinfo')[0];
    if (cardWebinfo) {
        const oldCardWebinfoIcon = cardWebinfo.getElementsByClassName('item-headline')[0].getElementsByTagName('i')[0];
        replaceIcon(oldCardWebinfoIcon, infoIcon);
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
        const oldArticleCreateDateIcon = articleDate[i].getElementsByTagName('i')[0];
        replaceIcon(oldArticleCreateDateIcon, createIcon);
        const oldArticleUpdateDateIcon = articleDate[i].getElementsByTagName('i')[1];
        replaceIcon(oldArticleUpdateDateIcon, updateIcon);
    }
    //主页最近文章设置信息分类图标
    const articleCategories = document.getElementsByClassName('article-meta');
    for (let i = 0; i < articleCategories.length; i++) {
        const oldArticleCategoriesIcon = articleCategories[i].getElementsByTagName('i')[0];
        replaceIcon(oldArticleCategoriesIcon, categoriesIcon);
    }
    //主页最近文章设置信息标签图标
    const articleTags = document.getElementsByClassName('article-meta tags');
    for (let i = 0; i < articleTags.length; i++) {
        const articleTagsIcon = articleTags[i].getElementsByTagName('i')[0];
        replaceIcon(articleTagsIcon, tagsIcon);
    }
    //文章设置信息创建时间图标
    //文章设置信息更新时间图标
    //文章设置信息分类图标
    //文章设置信息阅读数图标
    const metaFirstline = document.getElementsByClassName('meta-firstline')[0];
    const metaSecondline = document.getElementsByClassName('meta-secondline')[0];
    if (metaFirstline && metaSecondline) {
        const postDate = metaFirstline.getElementsByClassName('post-meta-date')[0].getElementsByTagName('i');
        const oldPostCreateDateIcon = postDate[0];
        replaceIcon(oldPostCreateDateIcon, createIcon);
        const oldPostUpdateDateIcon = postDate[1];
        replaceIcon(oldPostUpdateDateIcon, updateIcon);
        const oldPostCategoriesIcon = metaFirstline.getElementsByClassName('post-meta-categories')[0].getElementsByTagName('i')[0];
        replaceIcon(oldPostCategoriesIcon, categoriesIcon);
        const postPageview = metaSecondline.getElementsByClassName('post-meta-pv-cv')[0];
        const oldPostPageviewIcon = postPageview.getElementsByTagName('i')[0];
        replaceIcon(oldPostPageviewIcon, pageviewSVG);
        const postPageviewText = postPageview.getElementsByClassName('post-meta-label')[0];
        replaceIcon(postPageviewText, postPageviewText.innerHTML.substring(0, postPageviewText.innerHTML.length - 1) + ' ');
    }
    //文章侧边栏目录图标
    const cardTOC = document.getElementById('card-toc');
    if (cardTOC) {
        const itemHeadline = document.getElementById('card-toc').getElementsByClassName('item-headline')[0];
        if (itemHeadline) {
            const oldTOCIcon = itemHeadline.getElementsByTagName('i')[0];
            replaceIcon(oldTOCIcon, tocIcon);
        }
    }
})();