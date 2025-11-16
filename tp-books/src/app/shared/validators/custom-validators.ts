import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function hasOnlyDigitsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value || typeof value !== 'string') {
      return null;
    }

    const onlyDigitsRegex = /^\d+$/; 
    
    if (onlyDigitsRegex.test(value.trim())) {
      return { 'onlyDigits': true }; 
    }

    return null;
  };
}