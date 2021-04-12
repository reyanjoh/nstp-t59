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

export const toggleBtn = () => {
    let tgle = true;
    const toggleBtn = document.querySelector('.toggle-btn');
    const sideNav = document.querySelector('.mobile-side-nav-filter');
    const mobileSideNav = document.querySelector('.mobile-side-nav');
    const blogPage = document.querySelector('.blog-page');
    


    toggleBtn.addEventListener('click', (e) => {
        tgle = !tgle;
        toggleBtn.style = 'display: hidden';
        sideNav.style = 'display: unset';
        blogPage.style = 'opacity: .4';
        mobileSideNav.style = 'margin-right: 0';
        console.log(tgle);
    });
}
