import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { RestService } from "../services/rest.service";
import { RegisterUser } from "../models/registeruser";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

    constructor(
    private router: Router,
    private restService: RestService) {}

  register(form: NgForm) {
    const body = new RegisterUser (
      form.value.login,
      form.value.password,
      form.value.address,
      form.value.email,
      form.value.phone,
      form.value.name,
      form.value.userType
  )
    this.restService.postURL("user/register", body)
      .subscribe(res => {
          if (res.status == "200") {
            alert("Rejestracja przebiegła pomyślnie!");
            this.router.navigate(['../login']);
          }
      });
  }

  ngOnInit(): void {
  }

}
