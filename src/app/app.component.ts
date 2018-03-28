import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TeamsPage } from '../pages/teams/teams';
import { ListPage } from '../pages/list/list';

import { LangServiceProvider } from '../providers/lang-service/lang-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

// ------------------------------------------------------------------------------------------------------------------------------
@Component({ templateUrl: 'app.html' })
export class MyApp
{
	@ViewChild(Nav) nav: Nav;

	pages: Array<{title: string, component: any}>;
	loader: any;
	rootPage: any;

	// -----------------------------------------------------------------------------------------------------------------------------
	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
		public auth: AuthServiceProvider, public lang: LangServiceProvider, public loadingCtrl : LoadingController)
	{
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages =
		[
			{ title: 'Home', component: HomePage },
			{ title: 'Teams', component: TeamsPage },
			{ title: 'List', component: ListPage }
		];

		//this.presentLoading();

		if(localStorage.getItem('token'))
			this.rootPage = HomePage;
		else
			this.rootPage = LoginPage;

		//this.loader.dismiss();
	}

	// -----------------------------------------------------------------------------------------------------------------------------
	initializeApp()
	{
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	// -----------------------------------------------------------------------------------------------------------------------------
	openPage(page)
	{
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}

	// -----------------------------------------------------------------------------------------------------------------------------
	presentLoading()
	{
		this.loader = this.loadingCtrl.create(
		{
			content : "Please wait..."
		});
		this.loader.present();
	}
}
