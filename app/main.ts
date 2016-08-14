import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './application/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { appRouterProviders } from './routes/app.routes';
import { DataService} from './shared/data.service';

enableProdMode();
bootstrap(AppComponent,[HTTP_PROVIDERS, appRouterProviders, DataService]);
