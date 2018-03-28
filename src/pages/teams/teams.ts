import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage
{
	teams: Array<{name: string, id: string, icon:string}>;
	selectedTeam: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public actionSheetCtrl : ActionSheetController)
	{
		this.selectedTeam = navParams.get('team');

		this.teams = [];
		for (let i = 1; i < 5; i++)
		{
			this.teams.push(
			{
				id: 'id_' + i,
				name: 'Team #' + i,
				icon: 'baseball'
			});
		}
	}

	openMenu()
	{
		let actionSheet = this.actionSheetCtrl.create(
		{
			title: 'Actions',
			cssClass: 'action-sheets-basic-page',
			buttons:
			[
				{
					text: 'Play',
					icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
					handler: () => {
						console.log('Play clicked');
					}
				},
				{
					text: 'Edit',
					icon: !this.platform.is('ios') ? 'create' : null,
					handler: () => {
						console.log('Edit clicked');
					}
				},
				{
					text: 'Cancel',
					role: 'cancel', // will always sort to be on the bottom
					icon: !this.platform.is('ios') ? 'close' : null,
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});

		actionSheet.present();
	}

	ionViewDidLoad()
	{
		console.log('ionViewDidLoad TeamsPage');
	}
}
