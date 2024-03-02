const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminLayout = '../views/layouts/admin';
const jwtSecret = process.env.JWT_SECRET;


//Routes
router.get('/admin', async (req, res) => {

    try {
        const locals = {
            title: "Admin Page",
            description: "Simple project for Final Exam"
        }

        res.render('admin/index', {locals, layout: adminLayout});
    }catch(error){
        console.log(error);
    }

});

/**
 * POST /
 * Admin - Check Login
*/
router.post('/admin', async (req, res) => {
    try {
        const { username, password } = req.body;
        if(req.body.username == 'admin' && req.body.password == 'admin'){
            res.send('You are logged in');
        }else{
            res.send('Wrong username or password');
        }
        
    } catch (error) {
      console.log(error);
    }
  });





module.exports = router;