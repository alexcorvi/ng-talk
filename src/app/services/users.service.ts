import { Injectable } from '@angular/core';
import request from 'axios';
import { User } from '../../types/user';

@Injectable()
export class UsersService {
	users: Array<User> = [];
	constructor() {
		this.request();
	}
	get sortedUsers() {
		return this.users.sort((a, b) => a.id - b.id);
	}
	getUserById(id: number) {
		return (
			this.users.find((user) => user.id === id) || {
				id: 1,
				avatar: '',
				name: ''
			}
		);
	}
	async request() {
		const response = await request.get('http://fin.run/users.json');
		this.users = response.data;
	}
}
