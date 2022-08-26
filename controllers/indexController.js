const {loadProducts} = require('../data/nodeModules')
module.exports ={
    index: (req,res)=>{
        const products = loadProducts();
        res.render('index',{
        title: 'Bla Bla Car',
        products
    });
    }
}

