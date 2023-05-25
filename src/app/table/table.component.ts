import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {  
  @Input() list!: any
  tableList: any = []
  currentPage: number = 1
  itemsPerPage: number = 5
  minIndex:number = 0
  maxIndex:number = 5
  searchQuery: string = '';

  onSearch() {
    if (this.searchQuery !== "") {
      this.tableList = []
      for (let index = 0; index < this.list.length; index++) {
        if (this.searchQuery === this.list[index]['club_name']){
          this.tableList = [...this.tableList, this.list[index]]
        }
      }
    } else {
      this.tableList = this.list.slice(this.minIndex, this.maxIndex)
    }
  }
  get totalPages(): number {
    return Math.ceil(this.list.length / this.itemsPerPage);
  }

  // Get the paginated data for the current page
  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.tableList = this.list.slice(startIndex, endIndex);
    console.log(this.list)
    return this.list.slice(startIndex, endIndex);
  }
  returnFirstPage() {
    this.currentPage = 1
    this.maxIndex = 5;
    this.minIndex = 0;
    this.tableList = this.list.slice(this.minIndex,this.maxIndex)
  }
  returnLastPage() {
    this.currentPage = this.totalPages
    this.maxIndex = this.list.length;
    this.minIndex = this.list.length-5;
    this.tableList = this.list.slice(this.minIndex,this.maxIndex)
  }
  nextPage() {
    if (this.currentPage !== this.totalPages){
      this.currentPage +=1
      this.maxIndex+=5
      this.minIndex+=5
      this.tableList = this.list.slice(this.minIndex, this.maxIndex)
    }
  }
  prevPage() {
    if (this.currentPage !== 1) {
      this.currentPage -=1
      this.maxIndex-=5
      this.minIndex-=5
      this.tableList = this.list.slice(this.minIndex, this.maxIndex)
    }
  }
  searchByName() {
    if (this.list.length === 1){this.tableList = this.list}
  }
  constructor(){}
  ngOnInit(): void{
    this.tableList = this.list
  }
}
