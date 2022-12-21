import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequesterService } from '../services/requester.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

  user: any = {
    nome: 'Vítor Hugo'
  };
  platform: any = '';
  gameId: any = '';
  newReview: any = {
    review: '',
    nota: 0
  };
  reviews: any = [];
  jogo: any = {};

  constructor(
    private route: ActivatedRoute,
    private requester: RequesterService
  ) {}

  ngOnInit(): void {
    this.platform = this.route.snapshot.paramMap.get('platform');
    this.gameId = this.route.snapshot.paramMap.get('id');
    this.getReviews();
    this.getGame();
  }

  getReviews(): void {
    this.requester.get(`reviews/${this.gameId}`).subscribe({
      next: res => {
        this.reviews = res;
      },
      error: error => console.log(error),
      complete: () => {}
    })
  }

  createReview(): void {
    let body: any = {};
    body['autor'] = this.user.nome;
    body['nota'] = this.newReview.nota;
    body['review'] = this.newReview.review;

    this.requester.post(`reviews/${this.gameId}`, body).subscribe({
      next: res => {
        if (res != null) {
          this.getReviews();
        }
      },
      error: error => alert(error),
      complete: () => {}
    });
  }

  getGame(): void {
    this.requester.get(`games/${this.gameId}`).subscribe({
      next: res => this.jogo = res,
      error: error => console.log(error),
      complete: () => {}
    });
  }

}
