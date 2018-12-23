import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { EmailProvider } from '../../providers/email/email';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the FconoscoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-fconosco',
   templateUrl: 'fconosco.html',
 })
 export class FconoscoPage {

   
   /**
    * @public
    * Property to assign a FormGroup object to
    */
    public form  : FormGroup;




   /**
    * @private
    * Property to assign an image file reference to
    */
    private _attachment : any;



    constructor(public navCtrl     : NavController,
      private _ALERT       : AlertController,
      private _FORM      : FormBuilder,
      private _IMAGE     : ImageProvider,
      private _EMAIL       : EmailProvider)
    {
      // Create a FormGroup object to implement validation
      // on the template fields
      // VERY basic validation as you can see - I.e. NO empty fields!
      this.form = this._FORM.group({
        "to"            : ["", Validators.required],
        "cc"            : ["", Validators.required],
        /*"bcc"           : ["", Validators.required],*/
        "subject"       : ["", Validators.required],
        "message"       : ["", Validators.required]
      });
    }




   /**
    *
    * @public
    * @method retrieveAttachment
    * @return {none}
    */
    retrieveAttachment() : void
    {
      this._IMAGE.selectPhotograph()
      .then((attachment : any) =>
      {
        // Assign retrieved image to private property
        // which we'll subsequently access within the
        // sendMessage method
        this._attachment = attachment;
      });
    }




   /**
    *
    * @public
    * @method displayMessage
    * @param title      {string}      Heading for the alert window
    * @param subTitle   {string}      Message for the alert window
    * @return {none}
    */
    displayMessage(title : string, subTitle : string) : void
    {
      let alert : any     =  this._ALERT.create({
        title     : title,
        subTitle   : subTitle,
        buttons    : ['Got it']
      });
      alert.present();
    }




   /**
    *
    * @public
    * @method sendMessage
    * @return {none}
    */
    sendMessage() : void
    {
      // Retrieve the validated form fields
      let to     : string    = this.form.controls["to"].value,
      cc     : string    = this.form.controls["cc"].value,
      bcc     : string    = this.form.controls["cc"].value,
      subject   : string    = this.form.controls["subject"].value,
      message   : string    = this.form.controls["message"].value;

      // Has the user selected an attachment?
      /*if(this._attachment.length > 1)*/
      if (undefined !== this._attachment && this._attachment.length)
      {
        // If so call the sendEmail method of the EmailProvider service, pass in
        // the retrieved form data and watch the magic happen! :)
        this._EMAIL.sendEmail(to, cc, bcc, this._attachment, subject, message);
      }
      else
      {
        // Inform the user that they need to add an attachment
        this.displayMessage('Error', 'Nenhum Arquivo Anexado');
      }
    }


    ionViewDidLoad() {
      console.log('ionViewDidLoad FconoscoPage');
    }

  }
