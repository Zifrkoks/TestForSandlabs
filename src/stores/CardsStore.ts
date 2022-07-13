import axios from "axios";
import { action, autorun, get, makeAutoObservable, observable } from "mobx";
import { observer } from "mobx-react-lite";
import { BaseUrl } from "../APIconfig";
import { Card, Cards } from "../Interfaces";
import mainStore from "./MainStore";


class CardsStore{
    constructor(){
        makeAutoObservable(this);
        autorun(()=>{
        axios.request({
            url: BaseUrl+"/collections?offset="+(this.page * 50).toString()+"&limit=50",
            method: 'get',
            headers: {Accept: 'application/json'},
        }).then((resp)=>{
            this.LoadedCards = resp.data.collections;
            console.log(this.LoadedCards);
        }).catch((error)=>{
            console.log(error);
        })})
    }
    OpenedCards:Card[] = []
    LoadedCards:Card[] = []
    page = 0;
    @action('next page') nextPage(){
        this.page++;
    }
    @action('prev page') prevPage(){
        this.page--;
    }

    
    set setCollections(data:Card[]){
            this.LoadedCards=data;
    }
    
    get getCollections(){
        return this.LoadedCards
    }
}
const cardsStore = new CardsStore();
export default cardsStore;
export {CardsStore}

