import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  title = 'hello-there';
  images = ["http://127.0.0.1:5000/assets/images/indir.jpg",
  "http://127.0.0.1:5000/assets/images/maxresdefault.jpg"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
