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
  login: string;


  constructor(
    private restService: RestService,
    private userSession: UserSessionService
  ) {
    this.login = this.userSession.getUserLogin();
  }

  addProduct(form: NgForm) {
    const body = new ProductToAdd (
      form.value.name,
      form.value.price,
      form.value.currency,
      form.value.type,
      2
    );

    this.restService.postURL(`product/new`, body).subscribe((res) => {
      console.log(res);
      if (res.status == '200') {
        alert('Produkt został dodany!');
      }
    })

  }

  // getShopId() {
  //   this.restService.getURL(`user/data/${this.login}`).subscribe((res) => {
  //     console.log(res);
  //   })
  // }

  ngOnInit(): void {
    console.log(this.login)
    // this.getShopId()
  }
}
