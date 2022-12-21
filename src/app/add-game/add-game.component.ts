import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequesterService } from '../services/requester.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {

  newGame: any = {};

  constructor(
    private requester: RequesterService,
    private router: Router,
  ) {}

  createGame(): void {
    let body: any = {};
    body['nome'] = this.newGame.nome;
    body['resumo'] = this.newGame.resumo;
    body['desenvolvedor'] = this.newGame.desenvolvedor;
    body['genero'] = this.newGame.genero;
    body['plataforma'] = this.newGame.plataforma;
    body['imagem'] = this.newGame.imagem;
    body['nota'] = this.newGame.nota;

    this.requester.post(`games`, body).subscribe({
      next: res => {
        console.log(res);
        if (res != null)
          alert('Jogo salvo com sucesso!');
      },
      error: error => alert(error),
      complete: () => {}
    })
  }

  disableSave(): boolean {
    if (!this.newGame.nome ||
        !this.newGame.resumo ||
        !this.newGame.desenvolvedor ||
        !this.newGame.genero ||
        !this.newGame.plataforma ||
        !this.newGame.imagem ||
        !this.newGame.nota)
      return true;
    return false;
  }

}
