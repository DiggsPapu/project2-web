import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FifaserviceService } from 'services/fifaservice.service';

@Component({
  selector: 'app-root', //This is the thing that calls the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  lists: any[] = []
  title = 'To-Do List'
  listCards: any = {}
  editCard: any = {}
  private search: string = ""
  listTeams: any = {}
  player: any = {}
  constructor(
    private route: ActivatedRoute,
    private fifaService: FifaserviceService,
    private router: Router,
    ) { }
  async ngOnInit() {
    this.listTeams = await (this.fifaService.getAllTeams())
    this.listCards = await (this.fifaService.getAllPlayers())
    this.player = await (this.fifaService.getPlayersFromTeam('Atletico de Madrid'))
    console.log(this.listTeams)
    // this.listTeams.forEach((team:Object) => {
    //  console.log(team) 
    // });
  }
}
