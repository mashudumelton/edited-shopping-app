
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  name;
 value:string;
 items = [];
 shoppingList = {
   key:'',
   name : ''
 };
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.getDataFromDB();
  }
  getDataFromDB(){
    //Retrieve The List
    firebase.database().ref('/shoppingList/').on("value", (snapshot) =>
    {
      this.items = [];
      snapshot.forEach((snap) =>
      {
        this.shoppingList.key = snap.key;
    
 
        console.log(snap.val().name + ' key ' + snap.key)
     
        this.items.push({name:snap.val().name, key:snap.key});
   
        return false;
      });
    });
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }
  writeyourlist(){
    this.items = [];
    console.log(this.name);
 
    this.shoppingList.name = this.name;
 
    var database = firebase.database();

    database.ref('/shoppingList/').push({name:this.shoppingList.name}); 
  }
  upDate(item){
    this.navCtrl.push("UpdatePage",{item:item});
  }  
 
  delete(item){
    
    var database = firebase.database();
    database.ref('/shoppingList/'+item).remove();
     
  
   
  }


}
