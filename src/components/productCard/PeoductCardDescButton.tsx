import { ArrowDownIcon } from "@chakra-ui/icons";
import { background, Box, color, Flex, Spacer } from "@chakra-ui/react";
import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
function OpenDesc(){

}

const ProductCardDiscButton = () =>{
    return(
        <Box>
            <Box
            as="button" 
            h="50px" 
            w="250px" 
            bg="white" 
            boxShadow="-4px -4px 4px rgba(0, 0, 0, 0.25);"
            border="2px"
            borderRadius="50px"
            borderColor="#e2e8f0"
            fontFamily="Source Sans Pro"
            fontSize="24px"
            transition="0.5s linear"
            textAlign="center"
            _hover={{
                background: "#7ea3cc",
                boxShadow: "0px 0px 0px"
            }}
            >
                    описание
                    <ArrowDownIcon/>
            </Box>
        </Box>
    )   

}
export default ProductCardDiscButton;