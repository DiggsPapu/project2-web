import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(){}
  @Input() player_id!: number
  @Input() name!: string
  @Input() full_name!: string
  // @Input() image!: string
  @Input() weight!:number
  @Input() height!:number
  @Input() overall_rating!: number
  ngOnInit(): void{}
}
