import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //? Tells angular that this service has depedencies in its constructor
})
export class EmailService {

  constructor() { }
}
