import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, concat, concatAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = 'api/heroes';

  constructor(private http: HttpClient, private msgService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroUrl);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  log(msg: string): void {
    this.msgService.add(`HeroService:${msg}`);
  }
}
