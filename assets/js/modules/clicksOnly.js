export const Showmore = (Blogs) => {
    const articleButton = document.querySelectorAll('.article-footer-button')

    for (let i = 0; i < articleButton.length; i++) {
        articleButton[i].addEventListener('click', (e) => {
            console.log(articleButton[i]);
            if(articleButton[i].value == 'SHOW MORE'){
                articleButton[i].value = 'SHOW LESS';
                articleButton[i].parentElement.previousElementSibling.lastElementChild.innerText = Blogs[i].body;
            }else{
                articleButton[i].value = 'SHOW MORE';
                articleButton[i].parentElement.previousElementSibling.lastElementChild.innerText = `${Blogs[i].body.substring(0,200)}. . .`;
            }
            
        });
        
    }
}
