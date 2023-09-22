import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit{
    
  employees : Array<Employee> = []
    constructor(private http: HttpClient){

    }

    loadData(){
      this.http.get('http://localhost:3000/employees').toPromise()
      .then((res:any) => {
         console.log(res);
         this.employees = res;
         console.log(this.employees);
         
      });
    }

    ngOnInit(): void {
     console.log('Initialization ...');
     this.loadData()
    }

    y : number = 3434;
    message: string  = 'Welcome to Angular!'
    today : Date = new Date();
    scores: Array<number>  = [23,45,33,55,24,67,79]


    // [{"id":1,"name":"Rowney","last_name":"Yoakley","email":"ryoakley0@nba.com","gender":"Male","salary":"$5213.57"},
    //             {"id":2,"name":"Thorsten","last_name":"Siley","email":"tsiley1@wunderground.com","gender":"Male","salary":"$9127.19"},
    //             {"id":3,"name":"Wynny","last_name":"Lock","email":"wlock2@wp.com","gender":"Female","salary":"$6862.21"},
    //             {"id":4,"name":"Travus","last_name":"Meiner","email":"tmeiner3@answers.com","gender":"Male","salary":"$5804.45"},
    //             {"id":5,"name":"Travus","last_name":"Hasard","email":"thasard4@businessinsider.com","gender":"Male","salary":"$7812.05"},
    //             {"id":6,"name":"Gerik","last_name":"Mallord","email":"gmallord5@mlb.com","gender":"Male","salary":"$8582.25"},
    //             {"id":7,"name":"Barrett","last_name":"Nortcliffe","email":"bnortcliffe6@ucsd.edu","gender":"Male","salary":"$7671.76"},
    //             {"id":8,"name":"Durante","last_name":"Exer","email":"dexer7@abc.net.au","gender":"Male","salary":"$5279.91"},
    //             {"id":9,"name":"Keven","last_name":"Brimfield","email":"kbrimfield8@sitemeter.com","gender":"Male","salary":"$9855.80"},
    //             {"id":10,"name":"Jordan","last_name":"Braunfeld","email":"jbraunfeld9@ucoz.com","gender":"Female"}
    //             ]
}
