import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { AdminService } from "../../services/admin.service";

@Component({
  selector: 'app-employe-retraite',
  templateUrl: './employe-retraite.component.html',
  styleUrls: ['./employe-retraite.component.css']
})
export class EmployeRetraiteComponent implements OnInit {

  employsRet: any[] = [];
  displayedColumns: string[] = ['nomPrenomAgent', 'nrcar', 'categorieRet', 'dateretraite', 'pension', 'totalDette', 'totalPaiement', 'reliquat'];
  page: number = 0;
  size: number = 10;
  totalElements: number = 0;
  searchTerm: string = '';

  constructor(
    private employesRetService: AdminService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadEmployesRet();
  }

  searchEmp() {
    this.page = 0; // Reset to the first page
    this.loadEmployesRet();
  }

  loadEmployesRet() {
    this.employesRetService.getEmployeRet(this.page, this.size, this.searchTerm).subscribe(
      (data: any) => {
        this.employsRet = data.content;
        this.totalElements = data.totalElements;
      },
      (error) => {
        console.error('Error loading Retraite:', error);
        this.snackBar.open('Error loading Retraite', 'Close', { duration: 3000 });
      }
    );
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.loadEmployesRet();
    }
  }

  nextPage() {
    if ((this.page + 1) * this.size < this.totalElements) {
      this.page++;
      this.loadEmployesRet();
    }
  }
}
