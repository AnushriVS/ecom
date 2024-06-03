import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-order-dialog',
  templateUrl: './cancel-order-dialog.component.html',
  styleUrls: ['./cancel-order-dialog.component.scss']
})
export class CancelReasonDialogComponent {
  selectedReason: string = '';

  reasons: string[] = ['Changed Mind', 'Found Cheaper Alternative', 'Shipping Time Too Long', 'Other'];

  constructor(
    public dialogRef: MatDialogRef<CancelReasonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close(this.selectedReason);
  }
}
