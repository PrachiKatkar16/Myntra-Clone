import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Image, Text, Box } from '@chakra-ui/react';

const ShopByCategory = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    const fetchCategoryImages = async () => {
        try {
            const response = await fetch('https://myntra-clone-1-8u19.onrender.com/slider/category/shopbycategory', {
                method: 'GET',
            });
            const data = await response.json();

            if (response.ok) {
                setImages(data);
            } else {
                setError(data.message || 'Failed to fetch images');
            }
        } catch (error) {
            setError('An error occurred while fetching images');
        }
    };

    useEffect(() => {
        fetchCategoryImages();
    }, []);

    if (error) {
        return <Box textAlign="center" color="red.500">{error}</Box>;
    }

    return (
        <Box >
            <Text style={{ color: 'red', fontWeight: 'bold', margin: '30px', textAlign:"center", fontFamily: 'sans-serif', fontSize: '50px', paddingLeft: '30px' }}>SHOP BY CATEGORY</Text>
            <Grid templateColumns="repeat(6,1fr)" gap={6} margin={"50px"}>
                {images.map((image) => (
                    <GridItem
                        key={image._id}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        
                    >
                        <Image
                            src={image.imgUrl}
                            alt={image.altName || 'Category Image'}
                            objectFit="cover"
                            objectPosition="center"
                            width={"100%"}
                            height={"auto"}
                           
                            display={"block"}
                            
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default ShopByCategory;
