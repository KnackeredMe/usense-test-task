import { Routes } from '@angular/router';
import {PasswordCheckerPageComponent} from "./pages/password-checker-page/password-checker-page.component";

export const routes: Routes = [
  {path: 'password-checker', component: PasswordCheckerPageComponent},
  {path: '', redirectTo: '/password-checker', pathMatch: 'full'}];
