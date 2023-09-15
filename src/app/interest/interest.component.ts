import { Component } from '@angular/core';
import { InterestService } from '../services/interest.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent {
  interest: any[] = [];

  constructor(private skillService: InterestService) { }

  ngOnInit(): void {
    this.skillService.getInterest().subscribe((data: any) => {
      this.interest = data.map((item: any) => {
        console.log(item);
        return {
          interest: item.interes
        };
      });
    });
  }
}
