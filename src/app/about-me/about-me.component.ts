import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  work_card: number = 0;
  skill_card: number = 0;
  edu_card: number = 0;

  handleNext(){
    if(this.work_card==2){
      this.work_card = 0;
      console.log(this.work_card);
      return;
    }
    this.work_card = this.work_card+1;
    console.log(this.work_card);
  }

  handlePrevious(){
    if(this.work_card==0){
      this.work_card = 2;
      console.log(this.work_card);
      return;
    }
    this.work_card = this.work_card-1;
    console.log(this.work_card);
  }

  handleSkillNext(){
    if(this.skill_card==1){
      this.skill_card = 0;
      console.log(this.skill_card);
      return;
    }
    this.skill_card = this.skill_card+1;
    console.log(this.work_card);
  }

  handleSkillPrev(){
    if(this.skill_card==0){
      this.skill_card = 1;
      console.log(this.skill_card);
      return;
    }
    this.skill_card = this.skill_card-1;
    console.log(this.skill_card);
  }

  handleEduPrev(){
    if(this.edu_card==0){
      this.edu_card = 1;
      console.log(this.edu_card);
      return;
    }
    this.edu_card = this.edu_card-1;
    console.log(this.edu_card);
  }

  handleEduNext(){
    if(this.edu_card==1){
      this.edu_card = 0;
      console.log(this.edu_card);
      return;
    }
    this.edu_card = this.edu_card+1;
    console.log(this.edu_card);
  }

}
