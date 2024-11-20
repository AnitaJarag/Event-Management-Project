import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { Register } from '../models/register';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
reg:Register=new Register();
constructor(private regServ:RegisterService,private router:Router)
{

}
submitdata(){
  this.regServ.login(this.reg).subscribe((data:Register)=>{
    if(data!=null){
      localStorage.setItem("emailid",data.emailid)
      localStorage.setItem("name",data.name)
      alert('login successfull')
      this.router.navigate(['/'])
    }
  })
}
}
