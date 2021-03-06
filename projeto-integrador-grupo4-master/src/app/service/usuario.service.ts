import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }




  getAll(){
    return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/all`);
  }

  getById(id: number) {
    return this.http.get(`http://cloud.professorisidro.com.br:8088/usuario/${id}`);
  }

  validaEmail(email: string) {
    return this.http.get(`http://localhost:8080/usuario/validaEmail/${email}`);
  }

  insert(usuario: Usuario){
    return this.http.post(`http://cloud.professorisidro.com.br:8088/usuario/new`, usuario);
  }

  update(usuario: Usuario) {
    return this.http.put(`http://cloud.professorisidro.com.br:8088/usuario/`, usuario);
  }

  verificar(usuario: Usuario){
    return this.http.post(`http://cloud.professorisidro.com.br:8088/usuario/login`, usuario);
  }

  alterarSenha(usuario: Usuario) {
    return this.http.put(`http://localhost:8080/usuario/email/${usuario.email}/trocarSenha`, usuario);
  }
}
