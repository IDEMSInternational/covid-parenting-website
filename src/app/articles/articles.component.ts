import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public strTitle: string = "";

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((paramMap) => {

      if (paramMap["articleTitle"]) {
        this.strTitle = paramMap["articleTitle"];
      }
    });

  }

  ngOnInit(): void {
  }

}
