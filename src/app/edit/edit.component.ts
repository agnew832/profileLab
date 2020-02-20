import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProfileServiceService } from "../profile-service.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: object;

  constructor(private ProfileServiceService: ProfileServiceService) { }

  ngOnInit(): void {
    this.profileService = this.profileServiceService.getUserProfile();
  }

  setUserProfile(userForm: NgForm): any {
    this.profileService.setUserProfile(userForm);
  }

}
