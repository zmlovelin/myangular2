import { Component, OnInit, Input } from '@angular/core';
// import { Input } from '../../../../../node_modules/_@angular_core@5.0.4@@angular/core/src/metadata/directives';
import {HttpClient } from '@angular/common/http'
import { log } from 'util';
@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.component.html',
  styleUrls: ['./aaa.component.css']
})
export class AaaComponent implements OnInit {
 @Input()
  a:string;
  @Input()
  b:number;
  constructor(
    private $http: HttpClient
  ) { }

  ngOnInit() {
    console.log()
    this.$http.get(`/api/itom/cabinet/cabinetType/list`).subscribe(res=>{
      console.log(res);
    },res=>{
      alert(JSON.stringify(res))
    })
  }

}
