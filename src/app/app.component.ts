import { Component } from '@angular/core';
import { CrudService, user } from './service/crud.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hide = true;
  userForm: user | any;
  allUser: Array<any> = new Array<any>();

  isUpdate = true;

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

  addUser() {
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



  deleteData(body: user) {
    this._crud.deleteUser(body._id).subscribe({
      next: (res) => {
        this.getData();
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Delete Data");
      }
    })
  }

  editData(user) {
    this.userForm = user;
    this.isUpdate = false;
  }

  updateData() {
    this._crud.editUser(this.userForm).subscribe({
      next: (res) => {
        this.getData();
        this.userForm = new user;
        this.isUpdate = true;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Delete Data");
      }
    })
  }

}