import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from '../Model/staff';
import { Department } from '../Model/department';
import { Role } from '../Model/role';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  staffUrl: string = "http://localhost:8080/staffs"
  departmentUrl: string = "http://localhost:8080/departments"
  roleUrl: string = "http://localhost:8080/roles"

  constructor(
    private http: HttpClient
  ) { }

  getAllStaff(): Observable<Staff[]>{
    return this.http.get<Staff[]>(this.staffUrl)
  }

  getStaffById(id: string): Observable<Staff>{
    return this.http.get<Staff>(this.staffUrl + "/" + id)
  }

  postStaff(st: Staff): Observable<Staff>{
    return this.http.post<Staff>(this.staffUrl, st)
  }

  updateStaff(id: string, st: Staff): Observable<Staff>{
    return this.http.put<Staff>(this.staffUrl + "/" + id, st)
  }

  delete(id: string): Observable<any>{
    return this.http.delete<any>(this.staffUrl + "/" + id,
    {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response', responseType: 'text' as 'json'
    })
  }

  getAllDepartment(): Observable<Department[]>{
    return this.http.get<Department[]>(this.departmentUrl)
  }

  getAllRole(): Observable<Role[]>{
    return this.http.get<Role[]>(this.roleUrl)
  }

}
