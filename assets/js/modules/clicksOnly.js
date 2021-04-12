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
    const toggleBtn = document.querySelectorAll('.toggle-btn');
    const sideNavFilter = document.querySelector('.mobile-side-nav-filter');
    const mobileSideNav = document.querySelector('.mobile-side-nav');
    const blogPage = document.querySelector('.blog-page');
    


    toggleBtn[0].addEventListener('click', (e) => {
        tgle = !tgle;
        // toggleBtn.style = 'display: hidden';
        if( !tgle ){
            sideNavFilter.style = 'display: unset';
            blogPage.style = 'opacity: .4';
            mobileSideNav.style = 'margin-right: 0';
            console.log(tgle);
        }
        
    });

    sideNavFilter.addEventListener('click', (e) => {
        if(e.target.classList == 'mobile-side-nav-filter'){
            tgle = !tgle;
        console.log(e.target);
        // toggleBtn.style = 'display: hidden';
            if( tgle ){
                sideNavFilter.style = 'display: none';
                blogPage.style = 'opacity: 1';
                mobileSideNav.style = 'margin-right: -30rem';
                console.log(tgle);
            }
        }
        
    });


}
