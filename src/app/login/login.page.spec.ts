import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, 
  IonItem, IonLabel, IonInput 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  usuario: string = '';
  clave: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.usuario === 'admin@demo.com' && this.clave === '1234') {
      alert('Inicio de sesión exitoso ✅');
      this.router.navigate(['/home']); // redirige a la página "home"
    } else {
      alert('Usuario o contraseña incorrectos ❌');
    }
  }

}
