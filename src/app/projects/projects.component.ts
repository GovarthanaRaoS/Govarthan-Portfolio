import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document){

  }

  handleTechie(){
    this.document.location.href = 'https://techie-webapp.onrender.com';
  }

  handlePortfolio(){
    this.router.navigateByUrl('home');
  }

}
