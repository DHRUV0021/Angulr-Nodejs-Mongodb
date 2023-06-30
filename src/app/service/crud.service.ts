import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  selectedEmployee: any
  employees: any[];
  baseURL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  addUser(user: user) {
    return this.http.post<user>(this.baseURL + '/add', user);
  }

  getUser() {
    return this.http.get<user>(this.baseURL + '/get');
  }

  editUser(user) {
    return this.http.put(this.baseURL + `/edit/${user._id}`, user);
  }

  deleteUser(id: string) {
    // return this.http.delete(this.baseURL + `/ ${_id}`);
    return this.http.delete(this.baseURL + `/delete/${id}`);
  }

}


export class user {
  _id: string;
  name: string;
  password: string;
}

