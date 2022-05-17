import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin:FormGroup;

  constructor(public fb:FormBuilder,
    public alertController:AlertController,
    public navCtrl:NavController) { 
    this.formularioLogin= this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }
 async ingresar(){
    var f= this.formularioLogin.value;
    var usuario= JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password== f.password){
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('menu/inicio');
    }else{
      const alert = await this.alertController.create({
        header:'Datos Erroneos',
        message: 'No es valido tu usuario/password',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
    
  }

}
