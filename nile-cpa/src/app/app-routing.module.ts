import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { IrsFormsComponent } from './irs-forms/irs-forms.component';
import { ResourcesComponent } from './resources/resources.component';
import { TaxDueDateComponent } from './tax-due-date/tax-due-date.component';
import { CompilationReviewsComponent } from './compilation-reviews/compilation-reviews.component';
import { IndividualTaxComponent } from './individual-tax/individual-tax.component';
import { IrsRepresentationComponent } from './individual-tax/irs-representation/irs-representation.component';
import { ConflictOfInterestComponent } from './non-profit/conflict-of-interest/conflict-of-interest.component';
import { FormDefinitionsComponent } from './non-profit/form-definitions/form-definitions.component';
import { NonProfitComponent } from './non-profit/non-profit.component';
import { ServicesComponent } from './services/services.component';
import { LitigationSupportComponent } from './small-business/litigation-support/litigation-support.component';
import { SmallBusinessComponent } from './small-business/small-business.component';
import { IrsProblemComponent } from './tax/irs-problem/irs-problem.component';
import { TaxComponent } from './tax/tax.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'tax-due-dates', component: TaxDueDateComponent },
  { path: 'irs-forms', component: IrsFormsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'services', component: ServicesComponent },
  {path: 'tax', component: TaxComponent},
  {path: 'irs-problem', component: IrsProblemComponent},
  {path: 'small-business', component: SmallBusinessComponent},
  {path: 'litigation-support', component: LitigationSupportComponent},
  {path: 'compilation-reviews', component: CompilationReviewsComponent},
  {path: 'individual-tax', component: IndividualTaxComponent},
  {path: 'irs-representation', component: IrsRepresentationComponent},
  {path: 'non-profit', component: NonProfitComponent},
  {path: 'conflict-of-interest', component: ConflictOfInterestComponent},
  {path: 'form-definitions', component: FormDefinitionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
