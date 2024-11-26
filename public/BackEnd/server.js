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
   /* const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://Admin:Admin@admin.hk6jv.mongodb.net/');

  //data model
  const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    ProductInfo: String,
    PictureImage: String
  });

  const Product = mongoose.model('Product', productSchema);

*/

app.get('/', (req, res) =>{
    res.send("running on por 4000");
});


app.get('/api/products', (req, res) => {
    const products = [
        {
            "Title": "Air Force 1s",
            "Price": "€80",
            "productID": "p1234",
            "Type": "shoe",
            "ProductInfo": "Reimagining legendary style, these Air Force 1 Low sneaks from Nike are a modern take on the '82 icon In a fresh white colourway, these downsized kicks are built with a smooth leather and synthetic upper with a tonal lace up fastening for a locked in fit.",
            "PictureImage": "https://i8.amplience.net/i/jpl/jd_027536_b?qlt=92&w=750&h=531&v=1&fmt=auto"
        },
        {
            "Title": "Dior B22s",
            "Price": "€800",
            "productID": "p12345",
            "Type": "shoe",
            "ProductInfo": "The B22 sneaker has become a new House essential distinguished by its modern and sporty silhouette. Crafted in black mesh and technical fabric.",
            "PictureImage": "https://th.bing.com/th/id/OIP.5TOglzHqFXILe-dMt1t7KwAAAA?rs=1&pid=ImgDetMain"
        },
        {
            "Title": "Nike Reacts",
            "Price": "€90",
            "productID": "p123456",
            "Type": "shoe",
            "ProductInfo": "The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vivid colours are combined in a design influenced by the exaggerated world of our dreams, while React foam and an ultra-plush tongue provide surreal comfort.",
            "PictureImage": "https://sneakernews.com/wp-content/uploads/2019/11/nike-react-element-55-schematic-black-2.jpg"
        },
        {
            "Title": "Air Jordan 4 'White Thunder'",
            "Price": "€280",
            "productID": "p234",
            "Type": "shoe",
            "ProductInfo": "The Jordan 4 Retro White Thunder reimagines the iconic Jordan 4 silhouette with a sleek and modern twist. Drawing inspiration from the beloved Black and Yellow Thunder 4s that last dropped in 2023, this new iteration brings a bold contrast with its black nubuck upper, complemented by crisp white accents.",
            "PictureImage": "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/62d1b878-a7ba-4e40-9657-c6f874d67b82/AIR+JORDAN+4+RETRO.png"
        },
        {
            "Title": "LV Skate 'beige'",
            "Price": "€940",
            "productID": "p2345",
            "Type": "shoe",
            "ProductInfo": "his sneaker merges the laid-back vibe of skateboarding with the opulence of Louis Vuitton, featuring a sleek beige and white color palette that exudes elegance and understated style. ",
            "PictureImage": "https://i.pinimg.com/originals/c8/13/ea/c813eac6c9c2b00cfc94f0a760164f10.png"
        },
        {
            "Title": "University Blue Forces",
            "Price": "€180",
            "productID": "p23456",
            "Type": "shoe",
            "ProductInfo": "The upper of this Low Air Force 1 by Nike features stitched leather overlays. This shoe includes Nike Air cushioning as well.",
            "PictureImage": "https://sneakernews.com/wp-content/uploads/2019/06/off-white-nike-air-force-1-mca-blue-CI1173-400-2.jpg?w=1140"
        }
    ];
    res.json({ products });
});

   /* app.post('/api/products', async (req, res) => {

        const {title, price, productInfo, pictureImage} = req.body;

        const newProduct = new Product({title, price, productInfo, pictureImage});
        await newProduct.save();

        res.status(201).json({ message:})
    })*/

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