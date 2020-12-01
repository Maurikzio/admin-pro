import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent   {
  progress: number = 50

  get getPercentage(): string{
    return `${this.progress}%`; 
  }

  incrementProgress(value: number){
    if(this.progress >= 100){
      this.progress = 100;
      return
    }
    this.progress += value;
  }

  decrementProgress(value: number){
    if(this.progress <= 0){
      this.progress = 0;
      return;
    }
    this.progress -= value
  }

}
