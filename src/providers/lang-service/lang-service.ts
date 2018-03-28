import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LangServiceProvider
 {

	strings: any;

	constructor(public http: HttpClient)
	{
		this.initStrings();
	}

	initStrings()
	{
		this.strings = {};
		this.strings['en'] = {};
		this.strings['fr'] = {};
		this.strings['es'] = {};

		this.strings['en']['login.authenticating'] = 'Authenticating';
		this.strings['fr']['login.authenticating'] = 'Authenticating';
		this.strings['es']['login.authenticating'] = 'Autenticando';

		this.strings['en']['login.invalid.credentials'] = 'Invalid credentials';
		this.strings['fr']['login.invalid.credentials'] = 'Invalid credentials';
		this.strings['es']['login.invalid.credentials'] = 'Credenciales de usuario inválidas';
	}

	getString(key, lang)
	{
		return this.strings[lang][key];
	}
}
