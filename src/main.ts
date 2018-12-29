import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ChangeDetectionModule } from './app/changedetection/changedetection.module';
import { RouterAppModule } from './app/routeexample/routerappmodule';
import { ReactiveModule } from './app/reactiveformexample/reactive.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ReactiveModule)
  .catch(err => console.error(err));
