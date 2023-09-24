import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NotFoundComponent } from './components/not-found/not-found.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/main/', '.json');
}

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    TopMenuComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ]
})
export class LayoutModule { }
