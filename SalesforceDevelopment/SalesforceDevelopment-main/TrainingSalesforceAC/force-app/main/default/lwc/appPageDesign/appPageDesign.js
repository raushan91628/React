import { LightningElement } from 'lwc';

export default class AppPageDesign extends LightningElement {
    ToDisplay;
    TaskSuc(){
        this.ToDisplay = ' Your Response has been submitted Our team will contact you at the provided mail within 24 hours.. Thank You!';
    }
}