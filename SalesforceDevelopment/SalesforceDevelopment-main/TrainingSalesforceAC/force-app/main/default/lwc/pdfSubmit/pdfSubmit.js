import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class PdfUpload extends NavigationMixin(LightningElement) {
    @api myRecordId;
    @track filename;
    @track activeSectionName;
    @track applicationStatus = 'Apply';

    get acceptedFormats() {
        return ['.pdf'];
    }

    handleUploadFinished(event) {

        const uploadedFiles = event.detail.files;
        this.filename = '';

        for(let i = 0; i < uploadedFiles.length; i++) {
          this.filename += uploadedFiles[i].name + ', ';
        }

        if(this.filename !== '') {
          this.filename = this.filename.slice(0, -2);
        }

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'File(s) uploaded - ' + this.filename,
                variant: 'success',
            }),
        );
    }

    handleSectionToggle(event) {
        this.activeSectionName = event.detail.openSections;
    }

    handleBiodataSubmission() {
        this.applicationStatus = 'Pending';
        localStorage.setItem('applicationStatus', 'Pending');
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Home_Intern', 
            },
        });
    }
    
    handleApply() {
        this.applicationStatus = 'Pending';
        localStorage.setItem('applicationStatus', 'Pending'); 
    }
}
