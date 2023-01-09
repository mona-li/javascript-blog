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

function generateTitleLinks(customSelector = ''){

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  const titleList = document.querySelector(optTitleListSelector);
  //console.log(titleList);

  /* remove contents of titleList */
  titleList.innerHTML = '';

  /* find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log('customSelector');
  console.log(customSelector);
  console.log('optArticleSelector');
  console.log(optArticleSelector);
  console.log('articles');
  console.log(articles);

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

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);
  /* find all tag links with class active */
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for(let tagLink of tagLinks){
    /* remove class active */
    tagLink.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const AllTagLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log(AllTagLinks);
  /* START LOOP: for each found tag link */
  for(let foundTagLink of AllTagLinks) {
    /* add class active */
    foundTagLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
  console.log("taglinks");
  console.log(tagLinks);



  /* START LOOP: for each link */
  for(let tagLink of tagLinks){
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();


/* ASIDE LIST OF AUTHORS - not complete (authors are duplicated)  */

/*function generateAsideAuthorsList(){
  // find all articles *
  const optArticleAuthorSelector = '.post-author';
  const optArticleSelector = '.post';
  const optAuthorsSelector = '.authors';
  const articles = document.querySelectorAll(optArticleSelector);
  let htmlAllAuthors = '';
  // START LOOP: for every article: *
  for(let article of articles){
    // find author-post wrapper *
    //console.log(optArticleAuthorSelector);

    // make html variable with empty string *
    let htmlP = '';
    let htmlLi = '';
    
    // get author from data-author attribute
    const articleAuthor = article.getAttribute('data-author');

    htmlP = 'by ' +  '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';
    htmlLi = '<li><a href="#author-' + articleAuthor + '">' + articleAuthor + '</a></li>';
    htmlAllAuthors = htmlAllAuthors + htmlLi;
    // insert HTML of author-name into the post-author wrapper
    //article.querySelector(optArticleAuthorSelector).innerHTML = htmlP;
  // END LOOP: for every article: 
  }
  // insert HTML of author-names list into the authors wrapper 
  document.querySelector(optAuthorsSelector).innerHTML = htmlAllAuthors; 
}

generateAsideAuthorsList(); */




/* HOMEWORK - Add author to article */
function generateAuthor(event){
  /* find all articles */
  const optArticleAuthorSelector = '.post-author';
  const optArticleSelector = '.post';
  //const optAuthorsSelector = '.authors';
  const articles = document.querySelectorAll(optArticleSelector);
  //let htmlAllAuthors = '';
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find author-post wrapper */
    //console.log(optArticleAuthorSelector);

    /* make html variable with empty string */
    let htmlP = '';
    //let htmlLi = '';
    
    /* get author from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');

    htmlP = 'by ' +  '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';
    //htmlLi = '<li><a href="#author-' + articleAuthor + '">' + articleAuthor + '</a></li>';
    //htmlAllAuthors = htmlAllAuthors + htmlLi;
    /* insert HTML of author-name into the post-author wrapper */
    article.querySelector(optArticleAuthorSelector).innerHTML = htmlP;
  /* END LOOP: for every article: */
  }
  /* insert HTML of author-names list into the authors wrapper */
  //document.querySelector(optAuthorsSelector).innerHTML = htmlAllAuthors; 
}

generateAuthor();

function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const author = href.replace('#author-', '');
  console.log(author);
  /* find all tag links with class active */
  const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');
  /* START LOOP: for each active tag link */
  for(let authorLink of authorLinks){
    /* remove class active */
    authorLink.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const AllAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log(AllAuthorLinks);
  /* START LOOP: for each found tag link */
  for(let foundAuthorLink of AllAuthorLinks) {
    /* add class active */
    foundAuthorLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors(){
  /* find all links to authors */
  const authorLinks = document.querySelectorAll('a[href^="#author-"]');
  console.log("clicked-authorlinks");
  console.log(authorLinks);

  /* START LOOP: for each link */
  for(let authorLink of authorLinks){
    /* add authorClickHandler as event listener for that link */
    authorLink.addEventListener('click', authorClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToAuthors()