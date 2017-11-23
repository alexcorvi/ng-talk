import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './components/main/main.component';
import { VideoThumbComponent } from './components/video-thumb/video-thumb.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { VideosListComponent } from './components/videos-list/videos-list.component';

import { VideosService } from './services/videos.service';
import { UsersService } from './services/users.service';

@NgModule({
	declarations: [ MainComponent, VideoThumbComponent, VideoEmbedComponent, VideosListComponent ],
	imports: [ BrowserModule, FormsModule ],
	providers: [ VideosService, UsersService ],
	bootstrap: [ MainComponent ]
})
export class AppModule {}
