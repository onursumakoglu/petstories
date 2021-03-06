import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  selectedFile: File;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.selectedFile   = event.target.files[0]
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://127.0.0.1:5000/', uploadData)
      .subscribe();
  }

}
