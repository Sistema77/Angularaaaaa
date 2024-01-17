import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, NgForm, Validators } from '@angular/forms';

import firebase from 'firebase/compat/app';
import { ConexionDBService } from '../conexion-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  private fb = inject(FormBuilder);

  addressForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  });

  onSubmit(formulario: any): void {
    const email = formulario.value.email;
    const password = formulario.value.password;

    this.loginService.login(email, password);
  }

  constructor(private loginService:ConexionDBService){} 

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD9YcwcljeBEQkNFga9m2YU5eS8BfGBuyY",
      authDomain: "prueba-c6b99.firebaseapp.com",
      databaseURL: "https://prueba-c6b99-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "prueba-c6b99",
      storageBucket: "prueba-c6b99.appspot.com",
      messagingSenderId: "21454707667",
      appId: "1:21454707667:web:3275718edd51b230f92d26"
    });
  }
}
