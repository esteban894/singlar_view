import { Component, Input, OnInit } from '@angular/core';
import { Company, User } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  users: User[] = [];

  @Input() companyId: number | any;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompany(this.companyId).subscribe((data) => {
      this.users = data.users;
      this.collectionSize = this.users.length;
    });
  }

  refreshCountries() {
    return this.users;
  }
}
