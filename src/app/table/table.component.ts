import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() list!: any
  minIndex:number = 0
  maxIndex:number = 5
  tableList: any = []
  currentPage: number = 1
  itemsPerPage: number = 5
  searchQuery: string = ''

  onSearch() {
    console.log(this.searchQuery)
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
  goToTeam(team:string) {
    this.router.navigate([`app/team/${team}`]);
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
    this.maxIndex = this.itemsPerPage;
    this.minIndex = 0;
    this.tableList = this.list.slice(this.minIndex,this.maxIndex)
  }
  returnLastPage() {
    this.currentPage = this.totalPages
    this.maxIndex = this.list.length;
    this.minIndex = this.list.length-this.itemsPerPage;
    this.tableList = this.list.slice(this.minIndex,this.maxIndex)
  }
  nextPage() {
    if (this.currentPage !== this.totalPages){
      this.currentPage +=1
      this.maxIndex+=this.itemsPerPage
      this.minIndex+=this.itemsPerPage
      this.tableList = this.list.slice(this.minIndex, this.maxIndex)
    }
  }
  prevPage() {
    if (this.currentPage !== 1) {
      this.currentPage -=1
      this.maxIndex-=this.itemsPerPage
      this.minIndex-=this.itemsPerPage
      this.tableList = this.list.slice(this.minIndex, this.maxIndex)
    }
  }
  searchByName() {
    if (this.list.length === 1){this.tableList = this.list}
  }
  constructor(private router: Router){
    setTimeout(()=>{this.tableList = this.list.slice(this.minIndex,this.maxIndex)},1000)
  }
}
