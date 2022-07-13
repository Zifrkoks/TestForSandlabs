import { Box, Flex } from "@chakra-ui/react";
import { observer } from "mobx-react";
import React from "react";


export const PageNav = observer(()=>{
    return(
        <Flex position="sticky" alignContent="center" justifyContent="center">
            <Box
            w="50%"
            h="50px"
            >
                
            </Box>

        </Flex>
    );


})