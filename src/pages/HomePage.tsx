import { Box, Flex, SimpleGrid, useAnimationState, useControllableState } from "@chakra-ui/react";
import axios from "axios";
import { reaction } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import { BaseUrl } from "../APIconfig";
import { PageNav } from "../components/PageNav";
import ProductCard from "../components/productCard/ProductCard";
import cardsStore from "../stores/CardsStore";
import mainStore from "../stores/MainStore";




const HomePage = observer(()=> {
    return (
        <div>
            <SimpleGrid minChildWidth="300px">
                {cardsStore.LoadedCards.map((card)=>
                    <ProductCard name={card.name} creator={card.payout_address} desc={card.description} img={card.image_url} />
                )
                }
            </SimpleGrid>
            <PageNav/>
        </div>
    );
});



export default HomePage;