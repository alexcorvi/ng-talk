import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideoEmbedComponent } from './video-embed/video-embed.component';
import { VideoThumbComponent } from './video-thumb/video-thumb.component';
import { VideosService } from './shared/services/videos.service';
import { UsersService } from './shared/services/users.service';

@NgModule({
	declarations: [ AppComponent, VideosListComponent, VideoEmbedComponent, VideoThumbComponent ],
	imports: [ BrowserModule ],
	providers: [ VideosService, UsersService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
