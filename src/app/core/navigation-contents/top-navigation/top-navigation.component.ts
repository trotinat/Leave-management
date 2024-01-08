import { AuthService } from './../../../feature/dashboard/auth/auth.service';
import { Component } from '@angular/core';
import { SidebarService } from '../service/sidebar.service';
import { OnInit } from '@angular/core';
import { EmployeeService } from '../../../feature/dashboard/services/employee.service';
@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  user;
  selected_user_msg

constructor(private _employeeService: EmployeeService,private _sideBarService: SidebarService, public _auth: AuthService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this._employeeService.getCurrentEmployee()
      .subscribe(
        data => {
          this.user = data;
        },
        error => {
          this.selected_user_msg = 'Oops ! Can\'t load Profile';
        });
  }

  isLoggedIn: boolean = this._auth.isLoggedIn();

  // constructor(private _sideBarService: SidebarService, public _auth: AuthService) { }

  toggleSidebar() {
    this._sideBarService.toggle();
  }

}
