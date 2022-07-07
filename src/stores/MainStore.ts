import TabsStore from "./TabsStore";


class MainStore{
    TabsStore: TabsStore;
    constructor(){
        this.TabsStore = new TabsStore();

    }
}

export default new MainStore();