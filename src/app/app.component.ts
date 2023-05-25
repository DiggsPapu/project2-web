import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  search: string = ""
  listTeams: any = {}
  players: any = {}
  searchQuery: string = '';
  tableList: any = {}

  onSearch() {
    if (this.searchQuery === "") {
      this.tableList = this.listTeams
    }
    else {
      for (let index = 0; index < this.listTeams.length; index++) {
        if (this.searchQuery === this.listTeams[index]['club_name']){
          this.tableList = [this.listTeams[index]]
        }
      }
    }
    console.log(this.tableList)
  }
  constructor(
    private route: ActivatedRoute,
    private fifaService: FifaserviceService,
    private router: Router,
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
    // this.listTeams.forEach((team:Object) => {
    //  console.log(team) 
    // });
  }
}
