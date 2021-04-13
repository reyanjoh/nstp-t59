import { Showmore } from './clicksOnly.js';

export const InsertContent = (Blogs) => {

    const div = document.createElement('div');
    for (let i = 0; i < Blogs.length; i++) {
        // console.log( Blogs[i].author);
        const blogsDiv = document.querySelector('.blogs');
        const article = document.createElement('article');
        blogsDiv.appendChild(article);

            const articleHeader = document.createElement('div');
            articleHeader.className = 'article-header flex-horizontal';
            article.appendChild(articleHeader);

                const titleDiv = document.createElement('div');
                titleDiv.className = 'title center-y';
                articleHeader.appendChild(titleDiv);

                    const h2 = document.createElement('h2');
                    h2.innerText = Blogs[i].title;
                    titleDiv.appendChild(h2);
                    
                    let p = document.createElement('p');
                    titleDiv.appendChild(p);


                const publisherDiv = document.createElement('div');
                publisherDiv.className = 'publisher center-y';
                articleHeader.appendChild(publisherDiv);

                    p = document.createElement('p');
                    p.className = 'publisher-timestamp';
                    p.innerText = Blogs[i].timeStamp;
                    publisherDiv.appendChild(p);

                    const authorInfoDiv = document.createElement('div');
                    authorInfoDiv.className = 'author-info';
                    publisherDiv.appendChild(authorInfoDiv);

                        p = document.createElement('p');
                        p.className = 'author-name';
                        p.innerText = Blogs[i].author;
                        authorInfoDiv.appendChild(p);

                        let img = document.createElement('img');
                        img.className = 'author-image';
                        img.src = './images/avatar.jpg';
                        img.alt = `author: ${Blogs[i].author}`;
                        authorInfoDiv.appendChild(img);


/////////////////////////////////////////articleContent/////////////////////////////////////////////////// 

            const articleContent = document.createElement('div');
            articleContent.className = 'article-content';
            article.appendChild(articleContent);

                img = document.createElement('img');
                if(Blogs[i].image == '' || Blogs[i].image == null){
                    let imgSelector = Math.floor(Math.random() * 3)
                    if(imgSelector == 1){
                        img.src = './images/pic01.jpg';
                    }else if(imgSelector == 2){
                        img.src = './images/pic02.jpg';
                    }else if(imgSelector == 3){
                        img.src = './images/pic03.jpg';
                    }
                }else{
                    img.src = Blogs[i].image;
                }
                img.alt = '';
                img.className = 'article-content-img';
                articleContent.appendChild(img);

                p = document.createElement('p');
                p.className = 'article-p';
                // const pp = Blogs[i].body;
                p.innerText =`${Blogs[i].body.substring(0,200)}. . .`;
                articleContent.appendChild(p);

/////////////////////////////////////////articleFooter/////////////////////////////////////////////////// 
            const articleFooter = document.createElement('footer');
            articleFooter.className = 'article-footer';
            article.appendChild(articleFooter);

                const inputButton = document.createElement('input');
                inputButton.className = 'article-footer-button pointer';
                inputButton.id = Blogs[i].id;
                inputButton.type = 'button';
                inputButton.value = 'SHOW MORE';
                articleFooter.appendChild(inputButton);

                const articleFooterDiv = document.createElement('div');
                articleFooterDiv.className = 'like comments';
                articleFooter.appendChild(articleFooterDiv);

                articleFooterDiv.innerHTML = '<i class="fas randomValue not-allowed fa-heart blue-hover after"></i> <i class="fas not-allowed fa-comment blue-hover">0</i>';

                const iValue = document.querySelectorAll('.randomValue');
                for (let k = 0; k < iValue.length; k++) {
                    iValue[k].innerText = `${Math.floor(Math.random() * 100)}`;
                    
                }
    }
}
