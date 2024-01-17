import { Injectable, OnInit } from '@angular/core';
import { Route } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ConexionDBService{
  
  constructor() { }

  token?:string;

  login(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response=>{
        firebase.auth().currentUser?.getIdToken().then(
          token=>{
            this.token=token;
          }
        )
      }
    )
  }

  getIdToken(){
    return this.token;
  }
}
