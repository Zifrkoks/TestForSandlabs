import { observable } from "mobx";



class TabsStore{
    @observable CurrentTab = 0;
    @observable OpenedTabs = {
        
    }
    
}

const tabsStore = new TabsStore();