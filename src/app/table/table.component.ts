import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {  
  @Input() list!: any
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 5; // Number of items to display per page

  // Calculate the total number of pages
  get totalPages(): number {
    console.log(Math.ceil(this.list.length / this.itemsPerPage))
    return Math.ceil(this.list.length / this.itemsPerPage);
  }

  // Get the paginated data for the current page
  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.list.slice(startIndex, endIndex);
  }
  constructor(){}
  ngOnInit(): void{}
}
