
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
  if(typeof window !== 'undefined'){
 //   window.console.log=function(){};
//    window.console.warn=function(){};
 //   window.console.error=function(){};
  }
}

export { AppServerModule } from './app/app.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';
