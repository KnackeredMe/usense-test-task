import {Component, Input, OnChanges} from '@angular/core';
import {NgClass} from "@angular/common";
import {IPasswordStrengthMessages, PASSWORD_STRENGTH_MESSAGES} from "../../constants/password-strength-messages";

@Component({
  selector: 'app-password-checker',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.scss'
})
export class PasswordCheckerComponent implements OnChanges{
  @Input() password: string | undefined;
  public strength: string = '';
  protected readonly messages: IPasswordStrengthMessages = PASSWORD_STRENGTH_MESSAGES;
  public message: string = '';

  ngOnChanges(): void {
    if(!this.password) {
      this.strength = '';
      this.message = '';
      return;
    }

    if(this.password.length < 8) {
      this.strength = 'short';
      this.message = '';
      return;
    }

    const containsLetters = /[a-zA-Z]/.test(this.password);
    const containsNumbers = /\d/.test(this.password);
    const containsSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(this.password);

    if (containsLetters && !containsNumbers && !containsSymbols ||
      !containsLetters && containsNumbers && !containsSymbols ||
      !containsLetters && !containsNumbers && containsSymbols) {
      this.strength = 'easy';
    }
    if (containsLetters && containsNumbers && !containsSymbols ||
      !containsLetters && containsNumbers && containsSymbols ||
      containsLetters && !containsNumbers && containsSymbols) {
      this.strength = 'medium';
    }
    if (containsLetters && containsNumbers && containsSymbols) {
      this.strength = 'strong';
    }

    this.message = this.messages[this.strength as keyof IPasswordStrengthMessages];
  }

}
