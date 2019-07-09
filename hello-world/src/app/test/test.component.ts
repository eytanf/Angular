import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: 
  `<h2>
    Fuck you {{name}} i took the welcome down! nub gitGud!
  </h2>
  <input bind-disabled="isDisabled" [id]="myId" type="text" value="hello">
  <input [disabled]="isDisabled" [id]="myId" type="text" value="hello">
  <h2 class="text-success">Yey im Green</h2>
  <h2 class="text-danger">Yey im Red</h2>
  <h2 class="text-special">Yey im Italian</h2>
    `
  ,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }`]
})
export class TestComponent implements OnInit {

  public name = "Elad";
  public myId = "testId";
  public isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

}
