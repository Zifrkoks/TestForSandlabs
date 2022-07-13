import { action, observable } from "mobx";


 class MainStore{
    @observable loading = false;
    
    @action('get loading') setLoading(load:boolean){
        this.loading = load;
    }
    
}

const mainStore = new MainStore();
export default mainStore;
export {MainStore}