const fs = require('fs');
const path = require('path');


//products//
const loadProducts = () => {
    const productsFilePath = path.join(__dirname, 'productsDataBase.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products;
};

const storeProducts = (products) => {
    fs.writeFileSync(path.join(__dirname,'productsDataBase.json'),JSON.stringify(products,null,3),'utf-8')
};

//USERS//
const loadUsers = () =>{
    const usersFilePath = path.join(__dirname,'usersDataBase.json');
    const users = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));
    return users;
};

const storeUsers = (users) =>{
   fs.writeFileSync(path.join(__dirname,'usersDataBase.json'),JSON.stringify(users,null,3),'utf-8')
};

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    loadProducts,
    storeProducts,
    loadUsers,
    storeUsers,
    toThousand,
}
