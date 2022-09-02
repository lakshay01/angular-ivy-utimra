import { Component, OnInit, VERSION } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PeopleService],
})
export class AppComponent implements OnInit {
  constructor(private peopleService: PeopleService) {}
  name = 'User Details';
  details = [];
  ngOnInit() {
    this.peopleService.getPeopleList().subscribe(
      (data: any) => {
        this.details = data;
      },
      (error) => {
        console.log('LAkshay' + this.details);
      }
    );
  }
}
