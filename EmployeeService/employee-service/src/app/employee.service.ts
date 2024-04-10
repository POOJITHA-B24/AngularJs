import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API="http://localhost:8080";
  public registerEmployee(employeeData: any)
  {
    return this.http.post(this.API + '/registerEmployee' , employeeData);
  }

  public getEmployees(){
    return this.http.get(this.API+'/getEmployees');
  }

  public deleteEmployee(e_id:any){
    return this.http.delete(this.API+'/deleteEmployee?e_id=' + e_id);
  }

  public updateEmployee(employee: any){
    return this.http.put(this.API +'/updateEmployee', employee);
  }
  constructor(private http: HttpClient) { }
}
