import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Pet } from '../../common/model/pets'

@Injectable({
  providedIn: 'root'
})
export class PetService {

  public pets: ReplaySubject<Pet[]> = new ReplaySubject<Pet[]>(1);
  private baseUrl: string = 'https://petstore.swagger.io/v2/';

  constructor(
    private http: HttpClient
  ) { 
    this.loadPets().subscribe();
  }

  public loadPets() : Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrl + 'pet/findByStatus?status=available').pipe(
      tap((resp) => this.pets.next(resp))
    );
  }
}
