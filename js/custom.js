(() => {
    //根路径
    function rootPath() {
        const fullPath = window.document.location.href;
        const currentPath = window.document.location.pathname;
        if (currentPath === '/') {
            return fullPath.substring(0, fullPath.length - 1);
        }
        return fullPath.substring(0, fullPath.indexOf(currentPath));
    }
    //去除遮罩
    window.addEventListener(
        'load',
        () => {
            const bg = document.getElementById('web_bg');
            bg.style.zIndex = -999;
            bg.style.background = `url(${rootPath()}/img/background.jpg)`;
            bg.style.backgroundRepeat = 'no-repeat';
            bg.style.backgroundAttachment = 'local';
            bg.style.backgroundPosition = 'center';
            bg.style.backgroundSize = 'cover';
        }
    );
    //随机颜色
    function randomColor() {
        return '#' + Math.round(Math.random() * parseInt('0xffffff', 16)).toString(16).padStart(6, '0');
    }
    //主页侧边栏标签
    if (document.getElementsByClassName('card-tag-cloud')[0]) {
        const aList = document.getElementsByClassName('card-tag-cloud')[0].getElementsByTagName('a');
        for (let i = 0; i < aList.length; i++) {
            aList[i].style.color = randomColor();
        }
    }
    //文章底部标签
    if (document.getElementsByClassName('post-meta__tag-list')[0]) {
        const aList = document.getElementsByClassName('post-meta__tag-list')[0].getElementsByTagName('a');
        for (let i = 0; i < aList.length; i++) {
            aList[i].style.color = randomColor();
        }
    }
    //标签页标签
    if (document.getElementsByClassName('tag-cloud-list')[0]) {
        const aList = document.getElementsByClassName('tag-cloud-list')[0].getElementsByTagName('a');
        for (let i = 0; i < aList.length; i++) {
            aList[i].style.color = randomColor();
        }
    }
    //主页下箭头
    if (document.getElementsByClassName('scroll-down-effects')[0]) {
        setInterval(
            () => {
                document.getElementsByClassName('scroll-down-effects')[0].style.color = randomColor();
            },
            1500
        );
    }
    //页脚框架主题
    if (document.getElementById('blog-text')) {
        document.getElementById('blog-text').innerHTML = `
        <div>
            <a target="_blank" rel="noopener" href="https://github.com/hexojs/hexo">
                <img src="https://img.shields.io/badge/Hexo-7.0.0-0E88CC" alt="Hexo">
            </a>
            <a target="_blank" rel="noopener" href="https://github.com/jerryc127/hexo-theme-butterfly">
                <img src="https://img.shields.io/badge/Butterfly-4.11.0-1ABBAA" alt="Butterfly">
            </a>
        </div>`;
    }
    //页脚运行时间
    if (document.getElementById('runtime-text')) {
        setInterval(
            () => {
                let publishTimestamp = new Date('2022-08-10 00:00:00').getTime() / 1000;
                let currentTimestamp = new Date().getTime() / 1000;
                let diff = currentTimestamp - publishTimestamp;
                let day = Math.floor(diff / (24 * 60 * 60));
                diff %= 24 * 60 * 60;
                let hour = Math.floor(diff / (60 * 60));
                diff %= 60 * 60;
                let minute = Math.floor(diff / 60);
                diff %= 60;
                let second = Math.round(diff);
                document.getElementById('runtime-text').innerHTML = `
                网站已运行
                <span style="color: ${randomColor()}">${day}</span> 天
                <span style="color: ${randomColor()}">${hour}</span> 时
                <span style="color: ${randomColor()}">${minute}</span> 分
                <span style="color: ${randomColor()}">${second}</span> 秒`;
            },
            1000
        );
    }
    //图标
    const goUp = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"/></g></svg>'
    const categories = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="M4 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2H4m8 5h3v2h-3V9m4 0h3v2h-3V9m-4 3h3v2h-3v-2m4 0h3v2h-3v-2m-4 3h3v2h-3v-2m4 0h3v2h-3v-2Z"/></svg>';
    const tags = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="M12.75 2a3.25 3.25 0 0 0-2.242.898L3.696 9.395a2.25 2.25 0 0 0-.034 3.223l6.256 6.226a2.25 2.25 0 0 0 3.166.01l6.945-6.835c.621-.61.97-1.445.97-2.316V4.75A2.75 2.75 0 0 0 18.25 2h-5.498Zm3.5 5.75a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm3.006 6.433l1.475-1.451c.045-.044.089-.09.132-.136a2.75 2.75 0 0 1-.691 2.813l-5.334 5.229a4.75 4.75 0 0 1-6.666-.016l-4.356-4.31a2.75 2.75 0 0 1-.681-2.808l1.629 1.62c.032.043.068.083.107.121l2.411 2.386l1.931 1.922a3.251 3.251 0 0 0 4.575.014l5.334-5.229c.05-.049.094-.1.134-.155Z"/></svg>';
    const info = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1Zm-.5 5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2h-.5ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd"/></svg>';
    const create = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="m12 11.6l2.5 2.5q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-2.8-2.8q-.15-.15-.225-.337T10 11.975V8q0-.425.288-.713T11 7q.425 0 .713.288T12 8v3.6ZM18 6h-2q-.425 0-.713-.287T15 5q0-.425.288-.713T16 4h2V2q0-.425.288-.713T19 1q.425 0 .713.288T20 2v2h2q.425 0 .713.288T23 5q0 .425-.288.713T22 6h-2v2q0 .425-.288.713T19 9q-.425 0-.713-.288T18 8V6Zm-7 15q-1.875 0-3.513-.7t-2.862-1.925Q3.4 17.15 2.7 15.512T2 12q0-1.875.7-3.513t1.925-2.862Q5.85 4.4 7.488 3.7T11 3q.275 0 .513.013t.512.062q.425 0 .713.288t.287.712q0 .425-.288.713t-.712.287q-.275 0-.513-.038T11 5Q8.05 5 6.025 7.025T4 12q0 2.95 2.025 4.975T11 19q2.95 0 4.975-2.025T18 12q0-.425.288-.713T19 11q.425 0 .713.288T20 12q0 1.875-.7 3.513t-1.925 2.862Q16.15 19.6 14.512 20.3T11 21Z"/></svg>';
    const update = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="M12 21q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 12q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 3q2.05 0 3.888.875T19 6.35V5q0-.425.288-.713T20 4q.425 0 .713.288T21 5v4q0 .425-.288.713T20 10h-4q-.425 0-.713-.288T15 9q0-.425.288-.713T16 8h1.75q-1.025-1.4-2.525-2.2T12 5Q9.075 5 7.037 7.038T5 12q0 2.925 2.038 4.963T12 19q2.375 0 4.25-1.425t2.475-3.675q.125-.4.45-.6t.725-.15q.425.05.675.362t.15.688q-.725 2.975-3.15 4.888T12 21Zm1-9.4l2.5 2.5q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-2.8-2.8q-.15-.15-.225-.337T11 11.975V8q0-.425.288-.713T12 7q.425 0 .713.288T13 8v3.6Z"/></svg>';
    const pageview = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#333333" d="M12 18.883a10.8 10.8 0 0 1-9.675-5.728a2.6 2.6 0 0 1 0-2.31A10.8 10.8 0 0 1 12 5.117a10.8 10.8 0 0 1 9.675 5.728a2.6 2.6 0 0 1 0 2.31A10.8 10.8 0 0 1 12 18.883Zm0-12.766a9.787 9.787 0 0 0-8.78 5.176a1.586 1.586 0 0 0 0 1.415A9.788 9.788 0 0 0 12 17.883a9.787 9.787 0 0 0 8.78-5.176a1.584 1.584 0 0 0 0-1.414A9.787 9.787 0 0 0 12 6.117Z"/><path fill="#333333" d="M12 16.049A4.049 4.049 0 1 1 16.049 12A4.054 4.054 0 0 1 12 16.049Zm0-7.1A3.049 3.049 0 1 0 15.049 12A3.052 3.052 0 0 0 12 8.951Z"/><circle cx="12" cy="12" r="2.028" fill="#333333"/></svg>';
    const toc = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>';
    function replace(icon, text) {
        icon.removeAttribute('class');
        icon.innerHTML = text;
    }
    //回到顶部
    if (document.getElementById('go-up')) {
        const goUpIcon = document.getElementById('go-up').getElementsByTagName('i')[0];
        replace(goUpIcon, goUp);
    }
    //侧边栏分类图标
    if (document.getElementsByClassName('card-categories')[0]) {
        const cardCategoriesIcon = document.getElementsByClassName('card-categories')[0].getElementsByClassName('item-headline')[0].getElementsByTagName('i')[0];
        replace(cardCategoriesIcon, categories);
    }
    //侧边栏标签图标
    if (document.getElementsByClassName('card-tags')[0]) {
        const cardTagsIcon = document.getElementsByClassName('card-tags')[0].getElementsByClassName('item-headline')[0].getElementsByTagName('i')[0];
        replace(cardTagsIcon, tags);
    }
    //侧边栏网站信息图标
    if (document.getElementsByClassName('card-webinfo')[0]) {
        const cardWebinfoIcon = document.getElementsByClassName('card-webinfo')[0].getElementsByClassName('item-headline')[0].getElementsByTagName('i')[0];
        replace(cardWebinfoIcon, info);
    }
    //主页最近文章设置信息顶置图标
    if (document.getElementsByClassName('article-title')) {
        for (let i = 0; i < document.getElementsByClassName('article-title').length; i++) {
            const stickyIcon = document.getElementsByClassName('article-title')[i].getElementsByTagName('i')[0];
            if (stickyIcon) {
                replace(stickyIcon, null);
            }
        }
    }
    //主页最近文章设置信息创建时间图标
    //主页最近文章设置信息更新时间图标
    if (document.getElementsByClassName('post-meta-date')) {
        for (let i = 0; i < document.getElementsByClassName('post-meta-date').length; i++) {
            const articleCreateDateIcon = document.getElementsByClassName('post-meta-date')[i].getElementsByTagName('i')[0];
            replace(articleCreateDateIcon, create);
            const articleUpdateDateIcon = document.getElementsByClassName('post-meta-date')[i].getElementsByTagName('i')[1];
            replace(articleUpdateDateIcon, update);
        }
    }
    //主页最近文章设置信息分类图标
    if (document.getElementsByClassName('article-meta')) {
        for (let i = 0; i < document.getElementsByClassName('article-meta').length; i++) {
            const articleCategoriesIcon = document.getElementsByClassName('article-meta')[i].getElementsByTagName('i')[0];
            replace(articleCategoriesIcon, categories);
        }
    }
    //主页最近文章设置信息标签图标
    if (document.getElementsByClassName('article-meta tags')) {
        for (let i = 0; i < document.getElementsByClassName('article-meta tags').length; i++) {
            const articleTagsIcon = document.getElementsByClassName('article-meta tags')[i].getElementsByTagName('i')[0];
            replace(articleTagsIcon, tags);
        }
    }
    //文章设置信息创建时间图标
    //文章设置信息更新时间图标
    //文章设置信息分类图标
    //文章设置信息阅读数图标
    if (document.getElementsByClassName('meta-firstline')[0] && document.getElementsByClassName('meta-secondline')[0]) {
        const postCreateDateIcon = document.getElementsByClassName('meta-firstline')[0].getElementsByClassName('post-meta-date')[0].getElementsByTagName('i')[0];
        replace(postCreateDateIcon, create);
        const postUpdateDateIcon = document.getElementsByClassName('meta-firstline')[0].getElementsByClassName('post-meta-date')[0].getElementsByTagName('i')[1];
        replace(postUpdateDateIcon, update);
        const postCategoriesIcon = document.getElementsByClassName('meta-firstline')[0].getElementsByClassName('post-meta-categories')[0].getElementsByTagName('i')[0];
        replace(postCategoriesIcon, categories);
        const postPageviewIcon = document.getElementsByClassName('meta-secondline')[0].getElementsByClassName('post-meta-pv-cv')[0].getElementsByTagName('i')[0];
        replace(postPageviewIcon, pageview);
        const postPageviewText = document.getElementsByClassName('meta-secondline')[0].getElementsByClassName('post-meta-pv-cv')[0].getElementsByClassName('post-meta-label')[0];
        replace(postPageviewText, postPageviewText.innerHTML.substring(0, postPageviewText.innerHTML.length - 1) + ' ');
    }
    //文章侧边栏目录图标
    if (document.getElementById('card-toc') && document.getElementById('card-toc').getElementsByClassName('item-headline')[0]) {
        const tocIcon = document.getElementById('card-toc').getElementsByClassName('item-headline')[0].getElementsByTagName('i')[0];
        replace(tocIcon, toc);
    }
})();