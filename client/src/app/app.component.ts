import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data)
    })
  }

}
