import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from "../services/rest.service";
import {RegisterUser} from "../models/registeruser";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  // @Input()
  // login: string;
  // @Input()
  // password: string;
  // @Input()
  // address: string;
  // @Input()
  // mail: string;
  // @Input()
  // phone: string;
  // @Input()
  // name: string;
  // @Input()
  // userType: string;
  
  incorrectData: string

    constructor(
    private router: Router,
    private restService: RestService) {
    // this.login = "";
    // this.password = "";
    // this.address = "";
    // this.mail = "";
    // this.phone = "";
    // this.name = "";
    // this.userType = "";
    this.incorrectData = ""
  }

  register(form: NgForm) {
    console.log(form.value)
    const body = new RegisterUser (form.value.login,
      form.value.password,
      form.value.address,
      form.value.email,
      form.value.phone,
      form.value.name,
      form.value.userType
  )
  console.log(body)
    this.restService.postURL("user/register", body)
      .subscribe(res => {
        console.log(res)
          if (res.status == "200") {
            alert("Rejestracja przebiegła pomyślnie!");
            this.router.navigate(['../login']);
          }
          else {
            this.incorrectData = "Niepoprawne dane";
          }
      });
  }

  ngOnInit(): void {
  }

}
