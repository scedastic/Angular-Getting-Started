import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the product id from the route
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = Number(routeParams.get('productId'));

    // Find the product
    this.product = products.find(product => product.id === productIDFromRoute);
  }
}
