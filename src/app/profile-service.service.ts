import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileServiceService {
  user: object = {
    name: "Crystal Agnew",
    contact: "agnew832@gmail.com",
    bio: "I love labs!"
  };
  UserProfile: object;

  constructor(
    private service: ProfileServiceService,
    private routerInstance: Router
  ) {}

  getUserProfile(): object {
    return this.UserProfile;
  }
  setUserProfile(userForm) {
    this.user = {
      name: userForm.value.name,
      contact: userForm.value.contact,
      bio: userForm.value.bio
    };
  }
}
