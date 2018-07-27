import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularSlideWithMarkdownComponent, TccMasterRegularComponent } from './master/regular/tcc-master-regular.component';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { TccMasterTitleComponent } from './master/title/tcc-master-title.component';
import { SectionTitleSlideComponent, TccMasterSectionTitleComponent } from './master/section-title/tcc-master-section-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrismModule } from '@ngx-prism/core';
import { MarkdownModule } from 'ngx-markdown';
import { NgxPresentModule } from '@w11k/ngx-present';

import * as Prism from 'prismjs';
import * as marked from 'marked';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-kotlin';

// expose Prism as global variable for ngx-markdown
(window as any).Prism = Prism;
(window as any).marked = marked;

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    PrismModule,
    NgxPresentModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    TccMasterRegularComponent,
    TccMasterTitleComponent,
    TccMasterSectionTitleComponent,
    RegularSlideWithMarkdownComponent,
    SectionTitleSlideComponent,
  ],
  exports: [
    TccMasterRegularComponent,
    TccMasterTitleComponent,
    TccMasterSectionTitleComponent,
    RegularSlideWithMarkdownComponent,
    SectionTitleSlideComponent,
  ]
})
export class TccNgxPresentThemeModule { }
