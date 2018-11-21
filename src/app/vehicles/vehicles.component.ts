import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../services/vehicles.service';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

    status: any = 'create';
    vehicles = null;
    vehicle: any = {};
    textButton: string = null;

    constructor(private fireBaseService: VehiclesService, private route: ActivatedRoute) {
        this.vehicles = fireBaseService.getVeicles();
        // this.status = this.route.snapshot.params['status'];
        console.log(this.status);
        this.textButton = (this.status == 'create') ? 'Crear vehiculo' : 'Actualizar';
    }

    ngOnInit() {
    }

    validateStatusButton(){
        if (this.status == 'create') {
            this.createVehicle();
        } else {
            this.updateVehicle();
        }
    }


    getVehicle(id) {
        this.fireBaseService.getVehicle(id).valueChanges().subscribe(vehicle => {
            this.vehicle = vehicle;
            this.textButton = 'Actualizar';
            this.status = id;
        });
    }

    cancelVehicle() {
        this.status = 'create';
        this.textButton = 'Crear vehiculo';
        this.vehicle = {};
    }

    createVehicle() {
        this.vehicle.id = Date.now();
        this.fireBaseService.createVehicle(this.vehicle);
        this.cancelVehicle();
    }

    updateVehicle() {
        this.fireBaseService.updateVehicle(this.vehicle);
        this.cancelVehicle();
    }

    deleteVehicle(id) {
        this.fireBaseService.deleteVehicle(id);
    }
}
