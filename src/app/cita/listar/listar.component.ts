import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { CitaService } from '../cita.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  citas!: Cita[];

  constructor(private citaService: CitaService){

  }

  ngOnInit(): void {
    this.getNow()
  }

  getNow() {
    this.citaService.getNow().subscribe((res) => {
      console.log(res);
      if (res?.citas) {
        this.citas = res.citas;
        console.log(this.citas);
      } else {
        SwalUtils.customMessageError("error", "No se encontró nada");
      }
    }, (error: any) => {
      console.log(error);
      SwalUtils.customMessageError("error", "Error al consultar");
    });
  }
  


}
