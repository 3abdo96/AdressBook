import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrls: ['./show-job.component.css']
})
export class ShowJobComponent implements OnInit {

  constructor(private service:SharedService) { }

  JobList:any=[];
  ModalTitle:string;
  ActivateAddEditJobComp:boolean=false;
  job:any;

  ngOnInit(): void {
    this.refreshJobList();
  }
  addClick(){
    this.job={
      JobId:0,
      JobTitle:""
    }
    this.ModalTitle="Add Job Title";
    this.ActivateAddEditJobComp=true;

  }

  editClick(item){
    this.job=item;
    this.ModalTitle="Edit Job Title";
    this.ActivateAddEditJobComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteJobTitle(item.JobId).subscribe(data=>{
        alert(data.toString());
        this.refreshJobList();
      })
    }
  }
  
  closeClick(){
    this.ActivateAddEditJobComp=false;
    this.refreshJobList();
  }

  refreshJobList(){
    this.service.getJobList().subscribe(data=>{
      this.JobList=data;
    });
  }
}
