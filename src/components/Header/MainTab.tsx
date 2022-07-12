import { CloseIcon } from "@chakra-ui/icons";
import { Box, } from "@chakra-ui/react";
import React  from "react";

const MainTab = ()=>{
            return(<Box
                as="button"
                fontFamily="Source Sans Pro"
                mx="5px"
                color="#000000"
                fontSize="24px"
                h="50px"
                w="150px"
                bg="#ffffff"
                justifyItems="stretch"
                borderRadius="30px"
                boxShadow="-2px -2px 4px rgba(0, 0, 0, 0.25);"
                border="2px"
                borderColor="#e2e8f0"
                transition="0.5s linear"
                _hover={{
                    background: "#7ea3cc",
                    boxShadow: "0px 0px 0px"
                }}
                >
                    главная                    
            </Box>)
}

export default MainTab;