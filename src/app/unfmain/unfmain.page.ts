import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-unfmain',
  templateUrl: './unfmain.page.html',
  styleUrls: ['./unfmain.page.scss'],
})
export class UnfmainPage {
  cimage = null;
  imageList = [];

  constructor(
    public router: Router,
    private emailComposer: EmailComposer
    ) { }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    var imageUrl = image.webPath;
    this.cimage = image;
    this.imageList.push(imageUrl);
  }

  sendMail() {
    const email = {
      to: 'schaden@taxiwerbung.at',
      subject: 'Unfall',
      body: 'Meine Unfallfotos',
      attachments: this.imageList,
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}
