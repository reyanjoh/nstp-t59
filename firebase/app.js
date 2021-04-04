const getBlogPosts = (doc) =>{
    const blog = document.querySelector('.blogs');
    const blogContent = document.createElement('div');
    blogContent.className = 'blogContent';
    blog.appendChild(blogContent);

    const blogPost = document.createElement('div');
    blogPost.className = 'blogPost';
    blogContent.appendChild(blogPost);

    const blogImage = document.createElement('img');
    blogImage.className = 'blogImage';
    blogImage.src = doc.data().img;
    if(doc.data().img == '' || doc.data().img == null){
        blogImage.src = './images/cat.jpg';
    }
    blogPost.appendChild(blogImage);
    
    const h4 = document.createElement('h4'); 
    h4.innerText = `Writer: ${doc.data().writer}`;
    blogPost.appendChild(h4);

    const h5 = document.createElement('h5');
    h5.innerText = doc.data().title;
    blogContent.appendChild(h5);

}

db.collection('blogs').get().then((snapshot) =>{
    snapshot.docs.forEach((doc) =>{
        getBlogPosts(doc);
    })
})


const blogContentHandler = document.querySelectorAll('.blogContent');