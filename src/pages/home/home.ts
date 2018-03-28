import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

// -----------------------------------------------------------------------------------------------------------------------------
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
	constructor(public navCtrl: NavController){}

	// -----------------------------------------------------------------------------------------------------------------------------
	logout()
	{
	  localStorage.clear();
	  this.navCtrl.setRoot(LoginPage);

	  // this.authService.logout().then(
	  // (successObject) =>
	  // {
	  // 	this.loading.dismiss();
	  // 	let nav = this.app.getRootNav();
	  // 	this.rootPage = LoginPage;
	  // },
	  // (errObject) =>
	  // {
	  // 	this.loading.dismiss();
	  // 	this.presentToast(err);
	  // });
	}
}
