import { Injectable } from '@angular/core';
import { Video } from '../interfaces/video';
import request from 'axios';
import { UsersService } from './users.service';

@Injectable()
export class VideosService {
	videos: Video[] = [];
	selectedVideoIndex: number;

	get selectedVideo() {
		return this.videos[this.selectedVideoIndex];
	}

	constructor(public users: UsersService) {
		this.request();
		console.log(this.users.getUserById(1));
	}

	async request() {
		const response = await request.get<Array<Video>>('http://fin.run/videos.json');
		this.videos = response.data;
	}
}
