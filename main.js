const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Please use the API endpoints defined in the source code.');
});

app.get('/getProducts', (req, res) => {
        const data = {
            "collections" : [
                {
                    id: 1,
                    name: "Letters with Love",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
                    order: 1, 
                    image_link: "https://picsum.photos/200/300", 
                    products: [
                        {
                            id: 11, 
                            name: "Elegant Ring", 
                            order: 1, 
                            image_link: "https://picsum.photos/200/300", 
                            description: "An elegant ring with a beautiful diamond in the middle. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            measurements: "12mm x 12mm",
                            article_number: "123456789",
                        },
                        {
                            id: 102, 
                            name: "Fancy Ring", 
                            order: 2, 
                            image_link: "https://picsum.photos/200/300", 
                            description: "A very fancy ring. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            measurements: "12mm x 12mm",
                            article_number: "567891234",
                        },
                        {
                            id: 341, 
                            name: "Shiny Ring", 
                            order: 3, 
                            image_link: "https://picsum.photos/200/300", 
                            description: "This ring is so shiny. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            measurements: "12mm x 12mm",
                            article_number: "234567891",
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Endless Summer",
                    description: "Dont you just love the beach? Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
                    order: 2, 
                    image_link: "https://picsum.photos/200/300", 
                    products: [
                        {
                            id: 23, 
                            name: "Dolphine Bracelet",
                            order: 1, 
                            image_link: "https://picsum.photos/200/300", 
                            description: "A bracelet for maritime lovers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            measurements: "12mm x 3 mm",
                            article_number: "8763571712",
                        },
                        {
                            id: 87, 
                            name: "Whale Ring", 
                            order: 2, 
                            image_link: "https://picsum.photos/200/300", 
                            description: "A massive ring. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            measurements: "12mm x 12mm",
                            article_number: "567891234",
                        },
                        {
                            id: 5, 
                            name: "Shiny Ring", 
                            order: 3, 
                            image_link: "https://picsum.photos/200/300", 
                            description: "This ring is so shiny. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            measurements: "12mm x 12mm",
                            article_number: "234567891",
                        },
                    ]
                },
                {
                    id: 1,
                    name: "Eye of the Night",
                    description: "A dark collection, inspired by Nocturne. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
                    order: 3, 
                    image_link: "https://picsum.photos/200/300", 
                    products: [
                        {
                            id: 13, 
                            name: "Dark Pendant", 
                            order: 1, 
                            image_link: "https://picsum.photos/200/300", 
                            description: "A dark pendant. Kinda spooky. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            measurements: "12mm x 12mm",
                            article_number: "123456789",
                        },
                        {
                            id: 101, 
                            name: "Nocturnal Ring", 
                            order: 2, 
                            image_link: "https://picsum.photos/200/300", 
                            description: "A ring like a moon. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            measurements: "12mm x 12mm",
                            article_number: "567891234",
                        },
                        {
                            id: 106, 
                            name: "Evening Bracelet", 
                            order: 3, 
                            image_link: "https://picsum.photos/200/300", 
                            description: "Bracelet for an evening dress. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            measurements: "12mm x 12mm",
                            article_number: "234567891",
                        },
                    ]
                },
            ]
        };
        res.json(data);
});

app.get('/getClientData', (req, res) => {
        const data = {
            name: "John Doe",
            image_link: "https://picsum.photos/200/300",
        };
        res.json(data);
});

app.get('/getProductConfig/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    if (!productId) {
        res.status(400).send('Bad Request');
    }

    const data =  {
        id: productId,
        name: "Elegant Ring", 
        image_link: "https://picsum.photos/200/300", 
        description: "An elegant ring with a beautiful diamond in the middle. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        measurements: "12mm x 12mm",
        article_number: "123456789",
        variants: [
            {
                id: 129,
                art_no: 1234,
                name: "Gold 585 classic",
                alloys: [
                    "585 yellow gold"
                ]
            },
            {
                id: 155,
                art_no: 3456,
                name: "Multicolor",
                alloys: [
                    "585 yellow gold",
                    "585 white gold",
                    "585 red gold"
                ]
            },
        ],
        stone_configs: [
            {
                position: "center",
                config: "c8a171ab6d6c1a1eda7c1a34fcbd78f2a1908a12"
            },
            {
                position: "left",
                config: "d5200eeac6f2c2f13031970e96eae4e8907cd6e9"
            },
            {
                position: "right",
                config: "d5200eeac6f2c2f13031970e96eae4e8907cd6e9"
            }
        ]            
    };
    res.json(data);
});

app.get('/getStones/:hash', (req, res) => {
    const hash = req.params.hash;
    const validHashPattern = /^[a-fA-F0-9]{40}$/; // Regular expression to match a valid hash pattern

    if (!validHashPattern.test(hash)) {
        res.status(400).send('Bad Request');
    }

    const data = {
        stones: [
            {
                id: 12,
                art_no: 12343,
                certificate: null,
                clarity: "VS1",
                color: "F",
                cut: "Excellent",
                hue: "red 2",
                image_link: "https://picsum.photos/200/300",
                kind: "natural",
                polish: "Ideal",
                shape: "round",
                symmetry: "Good",
                type: "ruby",
                video_link: null,
                diameter: 425,
                price: 1000,
                weight: 45
            },
            {
                id: 8,
                art_no: 1234,
                certificate: "GIA12718193",
                clarity: "VS1",
                color: "F",
                cut: "Excellent",
                hue: null,
                image_link: "https://picsum.photos/200/300",
                kind: "natural",
                polish: "Ideal",
                shape: "round",
                symmetry: "Good",
                type: "diamond",
                video_link: "https://link.to/video.mp4",
                diameter: 425,
                price: 1400,
                weight: 41
            }
            ]
        };
    res.json(data);
});


app.post('/determinePrice', (req, res) => {
    body = req.body;    

    // extract the following data from the request body
    // 1. extract stones array
    // stones = [{id: 12, postion: "center"}, {id: 8, position: "left"}, {id: 8, position: "right"}];
    // 2. extract product id
    // 3. extract variant id
    
    const data = {
        price: 2400
    };
    res.json(data);
});

app.post('/placeOrder', (req, res) => {
    body = req.body;    

    // extract the following data from the request body
    // 1. extract stones array
    // stones = [{id: 12, postion: "center"}, {id: 8, position: "left"}, {id: 8, position: "right"}];
    // 2. extract product id
    // 3. extract variant id

    const data = {
        order_id: 1245,
        status: "successfully placed"
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
