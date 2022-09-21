import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:5001/api";
readonly PhotoUrl = "https://localhost:5001/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  getJobList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Job');
  }

  addJobTitle(val:any){
    return this.http.post(this.APIUrl+'/Job',val);
  }

  updateJobTitle(val:any){
    return this.http.put(this.APIUrl+'/Job',val);
  }

  deleteJobTitle(val:any){
    return this.http.delete(this.APIUrl+'/Job/'+val);
  }



  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

  getAllJobNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllJobNames');
  }

}