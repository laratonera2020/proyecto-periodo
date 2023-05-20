import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-antiguo-testamento',
  templateUrl: './antiguo-testamento.component.html',
  styleUrls: ['./antiguo-testamento.component.css']
})
export class AntiguoTestamentoComponent {
  constructor(private routingservice:Router, private route:ActivatedRoute){
    
  }
  dirigirCreacion(){
    this.routingservice.navigate(['creacion'],{relativeTo:this.route})
    

  } 
  dirigirPatriarcas(){
    this.routingservice.navigate(['patriarcas'],{relativeTo:this.route})
    

  } 
  dirigirExodo(){
    this.routingservice.navigate(['exodo'],{relativeTo:this.route})
    

  } 
  dirigirAsentamiento(){
    this.routingservice.navigate(['asentamiento'],{relativeTo:this.route})
    

  } 
  dirigirJueces(){
    this.routingservice.navigate(['jueces'],{relativeTo:this.route})
    

  } 
  dirigirReinoUnido(){
    this.routingservice.navigate(['reino-unido'],{relativeTo:this.route})
    

  } 
  dirigirReinoDividido(){
    this.routingservice.navigate(['reino-dividido'],{relativeTo:this.route})
    

  } 
  dirigirCautiverio(){
    this.routingservice.navigate(['cautiverio'],{relativeTo:this.route})
    

  } 
  dirigirRestauracion(){
    this.routingservice.navigate(['restaruacion'],{relativeTo:this.route})
    

  } 
  dirigirSilencio(){
    this.routingservice.navigate(['silencio'],{relativeTo:this.route})
    

  } 
  

}
