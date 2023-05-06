const router = require('express').Router();
const { BlogPost } = require('../../models');



//get all blog posts
router.get('/', async (req, res) => {
    try {
      const blogPosts = await BlogPost.findAll();
      res.json(blogPosts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error getting blog posts' });
    }
  });

  //create a blog post
  router.post('/', async (req, res) => {
    const { title, dateCreated, creatorName, commentContent } = req.body;
    try {
      const newBlogPost = await BlogPost.create({
        title,
        dateCreated,
        creatorName,
        commentContent,
      });
      res.json(newBlogPost);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error creating blog post' });
    }
  });
  
//update a blog post
router.put('/:id', async (req, res) => {
    const { title, dateCreated, creatorName, commentContent } = req.body;
    try {
      const [numRows, [updatedBlogPost]] = await BlogPost.update(
        {
          title,
          dateCreated,
          creatorName,
          commentContent,
        },
        {
          returning: true,
          where: { id: req.params.id },
        }
      );
      if (numRows === 0) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      res.json(updatedBlogPost);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error updating blog post' });
    }
  });

  

module.exports = router;
