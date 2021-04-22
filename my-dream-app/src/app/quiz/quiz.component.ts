import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  name: String = "";

  likeText: String;
  like:number =100;
  disLikeText: String;
  dislike:number =25;
  btnStyle: String;
  btnStyle2: String;
  constructor() {

    this.likeText =  "Like | "+this.like;
    this.disLikeText =  "Dislike | "+this.dislike;
    this.btnStyle = "like-button-deactive";
    this.btnStyle2 = "like-button-deactive";
   }
  onLikeClick(){
    if(this.btnStyle === "like-button-active"){
       this.btnStyle = "like-button-deactive";
       this.like--;
    }else{
      this.btnStyle = "like-button-active";
      this.like++;
    }
    this.likeText = "Like | "+this.like;
    //console.log(this.name);
  }
  onDisLikeClick(){
    if(this.btnStyle2 === "like-button-active"){
      this.btnStyle2 = "like-button-deactive";
      this.dislike--;
      
   }else{
     this.btnStyle2 = "like-button-active";
     this.dislike++;
   }
   this.disLikeText =  "Dislike | "+this.dislike;
    //console.log(this.name);
  }

  ngOnInit(): void {
    //console.log("Init : "+this.name);
  }

}
