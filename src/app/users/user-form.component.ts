import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersServices } from '../users/users.services';
import { ActivatedRoute , Router} from '@angular/router';

import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './user-form.component.html'
})

export class UserFormComponent  {
    form: FormGroup;
    title: string;
    user = new User();
    emailPattern = "[^ @]*@[^ @]*"
    constructor(fb: FormBuilder, private _router: ActivatedRoute,
         private _userServices: UsersServices, 
         private route: Router) {
        this.form = fb.group({  
            name:['', Validators.required],
            email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
            phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
        })
    }
    ngOnInit(){
        let id = this._router.params
        .subscribe(params => {
            let id = +params["id"];
            this.title = id ? "Edit User" : "New User";
            if(!id) {
                return
            }
            this._userServices.editUsers(id)
            .subscribe(user => this.user = user, 
                response => {
                    if( response.status == 404){
                        this.route.navigate(['notfound']);
                    }
                }
            )
        })
    }

    save(){
        let result;
        if(this.user.id){
            result = this._userServices.updateUser(this.user);
        }
        else {
            result = this._userServices.addUsers(this.form.value)
        }
        result
        .subscribe(user => {
            console.log(user),
            this.route.navigate(['users']) }
        )
    }
}