import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

export const LoadingIcon = () => {
    return( 
        <Box 
        display="flex" 
        alignContent="center" 
        justifyContent="center" 
        paddingTop={{sm: "200px", md: "300px", lg: "400px"}} 
        >
            <Spinner
            thickness='2px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            />
        </Box>
    )
}