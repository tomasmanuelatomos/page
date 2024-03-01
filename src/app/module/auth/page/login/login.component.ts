import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: "login.component.html",
  styleUrls: ['./login.component.css'],
})
export class LoginComponent { 

  constructor(private toastr: ToastrService) {} 
  showSuccess() {
    this.toastr.success('Success message', 'Success');
  }
}
