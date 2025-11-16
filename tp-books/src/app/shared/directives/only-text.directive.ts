import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { hasOnlyDigitsValidator } from '../validators/custom-validators';

@Directive({
  selector: '[appOnlyText]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: OnlyTextDirective, 
    multi: true
  }]
})
export class OnlyTextDirective implements Validator {
  private validator = hasOnlyDigitsValidator();

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validator(control);
  }
}