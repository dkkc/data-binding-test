import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { User } from '../models/userModel';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('lastNameInput') lastNameRef: ElementRef;
@ViewChild('emailInput') email: ElementRef;

isFieldSet = false;

@Output() addUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddUser(): void {
    if (this.nameInputRef.nativeElement.value === '' || this.lastNameRef.nativeElement.value === '') {
        return;
    } else {
      this.isFieldSet = true;
    }

    const name = this.nameInputRef.nativeElement.value;
    const lastName = this.lastNameRef.nativeElement.value;
    const email = this.email.nativeElement.value;

    const user = new User(name, lastName, email);

    this.addUser.emit(user);
    this.nameInputRef.nativeElement.value = '';
    this.lastNameRef.nativeElement.value = '';
    this.email.nativeElement.value = '';
  }
}
