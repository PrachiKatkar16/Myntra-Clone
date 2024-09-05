import { Box, Flex, IconButton, Img, Input, InputGroup, InputLeftElement, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import React, { useState } from 'react';
import './Navbar.css';
import { CiUser } from "react-icons/ci";
import { PiHeartStraightThin } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import myntralogo from '../assets/myntralogo.png';
import ProfileBox from './ProfileBox';  // Import the ProfileBox component

function Navbar() {
  const [showProfileBox, setShowProfileBox] = useState(false); // State for hover effect

  return (
    <div>
      <Flex className='navbar'>
        <Flex className='navbar-container'>
          <Box className='navbar-logo'>
            <RouterLink to='/'>
              <Img src={myntralogo} height={{ base: '30px', md: '40px' }} alt="Myntra Logo" />
            </RouterLink>
          </Box>
          <Flex display={{ base: 'none', md: 'flex' }} className='navbar-links' ml={14}>
            <Box className='dropdown'>
              <RouterLink to='/men'><Link className='navbar-link'>MEN</Link></RouterLink>
            </Box>
            <RouterLink to='/women'><Link className='navbar-link'>WOMEN</Link></RouterLink>
            <RouterLink to="/kids"><Link className='navbar-link'>KIDS</Link></RouterLink>
            <RouterLink to="/home&living"><Link className='navbar-link'>HOME&LIVING</Link></RouterLink>
            <RouterLink to="/beauty"><Link className='navbar-link'>BEAUTY</Link></RouterLink>
            <RouterLink to="/studio"><Link className='navbar-link'>STUDIO</Link></RouterLink>
          </Flex>
          <Flex ml={{ base: 2, md: 8 }} width={{ base: 'full', md: 'auto' }} justifyContent={{ base: 'center', md: 'flex-start' }} className="navbar-actions">
            <InputGroup width={{ base: '100%', md: '500px' }} height='auto' bgColor={"#f5f5f5"}>
              <InputLeftElement
                pointerEvents="none"
                children={<IconButton icon={<FaSearch />} aria-label="Search" variant='unstyled' ml="15px" />}
              />
              <Input className="navbar-search" placeholder="Search for products, brands and more" />
            </InputGroup>
          </Flex>
          <Flex className='navbar-icons' ml={{ base: 2, md: 8 }} p={1.5}>
            <VStack
              spacing={1}
              alignItems="center"
              ml={4}
              onMouseEnter={() => setShowProfileBox(true)}  // Show profile box on hover
              onMouseLeave={() => setShowProfileBox(false)}  // Hide profile box on leave
              position="relative"
            >
              <IconButton icon={<CiUser />} aria-label="Profile" bg={"white"} />
              <RouterLink to='/profile'><Link>Profile</Link></RouterLink>
              {showProfileBox && (
                <Box position="absolute" top="50px" zIndex="10">  {/* Positioning the ProfileBox */}
                  <ProfileBox />
                </Box>
              )}
            </VStack>
            <VStack spacing={1} alignItems="center" ml={{ base: 2, md: 4 }}>
              <IconButton icon={<PiHeartStraightThin />} aria-label="Wishlist" bg={"white"} />
              <RouterLink to='/wishlist'><Link>Wishlist</Link></RouterLink>
            </VStack>
            <VStack spacing={1} alignItems="center" ml={{ base: 2, md: 4 }}>
              <IconButton icon={<HiOutlineShoppingBag />} aria-label="Bag" bg={"white"} />
              <RouterLink to='/bag'><Link>Bag</Link></RouterLink>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default Navbar;
