const Blog = require('../models/blog');

// blog_index

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((data) => {
            res.render('index', { blogs: data, title: 'Home' });
        })
        .catch((err) => {
            console.log(err);
        });
};

// blog_create_get

const blog_create_get = (req, res) => {
    res.render('newblogs', { title: 'Create New Blogs'});
};

// blog_create_post

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((data) => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err);
        });
};

// blog_delete

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/' });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_delete
};