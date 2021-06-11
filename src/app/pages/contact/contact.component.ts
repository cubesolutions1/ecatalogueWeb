import { Contact } from '../../shared/Model/contact';
import { ApiService } from '../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  error: String;
  color: String;
  description: String;
  lat = 14.609370306770892
  lng = -61.072562611416245

  constructor(private apiSer: ApiService,
    private route: Router) { }

  ngOnInit() {
  }
  onContact() {
    this.apiSer.post('users/addContact', this.contact).subscribe(data => {
      if (data) {
        console.log(data)
        this.getALert(data.status, 'success',"success");
      
      }
    }, err => {
      this.getALert(err.error.status, 'danger', err.error.message);
    });
  }
  getALert(error, color, description) {
    this.error = error;
    this.color = color
    this.description = description
  }
}
