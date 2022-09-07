const {loadUsers,storeUsers} = require('../data/nodeModules');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');


module.exports={
    login: (req,res)=>{
        res.render('login',{
            title: 'Login User'
        });
    },
    register: (req,res)=>{
        res.render('register',{
            title: 'Registro'
        });
    },
    createUser: (req,res)=>{
        let errors = validationResult(req);
       
        //si no existen errores =>
        if (errors.isEmpty()) { 
        
        const users = loadUsers();
        const {name, lastname, password, email,city,ccp} = req.body;


        let newUser = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
            name : name.trim(),
            lastname: lastname.trim(),
            email: email.trim(),
            password: bcryptjs.hashSync(password, 10),
            image: 'defaul-cars.png',
            rol: 'user',
            city,
            ccp: +ccp
        };

        let modifiedUsers = [...users,newUser];

        storeUsers(modifiedUsers);

        return res.redirect('/');
    
    }else{
        return res.render('register',{
        errors: errors.mapped(), 
        old: req.body,
        title: 'Registro'
        });
    }
        
    },
    processLogin: (req,res) =>{
        const users = loadUsers();
        
    }
}