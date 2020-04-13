import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { of, fromEvent, interval } from 'rxjs';
import { switchMap, map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private msgService: MessageService) {

  }

  heroes: Hero[];

  ngOnInit() {
    this.getHeroes();

    this.test();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(r => {
      this.heroes = r;
    });
  }

  test(): void {
    const a1 = of('A', 'B', 'C');
    const a2 = of(11, 22, 33);


  }
}
