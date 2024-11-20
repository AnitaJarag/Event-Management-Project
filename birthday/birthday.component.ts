import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf and *ngFor

@Component({
  selector: 'app-birthday',
  standalone: true,
  imports: [CommonModule], // Include CommonModule for template directives
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css'],
})
export class BirthdayComponent {
  events = [
    { id: 1, name: 'Glowing Butterfly Birthday Bliss', price: 5000, image: 'assets/b7.jpeg' },
    { id: 2, name: 'White And Gold Bliss Floral Birthday Decor', price: 8000, image: 'assets/b9.jpeg' },
    { id: 3, name: 'Golden Sequin Birthday', price: 12000, image: 'assets/b1.jpeg' },
    { id: 1, name: 'Glowing Butterfly Birthday Bliss', price: 5000, image: 'assets/b7.jpeg' },
    { id: 2, name: 'White And Gold Bliss Floral Birthday Decor', price: 8000, image: 'assets/b9.jpeg' },
    { id: 3, name: 'Golden Sequin Birthday', price: 12000, image: 'assets/b1.jpeg' },
    { id: 1, name: 'Glowing Butterfly Birthday Bliss', price: 5000, image: 'assets/b7.jpeg' },
    { id: 2, name: 'White And Gold Bliss Floral Birthday Decor', price: 8000, image: 'assets/b9.jpeg' },
    { id: 3, name: 'Golden Sequin Birthday', price: 12000, image: 'assets/b1.jpeg' },
    { id: 1, name: 'Glowing Butterfly Birthday Bliss', price: 5000, image: 'assets/b7.jpeg' },
    { id: 2, name: 'White And Gold Bliss Floral Birthday Decor', price: 8000, image: 'assets/b9.jpeg' },
    { id: 3, name: 'Golden Sequin Birthday', price: 12000, image: 'assets/b1.jpeg' },
  ];

  cart: any[] = [];
  showCartForm = false;

  addToCart(event: any): void {
    if (!this.cart.find(item => item.id === event.id)) {
      this.cart.push(event);
      alert(`${event.name} added to cart!`);
      this.showCartForm = true;
    } else {
      alert(`${event.name} is already in the cart.`);
    }
  }

  removeFromCart(index: number): void {
    const removedEvent = this.cart[index];
    this.cart.splice(index, 1);
    alert(`${removedEvent.name} removed from cart.`);
    if (this.cart.length === 0) this.showCartForm = false;
  }

  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  confirmCart(): void {
    alert('Cart confirmed! Proceeding to booking...');
    this.cart = [];
    this.showCartForm = false;
  }
}
