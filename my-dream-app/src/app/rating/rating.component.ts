import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

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

  @Output() 
  ratingClicked: EventEmitter<string>  = new EventEmitter<string>();

  onClickRating() : void{ 
   console.log(`Rating ${this.targetScore} was clicked`); 
   this.ratingClicked.emit(`Rating ${this.targetScore} was clicked`); 
  } 

  ngOnInit(): void {
    this.starWidth = this.targetScore * 75 / 5;
  }

  ngOnChanges(): void { 
  
    }


}
