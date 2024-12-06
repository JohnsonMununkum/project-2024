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
   // mongoose.connect('mongodb+srv://Admin:Admin@admin.hk6jv.mongodb.net/mydb');
   mongoose.connect('mongodb+srv://admin:admin@martinscluster.w5rtkz0.mongodb.net/DB14');

  //data model
  const productSchema = new mongoose.Schema({
    shoe: String,
    price: Number,
    //ProductInfo: String,
    pictureImage: String
  });

  const ProductStyle = mongoose.model('Product', productSchema);



app.get('/', (req, res) =>{
    res.send("running on por 4000");
});

app.get('/api/products', async (req, res) =>{
    const products = await ProductStyle.find({});
    res.status(200).json({products})
});

//handle adding products
app.post('/api/products', async(req, res) => {
    const { shoe, price, pictureImage } = req.body; // Expecting these fields from the frontend
    const newMovie = new ProductStyle({shoe, price, pictureImage});
    await newMovie.save();

    // For now, we’ll just log it to the console
    console.log('Product added:', { shoe, price, pictureImage }); 

    // Responding back to the client
    res.status(201).json({ message: 'Product added successfully!' });
});


        //get products
     /*   app.get('/api/products', async (req, res) => {
            const products = await Product.find({});
            res.json(products);
        });*/

//error handling to catch server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//port listening on port 4000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});