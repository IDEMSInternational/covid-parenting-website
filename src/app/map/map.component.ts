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

  @ViewChild('fundersmaptemp', {read: ViewContainerRef})
  private fundersviewcontainerref: ViewContainerRef;

  @ViewChild('storiesmaptemp', {read: ViewContainerRef})
  private storiesviewcontainerref: ViewContainerRef;

  constructor(private vcref: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    localStorage.setItem('foo', 'stories')
    localStorage.setItem('bar', 'members')
    localStorage.setItem('foo-bar', 'funders')
    this.loadStoriesComponent();  
  }

  async loadStoriesComponent(){
    if(localStorage.getItem('foo')){
      const {StoriesMapComponent} = await import('./stories-map/stories-map.component')
      this.storiesviewcontainerref.createComponent(this.cfr.resolveComponentFactory(StoriesMapComponent));
    }
   else{
    this.vcref.clear();
   }
  }

 async loadMembersComponent(){
  if(localStorage.getItem('bar')){
   const {MembersMapComponent} = await import('./members-map/members-map.component')
  // let membersmapcomp = this.vcref.createComponent(this.cfr.resolveComponentFactory(MembersMapComponent));
    this.membersviewcontainerref.createComponent(this.cfr.resolveComponentFactory(MembersMapComponent));
  }
  else{
    this.vcref.clear();
  }
  }

  async loadFundersComponent(){
    if(localStorage.getItem('foo-bar')){
      const {FundersMapComponent} = await import('./funders-map/funders-map.component')
      this.fundersviewcontainerref.createComponent(this.cfr.resolveComponentFactory(FundersMapComponent));
    } 
    else{
      this.vcref.clear();
    }
   }  
}
