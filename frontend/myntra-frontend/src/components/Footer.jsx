import { Box, Divider, Flex, Icon, Img, Link, Spacer, Text, VStack,HStack} from '@chakra-ui/react'
import React from 'react'
import './Footer.css'
import playstore from '../assets/playstore.png'
import appstore1 from '../assets/appstore1.png'
import gurantee from '../assets/gurantee.png'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaCheckCircle, FaUndo } from 'react-icons/fa';

function Footer() {
  return (
    <Box className='footer-content'>
        <Box className='footer'>
        <Flex className='footer-container'>
            <VStack className='footer-section' align="start">
                <Text className='footer-heading'>ONLINE SHOPPING</Text>
                <Link to="/men" className='footer-link'>Men</Link>
                <Link to="/women" className='footer-link'>Women</Link>
                <Link to="/kids" className='footer-link'>Kids</Link>
                <Link to="/home&living" className='footer-link'>Home&living</Link>
                <Link to="/beauty" className='footer-link'>Beauty</Link>
                <Link href='#' className='footer-link'>Gift Cards</Link>
                <Link href='#' className='footer-link'>Myntra Insider</Link>
                <Spacer/>
                <Text className='footer-heading'>USEFUL LINKS</Text>
                <Link href='#' className='footer-link'>Blog</Link>
                <Link href='#' className='footer-link'>Careers</Link>
                <Link href='#' className='footer-link'>Site Map</Link>
                <Link href='#' className='footer-link'>Corporate Information</Link>
                <Link href='#' className='footer-link'>Whitehat</Link>
                <Link href='#' className='footer-link'>Cleartrip</Link>
            </VStack>
            <VStack className='footer-section' align="start">
                <Text className='footer-heading'>CUSTOMER POLICIES</Text>
                <Link href="#" className='footer-link'>Contact Us</Link>
                <Link href="#" className='footer-link'>FAQ</Link>
                <Link href="#" className='footer-link'>T&C</Link>
                <Link href="#" className='footer-link'>Terms of Use</Link>
                <Link href="#" className='footer-link'>Track Orders</Link>
                <Link href="#" className='footer-link'>Shipping</Link>
                <Link href="#" className='footer-link'>Cancellation</Link>
                <Link href="#" className='footer-link'>Returns</Link>
                <Link href="#" className='footer-link'>Privacy Policy</Link>
                <Link href="#" className='footer-link'>Grievance Officer</Link>
            </VStack>
            <VStack className='footer-section' align='start'>
            <Text className='footer-heading'>EXPERIENCE MYNTRA APP ON MOBILE</Text>
                <HStack className='footer-badges' padding={"0px"}>
                    <Link href="https://play.google.com/store/apps/details?id=com.myntra.android" isExternal>
                        <img src={playstore} alt="Google Play Store" className='play-store-badge' />
                    </Link>
                    <Link href='https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059' isExternal >
                        <img src={appstore1} alt='app store' className='play-store-badge'/>
                    </Link>
                </HStack>
            
            <Text className='footer-heading'>KEEP IN TOUCH</Text>
                <Flex gap={2}>
                <Link href="https://www.facebook.com" isExternal>
                        <Icon as={FaFacebook} className='footer-icon' />
                </Link>
                <Link href="https://www.twitter.com" isExternal>
                    <Icon as={FaTwitter} className='footer-icon' />
                </Link>
                <Link href="https://www.instagram.com" isExternal>
                    <Icon as={FaInstagram} className='footer-icon' />
                </Link>
                <Link href="https://www.youtube.com" isExternal>
                    <Icon as={FaYoutube} className='footer-icon' />
                </Link>
                </Flex>
            </VStack>
            <VStack>
                <Img src={gurantee} width="80%"/>
            </VStack>
        </Flex>
        </Box>
        <Box className='footer-searches'>
        <VStack className='footer-section' align='start'>
          <Text className='footer-heading'>POPULAR SEARCHES</Text>
          <Flex className='popular-searches'>
                <Text>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees</Text>
          </Flex>
          </VStack>
        </Box>
        <Box>
            <Flex justify="space-between" className='footer-bottom'>
                <Text>In case of any concern,<b style={{color: 'blue'}}>Contact Us</b></Text>
                <Text>© 2024 www.myntra.com.All Rights Reserved.</Text>
                <Text>A Flipkart company</Text>
            </Flex>
        </Box>
    </Box>
  )
}

export default Footer