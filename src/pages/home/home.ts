import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    /*foto(campo) {
    let qua = 80;
    let tHeight = 400;
    let tWidth = 400;
    if (campo.Mejorar_Calidad_de_Foto__c == true) {
      qua = 90;
      tHeight = 800;
      tWidth = 800;
    }
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        quality: qua,
        targetHeight: tHeight,
        targetWidth: tWidth,
        saveToPhotoAlbum: true,
        encodingType: this.camera.EncodingType.JPEG
    }).then((imageData) => {
      console.log("IMAGE SUCCES FORMULARIO");
        campo.valor__c = "data:image/jpeg;base64," + imageData;        
        if (campo.Obtener_Geolocalizaci_n__c) {
          this.geolocation.getCurrentPosition().then((actualPosition) => {
            campo.Geolocalizac_n__c = actualPosition.coords.latitude + ', ' + actualPosition.coords.longitude; 
            this.guardarOk("Guardado",false);
          }).catch((err)=>{
            console.log("Error en Foto FORMULARIO :",err);
            this.guardarOk("Guardado",false);
          });  
        }
    }).catch((err)=>{
      console.log("Error en Foto:",err);
    });
  }*/

}
