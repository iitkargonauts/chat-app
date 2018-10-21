import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RetryPage } from '../pages/retry/retry';
import { AvailableRoomsPage } from '../pages/available-rooms/available-rooms';
import { ChangeRoomPage } from '../pages/change-room/change-room';
import { LogoutPage } from '../pages/logout/logout';
import { SignupPage } from '../pages/signup/signup';
import { NotFoundPage } from '../pages/not-found/not-found';
import { RoomsProvider } from '../providers/rooms/rooms';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    RoomsProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoomsProvider
  ]
})
export class AppModule {}
