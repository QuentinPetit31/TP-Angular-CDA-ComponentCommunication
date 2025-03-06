import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  users: User = {
    name: Quentin,
    age: '29',
  };

  // Gestion des user ajoutés
  userAdded(userData: { name: string; age: number }) {
    const newUser: User = {
      name: userData.content,
      age: userData.title,
    };
    this.users.push(newUser);
  }
}
