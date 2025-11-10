import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, 
  IonItem, IonLabel, IonInput, IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButton, IonItem, IonLabel, IonInput,
    CommonModule, FormsModule
  ],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  clave: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    const usuarioValido = /^[a-zA-Z0-9]{3,8}$/.test(this.usuario);
    const claveValida = /^[0-9]{4}$/.test(this.clave);

    if (!usuarioValido) {
      alert('❌ El usuario debe ser alfanumérico y tener entre 3 y 8 caracteres.');
      return;
    }

    if (!claveValida) {
      alert('❌ La contraseña debe ser numérica y tener exactamente 4 dígitos.');
      return;
    }

    alert('Inicio de sesión exitoso ✅');
    localStorage.setItem('usuario', this.usuario)
    this.router.navigate(['/home']);
  }

}
