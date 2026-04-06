import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lennontp.memory',  
  appName: 'Memory',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;