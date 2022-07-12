import { Box } from "@chakra-ui/react"
import React from "react"


interface Props{
    desc:string,
}
export const ProductCardDisc = (props:Props) => {
    return(
        <Box
        >
            {props.desc}
        </Box>


    )
}