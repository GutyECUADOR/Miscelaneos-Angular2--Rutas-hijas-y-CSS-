import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  public existeError = false;
  public isLoading = false;
  public myObject = {
    nombre: 'José Gutiérrez',
    isActivo: false
  };

  ngOnInit() {
  }

  public checkInfo() {
    this.existeError = !this.existeError;
  }

  public checkObject() {
    this.myObject.isActivo = !this.myObject.isActivo;
  }

  public saveData() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }

}
