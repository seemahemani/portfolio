import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
