import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  customerlist: any[];
  selected: string = "";


  ngOnInit() {
    this.customerlist = [
      { "name": "Alex", "id" : "01234" },
      { "name": "Åli", "id" : "01236" },
      { "name": "Albrox", "id" : "01239" },
      { "name": "Algex", "id" :"01211" },
      { "name": "Ameroz Samoa","id" : "11211" },
      { "name": "Andoro", "id" :"11211" },
      { "name": "Anglam", "id" :"11011" },
      { "name": "Angta", "id" :"11212" },
      { "name": "Antarfia", "id" : "11213" },
      { "name": "Anti mata", "id" : "11214" },
      { "name": "Arge all", "id" : "11215" },
      { "name": "Armenora", "id" :"11216" },
      { "name": "Arubana", "id" :"11217" },
      { "name": "Austin", "id" :"11218" },
      { "name": "Austrix", "id" : "11219" },
      { "name": "Azerpa", "id" : "12201" },
      { "name": "Bahaan", "id" : "12222"},
      { "name": "Bahrox", "id" : "12216" },
      { "name": "Banglfox", "id" : "12251"},
      { "name": "Barbadon", "id" : "12201"}
  ]
  }

  selectCustomerName(name) {
    console.log(name);
    console.log(this.selected);
}


}
