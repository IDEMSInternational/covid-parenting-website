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

    L.marker([25.6850, 89.3563], {icon: myIcon}).addTo(this.map)
    .bindPopup('Bangladesh')
    .openPopup();

    L.marker([15.1657, 104.9910], {icon: myIcon}).addTo(this.map)
    .bindPopup('Cambodia')
    .openPopup();

    L.marker([-12.2350, -51.9253], {icon: myIcon}).addTo(this.map)
    .bindPopup('Brazil')
    .openPopup();

    L.marker([4.5709, -74.2973], {icon: myIcon}).addTo(this.map)
    .bindPopup('Colombia')
    .openPopup();

    L.marker([51.1657, 10.4515], {icon: myIcon}).addTo(this.map)
    .bindPopup('Germany')
    .openPopup();

    L.marker([17.2835, -89.8308], {icon: myIcon}).addTo(this.map)
    .bindPopup('Guatemala')
    .openPopup();

    L.marker([15.2, -86.2419], {icon: myIcon}).addTo(this.map)
    .bindPopup('Honduras')
    .openPopup();

    L.marker([64.9631, -19.0208], {icon: myIcon}).addTo(this.map)
    .bindPopup('Iceland')
    .openPopup();

    L.marker([20.5937, 78.9629], {icon: myIcon}).addTo(this.map)
    .bindPopup('India')
    .openPopup();

    L.marker([53.1424, -6.6921], {icon: myIcon}).addTo(this.map)
    .bindPopup('Ireland')
    .openPopup();

    L.marker([21.1096, -76.2975], {icon: myIcon}).addTo(this.map)
    .bindPopup('Jamaica')
    .openPopup();

    L.marker([0.9236, 37.9062], {icon: myIcon}).addTo(this.map)
    .bindPopup('Kenya')
    .openPopup();

    L.marker([42.2044, 72.7661], {icon: myIcon}).addTo(this.map)
    .bindPopup('Kyrgyzstan')
    .openPopup();

    L.marker([4.2105, 102.9758], {icon: myIcon}).addTo(this.map)
    .bindPopup('Malaysia')
    .openPopup();

    L.marker([23.6345, -102.5528], {icon: myIcon}).addTo(this.map)
    .bindPopup('Mexico')
    .openPopup();

    L.marker([42.7087, 19.3744], {icon: myIcon}).addTo(this.map)
    .bindPopup('*Montenegro')
    .openPopup();

    L.marker([-22.9576, 16.4904], {icon: myIcon}).addTo(this.map)
    .bindPopup('Namibia')
    .openPopup();

    L.marker([33.9522, 36.2332], {icon: myIcon}).addTo(this.map)
    .bindPopup('Palestine')
    .openPopup();

    L.marker([-23.4425, -56.4438], {icon: myIcon}).addTo(this.map)
    .bindPopup('Paraguay')
    .openPopup();

    L.marker([-9.19, -75.0152], {icon: myIcon}).addTo(this.map)
    .bindPopup('Peru')
    .openPopup();

    L.marker([12.8797, 121.774], {icon: myIcon}).addTo(this.map)
    .bindPopup('Phillipines')
    .openPopup();

    L.marker([41.3999, -8.2245], {icon: myIcon}).addTo(this.map)
    .bindPopup('Portugal')
    .openPopup();

    L.marker([47.6512, 14.9955], {icon: myIcon}).addTo(this.map)
    .bindPopup('Slovenia')
    .openPopup();

    L.marker([5.1512, 45.1996], {icon: myIcon}).addTo(this.map)
    .bindPopup('Somalia')
    .openPopup();

    L.marker([-30.5595, 22.9375], {icon: myIcon}).addTo(this.map)
    .bindPopup('South Africa')
    .openPopup();

    L.marker([7.8731, 80.7718], {icon: myIcon}).addTo(this.map)
    .bindPopup('Sri-Lanka')
    .openPopup();

    L.marker([15.87, 100.9925], {icon: myIcon}).addTo(this.map)
    .bindPopup('Thailand')
    .openPopup();

    L.marker([2.3733, 32.2903], {icon: myIcon}).addTo(this.map)
    .bindPopup('Uganda')
    .openPopup();

    L.marker([50.3794, 29.1656], {icon: myIcon}).addTo(this.map)
    .bindPopup('Ukraine')
    .openPopup();

    L.marker([37.0902, -95.7129], {icon: myIcon}).addTo(this.map)
    .bindPopup('USA')
    .openPopup();

    L.marker([56.9781, -4.4360], {icon: myIcon}).addTo(this.map)
    .bindPopup('UK')
    .openPopup();

    L.marker([24.0583, 105.2772], {icon: myIcon}).addTo(this.map)
    .bindPopup('Vietnam')
    .openPopup();

    tiles.addTo(this.map);

  }

}
