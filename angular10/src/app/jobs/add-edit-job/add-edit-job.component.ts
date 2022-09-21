import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-job',
  templateUrl: './add-edit-job.component.html',
  styleUrls: ['./add-edit-job.component.css']
})
export class AddEditJobComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() job:any;
  JobId:string;
  JobTitle:string;

  ngOnInit(): void {
    this.JobId=this.job.JobId;
    this.JobTitle=this.job.JobTitle;
  }

  addJobTitle(){
    var val = {JobId:this.JobId,
                JobTitle:this.JobTitle};
    this.service.addJobTitle(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateJobTitle(){
    var val = {JobId:this.JobId,
      JobTitle:this.JobTitle};
    this.service.updateJobTitle(val).subscribe(res=>{
    alert(res.toString());
    });
  }


}
