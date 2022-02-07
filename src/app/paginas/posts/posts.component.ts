import { Component, OnInit } from '@angular/core';
import { DatesService } from 'src/app/servicio/dates.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor(private dataService: DatesService) { }

  ngOnInit() {
    this.mensajes=this.dataService.getPosts()
    // this.dataService.getPosts().subscribe((posts :any): void => {console.log(posts);
    // this.mensajes = posts;
  // });
  }

}
