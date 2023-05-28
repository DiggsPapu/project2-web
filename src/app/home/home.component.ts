import { Component, OnInit } from '@angular/core';
import { FifaserviceService } from 'services/fifaservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  lists: any[] = []
  title = 'To-Do List'
  listCards: any = {}
  editCard: any = {}
  search: string = ""
  listTeams: any = {}
  players: any = {}
  searchQuery: string = '';
  tableList: any = {}
  constructor(
    private fifaService: FifaserviceService,
    ) { }
  async searchTeamPlayers(){
    console.log(this.search)
    this.players = await this.fifaService.getPlayersFromTeam(this.searchQuery)
    console.log(this.players)
  }
  async ngOnInit() {
    this.listTeams = await (this.fifaService.getAllTeams())
    this.listCards = await (this.fifaService.getAllPlayers())
    this.tableList = this.listTeams
  }
}
