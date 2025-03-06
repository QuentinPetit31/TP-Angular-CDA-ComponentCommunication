import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user-display",
  templateUrl: "./user-display.component.html",
  styleUrls: ["./user-display.component.css"],
})
export class UserDisplayComponent {
  @Input() user!: { name: string; age: number };
}
