import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {
    val;
  transform(value: any, ...args: any[]): any {
   this.val=Number(value);
   if (this.val >= 1000000) {
     return this.val/1000000+"M";
   }
   else if (this.val >= 1000) {
    return this.val/1000 + "K";
  }
   else{
     return this.val;
   }
  }

}
