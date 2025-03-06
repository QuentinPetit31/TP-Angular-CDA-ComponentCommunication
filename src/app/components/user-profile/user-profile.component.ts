import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDisplayComponent } from "../user-display/user-display.component";
import { UserEditComponent } from "../user-edit/user-edit.component";

@Component({
  standalone: true,
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
  imports: [CommonModule, UserDisplayComponent, UserEditComponent],
})
export class UserProfileComponent {
  user = { name: "Eddie Murphy", age: 63 };

  updateUser(updatedUser: { name: string; age: number }) {
    console.log("Mise à jour des données :", updatedUser);
    this.user = updatedUser;
  }
}
