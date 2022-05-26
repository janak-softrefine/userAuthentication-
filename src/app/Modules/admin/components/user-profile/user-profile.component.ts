import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  hide = true;
  updateUserProfile!: FormGroup;
  constructor(private formbulider: FormBuilder) { }

  ngOnInit(): void {
    this.updateUserProfile = this.formbulider.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });

  }

}
