
const products = [
    { id: 1, name: 'Garnier Serum 30ml', price: 599, image: require('../assets/product1.png')},
    { id: 2, name: 'Garnier Facial Wash', price: 190, image: require('../assets/product2.jpg')},
    { id: 3, name: 'Garnier UV Sunscreen', price: 150, image: require('../assets/product3.jpg')}
];

const users = [
    { 
        userId: 1,
        email: 'gelvi@gmail.com', 
        password: 'gelvi123', 
        isloggedIn: false,
        userCart: [] 
    }
];

const cart = [];
const loggedInUserEmail = '';
export { products, cart, users, loggedInUserEmail };
