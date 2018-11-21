import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  constructor(private db: AngularFireDatabase) { }

  // Metodo para listar todas los vehiculos
  public getVeicles() {
    return this.db.list('vehicles').valueChanges();
  }

  // Metodo para obtener un solo vehiculo
  public getVehicle(id) {
    return this.db.object('vehicles/' + id);
  }

  // Metodo crear un nuevo vehiculo
  public createVehicle(vehicle) {
    this.db.database.ref('vehicles/' + vehicle.id).set(vehicle);
  }

  // Metodo para actualizar los datos de un vehiculo
  public updateVehicle(vehicle) {
    this.db.database.ref('vehicles/' + vehicle.id).set(vehicle);
  }

  // Metodo para eliminar un vehiculo
  public deleteVehicle(id) {
    this.db.object('vehicles/' + id).remove();
  }
}
