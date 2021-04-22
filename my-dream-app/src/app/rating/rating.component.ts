import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges,OnInit {

  @Input()
  targetScore: number = 0;

  @Input()
  isStar: boolean = false;
  starWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.starWidth = this.targetScore * 75 / 5;
  }

  ngOnChanges(): void { 
  
    }


}
