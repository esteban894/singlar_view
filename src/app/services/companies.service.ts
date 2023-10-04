import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    return this.http.get<Company[]>('assets/utils/companies.json');
  }
}
