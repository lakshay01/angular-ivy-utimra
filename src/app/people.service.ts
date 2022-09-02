import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeopleList(): Observable<any> {
    return this.http
      .get('https://swapi.dev/api/people')
      .pipe(map((resp: any) => resp.results));
  }
}
