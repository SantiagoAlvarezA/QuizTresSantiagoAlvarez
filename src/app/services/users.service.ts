import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private db: AngularFireDatabase) { }

  // Metodo para listar todas los vehiculos
  public getUsers() {
    return this.db.list('users').valueChanges();
  }

  // Metodo para obtener un solo vehiculo
  public getUser(id) {
    return this.db.object('users/' + id);
  }

  // Metodo crear un nuevo vehiculo
  public createUser(user) {
    this.db.database.ref('users/' + user.id).set(user);
  }

  // Metodo para actualizar los datos de un vehiculo
  public updateUser(user) {
    this.db.database.ref('users/' + user.id).set(user);
  }

  // Metodo para eliminar un vehiculo
  public deleteUser(id) {
    this.db.object('users/' + id).remove();
  }
}
