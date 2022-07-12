import { Box, Circle, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {

    return (
        
        <Box>    
            <Link to="/">
                <Circle 
                size="50px" 
                bg="white" 
                shadow="-2px -2px 4px rgba(0, 0, 0, 0.25);"
                border="2px"
                borderColor="#e2e8f0"
                as="button"
                >
                    <Image src="./logo.webp"/>
                </Circle>
            </Link>
        </Box>

    )   

}

export default Logo;