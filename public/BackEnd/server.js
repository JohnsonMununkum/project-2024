const express = require('express');
const app = express();
const port = 4000;

//adding cors to the app
const cors = require('cors');
app.use(cors());

//allows the frontend app to make api requets to the backend without encounterung cors issues
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

  //connecting mongoose to server.js
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://g00419319:admin@project-2024.owuzo.mongodb.net/DBproject');

  //data model
  const productSchema = new mongoose.Schema({
    shoe: String,
    price: String,
    //ProductInfo: String,
    pictureImage: String,
    quantity: String
  });

  const ProductStyle = mongoose.model('Product', productSchema);



app.get('/', (req, res) =>{
    res.send("running on por 4000");
});

//retrieve all product data
app.get('/api/products', async (req, res) =>{
    const products = await ProductStyle.find({});
    res.status(200).json({products})
});

//handles delete request
app.put('/api/products/:id', async (req, res) => {
    let products = await ProductStyle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(products);
  });

  //handle delete request
app.delete('/api/products/:id', async (req, res) => {
  
  console.log('Deleting product with ID:', req.params.id);
  const products = await ProductStyle.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "product deleted successfully", products });
  
}
);

//find product by id
app.get('/api/products/:id', async (req, res) => {
  let products = await ProductStyle.findById({ _id: req.params.id });
  res.send(products);
});

//find and update
app.put('/api/products/:id', async (req, res) => {
  let products = await ProductStyle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(products);
});

//handle adding products
app.post('/api/products', async(req, res) => {
    const { shoe, price, pictureImage, quantity } = req.body; // Expecting these fields from the frontend
    const newMovie = new ProductStyle({shoe, price, pictureImage, quantity});
    await newMovie.save();

    // For now, we’ll just log it to the console
    console.log('Product added:', { shoe, price, pictureImage, quantity }); 

    // Responding back to the client
    res.status(201).json({ message: 'Product added successfully!' });
});

//error handling to catch server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//port listening on port 4000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});