import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule,MatPaginatorModule,MatGridListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationComponent } from './classification/classification.component';
import { ShoppingComponent } from './shopping/shopping.component';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {ClassificationService} from './shared/classification/classification.service';
import { MyFilterPipePipe } from './my-filter-pipe.pipe';

const appRoutes: Routes = [
  {path: 'classification', component: ClassificationComponent},
  {path: 'shopping', component: ShoppingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClassificationComponent,
    ShoppingComponent,
    MyFilterPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatGridListModule,
  ],
  providers: [ClassificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
