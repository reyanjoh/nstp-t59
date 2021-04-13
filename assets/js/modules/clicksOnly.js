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

    let tgle = false;
    const toggleBtn = document.querySelectorAll('.toggle-btn');
    const sideNavFilter = document.querySelector('.mobile-side-nav-filter');
    const mobileSideNav = document.querySelector('.mobile-side-nav');
    const blogPage = document.querySelector('.blog-page');
    const body = document.querySelector('body');
    
    document.addEventListener('click', (e) =>{
        // console.log(e.target);
        if(e.target.classList.contains('toggle-btn')){
            tgle = !tgle;
            // console.log(tgle);
            if(tgle == true){
                sideNavFilter.style = 'width: 100%';
                blogPage.style = 'opacity: .4';
                // mobileSideNav.style = 'width: 45%';
                mobileSideNav.style = 'margin-right: 0';
                body.style = 'overflow-y: hidden';
            }else{
                sideNavFilter.style = 'width: 0';
                blogPage.style = 'opacity: 1';
                // mobileSideNav.style = 'width: 0';
                mobileSideNav.style = 'margin-right: -30rem';
                body.style = 'overflow-y: unset';
            }
        }
    })
}
