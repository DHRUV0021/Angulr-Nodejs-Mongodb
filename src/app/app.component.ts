import { Component } from '@angular/core';
import { CrudService, user } from './service/crud.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userForm: user;
  allUser:Array<any> = new Array<any>();

  constructor(private _crud: CrudService) { }

  ngOnInit() {
    this.userForm = new user;

    this.getData();
  }

  getData() {
    this._crud.getUser().subscribe({
      next: (res) => {
        console.log(res);
        this.allUser = res as any; 
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  signinUser() {
    // if (this.userForm.name == "") {
    this._crud.addUser(this.userForm).subscribe((res) => {
      console.log('data added');
      this.getData();
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