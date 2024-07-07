
import { LightningElement, track } from 'lwc';

export default class TrackExample extends LightningElement {
@track
    
        user = {
            Firstname : 'Abhishek',
            Lastname : 'Bharti'
        };
        namechange(){

            console.log('It is working')
            this.user.Lastname = 'Choudhary'
    
}
}