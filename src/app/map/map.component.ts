import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  private allRadios = document.getElementsByTagName('input');

  constructor() { }

  ngOnInit(): void {
    this.allRadios[0].checked = true;
    this.allRadios[1].checked = false;
    this.allRadios[2].checked = false;
  }

  onClick(_event){
      if (this.allRadios[0].type == 'radio' && this.allRadios[0].value == 'stories') {
          this.allRadios[0].checked = true;
          document.getElementById('tab2').style.display='none';
          document.getElementById('tab3').style.display='none';
      }
      else if (this.allRadios[1].type == 'radio' && this.allRadios[1].value == 'unicef') {
        this.allRadios[1].checked = true;
        document.getElementById('tab1').style.display='none';
        document.getElementById('tab3').style.display='none';
      } 
      else if (this.allRadios[2].type == 'radio' && this.allRadios[2].value == 'govt') {
        this.allRadios[2].checked = true;
        document.getElementById('tab1').style.display='none';
        document.getElementById('tab2').style.display='none';
      }
  }
}
