import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      name: "Inicio",
      path: "/inicio"
    },
    {
      name: "Quienes somos",
      path: "/sabermas"
    },
    {
      name: "Contacto",
      path: "/contacto"
    },
    {
      name: "Post",
      path: "/posts"
    }
  ]

 
  constructor() { }

  ngOnInit(): void {
    
  }


}
