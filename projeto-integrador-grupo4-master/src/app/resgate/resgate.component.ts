import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.css']
})
export class ResgateComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  submit() {
    this.usuarioService.validaEmail(this.usuario.email).subscribe( (resposta: boolean) => {
        if (resposta) {
          this.router.navigate([`senhanova/${this.usuario.email}`]);

        } else {
          alert ( "Digite um email cadastrado" );
        }
     }, err => {
       console.error(`Erro cod: ${err.status}`);
     });


  }

}
