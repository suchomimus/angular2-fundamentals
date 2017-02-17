import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text:  `Hello there`},
    {id: 1, text: `Yo mama`},
    {id: 2, text: `abcd123`}
   ];

   update(id, text){
     this.messages = this.messages.map(m =>
       m.id === id
         ? {id, text}
         : m
     )
   }

  constructor() { }

}
