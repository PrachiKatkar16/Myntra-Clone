import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

function FirstSlider() {
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchSliderImages = async () => {
          try {
            const response = await fetch("https://myntra-clone-1-8u19.onrender.com/slider/category/homepage-slider", {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            });
    
            const data = await response.json();
            console.log("Fetched data:", data); // Debug: Log the fetched data
    
            if (response.ok && Array.isArray(data)) {
              setImages(data);
            } else {
              console.error("Failed to fetch images: No valid data returned");
            }
          } catch (error) {
            console.error("An error occurred while fetching images:", error);
          }
        };
    
        fetchSliderImages();
      }, []);
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true
      };
    
      return (
        <div>
         
          <Box padding="10px">
            {images.length > 0 ? (
              <Slider {...settings}>
                {images.map((image, index) => (
                  <Box key={index}>
                    <img
                      src={image.imgUrl}
                      alt={image.altName || `Slide ${index + 1}`}
                      style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                    />
                  </Box>
                ))}
              </Slider>
            ) : (
              <p>No images to display</p>  // Handle case when no images are available
            )}
          </Box>
    
        </div>
      );
    }

export default FirstSlider