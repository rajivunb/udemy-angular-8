import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  taskForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  forbiddenProjNames = ['Test', 'test'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.taskForm = new FormGroup({
      // 'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)]),
      'projectName': new FormControl(null, [Validators.required], this.forbiddenAsyncProjectNames.bind(this)),
      'taskEmail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable')
    });

    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    //   }
    // );

    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
      }
    );

    this.signupForm.patchValue({
      'userData': {
        'username': 'Rajiv'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onTaskSubmit() {
    console.log(this.taskForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getHobbyControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenProjectNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjNames.indexOf(control.value) !== -1) {
      return {'projectNameIsForbidden': true};
    }

    return null;
  }

  forbiddenAsyncProjectNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjNames.indexOf(control.value) !== -1) {
          resolve({'projectNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }

    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
