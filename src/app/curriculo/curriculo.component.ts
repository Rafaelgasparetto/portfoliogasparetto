import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {

  panelOpenStatePerfil = false;
  panelOpenStateExp = false;
  panelOpenStateEducacao = false;
  panelOpenStateCursos = false;
  panelOpenStateDown = false;
  panelOpenStateCerti = false;



  constructor() { }

  ngOnInit(): void {
    
  }

  irAoTopo(){
    window.scrollTo(0,0);
  }



}
