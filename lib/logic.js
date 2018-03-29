'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.example.biznet.ChangeAssetValue} changeAssetValue
 * @transaction
 */
function onChangeAssetValue(changeAssetValue) {
    var assetRegistry;
    var id = changeAssetValue.relatedAsset.assetId;
    return getAssetRegistry('org.example.biznet.SampleAsset')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.value = changeAssetValue.newValue;
            return assetRegistry.update(asset);
        });
}

function addAppointment(addAppointment){
	console.log('addAppointment');

	var NS_D = 'composers.logistics'

	var assetRegistry;
	var id = addAppointment.appointment.appointmentID;
	return getAssetRegistry(NS_D + '.Appointment')
		.then(function(ar){
			assetRegistry = ar;
			return assetRegistry.get(id);
		})
		.then(function(asset){
			asset.time = addAppointment.time;
			asset.realTime = addAppointment.realTime;
			return assetRegistry.update(asset);
		})
}

/**
     * Place an order for a vehicle
     * @param {composers.ehr.updateMedication} updateMedication - the updateMedication transaction
     * @transaction
     */
    function updateMedication(updateMedication){
        console.log('update medication');
      
        var id = updateMedication.patientInfo.patientID;
        return getAssetRegistry('composers.ehr.PatientInfo')
          .then(function(ar) {
            return ar.get(id).then(function(info){
              info.medicationArray = updateMedication.medicationArray;
              return ar.update(info);
          })
        })
      }
      
      /**
           * Place an order for a vehicle
           * @param {composers.ehr.updatePastVisits} updatePastVisits - the updatePastVisits transaction
           * @transaction
           */
      function updatePastVisits(updatePastVisits){
        console.log('update past visits');
        var id = updatePastVisits.patientInfo.patientID;
        return getAssetRegistry('composers.ehr.PatientInfo')
          .then(function(ar) {
            return ar.get(id).then(function(info){
              info.pastVisitsArray.push(updatePastVisits.newVisit);
              return ar.update(info);
          })
        })
      }
         /**
           * Place an order for a vehicle
           * @param {composers.ehr.updateContact} updateContact- the updateContac transaction
           * @transaction
           */
      function updateContact(updateContact){
        console.log('update contact');
        var assetRegistry;
        var id = updateContact.patient.patientID;
        return getAssetRegistry('composers.ehr.PatientInfo')
          .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
          })
          .then(function(asset) {
            asset.contactDetails = updateContact.contactDetails;
            return assetRegistry.update(asset);
          });  
      }
       /**
     * Place an order for a vehicle
     * @param {composers.finance.SendBill} newBill - the SendBill transaction
     * @transaction
     */
    function SendBill(newBill) {
        var balanceDue = newBill.bill.amount;
      
          var ID = newBill.bill.patientID;
          console.log("HELLO");
        return getParticipantRegistry('composers.participants.Patient')
            .then(function(patientRegistry) {
                  console.log("OK");
                  return patientRegistry.get(ID).then(function(patient){
                    console.log("BBB");
                      patient.balanceDue += newBill.bill.amount;
                     newBill.bill.paid = false;
                     return patientRegistry.update(patient);
                })
            })
    }
     /**
         * Place an order for a vehicle
         * @param {composers.finance.PayBill} oldBill - the PayBill transaction
         * @transaction
         */
    function PayBill(oldBill) {
        //var balancePaid = oldBill.bill.amount;
      
          var ID = oldBill.bill.patientID;
          var moneyID = oldBill.bill.moneyID;
          var amt = oldBill.bill.amount;
          console.log("HELLO");
        return getAssetRegistry('composers.finance.HospitalMoneyPool')
            .then(function(assetRegistry) {
                  console.log("OK");
                  return assetRegistry.get(moneyID).then(function(_moneypool){
                    console.log("BBB");
                      _moneypool.moneypool += amt;
                     oldBill.bill.paid = true;
                     return assetRegistry.update(_moneypool);
                  
                })
            })
            .then(function(){getParticipantRegistry('composers.participants.Patient')
                .then(function(patientRegistry) {
                    console.log("OK");
                    return patientRegistry.get(ID).then(function(patient){
                        console.log("BBB");
                        patient.balanceDue -= amt;
                        oldBill.bill.paid = true;
                        return patientRegistry.update(patient);
                    })
                })
             })
             
}
