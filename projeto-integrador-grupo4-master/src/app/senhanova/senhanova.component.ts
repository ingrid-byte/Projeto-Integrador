import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../service/usuario.service';
import {Usuario} from '../model/usuario';

@Component({
  selector: 'app-senhanova',
  templateUrl: './senhanova.component.html',
  styleUrls: ['./senhanova.component.css']
})
export class SenhanovaComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private router: Router, private usuarioService: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit() {
    const email: string = this.route.snapshot.params["email"];
    this.usuario.email = email;
  }
  verifica() {
    if (this.usuario.senha !== this.usuario.senhaConf) {
      alert("Senha diferentes");
    } else {
      this.usuarioService.alterarSenha(this.usuario).subscribe( (resposta: boolean) => {
        if (resposta) {
          alert("Sua senha foi alterada.");
        }
      }, err => {
        console.error(`Erro cod: ${err.status}`);
      });
    }
  }
}
