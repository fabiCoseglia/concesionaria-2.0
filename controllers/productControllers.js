const {loadProducts,storeProducts,toThousand} = require('../data/nodeModules');

module.exports = {
   
    admin:(req,res) =>{
        const cars = loadProducts();
       return  res.render('productsTable',{
        title: 'Admin Table',
        cars,
        toThousand
       });
    },

    
    detail:(req,res) =>{
        const cars = loadProducts();
        
        const {id} = req.params;
        const car = cars.find(car => car.id === +id);
        
        return res.render('detailProduct',{
            title: 'Detalle del Producto',
            car,
            toThousand
        }) 
    },

    addProduct :(req,res) =>{
        return res.render('addProduct',{
            title: 'Crear Producto'
        });
    },
    createProduct: (req,res) =>{
        const cars = loadProducts();
        const {id,name,price,description,model,image} = req.body;
        
        const newCar = {
            id : (cars[cars.length - 1].id + 1),
            name : name.trim(),
            description : description.trim(),
            image : 'default-cars.png',
            model: +model,
            price : +price ,
            image: req.file ? req.file.filename : "default-cars.png"   
        };

        let carsModifed = [...cars,newCar];
        storeProducts(carsModifed);

        return res.redirect('/products/admin')
    },
    destroy : (req,res) =>{
        const cars = loadProducts();
        const {id} = req.params;

        const deletedCar = cars.filter(car => car.id !== +id);
        storeProducts(deletedCar);
        return res.redirect('/products/admin');
    },
    editProduct : (req,res) =>{
        const products = loadProducts();
         const {id} = req.params;
         const product = products.find(product => product.id === +id);

         return res.render('editProduct',{
            title: 'Editar Producto',
            product,
            toThousand,
         })
    },
    editProductProcess: (req,res) => {
        const products = loadProducts();
        const {id} = req.params;
        let {name,price,description,image,model} = req.body;

        const productModify = products.map(product => {
			if(product.id === +id){
				return{...product,
				name: name.trim(),
			    price: +price,
				description: description.trim(),
                model: model.trim(),
				image: req.file ? req.file.filename : "default-cars.png"

			}
			}
			return product
		})
        storeProducts(productModify);
        return res.redirect('/products/admin')

    }   
}