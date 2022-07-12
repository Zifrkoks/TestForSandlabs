import { CloseIcon } from "@chakra-ui/icons";
import { Box, } from "@chakra-ui/react";
import React  from "react";
interface Props{
    Name:string;
}
const ProductTab = (props:Props)=>{
            return(<Box
                mx="5px"
                fontFamily="Source Sans Pro"
                color="#000000"
                fontSize="20px"
                h="35px"
                w="150px"
                bg="#ffffff"
                justifyItems="stretch"
                borderTopStartRadius="15px"
                boxShadow="-2px -2px 4px rgba(0, 0, 0, 0.25);"
                border="2px"
                borderColor="#e2e8f0"
                >
                    {props.Name}
                    <CloseIcon w="10px" h="10px"></CloseIcon>
                    
            </Box>)
}

export default ProductTab;