import { Component, OnInit, AfterViewInit } from '@angular/core';
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

    L.marker([33.9391, 67.7100], {icon: myIcon}).addTo(this.map)
    .bindPopup('Afghanistan')
    .openPopup();

    L.marker([41.1533, 20.1683], {icon: myIcon}).addTo(this.map)
    .bindPopup('Albania')
    .openPopup();

    L.marker([28.0339, 1.6596], {icon: myIcon}).addTo(this.map)
    .bindPopup('Algeria')
    .openPopup();

    L.marker([23.6850, 90.3563], {icon: myIcon}).addTo(this.map)
    .bindPopup('Bangladesh')
    .openPopup();

    L.marker([12.5657, 104.9910], {icon: myIcon}).addTo(this.map)
    .bindPopup('Cambodia')
    .openPopup();

    L.marker([-14.2350, -51.9253], {icon: myIcon}).addTo(this.map)
    .bindPopup('Brazil')
    .openPopup();

    L.marker([4.5709, -74.2973], {icon: myIcon}).addTo(this.map)
    .bindPopup('Colombia')
    .openPopup();

    L.marker([45.1, 15.2], {icon: myIcon}).addTo(this.map)
    .bindPopup('Croatia')
    .openPopup();

    L.marker([13.7943, 88.8965], {icon: myIcon}).addTo(this.map)
    .bindPopup('El Salvador')
    .openPopup();

    L.marker([51.1657, 10.4515], {icon: myIcon}).addTo(this.map)
    .bindPopup('Germany')
    .openPopup();

    L.marker([15.7835, -90.2308], {icon: myIcon}).addTo(this.map)
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

    L.marker([-0.7893, 113.9213], {icon: myIcon}).addTo(this.map)
    .bindPopup('Indonesia')
    .openPopup();

    L.marker([33.2232, 43.6793], {icon: myIcon}).addTo(this.map)
    .bindPopup('Iraq')
    .openPopup();

    L.marker([53.1424, -7.6921], {icon: myIcon}).addTo(this.map)
    .bindPopup('Ireland')
    .openPopup();

    L.marker([18.1096, -77.2975], {icon: myIcon}).addTo(this.map)
    .bindPopup('Jamaica')
    .openPopup();

    L.marker([36.2084, 138.2529], {icon: myIcon}).addTo(this.map)
    .bindPopup('Japan')
    .openPopup();

    L.marker([30.58523, 36.2384 ], {icon: myIcon}).addTo(this.map)
    .bindPopup('Jordan')
    .openPopup();

    L.marker([0.0236, 37.9062], {icon: myIcon}).addTo(this.map)
    .bindPopup('Kenya')
    .openPopup();

    L.marker([41.2044, 74.7661], {icon: myIcon}).addTo(this.map)
    .bindPopup('Kyrgyzstan')
    .openPopup();

    L.marker([19.8563, 102.4955], {icon: myIcon}).addTo(this.map)
    .bindPopup('Laos')
    .openPopup();

    L.marker([-29.610, 28.2336], {icon: myIcon}).addTo(this.map)
    .bindPopup('Lesotho')
    .openPopup();

    L.marker([4.2105, 101.9758], {icon: myIcon}).addTo(this.map)
    .bindPopup('Malaysia')
    .openPopup();

    L.marker([3.2028, 73.2207], {icon: myIcon}).addTo(this.map)
    .bindPopup('Maldives')
    .openPopup();

    L.marker([23.6345, -102.5528], {icon: myIcon}).addTo(this.map)
    .bindPopup('Mexico')
    .openPopup();

    L.marker([46.8625, 103.8467], {icon: myIcon}).addTo(this.map)
    .bindPopup('Mongolia')
    .openPopup();

    L.marker([42.7087, 19.3744], {icon: myIcon}).addTo(this.map)
    .bindPopup('Montenegro')
    .openPopup();

    L.marker([21.9162, 95.956], {icon: myIcon}).addTo(this.map)
    .bindPopup('Myanmar')
    .openPopup();

    L.marker([-22.9576, 18.4904], {icon: myIcon}).addTo(this.map)
    .bindPopup('Namibia')
    .openPopup();

    L.marker([31.9522, 35.2332], {icon: myIcon}).addTo(this.map)
    .bindPopup('Palestine')
    .openPopup();

    L.marker([8.538, -80.7821], {icon: myIcon}).addTo(this.map)
    .bindPopup('Panama')
    .openPopup();

    L.marker([-5.0122, 141.347], {icon: myIcon}).addTo(this.map)
    .bindPopup('Papua New Guinea')
    .openPopup();

    L.marker([-23.4425, -58.4438], {icon: myIcon}).addTo(this.map)
    .bindPopup('Paraguay')
    .openPopup();

    L.marker([-9.19, -75.0152], {icon: myIcon}).addTo(this.map)
    .bindPopup('Peru')
    .openPopup();

    L.marker([12.8797, 121.774], {icon: myIcon}).addTo(this.map)
    .bindPopup('Phillipines')
    .openPopup();

    L.marker([39.3999, -8.2245], {icon: myIcon}).addTo(this.map)
    .bindPopup('Portugal')
    .openPopup();

    L.marker([46.1512, 14.9955], {icon: myIcon}).addTo(this.map)
    .bindPopup('Slovenia')
    .openPopup();

    L.marker([5.1512, 46.1996], {icon: myIcon}).addTo(this.map)
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

    L.marker([-8.8742, 125.7275], {icon: myIcon}).addTo(this.map)
    .bindPopup('Timor Leste')
    .openPopup();

    L.marker([1.3733, 32.2903], {icon: myIcon}).addTo(this.map)
    .bindPopup('Uganda')
    .openPopup();

    L.marker([48.3794, 31.1656], {icon: myIcon}).addTo(this.map)
    .bindPopup('Ukraine')
    .openPopup();

    L.marker([37.0902, -95.7129], {icon: myIcon}).addTo(this.map)
    .bindPopup('USA')
    .openPopup();

    L.marker([55.3781, -3.4360], {icon: myIcon}).addTo(this.map)
    .bindPopup('UK')
    .openPopup();

    L.marker([6.4238, -66.5897], {icon: myIcon}).addTo(this.map)
    .bindPopup('Venezuela')
    .openPopup();

    L.marker([14.0583, 108.2772], {icon: myIcon}).addTo(this.map)
    .bindPopup('Vietnam')
    .openPopup();
    tiles.addTo(this.map);

  }

}
