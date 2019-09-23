import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_do_usuario:string = "Alex Silva";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public somaDoisNumeros( num1:number , num2:number): void {
    alert(num1 + " + " + num2 + " = " + ( num1 + num2 ));
  }

  //somaDoisNumeros();

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.somaDoisNumeros( 5 , 7 );
  }

}
