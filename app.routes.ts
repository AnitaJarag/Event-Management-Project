import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { FreshersComponent } from './freshers/freshers.component';
import { WeddingComponent } from './wedding/wedding.component';
import { EventDetailsComponent } from './eventdetails/eventdetails.component';
import { VcartComponent } from './vcart/vcart.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewFeedbackComponent } from './viewfeedback/viewfeedback.component';
import { ViewRegisterComponent } from './viewregister/viewregister.component';
import { AdminloginComponent } from './admin-login/admin-login.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { AdminViewEventComponent } from './admin-view-event/admin-view-event.component';
import { AddToCartComponent } from './addtocart/addtocart.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'events', component: EventsComponent },
    { path: 'birthday', component: BirthdayComponent },
    { path: 'freshers', component: FreshersComponent},
    { path: 'wedding', component: WeddingComponent},
    { path: 'eventdetails', component: EventDetailsComponent},
    { path: 'vcart', component: VcartComponent},
    { path: 'feedback', component: FeedbackComponent},
    { path: 'viewfeedback', component: ViewFeedbackComponent},
    { path: 'viewregister', component: ViewRegisterComponent},
    { path: 'adminlogin', component: AdminloginComponent},
    { path: 'adminevent', component:AdminEventComponent},
    { path: 'admin-view-event', component:AdminViewEventComponent},
    { path: 'addtocart', component: AddToCartComponent},
   
   ];

   @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
   })
   export class AppRoutingModule { }