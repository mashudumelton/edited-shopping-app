
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import{HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
/*var bconfig = {
  apiKey: "AIzaSyBLQYAU_hq_mTQQ4_Vbpm-Rt79YPViUi9s",
  authDomain: "shoppinglist-b6517.firebaseapp.com",
  databaseURL: "https://shoppinglist-b6517.firebaseio.com",
  projectId: "shoppinglist-b6517",
  storageBucket: "shoppinglist-b6517.appspot.com",
  messagingSenderId: "756964134541"
};*/

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    //AngularFireModule.initializeApp(bconfig),
    HttpClientModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,

  ]
})
export class AppModule {}
