import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Grid,
  GridItem,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './Men.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaHeart, FaStar } from 'react-icons/fa';

function Men({ addToWishlist }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    fetch('https://myntra-clone-2-jz9i.onrender.com/cloth/category/Mens', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); 
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
        setError('Failed to fetch products');
      });
  }, []);

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    let sortedProducts = [...filteredProducts];
    switch (selectedOption) {
      case 'price-asc':
        sortedProducts.sort((a, b) => a.discounted_price - b.discounted_price);
        break;
      case 'price-desc':
        sortedProducts.sort((a, b) => b.discounted_price - a.discounted_price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
    setCurrentPage(1); 
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(filteredProducts.length / itemsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  const handleBrandChange = (brand) => {
    let updatedSelectedBrands = [...selectedBrands];
    if (updatedSelectedBrands.includes(brand)) {
      updatedSelectedBrands = updatedSelectedBrands.filter(item => item !== brand);
    } else {
      updatedSelectedBrands.push(brand);
    }
    setSelectedBrands(updatedSelectedBrands);

    if (updatedSelectedBrands.length === 0) {
      setFilteredProducts(products);
    } else {
      const updatedFilteredProducts = products.filter(product =>
        updatedSelectedBrands.includes(product.brand)
      );
      setFilteredProducts(updatedFilteredProducts);
      setCurrentPage(1); 
    }
  };

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const uniqueBrands = [...new Set(products.map(product => product.brand))];

  return (
    <Box>
      <Navbar />
      <Box padding="4">
        <Grid templateColumns="1fr 3fr" gap={6}>
          <Box>
            <Text fontWeight="bold" fontSize='4xl' mb={4} color='#ee64a6'>Mens: {filteredProducts.length}</Text>
            <Text fontWeight="bold" mb={2}>Filter by Brand</Text>
            <CheckboxGroup value={selectedBrands}>
              <Stack spacing={2}>
                {uniqueBrands.map((brand, index) => (
                  <Checkbox key={index} value={brand} onChange={() => handleBrandChange(brand)}>
                    {brand}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          </Box>
          <Box>
            <Select placeholder="Sort by" value={sortOption} onChange={handleSortChange} marginBottom="4" width='500px' backgroundColor='#e2e8f0'>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </Select>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              {currentProducts.map(product => (
                <GridItem key={product._id} className="product-card" p={2} boxShadow="md" borderRadius="md">
                  <VStack spacing={2} align="start">
                    <Image src={product.images} alt={product.title} className="product-image" objectFit="cover" />
                    <Text className="product-title" fontSize="sm" fontWeight="bold">{product.title}</Text>
                    <Text fontSize="sm">{product.brand}</Text>
                    <HStack spacing={2}>
                      <Text className="product-price" fontSize="sm">Rs.{product.discounted_price}</Text>
                      <Text className="product-strike-price" fontSize="xs" textDecoration="line-through">Rs.{product.strike_price}</Text>
                      <Text className="product-discount" fontSize="xs" color="green.500">{product.discount}</Text>
                    </HStack>
                    <HStack spacing={1}>
                      <Text fontSize="sm">{product.rating}</Text>
                      <FaStar color="black" size="12px" />
                      <Text fontSize="xs" color="gray.500">({product.rating_count})</Text>
                    </HStack>
                    <Button
                      leftIcon={<FaHeart />}
                      colorScheme='pink'
                      variant='solid'
                      size="sm"
                      onClick={() => addToWishlist(product)}
                    >
                      Add to Wishlist
                    </Button>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
            <HStack spacing={4} marginTop="4" justifyContent="center">
              <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </Button>
              {[...Array(totalPages).keys()].map(page => (
                <Button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  isActive={currentPage === page + 1}
                >
                  {page + 1}
                </Button>
              ))}
              <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </Button>
            </HStack>
          </Box>
        </Grid>
      </Box>
      <Divider />
      <Footer />
    </Box>
  );
}

export default Men;
