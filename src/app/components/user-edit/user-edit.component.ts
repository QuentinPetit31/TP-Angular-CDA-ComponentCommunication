import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"],
  imports: [CommonModule, FormsModule],
})
export class UserEditComponent {
  @Input() user!: { name: string; age: number };
  @Output() userUpdated = new EventEmitter<{ name: string; age: number }>();

  newName: string = "";
  newAge: number = 0;

  ngOnInit() {
    this.newName = this.user.name;
    this.newAge = this.user.age;
  }

  updateUser() {
    this.userUpdated.emit({ name: this.newName, age: this.newAge });
  }
}
