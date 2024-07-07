import { LightningElement, wire } from 'lwc';
import GetAccount from '@salesforce/apex/GetRecord.GetAccount'

export default class WireApiExample extends LightningElement {

@wire(GetAccount) wiredAccount;

}