const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) =>{
    res.send('My products');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/hello/:name/:lname', (req, res)=>{
    res.send("Hello "+req.params.name+" "+req.params.lname);
})

app.get('/api/products', (req, res) => {
    const products = [
        {
            "Title": "Air Force 1s",
            "Price": "€80",
            "productID": "p1234",
            "Type": "shoe",
            "PictureImage": ""
        },
        {
            "Title": "Dior B22s",
            "Price": "€800",
            "productID": "p12345",
            "Type": "shoe",
            "PictureImage": ""
        },
        {
            "Title": "Nike Reacts",
            "Price": "€90",
            "productID": "p123456",
            "Type": "shoe",
            "PictureImage": ""
        },
        {
            "Title": "Air Jordan 4 'White Thunder'",
            "Price": "€280",
            "productID": "p234",
            "Type": "shoe",
            "PictureImage": ""
        },
        {
            "Title": "LV Skate 'beige'",
            "Price": "€940",
            "productID": "p2345",
            "Type": "shoe",
            "PictureImage": ""
        },
        {
            "Title": "University Blue Forces",
            "Price": "€180",
            "productID": "p23456",
            "Type": "shoe",
            "PictureImage": ""
        }
    ];
    res.json({ products });
});

//error handling to catch server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});