import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../team';

@Component({
  selector: 'algorithm-box',
  templateUrl: './algorithm-box.component.html',
  styleUrls: ['./algorithm-box.component.css']
})
export class AlgorithmBoxComponent implements OnInit {
  @Input() public algorithm: (game, team1: Team, team2: Team) => void;

  constructor() { }

  ngOnInit() {
  }

}
