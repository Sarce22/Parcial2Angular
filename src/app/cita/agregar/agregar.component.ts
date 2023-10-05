import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cita } from '../cita';
import Swal from 'sweetalert2';
import { CitaService } from '../cita.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  registrarseFormulario!:FormGroup
  usuario: Cita = new Cita()

  constructor(private fb: FormBuilder,
    private citaService:CitaService){
    
  }

  ngOnInit(){
    this.registrarseFormulario = this.iniciarFormulario()
  }

  iniciarFormulario():FormGroup{
    return this.fb.group({
      cedula:['',[Validators.required]],
      nombre:['',[Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      observacion: ['', [Validators.required]],
    })
  }

 

  nuevaCita: Cita = new Cita(); 


  onSubmit() {
    if (this.registrarseFormulario.valid) {
      this.citaService.add(this.nuevaCita).subscribe(
        (response) => {
          console.log('Cita guardada con éxito:', response);
          this.nuevaCita = new Cita();
          Swal.fire({
            icon: 'success',
            title: 'Se registró con éxito',
            text: 'Disfruta del mejor contenido'
          });
        },
        (error) => {
          console.error('Error al guardar la cita:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error al guardar la cita',
            text: 'Por favor, verifica la información'
          });
        }
      );
    } else {
      console.log('Verifica tu información antes de registrar.');
      Swal.fire({
        icon: 'error',
        title: 'Oops... Verifica tu información',
        text: 'Something went wrong!',
        footer: '<a href="">Ayuda?</a>'
      });
    }
  }
  
  



}
