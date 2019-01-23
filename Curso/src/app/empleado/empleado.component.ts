import {Component} from '@angular/core';
import {Empleado} from './empleado';
@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html',
})
export class EmpleadoComponent{
    public titulo = 'Componente Empleado';  
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color_seleccionado:string;
    public color:string;
    
    constructor(){
        this.empleado = new Empleado('David Lopez', 45, 'Cocinero',true);
        this.trabajadores =[
            new Empleado('Manolo Martinez',35,'Administracion',true),
            new Empleado('Ana Lopez',43,'Programador',false),
            new Empleado('Ivan Martinez',56,'Administracion',true)
            
        ];
        this.trabajador_externo = true;
        this.color = 'blue';
        this.color_seleccionado ='#ccc';
    }
    ngOnInit(){
        
        console.log(this.trabajadores);
    }
    
    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}