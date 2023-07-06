import { Component, Inject } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes :Hero[]=[];
  // selectedHero?:Hero;
  // heroService:Inject(HeroService)
  constructor(private heroservice:HeroService,
              private messageService:MessageService){
  }
  ngOnInit():void{
    this.getHeroes();
  }
  getHeroes():void{
    this.heroservice.getHeros().subscribe(heroes => this.heroes=heroes);
  }
  // onSelector(hero:Hero):void{
  //   this.selectedHero=hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id =${hero.id}`)
  // }
}
