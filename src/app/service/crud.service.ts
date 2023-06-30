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

  postEmployee(emp:user) {
    return this.http.post<user>(this.baseURL+'/post/', emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }
  putEmployee(emp) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}


export class user {
  name: string;
  password: string;
}

