import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LoginForm extends NavigationMixin(LightningElement) {
    roles = [
        { label: 'Trainee', value: 'Trainee' },
        { label: 'Trainer', value: 'Trainer' },
    ];
    selectedRole = 'Trainee';

    handleRoleChange(event) {
        this.selectedRole = event.detail.value;
    }

    handleLogin(event) {
        event.preventDefault();

        if (this.selectedRole !== 'Trainee') {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'You are not authorized!',
                    variant: 'error',
                }),
            );
            return;
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Home_Intern',
            },
        });
        
    }

    validateEmail(event) {
        this.email = event.target.value; 
        if (this.email.endsWith('@gmail.com')) {
            event.target.setCustomValidity(''); 
        } else {
            event.target.setCustomValidity('Invalid email address'); 
        }
        event.target.reportValidity(); 
    }
}


