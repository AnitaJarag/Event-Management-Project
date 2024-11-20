import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  standalone: true, // Add this line to make it a standalone component
  imports: [CommonModule], // Now valid since 'standalone: true' is added
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddToCartComponent {
  events = [
    {
      id: 1,
      name: 'Birthday Bash',
      date: new Date(2024, 11, 25),
      price: 5000,
      image: 'assets/b.jpeg'
    },
    {
      id: 2,
      name: 'Wedding Celebration',
      date: new Date(2024, 12, 10),
      price: 20000,
      image: 'assets/e13.jpeg'
    },
    {
      id: 3,
      name: 'Corporate Party',
      date: new Date(2024, 11, 30),
      price: 15000,
      image: 'assets/p7.jpeg'
    }
  ];

  cart: any[] = [];

  addToCart(event: any): void {
    if (!this.cart.find(item => item.id === event.id)) {
      this.cart.push(event);
      alert(`${event.name} added to cart!`);
    } else {
      alert(`${event.name} is already in the cart.`);
    }
  }

  removeFromCart(index: number): void {
    const removedEvent = this.cart[index];
    this.cart.splice(index, 1);
    alert(`${removedEvent.name} removed from cart.`);
  }

  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
