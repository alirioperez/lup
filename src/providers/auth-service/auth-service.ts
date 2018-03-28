import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

let API_URL = 'http://localhost:3000/api/v1/users/tokens';

@Injectable()
export class AuthServiceProvider
 {
	constructor(public http: Http)
	{
		console.log('Hello AuthServiceProvider Provider');
	}

	login()
	{
		return new Promise(
			(resolve) =>
			{
				setTimeout(() => { resolve(false); }, 3000);
			}
		);
	}

	// -----------------------------------------------------------------------------------------------------------------------------
	// Authenticates an user and gets a token for him.
	// -----------------------------------------------------------------------------------------------------------------------------
	authenticate(username, password)
	{
		let payload =
		{
			"un" : username,
			"pw" : password
		};

		return new Promise(
			(resolve, reject) =>
			{
				let headers = new Headers();
				headers.append('Content-Type', 'application/json');

				this.http.post(API_URL, JSON.stringify(payload), { headers: headers })
					.subscribe(
					(res) =>
					{
						resolve(res.json());
      				},
					(err) =>
					{
        				reject(err);
      				});
			}
		);
	}

	// -----------------------------------------------------------------------------------------------------------------------------
	logout()
	{
		localStorage.clear();

		// return new Promise(
		// 	(resolve, reject) =>
		// 	{
		// 		let headers = new Headers();
		// 		headers.append('X-Auth-Token', localStorage.getItem('token'));
		//
		// 		this.http.delete(API_URL, {}, { headers: headers })
		// 			.subscribe(
		// 			res =>
		// 			{
		// 				localStorage.clear();
		// 			},
		// 			(err) =>
		// 			{
		// 				reject(err);
		// 			});
		// 	}
		// );
	}
}
