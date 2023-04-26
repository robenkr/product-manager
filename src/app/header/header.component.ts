import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string | undefined;

  user?: User | null;

  constructor(private authService: AuthenticationService) {
    this.authService.user.subscribe(u => this.user = u);
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }

}
