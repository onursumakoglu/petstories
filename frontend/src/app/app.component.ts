import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  images = ["http://127.0.0.1:5000/assets/images/indir.jpg",
  "http://127.0.0.1:5000/assets/images/maxresdefault.jpg"];
}
