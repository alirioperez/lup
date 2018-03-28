import { Component } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';

import { LangServiceProvider } from '../../providers/lang-service/lang-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

// -----------------------------------------------------------------------------------------------------------------------------
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	loader: any;
	dataObject: any;
	credentialsObject = { un: '', pw: '' };

	// -----------------------------------------------------------------------------------------------------------------------------
	constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
		private toastCtrl: ToastController, public auth: AuthServiceProvider, public lang: LangServiceProvider)
	{
	}

	// -----------------------------------------------------------------------------------------------------------------------------
	authenticate()
	{
		this.presentLoading();

		this.auth.authenticate(this.credentialsObject['un'], this.credentialsObject['pw']).then(
		(successObject) =>
		{
			this.navCtrl.setRoot(HomePage);

			this.dataObject = successObject;
			localStorage.setItem('token', successObject['id_token']);
			console.log(successObject['id_token']);

			this.loader.dismiss();
		},
		(errObject) =>
		{
			this.loader.dismiss();
			this.presentToast(this.lang.getString('login.invalid.credentials', 'en'));
		});
	}

	// -----------------------------------------------------------------------------------------------------------------------------
	presentLoading()
	{
		let thisOne = this;
		this.loader = this.loadingCtrl.create(
		{
			content : thisOne.lang.getString('login.authenticating', 'en')
		});

		this.loader.present();
	}

	presentToast(msg)
	{
		let toast = this.toastCtrl.create(
		{
			message: msg,
			duration: 3000,
			position: 'bottom',
			dismissOnPageChange: true
		});

		toast.onDidDismiss(() =>
		{
			console.log('Dismissed toast');
		});

		toast.present();
	}

	// -----------------------------------------------------------------------------------------------------------------------------
	ionViewDidLoad()
	{
		console.log('ionViewDidLoad LoginPage');
	}
}
