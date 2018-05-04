import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  image ;
  opcion ;

  constructor(public navCtrl: NavController, 
  	          public camera: Camera, 
  	          public _DomSanitizationService: DomSanitizer,
              public alertCtrl: AlertController) {}

  options: CameraOptions = {
    quality: 80,
    targetHeight: 400,
    targetWidth: 400,
    encodingType: this.camera.EncodingType.JPEG
  }


  opciones() {

    let alert = this.alertCtrl.create({
      title: 'Seleccione :',
      buttons: [
        {
          text: 'Imagen nueva', 
          handler: () => {
            this.foto('Nueva');
          }
        },
        {
          text: 'Imagen de galeria',
          handler: () => {
            this.foto('Existente');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Buy clicked');
          }
        },
      ]
    });
    alert.present();
  }

  foto(opcion : string) {

      let base64Image ;
      
      if(opcion == 'Nueva'){
         delete this.options.sourceType;
         base64Image = 'data:image/jpeg;base64,';
         this.options.destinationType = this.camera.DestinationType.DATA_URL;
      } else{
         delete this.options.destinationType;
         base64Image = '';
         this.options.sourceType = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
      }
     
      this.camera.getPicture(this.options).then((imageData) => {

          base64Image +=  imageData;
          this.image = this._DomSanitizationService.bypassSecurityTrustUrl(base64Image);   
      
      }).catch((err)=>{
        console.log("Error en Foto:",err);
      });
    }

}
