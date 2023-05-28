import { Component, Input, OnInit } from '@angular/core';
import { FifaserviceService } from 'services/fifaservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  listCards: any = {}
  @Input() team!:string
  constructor(
    private fifaService: FifaserviceService,
    private route: ActivatedRoute,
  ){}
  async ngOnInit() {
    this.route.params.subscribe( (params:any) => {this.team = params['team']})
    this.listCards = await (this.fifaService.getPlayersFromTeam(this.team))
  }
}
