import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { appointmentComponent } from './appointment/appointment.component';
import { PatientInfoComponent } from './PatientInfo/PatientInfo.component';
import { BillComponent } from './Bill/Bill.component';
import { HospitalSuppliesComponent } from './HospitalSupplies/HospitalSupplies.component';
import { HospitalMoneyPoolComponent } from './HospitalMoneyPool/HospitalMoneyPool.component';
import { SampleAssetComponent } from './SampleAsset/SampleAsset.component';


  import { UserComponent } from './User/User.component';
  import { AdministratorComponent } from './Administrator/Administrator.component';
  import { DoctorComponent } from './Doctor/Doctor.component';
  import { PatientComponent } from './Patient/Patient.component';


  import { addAppointmentComponent } from './addAppointment/addAppointment.component';
  import { updateMedicationComponent } from './updateMedication/updateMedication.component';
  import { updatePastVisitsComponent } from './updatePastVisits/updatePastVisits.component';
  import { updateContactComponent } from './updateContact/updateContact.component';
  import { SendBillComponent } from './SendBill/SendBill.component';
  import { PayBillComponent } from './PayBill/PayBill.component';
  import { ChangeAssetValueComponent } from './ChangeAssetValue/ChangeAssetValue.component';  
@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    appointmentComponent,
    PatientInfoComponent,
    BillComponent,
    HospitalSuppliesComponent,
    HospitalMoneyPoolComponent,
    
    SampleAssetComponent
    ,
    
    UserComponent,
      AdministratorComponent,
      DoctorComponent,
      
      PatientComponent
      ,

    addAppointmentComponent,
        updateMedicationComponent,
        updatePastVisitsComponent,
        updateContactComponent,
        SendBillComponent,
        PayBillComponent,
        
        ChangeAssetValueComponent
          
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
