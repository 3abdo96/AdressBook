import { Component, OnInit ,Input} from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId:string;
  EmployeeName:string;
  JobTitle:string;
  Department:string;
  MobileNumber:string;
  DateOfBirth:string;
  Address:string;
  Email:string;
  Age:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  JobsList:any=[];
  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
    this.loadJobList();
  }

  loadJobList(){
    this.service.getAllJobNames().subscribe((data:any)=>{
      console.log(data)
      this.JobsList=data;

      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.JobTitle=this.emp.JobTitle;
      this.Department=this.emp.Department;
      this.MobileNumber=this.emp.MobileNumber;
      this.DateOfBirth=this.emp.DateOfBirth;
      this.Address=this.emp.Address;
      this.Email=this.emp.Email;
      this.Age=this.emp.Age;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });

  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.JobTitle=this.emp.JobTitle;
      this.Department=this.emp.Department;
      this.MobileNumber=this.emp.MobileNumber;
      this.DateOfBirth=this.emp.DateOfBirth;
      this.Address=this.emp.Address;
      this.Email=this.emp.Email;
      this.Age=this.emp.Age;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
                EmployeeName:this.EmployeeName,
                JobTitle:this.JobTitle,
                Department:this.Department,
                MobileNumber:this.MobileNumber,
              DateOfBirth:this.DateOfBirth,
              Address:this.Address,
              Email:this.Email,
              
            PhotoFileName:this.PhotoFileName,
            Age:this.Age,};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      JobTitle:this.JobTitle,
      Department:this.Department,
      MobileNumber:this.MobileNumber,
      DateOfBirth:this.DateOfBirth,
      Address:this.Address,
      Email:this.Email,
      
  PhotoFileName:this.PhotoFileName,
  Age:this.Age, };

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }

}
