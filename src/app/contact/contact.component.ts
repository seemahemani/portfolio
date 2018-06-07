import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  clicked({ target: marker }) {
    marker.nguiMapComponent.openInfoWindow('iw', marker);
  }
  onMarkerInit(marker) {
    setTimeout(() => {
      marker.nguiMapComponent.openInfoWindow('iw', marker)
    }, 1000);
  }
}
