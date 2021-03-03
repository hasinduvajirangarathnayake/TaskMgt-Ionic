import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Task } from './task.model';
import { map, catchError } from 'rxjs/operators';
import { Observable,  Subject, throwError} from 'rxjs';


@Injectable({ providedIn: 'any' })


export class TaskServices {
    error = new Subject<string>();
    constructor(private http: HttpClient) {}
     today = new Date().toLocaleDateString();
     taskChanged = new Subject<Task[]>();

    createTask(taskname: string,completedate: string,status: string,startdate: string){
      let convetdate = completedate.substr(0,10);
  const taskData:Task = {taskname: taskname,completedate: convetdate ,status: 'Not Complete',startdate: this.today}

  this.http
      .post<{ name: string }>(
        'https://taskmanagement-79112-default-rtdb.firebaseio.com/task.json',
        taskData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
    }

    fechtAll(){

      return this.http
      .get<{ [key: string]: Task }>(
        'https://taskmanagement-79112-default-rtdb.firebaseio.com/task.json')
      .pipe(
        map(responseData => {
          const taskArray: Task[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              taskArray.push({ ...responseData[key], id: key });
            }
          }
          return taskArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
}


update(taskId:string,selecttaskname:string,selectstartdate:string,selectcompletedate:string){

  const url = 'https://taskmanagement-79112-default-rtdb.firebaseio.com/task/'+taskId+'.json';

  let datas = JSON.stringify({taskname: selecttaskname,completedate: selectcompletedate,status: 'Complete',startdate: selectstartdate});
  return this.http.put(url, datas)
}

deleteTask(dataSel:string): Observable<any> {
  const url = 'https://taskmanagement-79112-default-rtdb.firebaseio.com/task/'+dataSel+'.json';
  return this.http.delete(url)
}
 


}