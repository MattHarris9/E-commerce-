import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons';

import usesStyles from './styles';

const Product = ({ product }) => {
    const classes = usesStyles(); 

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className="classes.cardContent">
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                     </Typography>

                </div>
                <Typography varient="h2 color="textSecondary>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <Iconbutton aria-label="Add to Cart">
                    <AddShoppingCart />
                </Iconbutton>
            </CardActions>

        </Card>
    )
}

export default Product;
