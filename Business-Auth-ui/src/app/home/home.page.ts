
import { Component } from '@angular/core';



@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
})
export class HomePage {

    staySignedIn: boolean = true;

 constructor() {}

 changeStatus(value: any){
   this.staySignedIn = value;
 }

//  availableProducts = ['Product A', 'Product B', 'Product C'];
//   selectedProducts: { name: string, quantity: number }[] = [];

//   addProduct(productName: string): void {
//     const existingProductIndex = this.selectedProducts.findIndex(p => p.name === productName);

//     if (existingProductIndex !== -1) {
//       // If the product is already selected, increase the quantity
//       this.selectedProducts[existingProductIndex].quantity++;
//     } else {
//       // If the product is not selected, add it to the selected products array
//       this.selectedProducts.push({ name: productName, quantity: 1 });
//     }
// }
}