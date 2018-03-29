import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HospitalSuppliesService } from './HospitalSupplies.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-HospitalSupplies',
	templateUrl: './HospitalSupplies.component.html',
	styleUrls: ['./HospitalSupplies.component.css'],
  providers: [HospitalSuppliesService]
})
export class HospitalSuppliesComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          supplyID = new FormControl("", Validators.required);
        
  
      
          drugs = new FormControl("", Validators.required);
        
  


  constructor(private serviceHospitalSupplies:HospitalSuppliesService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          supplyID:this.supplyID,
        
    
        
          drugs:this.drugs
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceHospitalSupplies.getAll()
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
      $class: "composers.finance.HospitalSupplies",
      
        
          "supplyID":this.supplyID.value,
        
      
        
          "drugs":this.drugs.value
        
      
    };

    this.myForm.setValue({
      
        
          "supplyID":null,
        
      
        
          "drugs":null
        
      
    });

    return this.serviceHospitalSupplies.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "supplyID":null,
        
      
        
          "drugs":null 
        
      
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
      $class: "composers.finance.HospitalSupplies",
      
        
          
        
    
        
          
            "drugs":this.drugs.value
          
        
    
    };

    return this.serviceHospitalSupplies.updateAsset(form.get("supplyID").value,this.asset)
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

    return this.serviceHospitalSupplies.deleteAsset(this.currentId)
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

    return this.serviceHospitalSupplies.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "supplyID":null,
          
        
          
            "drugs":null 
          
        
      };



      
        if(result.supplyID){
          
            formObject.supplyID = result.supplyID;
          
        }else{
          formObject.supplyID = null;
        }
      
        if(result.drugs){
          
            formObject.drugs = result.drugs;
          
        }else{
          formObject.drugs = null;
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
      
        
          "supplyID":null,
        
      
        
          "drugs":null 
        
      
      });
  }

}
