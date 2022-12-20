import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequesterService } from '../services/requester.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  platform: any = '';
  jogos: any = {};

  constructor(
    private requester: RequesterService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.platform = this.route.snapshot.paramMap.get('platform');
    if (this.platform != 'ps4' && this.platform != 'xbox' && this.platform != 'switch' && this.platform != 'pc')
      this.router.navigate(['/home']);
    this.findGames();
  }

  findGames(): void {
    this.requester.get(`platforms/${this.platform}`).subscribe({
      next: res => {
        this.jogos = res;
        console.log(res);
      },
      error: error => console.log(error),
      complete: () => {}
    })
  }

}
