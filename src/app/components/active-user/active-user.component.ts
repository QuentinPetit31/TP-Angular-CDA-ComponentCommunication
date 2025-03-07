import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

//Ce composant est responsable de modifier les informations d'un utilisateur et d'envoyer ces mises à jour au composant parent (component-communication).
@Component({
  selector: "app-active-user",
  standalone: true,
  templateUrl: "./active-user.component.html",
  imports: [CommonModule, FormsModule],
})
export class ActiveUserComponent {
  @Output() userUpdated = new EventEmitter<{ name: string; age: number }>();

  newName = "Eddie Murphy";
  newAge = 63;

  //emit envoie un objet au composant parent ( Dès que userUpdated.emit() est déclenché, la fonction updateUser($event) du parent est appelée.)
  updateUser() {
    this.userUpdated.emit({ name: this.newName, age: this.newAge });
  }
}
