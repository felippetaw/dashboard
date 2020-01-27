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
    this.contents.forEach(element => {
      element.Courses.forEach(e => {
        e.Company = element.Company
        this.keys.push(e);
      });
    });
    this.keys.sort((a, b) => a.Company > b.Company ? 1 : -1);
    this.keys = this.keys.filter(i => i.Status == 'Active');
  }
  ngOnInit() {
    this.getData();
    console.log(this.keys);
    console.log(this.contents);
  } 
  
  sortCompany() {
    this.keys.sort((a, b) => a.Company > b.Company ? 1 : -1);
  }

  sortQuantity(boo) {
    if(boo == true) {
      this.keys.sort((a, b) => parseFloat(a.Quantity) > parseFloat(b.Quantity) ? 1 : -1);
    } else if (boo == false){
      this.keys.sort((a, b) => parseFloat(a.Quantity) > parseFloat(b.Quantity) ? -1 : 1);
    }
  }

  search() {
    let input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("tab");
    tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }        
    }
  }

  openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
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
