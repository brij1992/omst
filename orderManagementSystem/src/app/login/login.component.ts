import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, Routes } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Username!: string;
  Password!: string;

  constructor(
    private order: CommonService,
    private router: Router,
    private routes: Routes
  ) {}

  ngOnInit(): void {}

  logIn() {
    if (this.Username === 'admin@123' && this.Password === 'Admin@123') {
      // this.router.navigate['/orders'];
      this.router.navigate(['/orders']);
    } else {
      alert('Please enter Valid Detail');
    }
  }
}
