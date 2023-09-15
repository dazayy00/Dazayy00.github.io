import { Component } from '@angular/core';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  puesto: String = "front-end developer";
  empresa: String = "Coppel";
  fecha_inicio: String = "2021";
  fecha_fin: String = "actualidad";
  ciudad: String = "Orizaba";
  pais: String = "México";
  logros: String = "Desarrollo de aplicaciones web";


  workExperience: any[] = [];

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getHeader().subscribe((data: any) => {
      this.workExperience = data.map((item: any) => {
        return {
          fecha: `${item.fechaInicio} - ${item.fechaFin}`,
          ubicacion: `${item.ciudad}, ${item.pais}`,
          puesto: item.puesto,
          empresa: item.empresa,
          logros: item.logros
        };
      });
    });
  }
}

