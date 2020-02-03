import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { getLocaleCurrencySymbol, getLocaleCurrencyName } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

@Pipe({
  name: 'brl',
})
export class BrlPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) public locale: string) {
  }

  transform(value: any): any {
    return getLocaleCurrencySymbol('pt-BR') + new
      Intl.NumberFormat('pt-BR', {
        style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
      }).format(value);
  }
}
