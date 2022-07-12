import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { observer } from "mobx-react";
import React from "react";
import mainStore from "../stores/MainStore";
import cardsStore from "../stores/CardsStore";
import ProductCard from "./productCard/ProductCard";
const NFTList = observer(() => {

    return(
        <div>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xs: 5}}>
                {cardsStore.getCollections().map((card)=>
                    <ProductCard name={card.name} creator={} />

                )
                }
            </SimpleGrid>
        </div>

    )
})