import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Startseite';
  pages = [
    {
      title: 'Startseite',
      url: '',
      icon: ''
    },
    {
      title: 'Informationen',
      url: '/info',
      icon: ''
    },
    {
      title: 'Rückmeldung',
      url: '/feedback',
      icon: ''
    },
    {
      title: 'Geöffnet / Anrufen',
      url: '/open',
      icon: ''
    },
    {
      title: 'Fahrzeug buchen',
      url: '/buchen',
      icon: ''
    },
    {
      title: 'Tanken',
      url: '/tanken',
      icon: ''
    },
    {
      title: 'Regeln',
      url: '/regeln',
      icon: ''
    },
    {
      title: 'Panne',
      url: '/panne',
      icon: ''
    },
    {
      title: 'Unfall',
      url: '/unfall',
      icon: ''
    },
    {
      title: 'Anfahrt',
      url: '/anfahrt',
      icon: ''
    }
  ];

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.hide();
  }
}
