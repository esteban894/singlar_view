import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent implements OnInit {
  active = 1;
  company: Company | null = null;
  paramId: number = 0;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.paramId = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.companyService.getCompany(this.paramId).subscribe((data) => {
      this.company = data;
    });
  }
}
