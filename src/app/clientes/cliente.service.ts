import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint: string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    
    //return of(CLIENTES);
    return this.http.get(this.urlEndpoint).pipe(
      map(response => response as Cliente[])
    );
  }

  create (cliente:Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndpoint, cliente, {headers: this.httpHeaders})
  }
}
