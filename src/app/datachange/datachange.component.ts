import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from '../models/data';
import { RestService } from '../services/rest.service';
import { UserSessionService } from '../services/userSession.service';

@Component({
  selector: 'app-datachange',
  templateUrl: './datachange.component.html',
  styleUrls: ['./datachange.component.css'],
})
export class DataChangeComponent implements OnInit {
  login: string;

  constructor(
    private restService: RestService,
    private userSession: UserSessionService
  ) {
    this.login = '';
  }

  changeData(form: NgForm) {
    const body = new Data (
      this.userSession.getUserLogin(),
      form.value.address,
      form.value.email,
      form.value.phone,
      form.value.name
    );
    console.log(body);
    this.restService.postURL(`user/update`, body).subscribe((res) => {
      console.log(res);
      if (res.status == '200') {
        alert('Dane zostały zmienione!');
      } else {
        alert('Wystąpił błąd! Proszę spróbować ponownie później!');
      }
    });
  }

  ngOnInit(): void {}
}
