import { LightningElement,track } from 'lwc';

export default class Parent extends LightningElement {

    @track displaySearchValue;
    handleSearchValue(event){
        this.displaySearchValue = event?.detail;
    }
}