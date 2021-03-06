import { Component, OnInit } from '@angular/core';
import  content  from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Dashboard';
  public contents = content.contents;
  keys:any[] = [];
  data:any;
  showModal: boolean;
  content: string;
  titleModal: string;
  
  getData() {
    // get the companies and push it to the keys hash
    this.contents.forEach(element => {
      element.Courses.forEach(e => {
        e.Company = element.Company
        this.keys.push(e);
      });
    });
    // align itens by company name and filter by active
    this.keys.sort((a, b) => a.Company > b.Company ? 1 : -1);
    this.keys = this.keys.filter(i => i.Status == 'Active');
  }
  ngOnInit() {
    this.getData();
  } 
  
  sortCompany() {
    this.keys.sort((a, b) => a.Company > b.Company ? 1 : -1);
  }

  sortId(boo) {
    if(boo == true) {
      this.keys.sort((a, b) => parseFloat(a.Id) > parseFloat(b.Id) ? 1 : -1);
    } else if (boo == false){
      this.keys.sort((a, b) => parseFloat(a.Id) > parseFloat(b.Id) ? -1 : 1);
    }
  }

  sortQuantity(boo) {
    if(boo == true) {
      this.keys.sort((a, b) => parseFloat(a.Quantity) > parseFloat(b.Quantity) ? 1 : -1);
    } else if (boo == false){
      this.keys.sort((a, b) => parseFloat(a.Quantity) > parseFloat(b.Quantity) ? -1 : 1);
    }
  }

  //function to search elements based on the table rows and columns
  search() {
    let input, filter, table, trs, i;

    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("tab");
    trs = table.getElementsByTagName("tr");

    for (i = 1; i < trs.length; i++) {
    let tds = trs[i].getElementsByTagName("td");
    trs[i].style.display = "none";
    for (var i2 = 0; i2 < 2; i2++) {
      if (tds[i2].innerHTML.toUpperCase().indexOf(filter) > -1) {
        trs[i].style.display = "";
        continue;
      }
    }
  }
  }

  openNav() {
    document.getElementById("sidebar").style.width = "225px";
    document.getElementById("main").style.marginLeft = "225px";
  }

  show(message) {
    this.showModal = true; 
    this.content = message; 
    this.titleModal = "Descrição do curso";    
  }

  hide() {
    this.showModal = false;
  }

  
}
