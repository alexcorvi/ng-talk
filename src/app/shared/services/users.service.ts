import { Injectable } from '@angular/core';
import request from 'axios';
import { User } from '../interfaces/user';

@Injectable()
export class UsersService {
	users: Array<User> = [];

	constructor() {
		this.request();
	}

	getUserById(id: number) {
		console.log(id, this.users.find((user) => user.id === id), this.users);
		return this.users.find((user) => user.id === id);
	}

	async request() {
		const response = await request.get<Array<User>>('http://fin.run/users.json');
		this.users = response.data;
	}
}
