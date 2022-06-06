import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';


@Component({
  selector: 'app-cotiza',
  templateUrl: './cotiza.page.html',
  styleUrls: ['./cotiza.page.scss'],
})
export class CotizaPage implements OnInit {
  subjects :string;
  bodys:any;


  constructor(private emailComposer:EmailComposer) { }

  ngOnInit() {

  }

  SendMail(){
    let email = {
      to: 'noreply@innovapublic.com.sv',
      cc: [],
      bcc: [],
      attachment:[],
      subject: this.subjects,
      body: this.bodys,
      isHtml: false,
      app:"Gmail"
    }
    this.emailComposer.open(email);
    
  }

}
