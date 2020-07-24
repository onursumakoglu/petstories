import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  images = ["http://127.0.0.1:5000/assets/images/indir.jpg",
  "http://127.0.0.1:5000/assets/images/maxresdefault.jpg"];
  
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:5000/get_images_list')
      .subscribe(this.printResults);
  }

  printResults(data){
    this.images = data;
  }

}
