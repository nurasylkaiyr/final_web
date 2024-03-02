const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



//Routes
router.get('', async (req, res) => {
    const locals = {
        title: "FinalProject",
        description: "Simple project for Final Exam"
    }

    try {
        const data = await Post.find();
        res.render('index', {locals, data});
    }catch(error){
        console.log(error);
    }

});

//Post :id
router.get('/post/:id', async (req, res) => {
    try {
      let slug = req.params.id;
  
      const data = await Post.findById({ _id: slug });
  
      const locals = {
        title: data.title,
        description: "Simple Blog created with NodeJs, Express & MongoDb.",
      }
  
      res.render('post', { 
        locals,
        data,
        currentRoute: `/post/${slug}`
      });
    } catch (error) {
      console.log(error);
    }
  
  });


router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
// function insertPostData () {
//   Post.insertMany([
//     {
//         "title": "Minimalist Logo Design",
//         "body": "A collection of minimalist logo designs showcasing simplicity and elegance in branding."
//     },
//     {
//         "title": "Typography Showcase",
//         "body": "Explore a variety of typography designs ranging from bold to delicate."
//     },
//     {
//         "title": "Illustration Series: Urban Landscapes",
//         "body": "A series of illustrations capturing the essence of urban landscapes with vibrant colors and intricate details."
//     },
//     {
//         "title": "Website UI/UX Redesign",
//         "body": "Revamped user interfaces for popular websites focusing on usability and aesthetics."
//     },
//     {
//         "title": "Photography Portfolio: Nature's Beauty",
//         "body": "Stunning photographs of landscapes, wildlife, and natural wonders from around the world."
//     },
//     {
//         "title": "Package Design Collection",
//         "body": "Innovative and eye-catching package designs for various products, from food to electronics."
//     },
//     {
//         "title": "Digital Art: Fantasy Worlds",
//         "body": "Imaginative digital artworks depicting fantastical worlds and characters."
//     },
//     {
//         "title": "Motion Graphics Reel",
//         "body": "Dynamic motion graphics showcasing creativity in animation and visual effects."
//     },
//     {
//         "title": "Branding Identity Projects",
//         "body": "Comprehensive branding identity projects including logos, stationery, and brand guidelines."
//     },
//     {
//         "title": "Fashion Design Lookbook",
//         "body": "A lookbook featuring trendy and stylish fashion designs for various seasons and occasions."
//     },
//     {
//         "title": "Product Design Innovations",
//         "body": "Innovative product designs solving real-world problems and enhancing user experiences."
//     },
//     {
//         "title": "Architecture Portfolio: Modern Structures",
//         "body": "Architectural marvels featuring sleek and contemporary designs for residential and commercial spaces."
//     },
//     {
//         "title": "User Interface Design: Mobile Apps",
//         "body": "User-friendly and visually appealing mobile app interfaces designed for seamless interaction."
//     },
//     {
//         "title": "Graphic Design Projects: Print Media",
//         "body": "Print media designs including posters, flyers, and brochures highlighting creativity and attention to detail."
//     },
//     {
//         "title": "Artisan Crafts Collection",
//         "body": "Handcrafted artisanal products ranging from pottery to woodworking, showcasing craftsmanship and creativity."
//     }
//   ])
// }

// insertPostData();

