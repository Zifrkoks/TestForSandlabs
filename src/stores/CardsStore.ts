import { action, observable } from "mobx";



class CardsStore{
    @observable OpenedCard = [

    ];
    @observable LoadedCards=[
        
    ]
    @observable page = 0;
    @action nextPage = () => {
        this.page++;
    }
    @action prevPage = () => {
        this.page--;
    }

    @action setCollections = (data:[]) => {
        this.LoadedCards = data;
    }
    
    @action getCollections = ()=>{
        return this.LoadedCards
    }
}
const cardsStore = new CardsStore();
export default cardsStore;

