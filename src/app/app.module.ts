import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { VehiclesComponent } from './vehicles/vehicles.component';



/////firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { VehiclesService } from './services/vehicles.service';
import { UsersComponent } from './users/users.component';
import { UsersService } from './services/users.service';

//////////////////////////////


////rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'users', component: UsersComponent },
];
/////////////////////////

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    VehiclesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [VehiclesService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
