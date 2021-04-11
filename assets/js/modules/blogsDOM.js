  
export const HideBlogArticlePContent = () => {
    const articleP = document.querySelectorAll('.article-p');
    for (let i = 0; i < articleP.length; i++) {
        console.log(articleP[i].innerText.substring(0,50));
    }
}
