import { Box, useAnimationState, useControllableState } from "@chakra-ui/react";
import axios from "axios";
import { reaction } from "mobx";
import { inject, observer } from "mobx-react";
import React from "react";
import { BaseUrl } from "../APIconfig";
import { LoadingIcon } from "../components/LoadingIcon";
import ProductCard from "../components/productCard/ProductCard";
import cardsStore from "../stores/CardsStore";
import mainStore from "../stores/MainStore";
const HomePage = observer(()=> {
    React.useEffect(()=>{
        mainStore.setLoading(true);
        axios.request({
            url: BaseUrl+"/collections?offset=1500&limit=30",
            method: 'get'
        }).then((resp)=>{
            cardsStore.setCollections(resp.data.collections);
            setTimeout(()=>{},2000);
            mainStore.setLoading(false);
            console.log(resp.data.collections)
        }).catch(error=>{
            console.log(error);
            mainStore.setLoading(false);
        })
    });
    /*if(mainStore.loading === true){
        return
        (
            <Box bg="white" h="500px">

            </Box>
        )
    }   */
    return (
        <div>
                <ProductCard name="NFT_NAME" creator="NFT_CREATOR" desc="NFT_DESCRIPTION"/>
        </div>
    );
});



export default HomePage;