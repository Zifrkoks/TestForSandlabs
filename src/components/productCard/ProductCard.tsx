import React from "react";
import axios from "axios";
import { BaseUrl } from "../../APIconfig";
import { Box, Flex, Image, Spacer, useBoolean } from "@chakra-ui/react";
import ProductCardDiscButton from "./PeoductCardDescButton";
import { ProductCardDisc } from "./ProductCardDesc";

interface Props{
    name:string;
    creator:string,
    desc:string,
    

}

function ProductCard(props:Props){


    const creator:string = "creator_name"
    const name:string = "Name_NFT"
    return (
        <Box 
        //h="400px" 
        w="300px" 
        bg="white" 
        boxShadow="-4px -4px 4px rgba(0, 0, 0, 0.25);"
        border="2px"
        borderColor="#e2e8f0"
        borderRadius="20px"
        margin="30px"
        p='0px'
        fontFamily="Mingzat"
        >
            <Image m='0px' 
            src="./logo.webp" 
            h="200px" 
            w="300px"
            borderBottom="2px"
            borderColor="#e2e8f0"
            >
            </Image>
            <Flex fontSize="20px" justifyContent="center">
                {props.name}
            </Flex>
            <Flex fontSize="15px" py="10px" px="15px">
                <Box>
                    creator:
                </Box>
                <Spacer/>
                <Box>
                    {props.creator}
                </Box>
            </Flex>
            <Flex py="15px" justifyContent="center">
                <ProductCardDiscButton  />
            </Flex>
            <Flex>
                <ProductCardDisc desc={props.desc}/>
            </Flex>
        </Box>
    );

}
export default ProductCard;
