import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goCor() {
    this.router.navigateByUrl('/cor');
  }

  goCam() {
    this.router.navigateByUrl('/cam');
  }

  goAus() {
    this.router.navigateByUrl('/poli');
  }

  goPark() {
    this.router.navigateByUrl('/park');
  }

  goWer() {
    this.router.navigateByUrl('/werpr');
  }

  goSchl() {
    this.router.navigateByUrl('/schul');
  }

  goFar() {
    this.router.navigateByUrl('/fahr');
  }

  goWeb() {
    this.router.navigateByUrl('/austt');
  }
}
