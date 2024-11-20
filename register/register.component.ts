import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Correct Angular Router import
import { Register } from '../models/register';
import { RegisterService } from '../service/register.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Fixed typo
})
export class RegisterComponent implements OnInit {
  reg: Register = new Register();

  constructor(private regServ: RegisterService, private router: Router) {}

  ngOnInit(): void {}

  submitdata() {
    this.regServ.newUser(this.reg).subscribe(
      (data: Register) => {
        if (data) {
          alert('Registration Successful');
          this.router.navigate(['/somepath']); // Navigate to desired path after registration
        }
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }
}
