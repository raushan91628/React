import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    searchKey;
    storeName(event){
        this.searchKey = event.target.value;
    
    const searchEvent = new CustomEvent("getsearchvalue",{
        detail: this.searchKey
    });

    this.dispatchEvent(searchEvent);
}
}