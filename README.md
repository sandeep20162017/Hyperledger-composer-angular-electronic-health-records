
Patient Electronic Health Records with Angular
HyperLedger Fabric 0.19 - Sandeep Kanao
1. Clean up

    docker kill $(docker ps -q)
    docker rm $(docker ps -aq)
    docker rmi $(docker images dev-* -q)

2. start febric

    cd ~/fabric-tools
    ./startFabric.sh
    ./createPeerAdminCard.sh

3. Generate a business network archive 

from ehr-network directory

composer archive create -t dir -n .

4. Deploy business network
  
composer network install --card PeerAdmin@hlfv1 --archiveFile ehr-network@0.0.1.bna

5. start business network

composer network start --networkName ehr--network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

6. Import card

composer card import --file networkadmin.card

7. Ping network

composer network ping --card admin@tutorial-network

8. Generate REST server - Sandeep Kanao

composer-rest-server

Enter admin@ehr-network as the card name.

Select never use namespaces when asked whether to use namespaces in the generated API

9. Generate Angular Application

yo hyperledger-composer:angular

10. In angular-app directory
edit package.json 
"start": "ng serve --host 142.44.207.84"

11. In /src/app
comment line  in org.example.biznet.ts
//import {Asset} from './org.hyperledger.composer.system';

Docker command to verify peer

docker ps

check business cards

composer card list

Make sure /etc/hosts has ip of VPS
# Hyperledger-composer-angular-electronic-health-records-v1
# Hyperledger-composer-angular-electronic-health-records-v1
