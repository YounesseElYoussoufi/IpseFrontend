/*
import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {AdminService} from "../../services/admin.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {EdituserComponent} from "../edituser/edituser.component";
import {Router} from "@angular/router";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements OnInit {
  vendors: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'CIN', 'd2d', 'rn', 'typeAccount', 'actions'];
  page: number = 0; // Current page number
  size: number = 10; // Number of items per page
  totalElements: number = 0; // Total number of vendors
  searchTerm: string = ''; // Search term

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router

  ) { }

  ngOnInit() {
    this.loadVendors();
  }

  loadVendors() {
    this.adminService.getUsers(this.page, this.size, this.searchTerm).subscribe(
      (data: any) => {
        this.vendors = data.content; // Get the content of the page
        this.totalElements = data.totalElements; // Get total number of vendors
        console.log('Loaded vendors:', this.vendors);
      },
      (error) => {
        console.error('Error loading vendors:', error);
        this.snackBar.open('Error loading vendors', 'Close', { duration: 3000 });
      }
    );
  }

  // Update the search functionality
  searchVendors() {
    this.page = 0; // Reset to the first page
    this.loadVendors();
  }

  // Methods for pagination
  nextPage() {
    if (this.page * this.size + this.vendors.length < this.totalElements) {
      this.page++;
      this.loadVendors();
    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.loadVendors();
    }
  }

  editVendor(vendor: any) {
    const dialogRef = this.dialog.open(EdituserComponent, {
      width: '400px',
      data: vendor
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadVendors();
      }
    });
  }

  deleteVendor(userId: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas récupérer ce compte vendeur!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.deleteVendor(userId).subscribe(
          () => {
            this.snackBar.open('Vendeur supprimé avec succès', 'Fermer', { duration: 3000 });
            this.loadVendors();
          },
          (error) => {
            console.error('Erreur lors de la suppression du vendeur:', error);
            this.snackBar.open('Erreur lors de la suppression du vendeur', 'Fermer', { duration: 3000 });
          }
        );
      }
    });
  }
  createUser(): void {
    // Navigate to the signup page
    this.router.navigate(['/signup']);
  }
}
*//*
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from "../../services/admin.service";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EdituserComponent } from "../edituser/edituser.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'typeAccount', 'actions'];
  page: number = 0; // Current page number
  size: number = 2; // Number of items per page
  totalElements: number = 0; // Total number of users
  searchTerm: string = ''; // Search term

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.adminService.getUsers(this.page, this.size, this.searchTerm).subscribe(
      (data: any) => {
        this.users = data.content; // Get the content of the page
        this.totalElements = data.totalElements; // Get total number of users
        console.log('Loaded users:', this.users);
      },
      (error) => {
        console.error('Error loading users:', error);
        this.snackBar.open('Error loading users', 'Close', { duration: 3000 });
      }
    );
  }

  // Update the search functionality
  searchUsers() {
    this.page = 0; // Reset to the first page
    this.loadUsers();
  }

  // Methods for pagination
  nextPage() {
    if (this.page * this.size + this.users.length < this.totalElements) {
      this.page++;
      this.loadUsers();
    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.loadUsers();
    }
  }

  editUser(user: any) {
    const dialogRef = this.dialog.open(EdituserComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadUsers();
      }
    });
  }

  deleteUser(userId: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas récupérer ce compte utilisateur!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.deleteUser(userId).subscribe(
          () => {
            this.snackBar.open('Utilisateur supprimé avec succès', 'Fermer', { duration: 3000 });
            this.loadUsers();
          },
          (error) => {
            console.error('Erreur lors de la suppression de l\'utilisateur:', error);
            this.snackBar.open('Erreur lors de la suppression de l\'utilisateur', 'Fermer', { duration: 3000 });
          }
        );
      }
    });
  }

  createUser(): void {
    // Navigate to the signup page
    this.router.navigate(['/signup']);
  }
}
*/
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from "../../services/admin.service";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EdituserComponent } from "../edituser/edituser.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'role', 'enabled', 'region', 'actions'];

  page: number = 0; // Current page number
  size: number = 2; // Number of items per page
  totalElements: number = 0; // Total number of users
  searchTerm: string = ''; // Search term

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.adminService.getUsers(this.page, this.size, this.searchTerm).subscribe(
      (data: any) => {
        this.users = data.content; // Get the content of the page
        this.totalElements = data.totalElements; // Get total number of users
        console.log('Loaded users:', this.users); // Vérifiez la présence de region dans les objets user
      },
      (error) => {
        console.error('Error loading users:', error);
        this.snackBar.open('Error loading users', 'Close', { duration: 3000 });
      }
    );
  }

  searchUsers() {
    this.page = 0; // Reset to the first page
    this.loadUsers();
  }

  nextPage() {
    if (this.page * this.size + this.users.length < this.totalElements) {
      this.page++;
      this.loadUsers();
    }
  }

  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.loadUsers();
    }
  }

  editUser(user: any) {
    const dialogRef = this.dialog.open(EdituserComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadUsers();
      }
    });
  }

  deleteUser(userId: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: "Vous ne pourrez pas récupérer ce compte utilisateur!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.deleteUser(userId).subscribe(
          () => {
            this.snackBar.open('Utilisateur supprimé avec succès', 'Fermer', { duration: 3000 });
            this.loadUsers();
          },
          (error) => {
            console.error('Erreur lors de la suppression de l\'utilisateur:', error);
            this.snackBar.open('Erreur lors de la suppression de l\'utilisateur', 'Fermer', { duration: 3000 });
          }
        );
      }
    });
  }

  /*toggleUserEnabled(userId: number) {
    this.adminService.toggleUserEnabled(userId).subscribe(
      () => {
        this.snackBar.open('Statut d\'activation de l\'utilisateur modifié avec succès', 'Fermer', { duration: 3000 });
        this.loadUsers();
      },
      (error) => {
        console.error('Erreur lors de la modification du statut d\'activation:', error);
        this.snackBar.open('Erreur lors de la modification du statut d\'activation', 'Fermer', { duration: 3000 });
      }
    );
  }*/

  toggleUserEnabled(userId: number): void {
    this.adminService.toggleUserEnabled(userId).subscribe({
      next: () => {
        // Update the user status in the local array
        this.users = this.users.map(user =>
          user.id === userId ? { ...user, enabled: !user.enabled } : user
        );
      },
      error: (err) => console.error('Erreur lors du changement de statut de l\'utilisateur:', err)
    });
  }


  createUser(): void {
    // Navigate to the signup page
    this.router.navigate(['admin/creeruser']);
  }
}
