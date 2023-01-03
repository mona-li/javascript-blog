'use strict';

function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
    // console.log('Link was clicked!');
    console.log('clickedElement (with plus): ' + clickedElement);

    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('article.post.active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const clickedLinkHref = clickedElement.getAttribute('href');
    console.log(clickedLinkHref);

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(clickedLinkHref);
    console.log(targetArticle);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}