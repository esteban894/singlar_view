import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    return this.http.get<Company[]>('assets/utils/companies.json');
  }

  getCompany(companyId: number): Observable<any> {
    return this.http.get<Company[]>('assets/utils/companies.json').pipe(
      map((data: any) => {
        const companies = data.companies;
        return companies.find((company: any) => company.id === companyId);
      })
    );
  }
}
