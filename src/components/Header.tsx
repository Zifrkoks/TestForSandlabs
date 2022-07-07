import { Box, Menu, Flex } from "@chakra-ui/react";
import React from "react";

function Header(){

    return (
        <div>
            <Box
                display="flex" 
                justifyItems="flex-start"
                alignItems="center"
                h={{ sm: "50px", base: "50px", lg: "65px" }}
                bgGradient="linear(to-l,#93BEFF,#FF9574)"
            >
                <Box
                mx="5px"
                color="#fffff"
                fontSize="20px"
                as="button"
                h={{base:"35px",sm:'35px',lg:'40px'}}
                w={{base:"120px",sm:'120px',lg:'150px'}}
                bg="blue"
                borderRadius="15px">
                </Box>
            </Box>
        </div>
    );
}

export default Header;