import { Component, OnInit, Input } from "@angular/core";
// import { UserProfile } from "../interfaces/user-profile";
import { ProfileServiceService } from "../profile-service.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: object;
  ProfileServiceService: any;
  

  constructor(private service: ProfileServiceService) {}

  ngOnInit(): void {
    this.user = this.ProfileServiceService.getProfiles();
  }
  editProfile(): void {
    this.ProfileServiceService.editProfile();
  }
}
