import { Component } from '@angular/core';
import { CertificationService } from '../services/certification.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})


export class CertificationComponent {
  certification: any[] = [];

  constructor(private certificationService: CertificationService) { }

  ngOnInit(): void {
    this.certificationService.getCertification().subscribe((data: any) => {
      this.certification = data.map((item: any) => {
        
        console.log(item);
        return {
          certification: item.certificacion, // Asegúrate de que los nombres sean correctos aquí
          institution: item.institucion,
          date: item.fecha,
          description: item.descripcion,
        };
      });
    });
  }
}

