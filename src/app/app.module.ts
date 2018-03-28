import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TeamsPage } from '../pages/teams/teams';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LangServiceProvider } from '../providers/lang-service/lang-service';

@NgModule(
{
  declarations:
  [
    MyApp,
    HomePage,
	TeamsPage,
	LoginPage,
    ListPage
  ],
  imports:
  [
    BrowserModule,
	HttpClientModule, HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents:
  [
    MyApp,
    HomePage,
	TeamsPage,
	LoginPage,
    ListPage
  ],
  providers:
  [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
	AuthServiceProvider,
    LangServiceProvider
  ]
})
export class AppModule {}
