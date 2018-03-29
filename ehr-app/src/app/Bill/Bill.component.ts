import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BillService } from './Bill.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Bill',
	templateUrl: './Bill.component.html',
	styleUrls: ['./Bill.component.css'],
  providers: [BillService]
})
export class BillComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          billID = new FormControl("", Validators.required);
        
  
      
          patientID = new FormControl("", Validators.required);
        
  
      
          moneyID = new FormControl("", Validators.required);
        
  
      
          amount = new FormControl("", Validators.required);
        
  
      
          paid = new FormControl("", Validators.required);
        
  


  constructor(private serviceBill:BillService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          billID:this.billID,
        
    
        
          patientID:this.patientID,
        
    
        
          moneyID:this.moneyID,
        
    
        
          amount:this.amount,
        
    
        
          paid:this.paid
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceBill.getAll()
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
      $class: "composers.finance.Bill",
      
        
          "billID":this.billID.value,
        
      
        
          "patientID":this.patientID.value,
        
      
        
          "moneyID":this.moneyID.value,
        
      
        
          "amount":this.amount.value,
        
      
        
          "paid":this.paid.value
        
      
    };

    this.myForm.setValue({
      
        
          "billID":null,
        
      
        
          "patientID":null,
        
      
        
          "moneyID":null,
        
      
        
          "amount":null,
        
      
        
          "paid":null
        
      
    });

    return this.serviceBill.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "billID":null,
        
      
        
          "patientID":null,
        
      
        
          "moneyID":null,
        
      
        
          "amount":null,
        
      
        
          "paid":null 
        
      
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
      $class: "composers.finance.Bill",
      
        
          
        
    
        
          
            "patientID":this.patientID.value,
          
        
    
        
          
            "moneyID":this.moneyID.value,
          
        
    
        
          
            "amount":this.amount.value,
          
        
    
        
          
            "paid":this.paid.value
          
        
    
    };

    return this.serviceBill.updateAsset(form.get("billID").value,this.asset)
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

    return this.serviceBill.deleteAsset(this.currentId)
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

    return this.serviceBill.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "billID":null,
          
        
          
            "patientID":null,
          
        
          
            "moneyID":null,
          
        
          
            "amount":null,
          
        
          
            "paid":null 
          
        
      };



      
        if(result.billID){
          
            formObject.billID = result.billID;
          
        }else{
          formObject.billID = null;
        }
      
        if(result.patientID){
          
            formObject.patientID = result.patientID;
          
        }else{
          formObject.patientID = null;
        }
      
        if(result.moneyID){
          
            formObject.moneyID = result.moneyID;
          
        }else{
          formObject.moneyID = null;
        }
      
        if(result.amount){
          
            formObject.amount = result.amount;
          
        }else{
          formObject.amount = null;
        }
      
        if(result.paid){
          
            formObject.paid = result.paid;
          
        }else{
          formObject.paid = null;
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
      
        
          "billID":null,
        
      
        
          "patientID":null,
        
      
        
          "moneyID":null,
        
      
        
          "amount":null,
        
      
        
          "paid":null 
        
      
      });
  }

}
