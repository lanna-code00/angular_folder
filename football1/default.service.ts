import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
public name = {id: 1, coachname: 'ZINEDINE ZIDANE'};
public clubs = {clubname: 'BARCELONA'};
public play1 = {id: 2, player1name: 'LUKA MODRIC'};
public play2 = {id: 3, player2name: 'LIONEL MESSI'};
public play3 = {id: 4, player3name: 'CRISTIANO RONALDO'};
public play4 = {id: 5, player4name: 'LUIS SUAREZ'};
public play5 = {id: 6, player5name: 'SERGIO AGUERO'};
public play6 = {id: 7, player6name: 'ZLATAN IBRAMOVIC'};
public play7 = {id: 8, player7name: 'GARETH BALE'};
public play8 = {id: 9, player8name: 'EDEN HAZARD'};
public play9 = {id: 10, player9name: 'KYLIAN MBAPPE'};
public play10 = {id: 11, player10name: 'MOHAMED SALA'} ;
public play11 = {id: 12, player11name: 'ANDRES INIESTA'};
public captain = {id: 13, captainname: 'EDISON CAVANNI'};
public asstCaptain = {id: 14, asstcaptainname: 'NEYMAR'};
public bench1 = {id: 15, bench1name: 'XABI ALONSO'};
public bench2 = {id: 16, bench2name: 'THIAGO SILVA'};
public bench3 = {id: 17, bench3name: 'MESUT OZIL'};
public bench4 = {id: 18, bench4name: 'SERGIO RAMOS'};
public keeper = {id: 19, teamkeeper: 'PETR CECH'};
  constructor() { }




}
