import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { BlogTheme, BlogTranslation } from './primeng.theme';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';
// import { CustomHttpInterceptor } from './core/security/http-interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    providePrimeNG({
      ripple: true,
      theme: {
          preset: BlogTheme,
          options: {
              prefix: 'p',
              darkModeSelector: '.pv-dark',
              cssLayer: false
          }
      },
      translation: BlogTranslation
    }),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CustomHttpInterceptor,
    //   multi: true,
    // },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
    MessageService
  ]
};
