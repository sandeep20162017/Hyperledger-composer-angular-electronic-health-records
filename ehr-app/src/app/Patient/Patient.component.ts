import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PatientService } from './Patient.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Patient',
	templateUrl: './Patient.component.html',
	styleUrls: ['./Patient.component.css'],
  providers: [PatientService]
})
export class PatientComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
	private errorMessage;

  
      
          lastvisit = new FormControl("", Validators.required);
        
  
      
          balanceDue = new FormControl("", Validators.required);
        
  
      
          ID = new FormControl("", Validators.required);
        
  
      
          title = new FormControl("", Validators.required);
        
  
      
          firstname = new FormControl("", Validators.required);
        
  
      
          lastname = new FormControl("", Validators.required);
        
  


  constructor(private servicePatient:PatientService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          lastvisit:this.lastvisit,
        
    
        
          balanceDue:this.balanceDue,
        
    
        
          ID:this.ID,
        
    
        
          title:this.title,
        
    
        
          firstname:this.firstname,
        
    
        
          lastname:this.lastname
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicePatient.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "composers.participants.Patient",
      
        
          "lastvisit":this.lastvisit.value,
        
      
        
          "balanceDue":this.balanceDue.value,
        
      
        
          "ID":this.ID.value,
        
      
        
          "title":this.title.value,
        
      
        
          "firstname":this.firstname.value,
        
      
        
          "lastname":this.lastname.value
        
      
    };

    this.myForm.setValue({
      
        
          "lastvisit":null,
        
      
        
          "balanceDue":null,
        
      
        
          "ID":null,
        
      
        
          "title":null,
        
      
        
          "firstname":null,
        
      
        
          "lastname":null
        
      
    });

    return this.servicePatient.addParticipant(this.participant)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "lastvisit":null,
        
      
        
          "balanceDue":null,
        
      
        
          "ID":null,
        
      
        
          "title":null,
        
      
        
          "firstname":null,
        
      
        
          "lastname":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "composers.participants.Patient",
      
        
          
            "lastvisit":this.lastvisit.value,
          
        
    
        
          
            "balanceDue":this.balanceDue.value,
          
        
    
        
          
        
    
        
          
            "title":this.title.value,
          
        
    
        
          
            "firstname":this.firstname.value,
          
        
    
        
          
            "lastname":this.lastname.value
          
        
    
    };

    return this.servicePatient.updateParticipant(form.get("ID").value,this.participant)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteParticipant(): Promise<any> {

    return this.servicePatient.deleteParticipant(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.servicePatient.getparticipant(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "lastvisit":null,
          
        
          
            "balanceDue":null,
          
        
          
            "ID":null,
          
        
          
            "title":null,
          
        
          
            "firstname":null,
          
        
          
            "lastname":null 
          
        
      };



      
        if(result.lastvisit){
          
            formObject.lastvisit = result.lastvisit;
          
        }else{
          formObject.lastvisit = null;
        }
      
        if(result.balanceDue){
          
            formObject.balanceDue = result.balanceDue;
          
        }else{
          formObject.balanceDue = null;
        }
      
        if(result.ID){
          
            formObject.ID = result.ID;
          
        }else{
          formObject.ID = null;
        }
      
        if(result.title){
          
            formObject.title = result.title;
          
        }else{
          formObject.title = null;
        }
      
        if(result.firstname){
          
            formObject.firstname = result.firstname;
          
        }else{
          formObject.firstname = null;
        }
      
        if(result.lastname){
          
            formObject.lastname = result.lastname;
          
        }else{
          formObject.lastname = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "lastvisit":null,
        
      
        
          "balanceDue":null,
        
      
        
          "ID":null,
        
      
        
          "title":null,
        
      
        
          "firstname":null,
        
      
        
          "lastname":null 
        
      
      });
  }

}
