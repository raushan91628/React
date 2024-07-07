
    import { LightningElement, track } from 'lwc';

export default class HomePage extends LightningElement {
    searchValue;

  
    handleSearchChange(event) {
        this.searchValue = event.target.value;
    }

    handleSearch(event) {
        
    }
    @track applicationStatus; 
    
    connectedCallback() {
        if (localStorage.getItem('applicationStatus')) {
            this.applicationStatus = localStorage.getItem('applicationStatus');
        }
    }

    get isApply() {
        return this.applicationStatus === 'Apply';
    }

    get isPending() {
        return this.applicationStatus === 'Pending';
    }
    
    handleApply(event) {
        this.applicationStatus = 'Pending';
    }

}

