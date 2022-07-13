import { Box, Menu, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import OpenedTabs from "./OpenedTabs";
import ProductTab from "./ProductTab"
function Header(){

    return (
        <div>
        <Box
        pos="sticky"
        display="flex"
        justifyItems="flex-start"
        alignItems="center"
        px="20px"
        h="65px"
        bg="white"
        borderBottom="2px"
        borderColor="#e2e8f0"
        >
            <Logo/>     
            <Box>
                <OpenedTabs/>
            </Box>  
        </Box>
    </div>
    );
}

export default Header;