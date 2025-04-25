import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(MarkdownModule.forRoot()), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
