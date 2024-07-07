import { LightningElement } from 'lwc';
import createAccount from '@salesforce/apex'

export default class ApexInLwc extends LightningElement {

    name;
    phone;
    getName(event){
     this.name = event.target.value;
    }

    getPhone(event){
        this.phone = event.target.value;
       }

    createAccount(){
        console.log('name & phone =' + this.name , this.phone);
    }
}