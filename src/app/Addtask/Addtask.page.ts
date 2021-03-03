import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { TaskServices } from '../task.services';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-Addtask',
  templateUrl: 'Addtask.page.html',
  styleUrls: ['Addtask.page.scss']
})
export class AddtaskPage implements OnInit {
  Task:Task[] = [];
  taskIn:any = [];
  taskForm:FormGroup;
  
  constructor( private taskServrvice: TaskServices,
    public alertController: AlertController
    ) {}

    async showAlert() {  
      const alert = await this.alertController.create({  
        header: 'Sucessful....!',  
        message: 'Task adding is sucessful.',  
        buttons: ['OK']  
      });  
      await alert.present();  
      const result = await alert.onDidDismiss();  
      console.log(result);  
    }  
 
  ngOnInit() {
    this.taskForm = new FormGroup({
      'taskname': new FormControl(null, [Validators.required, this.checkTask.bind(this)]),
      'completedate': new FormControl(null, Validators.required),
    });
    
   this.gettaskin();
  }

  gettaskin(){
    this.taskServrvice.fechtAll().subscribe(
      task => {
        for(let taskdeta of task){
          this.taskIn.push(taskdeta.taskname);
          
        }
       
      }
    );
  }

  checkTask(control: FormControl): {[s: string]: boolean} | null{
    if (this.taskIn.indexOf(control.value) !== -1) {
      return {'taskIsexits': true};
    }
    
    }

    addTask(taskData: Task){
      this.showAlert();
      
      this.taskIn.push(taskData.taskname);
      this.taskForm.reset();
      this.taskServrvice.createTask(taskData.taskname, taskData.completedate,taskData.status,taskData.startdate);
     
    }
}
