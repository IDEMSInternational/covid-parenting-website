import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-funders-map',
  templateUrl: './funders-map.component.html',
  styleUrls: ['./funders-map.component.scss']
})


export class FundersMapComponent implements OnInit {

  private map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

 

  private initMap() {
    
    this.map = L.map('map3',{
      zoomDelta:0.25,
      zoomSnap:0.25,
      minZoom: 2,
      maxZoom:4,
      dragging: true,
      
    }).setView([0.0, 0], 2);

    const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png',{
      maxZoom: 20,
      attribution:'Map data © OpenStreetMap contributors'
    });


    const myIcon = L.icon({
      iconUrl:'assets/icon/favicon.png',
      iconSize:[18, 18]
    })

    L.marker([32, 71.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<img style="max-width: -webkit-fill-available;" src="assets/impacts/map/Pakistan.png"/></br><b>Pakistan:</b> National television broadcasts')
    .openPopup();

    L.marker([40, 73.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<img style="max-width: -webkit-fill-available;" src="assets/impacts/map/Kyrgyzstan.png"/></br><b>Kyrgyzstan:</b> Cartoon videos on national television reaching over 2 million people')
    .openPopup();

    L.marker([20, 103.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>Laos:</b> National Government and UNICEF speakers in 5,800 villages for 50% of population')
    .openPopup();

    L.marker([16, 103.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<img style="max-width: -webkit-fill-available;" src="assets/impacts/map/Thailand.png"/></br><b>Thailand:</b> Government distributed leaflets in Health Promotion hospitals throughout the country')
    .openPopup();

    L.marker([42, 10.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>Montenegro:</b> Emergency phone lines, webinars, food parcels')
    .openPopup();

    L.marker([-31.5, 19.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>South Africa:</b> National radio broadcasts in 7 languages')
    .openPopup();

    L.marker([-25, -55.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>Paraguay:</b> 1million reached online with the First Lady’s support')
    .openPopup();

    L.marker([15, -85.40], {icon: myIcon}).addTo(this.map)
    .bindPopup('<b>Guatemala:</b> Ministries of Health and Education')
    .openPopup();
    tiles.addTo(this.map);

  }

}
