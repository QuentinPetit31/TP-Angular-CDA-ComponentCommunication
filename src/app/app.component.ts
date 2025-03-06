import { Component } from "@angular/core";
import { ComponentCommunicationComponent } from "./components/component-communication/component-communication.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [ComponentCommunicationComponent],
})
export class AppComponent {
  title = "TP-Angular-CDA-ComponentCommunication";
}
