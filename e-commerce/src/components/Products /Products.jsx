import React from 'react';
import { Grid }  from '@material-ui/core';

import Product from "./Product/Product"

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price:'$5', image: 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Running/580/best+shoes-launch.jpg'  },
    {id: 2, name: "Macbook pro", description: "Apple Laptop", price: '$500', image: 'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-13..1588802180.jpg'},
];

const Products = () => {

    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))};
        </Grid>
    </main>

    )
    


    
};

export default Products;