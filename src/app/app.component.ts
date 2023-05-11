import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
// to use captch in angular you have to install ngx-captcha packahe
// documentation https://www.npmjs.com/package/ngx-captcha
export class AppComponent implements OnInit  {
 protected aFormGroup: FormGroup;
 @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  @ViewChild('langInput') langInput: ElementRef;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';
 
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  // reset(): void {
  //   this.captchaElem.resetCaptcha();
  // }
  handleSuccess(data) {
    console.log(data);
  }
}
