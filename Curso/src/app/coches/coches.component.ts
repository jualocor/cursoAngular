import {Component} from '@angular/core';
import {Coche} from './coche';
import {PeticionesServices} from '../services/peticiones.services';
@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers:[PeticionesServices]
})

export class CochesComponent{
    public coche:Coche;
    public coches:Array<Coche>;
    
    constructor(
        private _peticionesService: PeticionesServices
    ){
        this.coche = new Coche("","","");
        this.coches =[
            new Coche("Seat Panda","120","Blanco"),
            new Coche("Mercedes Clase C","180","Plateado")
        ];
        
    }
    ngOnInit(){
        console.log(this._peticionesService.getPrueba());
    }
    onSubmit(){
       this.coches.push(this.coche);
        this.coche = new Coche("","",""); 
    }
}