import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  public getProducts(){
    let products:Product[];
    products = [
      new Product(1, "Laptop", 50000), 
      new Product(2, "Ipad", 6000),
      new Product(3, "Hard Disk", 10000)
    ]

    return products
  }
}
