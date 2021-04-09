
const getBlogPosts = (doc) =>{
    const blog = document.querySelector('.blogs');
    const blogContent = document.createElement('div');
    blogContent.className = 'blogContent showMore';
    blogContent.id = doc.id;
    blog.appendChild(blogContent);

    const blogPost = document.createElement('div');
    blogPost.className = 'blogPost showMore';
    blogPost.id = doc.id;
    blogContent.appendChild(blogPost);

    const blogImage = document.createElement('img');
    blogImage.className = 'blogImage showMore';
    blogImage.id = doc.id;
    blogImage.src = doc.data().img;
    if(doc.data().img == '' || doc.data().img == null){
        blogImage.src = './images/cat.jpg';
    }
    blogPost.appendChild(blogImage);
    
    const h4 = document.createElement('h4'); 
    if(doc.data().body == null){
        h4.innerText = 'RIP Narvs';
    }else{
        h4.innerText = `${doc.data().body.substring(0,50)} read more...`;
    }
    h4.className = 'showMore';
    h4.id = doc.id;
    blogPost.appendChild(h4);

    const h3 = document.createElement('h3'); 
    h3.innerText = doc.data().title;
    h3.className = 'showMore';
    h3.id = doc.id;
    blogPost.appendChild(h3);

    const h5 = document.createElement('h5');
    h5.innerText = `Writer: ${doc.data().writer}`;
    h5.className = 'showMore';
    h5.id = doc.id;
    blogContent.appendChild(h5);

    console.log(doc);

    // var str = doc.data().body;
    // console.log(`${str.substring(0,50)} read more...`);


}

db.collection('blogs').get().then((snapshot) =>{
    snapshot.docs.forEach((doc) =>{
        getBlogPosts(doc);
    })
})


const blogContentHandler = document.querySelectorAll('.blogContent');
