import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TccMasterRegularComponent } from './master/regular/tcc-master-regular.component';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { TccMasterTitleComponent } from './master/title/tcc-master-title.component';
import { TccMasterSectionTitleComponent } from './master/section-title/tcc-master-section-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrismModule } from '@ngx-prism/core';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { NgxPresentModule } from '@w11k/ngx-present';
import { TccCodeComponent } from './helper/code/code.component';
import { TccSpeakerNotesComponent } from './helper/speaker-notes/speaker-notes.component';
import { TccHelpComponent } from './helper/help/help.component';

import * as Prism from 'prismjs';
import * as marked from 'marked';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-kotlin';

// expose Prism as global variable for ngx-markdown
(window as any).Prism = Prism;
(window as any).marked = marked;

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.link = (href: string, title: string, text: string) => {
    return `<a href="${href}" target="_blank" title="${title || ''}">${text}</a>`;
  };

  return {
    renderer: renderer
  };
}

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    PrismModule,
    NgxPresentModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  declarations: [
    TccMasterRegularComponent,
    TccMasterTitleComponent,
    TccMasterSectionTitleComponent,
    TccCodeComponent,
    TccSpeakerNotesComponent,
    TccHelpComponent,
  ],
  exports: [
    MarkdownModule,
    PrismModule,

    TccMasterRegularComponent,
    TccMasterTitleComponent,
    TccMasterSectionTitleComponent,
    TccCodeComponent,
    TccSpeakerNotesComponent,
    TccHelpComponent,
  ]
})
export class TccNgxPresentThemeModule { }
