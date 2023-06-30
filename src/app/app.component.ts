import { Component } from '@angular/core';
import { CrudService, user } from './service/crud.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

userForm :user;

  constructor(private _crud:CrudService) { }

  ngOnInit() {
    this.userForm = new user;
  }

  signinUser() {
    // if (this.userForm.name == "") {
      this._crud.postEmployee(this.userForm).subscribe((res) => {
        console.log('data added');
        this.userForm = new user;
        // this.refreshEmployeeList();
        // M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    // }
    // else {
    //   this._crud.putEmployee(form.value).subscribe((res) => {
    //     this.userForm = new user;
    //     this.refreshEmployeeList();
    //     // M.toast({ html: 'Updated successfully', classes: 'rounded' });
    //   });
    // }
  }

}