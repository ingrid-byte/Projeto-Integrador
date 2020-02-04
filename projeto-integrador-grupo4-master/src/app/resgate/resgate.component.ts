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
  constructor(private router: Router, private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  submit(){
    this.usuarioService.validaEmail(this.usuario.email).subscribe(async (resposta: any) =>{
        if(await resposta){
          this.router.navigate(['senhanova']);          
  
        }
     }, err => {
       console.log(`Erro cod: ${err.status}`);
       alert("Digite um email cadastrado")
     });


  }

}
