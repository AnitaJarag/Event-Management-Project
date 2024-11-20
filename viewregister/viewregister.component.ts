import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-view-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './viewregister.component.html',
  styleUrls: ['./viewregister.component.css']  // Corrected here to styleUrls
})
export class ViewRegisterComponent implements OnInit {
  regs: Register[] = [];
  
  constructor(private regServ: RegisterService) {}

  ngOnInit(): void {
    this.regServ.getAll().subscribe((data: Register[]) => {
      if (data != null) {
        this.regs = data;
      }
    });
  }
}
