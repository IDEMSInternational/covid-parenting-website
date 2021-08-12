import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'
import { MAP_URL } from 'src/assets/impacts/map/mapurl';

@Component({
  selector: 'app-members-map',
  templateUrl: './members-map.component.html',
  styleUrls: ['./members-map.component.scss']
})

export class MembersMapComponent implements AfterViewInit {

  private m;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

 

  private initMap() {
    this.m = L.map('map2',{
      zoomDelta:0.25,
      zoomSnap:0.25,
      minZoom: 2,
      maxZoom:4,
      dragging: false,
      zoomControl: false,
      touchZoom: false
      
    }).setView([0.0, 0], 2);

    const tiles = L.tileLayer(MAP_URL,{
      maxZoom: 20,
      attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>'
    }).addTo(this.m);


    const myIcon = L.icon({
      iconUrl:'assets/icon/favicon.png',
      iconSize:[18, 18]
    })
    L.marker([33.9391, 67.7100], {icon: myIcon}).addTo(this.m)
    .bindPopup('Afghanistan')
    .openPopup();

    L.marker([41.1533, 20.1683], {icon: myIcon}).addTo(this.m)
    .bindPopup('Albania')
    .openPopup();

    L.marker([7.10, 37.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('The messages are important and guiding especially this time when adolescents are at home. <br> <b style = "color:#5dbcd2;">- Catholic Relief Services (CRS), Kenya </b><br><br> Safaricom ringtones of COVID-19 parenting song')
    .openPopup();

  
    L.marker([47, 10.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('The children of the world have an urgent need for safe havens right now, in both a spiritual and physical sense. Spiritual support - through this kind of creative engagement designed especially for children -can give a renewed sense of hope to families and churches alike.<br> <b style = "color:#5dbcd2;">- WCC Interim General Secretary Rev. Prof. Dr Ioan Sauca about the Church Leaders Pack </b>')
    .openPopup();

    L.marker([27, 76.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('<b>India:</b> Food parcels and phone based support by community workers')
    .openPopup();

    L.marker([16, 120.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('<b>Phillipines:</b> National Government and UNICEF webinars for caseworkers and families')
    .openPopup();

    L.marker([32, 71.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('<img style="max-width: -webkit-fill-available;" src="assets/impacts/map/Pakistan.png"/></br><b>Pakistan:</b> National television broadcasts')
    .openPopup();

    L.marker([40, 73.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('<img style="max-width: -webkit-fill-available;" src="assets/impacts/map/Kyrgyzstan.png"/></br><b>Kyrgyzstan:</b> Cartoon videos on national television reaching over 2 million people')
    .openPopup();

    L.marker([20, 103.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('<b>Laos:</b> National Government and UNICEF speakers in 5,800 villages for 50% of population')
    .openPopup();

    L.marker([16, 103.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('<img style="max-width: -webkit-fill-available;" src="assets/impacts/map/Thailand.png"/></br><b>Thailand:</b> Government distributed leaflets in Health Promotion hospitals throughout the country')
    .openPopup();

    L.marker([42, 10.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('<b>Montenegro:</b> Emergency phone lines, webinars, food parcels')
    .openPopup();

    L.marker([-31.5, 19.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('<b>South Africa:</b> National radio broadcasts in 7 languages')
    .openPopup();

    L.marker([-25, -55.10], {icon: myIcon}).addTo(this.m)
    .bindPopup('<b>Paraguay:</b> 1million reached online with the First Lady’s support')
    .openPopup();

    L.marker([15, -85.40], {icon: myIcon}).addTo(this.m)
    .bindPopup('<b>Guatemala:</b> Ministries of Health and Education')
    .openPopup();
    tiles.addTo(this.m);

  }

}
