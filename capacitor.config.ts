import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'at.taxoil.app2016',
  appName: 'Taxoil',
  webDir: 'www',
  plugins: {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  },
  server: {
    androidScheme: 'https'
  },
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      AndroidWindowSplashScreenAnimatedIcon: 'resources/splash.png',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000'
    }
  }
};

export default config;
