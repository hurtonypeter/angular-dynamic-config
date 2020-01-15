import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppConfiguration } from './config';

fetch('/config.json').then(async res => {
  const config = await res.json();

  const providers = [
    { provide: AppConfiguration, useValue: config }
  ];

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic(providers).bootstrapModule(AppModule)
    .catch(err => console.log(err));
});
