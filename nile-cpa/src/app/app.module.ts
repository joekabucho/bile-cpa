import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ResourcesComponent } from './resources/resources.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TaxDueDateComponent } from './tax-due-date/tax-due-date.component';
import { IrsFormsComponent } from './irs-forms/irs-forms.component';
import { IndividualTaxComponent } from './individual-tax/individual-tax.component';
import { SmallBusinessComponent } from './small-business/small-business.component';
import { NonProfitComponent } from './non-profit/non-profit.component';
import { CompilationReviewsComponent } from './compilation-reviews/compilation-reviews.component';
import { TaxComponent } from './tax/tax.component';
import { IrsProblemComponent } from './tax/irs-problem/irs-problem.component';
import { ConflictOfInterestComponent } from './non-profit/conflict-of-interest/conflict-of-interest.component';
import { FormDefinitionsComponent } from './non-profit/form-definitions/form-definitions.component';
import { LitigationSupportComponent } from './small-business/litigation-support/litigation-support.component';
import { IrsRepresentationComponent } from './individual-tax/irs-representation/irs-representation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ResourcesComponent,
    BlogComponent,
    ContactsComponent,
    TaxDueDateComponent,
    IrsFormsComponent,
    IndividualTaxComponent,
    SmallBusinessComponent,
    NonProfitComponent,
    CompilationReviewsComponent,
    TaxComponent,
    IrsProblemComponent,
    ConflictOfInterestComponent,
    FormDefinitionsComponent,
    LitigationSupportComponent,
    IrsRepresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
