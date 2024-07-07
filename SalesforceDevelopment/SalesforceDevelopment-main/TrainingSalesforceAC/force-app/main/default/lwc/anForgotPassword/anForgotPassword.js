import { LightningElement,track } from 'lwc';

export default class AnForgotPassword extends LightningElement {
    @track email;
    @track otp;
    @track buttonDisabled = true;

    handleEmailChange(e) {
        this.email = e.target.value;
        this.buttonDisabled = !this.email || !this.otp;
    }

    handleOtpChange(e) {
        this.otp = e.target.value;
        this.buttonDisabled = !this.email || !this.otp;
    }

    handleOtpSubmit() {
        
        
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Reset_Password_Page',
            },
        });
    }
}