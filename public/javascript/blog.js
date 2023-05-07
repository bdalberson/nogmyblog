const fetchBlogPosts = async () => {
    const response = await fetch('/api/blog');
    const html = await response.text();
    document.getElementById('blog-posts-container').innerHTML = html;
  };
  
  fetchBlogPosts();