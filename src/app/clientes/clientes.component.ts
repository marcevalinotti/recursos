import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] =[
    {id: 1, nombre: 'Marcelo', apellido: 'Valinotti', email: 'marcevalinotti@gmail.com', fecha:'2017-12-11'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
