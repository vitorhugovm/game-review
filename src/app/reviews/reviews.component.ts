import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

  platform: any = '';
  newReview: string = '';
  jogo = {
    id: '0',
    nome: 'God of War (2018)',
    resumo: 'É um novo começo para kratos. Vivendo como um homem longe da sombra dos deuses, ele se aventura pelas selvagens florestas nórdicas com seu filho atreus, lutando para cumprir uma missão profundamente pessoal.',
    desenvolvedor: 'Santa Monica Studio',
    genero: 'Ação e Aventura',
    imagem: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7',
    reviews: [
      {
        autor: 'Vítor Hugo',
        nota: 10,
        review: 'God of War é o melhor jogo que já joguei na vida!'
      }
    ]
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.platform = this.route.snapshot.paramMap.get('platform');
    this.getReviews(this.route.snapshot.paramMap.get('id'));
  }

  getReviews(id: any): void {
    return;
  }

}
