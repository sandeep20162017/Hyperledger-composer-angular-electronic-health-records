import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

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
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'appointment', component: appointmentComponent},
    
		{ path: 'PatientInfo', component: PatientInfoComponent},
    
		{ path: 'Bill', component: BillComponent},
    
		{ path: 'HospitalSupplies', component: HospitalSuppliesComponent},
    
		{ path: 'HospitalMoneyPool', component: HospitalMoneyPoolComponent},
    
		{ path: 'SampleAsset', component: SampleAssetComponent},
    
    
      { path: 'User', component: UserComponent},
      
      { path: 'Administrator', component: AdministratorComponent},
      
      { path: 'Doctor', component: DoctorComponent},
      
      { path: 'Patient', component: PatientComponent},
      
      
        { path: 'addAppointment', component: addAppointmentComponent},
        
        { path: 'updateMedication', component: updateMedicationComponent},
        
        { path: 'updatePastVisits', component: updatePastVisitsComponent},
        
        { path: 'updateContact', component: updateContactComponent},
        
        { path: 'SendBill', component: SendBillComponent},
        
        { path: 'PayBill', component: PayBillComponent},
        
        { path: 'ChangeAssetValue', component: ChangeAssetValueComponent},
        
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
