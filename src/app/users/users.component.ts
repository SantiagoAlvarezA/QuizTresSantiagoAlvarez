import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  textButton = "Guardar";
  user:any = {};

  status: any = 'create';
  users = null;





  constructor(private fireBaseService: UsersService, private route: ActivatedRoute) {
    this.users = fireBaseService.getUsers();
    // this.status = this.route.snapshot.params['status'];
    // console.log(this.status);
    this.textButton = (this.status == 'create') ? 'Guardar' : 'Actualizar';
  }

  ngOnInit() {
  }

  validateStatusButton() {
    if (this.status == 'create') {
      this.createUser();
    } else {
      this.updateUser();
    }
  }


  getUser(id) {
    this.fireBaseService.getUser(id).valueChanges().subscribe(user => {
      this.user = user;
      this.textButton = 'Actualizar';
      this.status = id;
    });
  }

  cancelUser() {
    this.status = 'create';
    this.textButton = 'Guardar';
    this.user = {};
  }

  createUser() {
    this.user.id = Date.now();
    this.fireBaseService.createUser(this.user);
    this.cancelUser();
  }

  updateUser() {
    this.fireBaseService.updateUser(this.user);
    this.cancelUser();
  }

  deleteUser(id) {
    this.fireBaseService.deleteUser(id);
  }
}
