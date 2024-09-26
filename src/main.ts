import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { importProvidersFrom } from '@angular/core';

import { AppComponent } from './app/app.component';
import { taskReducer } from './app/task.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ tasks: taskReducer }),
    provideEffects([]),
    importProvidersFrom(StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })),
  ],
}).catch(err => console.error(err));
