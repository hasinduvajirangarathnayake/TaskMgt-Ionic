import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskServices } from '../task.services';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-Alltask',
  templateUrl: 'Alltask.page.html',
  styleUrls: ['Alltask.page.scss']
})
export class AlltaskPage implements OnInit {
  
  tasklist:Task[] = [];
  selectTask:string = '';
  selectTaskName:string ='';
  selectTaskstartdate:string ='';
  selectTaskenddate:string ='';
  selectTaskstatus:string ='';
  slctrow = null;
  constructor(private taskService: TaskServices,
    public alertController: AlertController
    ) { }


  showbutton:boolean = false;
  loading:boolean =false;
  ngOnInit(){
    this.fetchdata();
  }

  async showupdareAlert() {  
    const alert = await this.alertController.create({  
      header: 'Sucessful....!',  
      message: 'Task update is sucessful.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  


  async showremoveAlert() {  
    const alert = await this.alertController.create({  
      header: 'Sucessful....!',  
      message: 'Task remove is sucessful.',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  

  fetchdata(){
      this.loading = true;
      this.taskService.fechtAll().subscribe(
        task => {
          this.loading = false;
          this.tasklist = task;
         
        }
      );
    
  }
  select(id:string,taskname:string,startdate:string,completedate:string,status:string ,selectone:number){
    if(this.showbutton === false){
      this.showbutton = true;
      this.slctrow = selectone;

    }else{
      this.showbutton = false;
      this.slctrow = null;
    }
    
   this.selectTask = id ;
   this.selectTaskName = taskname;
   this.selectTaskstartdate = startdate;
   this.selectTaskenddate = completedate;
   this.selectTaskstatus = status;
  }
  deleteTask(taskname:string){
   this.taskService.deleteTask(taskname).subscribe(resp => {
    this.showremoveAlert();
    this.showbutton = false;
    this.slctrow = null;
    this.fetchdata();
     });
  }

  
  update(taskId:string,selecttaskname:string,selectstartdate:string,selectcompletedate:string){
    this.taskService.update(taskId,selecttaskname,selectstartdate,selectcompletedate).subscribe(resp => {
      this.showupdareAlert()
      this.showbutton = false;
      this.slctrow = null;
      this.fetchdata();
       });
 }
}
