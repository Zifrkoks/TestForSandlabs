import { action, observable } from "mobx";


class MainStore{
    @observable loading = false;
    
    @action setLoading = (load:boolean)=>{
        this.loading = load;
    }
    @action getLoading = () =>{
        return this.loading
    }
    
}

const mainStore = new MainStore();
export default mainStore;