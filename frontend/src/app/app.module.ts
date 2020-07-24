import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ImageCardComponent } from './image-card/image-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    UploadImageComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
