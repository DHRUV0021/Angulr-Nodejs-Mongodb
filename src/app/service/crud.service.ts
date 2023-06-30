import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  selectedEmployee: any
  employees:any[];
   baseURL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  addUser(user:user) {
    return this.http.post<user>(this.baseURL+'/add', user);
  }

  getUser() {
    return this.http.get<user>(this.baseURL+'/get');
  }
  putEmployee(emp) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}


export class user {
  id:string;
  name: string;
  password: string;
}

