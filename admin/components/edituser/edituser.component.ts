import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminService } from "../../services/admin.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  userForm: FormGroup;
  hidePassword = true; // Property to toggle password visibility

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private dialogRef: MatDialogRef<EdituserComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      name: [data.name, Validators.required],
      email: [{ value: data.email, disabled: false }, [Validators.required, Validators.email]],
      password: ['', Validators.minLength(6)], // Validation added
      cin: [data.cin],
      region: [data.region] // Added the region field
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;

      // Check if the password is empty, if so, remove it from the formData
      if (!formData.password) {
        delete formData.password;
      }

      this.adminService.updateUser(this.data.id, formData).subscribe(
        (response) => {
          this.snackBar.open('Utilisateur mis à jour avec succès', 'Fermer', { duration: 3000 });
          this.dialogRef.close(true);
        },
        (error) => {
          this.snackBar.open('Erreur lors de la mise à jour de l\'utilisateur', 'Fermer', { duration: 3000 });
        }
      );
    }
  }
}
