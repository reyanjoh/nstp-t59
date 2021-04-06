
// const showMoredata = (targetId) =>{
//     console.log(db.collection('blogs').doc(targetId));
    
//     // db.collection('blogs').doc(targetId).delete();
//     // setTimeout((e)=>{
//     //     window.location.reload();
//     // }, 1000)
    
// }

const showMore = (target) =>{
    if(target.classList.contains('showMore')){

        const targeId = db.collection('blogs').doc(target.id);
        console.log(targeId.collection);

        // showMoredata(target.id);
    }
}

const blogs = document.querySelector('.blogs').addEventListener('click', (e) =>{
    showMore(e.target)
});
