import { Component, OnInit } from '@angular/core';
import { PetService } from './../../service/pet/pet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public petService: PetService
  ) { }

  ngOnInit(): void {
  }

}
