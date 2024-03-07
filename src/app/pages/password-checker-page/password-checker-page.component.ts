import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {PasswordCheckerComponent} from "../../components/password-checker/password-checker.component";
import {NgClass, NgIf} from "@angular/common";
import {IPasswordValidationMessages, PASSWORD_VALIDATION_MESSAGES} from "../../constants/password-validation-messages";

@Component({
  selector: 'app-password-checker-page',
  standalone: true,
  imports: [
    FormsModule,
    PasswordCheckerComponent,
    NgIf,
    NgClass
  ],
  templateUrl: './password-checker-page.component.html',
  styleUrl: './password-checker-page.component.scss'
})
export class PasswordCheckerPageComponent {
  public password: string = '';
  protected readonly messages: IPasswordValidationMessages = PASSWORD_VALIDATION_MESSAGES;
}
