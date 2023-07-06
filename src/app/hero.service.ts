import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(id:number):Observable<Hero>{
    const hero =HEROES.find(hero=> hero.id==id)!;
    this.messageService.add(`HeroService : fetched hero with id=${id}`)
    return of(hero)
  }  
  getHeros():Observable<Hero[]>{
    const heroes=of(HEROES);
    this.messageService.add('HeroService : fetched heroes')
    return heroes
  }

  constructor(private messageService:MessageService) { }
}
