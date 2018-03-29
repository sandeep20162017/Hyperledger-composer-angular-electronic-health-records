import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HospitalMoneyPoolService } from './HospitalMoneyPool.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-HospitalMoneyPool',
	templateUrl: './HospitalMoneyPool.component.html',
	styleUrls: ['./HospitalMoneyPool.component.css'],
  providers: [HospitalMoneyPoolService]
})
export class HospitalMoneyPoolComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          moneyID = new FormControl("", Validators.required);
        
  
      
          moneypool = new FormControl("", Validators.required);
        
  


  constructor(private serviceHospitalMoneyPool:HospitalMoneyPoolService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          moneyID:this.moneyID,
        
    
        
          moneypool:this.moneypool
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceHospitalMoneyPool.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
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
   * @param {String} name - the name of the asset field to update
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
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "composers.finance.HospitalMoneyPool",
      
        
          "moneyID":this.moneyID.value,
        
      
        
          "moneypool":this.moneypool.value
        
      
    };

    this.myForm.setValue({
      
        
          "moneyID":null,
        
      
        
          "moneypool":null
        
      
    });

    return this.serviceHospitalMoneyPool.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "moneyID":null,
        
      
        
          "moneypool":null 
        
      
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


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "composers.finance.HospitalMoneyPool",
      
        
          
        
    
        
          
            "moneypool":this.moneypool.value
          
        
    
    };

    return this.serviceHospitalMoneyPool.updateAsset(form.get("moneyID").value,this.asset)
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


  deleteAsset(): Promise<any> {

    return this.serviceHospitalMoneyPool.deleteAsset(this.currentId)
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

    return this.serviceHospitalMoneyPool.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "moneyID":null,
          
        
          
            "moneypool":null 
          
        
      };



      
        if(result.moneyID){
          
            formObject.moneyID = result.moneyID;
          
        }else{
          formObject.moneyID = null;
        }
      
        if(result.moneypool){
          
            formObject.moneypool = result.moneypool;
          
        }else{
          formObject.moneypool = null;
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
      
        
          "moneyID":null,
        
      
        
          "moneypool":null 
        
      
      });
  }

}
