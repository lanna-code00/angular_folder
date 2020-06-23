import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(value: any, gender: string): any {
    gender = gender.toLowerCase();
  // if(gender == 'male' || gender == 'female'){
  //   return value + "is a "+gender;
  // }
  // else if(gender !== 'male' || gender !== 'female'){
  //   return value;
  // }
  // else{
  //   return value + " is neither a male or female";
  // }
  }

}
