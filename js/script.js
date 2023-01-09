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
  //console.log(clickedLinkHref);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(clickedLinkHref);
  //console.log(targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

function generateTitleLinks(){

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  const titleList = document.querySelector(optTitleListSelector);
  //console.log(titleList);

  /* remove contents of titleList */
  titleList.innerHTML = '';

  /* find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  /* for each article */
  for(let article of articles){
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    //console.log(linkHTML);

    /* get the article id */
    //console.log(articleId);

    /* find the title element */
    const titleElement = article.querySelector(optTitleSelector);
    console.log(titleElement);

    /* get the title from the title element + create HTML of the link */
    const titleText = article.querySelector(optTitleSelector).innerHTML;
    console.log(titleText);
       
    /* insert link into titleList */
    html = html + linkHTML;
    //console.log(html);
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log(links);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags(){
    /* find all articles */
    const optArticleTagsSelector = '.post-tags .list';
    const optArticleSelector = '.post';
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

    /* START LOOP: for every article: */
    for(let article of articles){
      /* find tags wrapper */
      console.log(optArticleTagsSelector);

      /* make html variable with empty string */
      let html = '';
      let tagNode = '';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');

      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        /* generate HTML of the link */
        tagNode = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

        /* add generated code to html variable */
        html = html + tagNode;

      /* END LOOP: for each tag */
      }
  
      /* insert HTML of all the links into the tags wrapper */
      article.querySelector(optArticleTagsSelector).innerHTML = html;

    /* END LOOP: for every article: */
    }
  }
  
generateTags();