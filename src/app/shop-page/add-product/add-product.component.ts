import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { UserSessionService } from 'src/app/services/userSession.service';
import { ProductToAdd } from 'src/app/models/product-to-add';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {


  constructor(
    private restService: RestService,
    private userSession: UserSessionService
  ) {}

  addProduct(form: NgForm) {
    // const body = new ProductToAdd (

    // )
  }

  ngOnInit(): void {}
}
