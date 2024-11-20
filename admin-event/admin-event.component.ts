import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminEventService } from '../service/admin-event.service'; // Ensure this service exists
import { FileHandle } from '../models/FileHandle'; // Ensure this model exists
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-event',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css'] // Correct property name
})
export class AdminEventComponent {
  event: any = { eventImages: [] }; // Replace 'any' with your Event model if defined
  submitted = false;
  errordata = '';

  constructor(
    private eventService: AdminEventService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  newEvent(): void {
    this.submitted = false;
    this.event = { eventImages: [] }; // Reset the event object
  }

  save(): void {
    const formData = this.prepareFormData(this.event);
    this.eventService.createEvent(formData).subscribe(
      (data: any) => {
        console.log(data);
        this.gotoList();
      },
      (error) => {
        console.log(error);
        this.errordata = error;
      }
    );
  }

  prepareFormData(event: any): FormData {
    const formData = new FormData();
    formData.append(
      'event',
      new Blob([JSON.stringify(event)], { type: 'application/json' })
    );
    for (let i = 0; i < event.eventImages.length; i++) {
      formData.append(
        'imageFile',
        event.eventImages[i].file,
        event.eventImages[i].file.name
      );
    }
    return formData;
  }

  removeImage(index: number): void {
    this.event.eventImages.splice(index, 1);
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
        name: file.name
      };
      this.event.eventImages.push(fileHandle);
    }
  }

  onSubmit() {
    this.save();
    this.submitted = true;
    console.log('Inside onSubmit');
  }

  gotoList() {
    this.router.navigate(['/home']);
  }
}
