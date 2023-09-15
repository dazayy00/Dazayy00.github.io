import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  name: string = "Johan";
  title: string = "Estudiante";
  objetive: string = "aprender aa programar";
  photo: string = "";
  email: string = "joohan@gmail.com";
  phone: string = "272 789 1234";
  location: string = "Orizaba, Veracruz, México";
  social: string = "@Dazayy00";

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.getHeader().subscribe((data: any) => {
      console.log(data);

      this.name = data.name;
      this.title = data.title;
      this.objetive = data.objective;
      this.photo = data.photo;
      this.email = data.email;
      this.phone = data.phone;
      this.location = data.location;
      this.social = data.social;
    }
    );
  }



}
