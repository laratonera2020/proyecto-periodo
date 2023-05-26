import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private routingservice:Router){

  }

  dirigirAntiguoTestamento(){
    this.routingservice.navigate(['antiguo-testamento'])
    

  }

  dirigirNuevoTestamento(){
    this.routingservice.navigate(['nuevo-testamento'])
    

  }  

}
