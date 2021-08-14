import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { MAP_ATTR, MAP_URL } from 'src/assets/impacts/map/mapurl';

@Component({
  selector: 'app-members-map',
  templateUrl: './members-map.component.html',
  styleUrls: ['./members-map.component.scss']
})

export class MembersMapComponent implements OnInit {

  private map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
    this.onMapReady(this.map);
  }

  private initMap() {
    this.map = L.map('unicef-map',{
      zoomDelta:0.25,
      zoomSnap:0.25,
      minZoom: 2,
      maxZoom:2,
      dragging: false,
      zoomControl: false,
    }).setView([0.0, 0], 2);

    const tiles = L.tileLayer(MAP_URL,{
      maxZoom: 20,
      attribution: MAP_ATTR,
      errorTileUrl:'' ,
    });

    const myIcon = L.icon({
      iconUrl:'assets/icon/favicon.png',
      iconSize:[18, 18]
    })

    L.marker([33.9391, 65.7100], {icon: myIcon}).addTo(this.map)
    .bindPopup('Afghanistan')
    .openPopup();

    L.marker([41.2533, 21.4683], {icon: myIcon}).addTo(this.map)
    .bindPopup('*Albania')
    .openPopup();

    L.marker([28.0339, 1.6596], {icon: myIcon}).addTo(this.map)
    .bindPopup('Algeria')
    .openPopup();

    L.marker([25.6850, 89.3563], {icon: myIcon}).addTo(this.map)
    .bindPopup('Bangladesh')
    .openPopup();

    L.marker([15.1657, 104.9910], {icon: myIcon}).addTo(this.map)
    .bindPopup('Cambodia')
    .openPopup();

    L.marker([45.1, 17.2], {icon: myIcon}).addTo(this.map)
    .bindPopup('*Croatia')
    .openPopup();

    L.marker([13.7943, -85.8965], {icon: myIcon}).addTo(this.map)
    .bindPopup('El Salvador')
    .openPopup();

    L.marker([64.9631, -19.0208], {icon: myIcon}).addTo(this.map)
    .bindPopup('Iceland')
    .openPopup();

    L.marker([20.5937, 78.9629], {icon: myIcon}).addTo(this.map)
    .bindPopup('India')
    .openPopup();

    L.marker([-0.1893, 112.9213], {icon: myIcon}).addTo(this.map)
    .bindPopup('Indonesia')
    .openPopup();

    L.marker([33.2232, 43.6793], {icon: myIcon}).addTo(this.map)
    .bindPopup('Iraq')
    .openPopup();

    L.marker([21.1096, -76.2975], {icon: myIcon}).addTo(this.map)
    .bindPopup('Jamaica')
    .openPopup();

    L.marker([36.2084, 135.2529], {icon: myIcon}).addTo(this.map)
    .bindPopup('Japan')
    .openPopup();

    L.marker([31.98523, 36.9384 ], {icon: myIcon}).addTo(this.map)
    .bindPopup('Jordan')
    .openPopup();

    L.marker([0.9236, 37.9062], {icon: myIcon}).addTo(this.map)
    .bindPopup('Kenya')
    .openPopup();

    L.marker([19.8563, 102.4955], {icon: myIcon}).addTo(this.map)
    .bindPopup('Laos')
    .openPopup();

    L.marker([-28.610, 28.2336], {icon: myIcon}).addTo(this.map)
    .bindPopup('Lesotho')
    .openPopup();

    L.marker([4.2105, 102.9758], {icon: myIcon}).addTo(this.map)
    .bindPopup('Malaysia')
    .openPopup();

    L.marker([3.9028, 74.2207], {icon: myIcon}).addTo(this.map)
    .bindPopup('Maldives')
    .openPopup();

    L.marker([46.8625, 103.8467], {icon: myIcon}).addTo(this.map)
    .bindPopup('Mongolia')
    .openPopup();

    L.marker([42.7087, 19.3744], {icon: myIcon}).addTo(this.map)
    .bindPopup('*Montenegro')
    .openPopup();

    L.marker([21.9162, 95.956], {icon: myIcon}).addTo(this.map)
    .bindPopup('*Myanmar')
    .openPopup();

    L.marker([33.9522, 36.2332], {icon: myIcon}).addTo(this.map)
    .bindPopup('Palestine')
    .openPopup();

    L.marker([9.538, -78.7821], {icon: myIcon}).addTo(this.map)
    .bindPopup('Panama')
    .openPopup();

    L.marker([-3.0122, 150.347], {icon: myIcon}).addTo(this.map)
    .bindPopup('Papua New Guinea')
    .openPopup();

    L.marker([12.8797, 121.774], {icon: myIcon}).addTo(this.map)
    .bindPopup('Phillipines')
    .openPopup();

    L.marker([-30.5595, 22.9375], {icon: myIcon}).addTo(this.map)
    .bindPopup('South Africa')
    .openPopup();

    L.marker([15.87, 100.9925], {icon: myIcon}).addTo(this.map)
    .bindPopup('Thailand')
    .openPopup();

    L.marker([-7.1742, 125.1275], {icon: myIcon}).addTo(this.map)
    .bindPopup('Timor Leste')
    .openPopup();

    L.marker([8.4238, -66.5897], {icon: myIcon}).addTo(this.map)
    .bindPopup('Venezuela')
    .openPopup();

    tiles.addTo(this.map);
  }

  onMapReady(map): void {
    setTimeout(() => {
      map.invalidateSize();
    });
}
}
