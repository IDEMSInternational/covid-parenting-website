import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('membersmaptemp', {read: ViewContainerRef})
  private membersviewcontainerref: ViewContainerRef;

  constructor(private vcref: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

 async loadMembersComponent(){
   this.vcref.clear();
   const {MembersMapComponent} = await import('./members-map/members-map.component')
  // let membersmapcomp = this.vcref.createComponent(this.cfr.resolveComponentFactory(MembersMapComponent));
  this.membersviewcontainerref.createComponent(this.cfr.resolveComponentFactory(MembersMapComponent));
  }
  
}
