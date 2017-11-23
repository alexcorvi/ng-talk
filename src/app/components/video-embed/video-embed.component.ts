import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from '../../../types/video';

@Component({
	selector: 'app-video-embed',
	templateUrl: './video-embed.component.html',
	styleUrls: [ './video-embed.component.css' ]
})
export class VideoEmbedComponent implements OnInit {
	@Input() video: Video;
	@Input() index: number;

	get embedLink() {
		return this.video.url.replace('watch?v=', 'embed/');
	}

	get safeEmbedLink() {
		return this.sanitizer.bypassSecurityTrustResourceUrl(this.embedLink);
	}

	constructor(private sanitizer: DomSanitizer) {}

	ngOnInit() {}
}
