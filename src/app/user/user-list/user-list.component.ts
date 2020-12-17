import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() userName: string;
  @Input() userLastName: string;
  @Input() email: string;
  constructor() { }

  ngOnInit(): void {
  }

}
