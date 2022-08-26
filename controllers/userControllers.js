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
    }
}