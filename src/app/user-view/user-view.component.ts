import { Component, OnInit, Input } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css' , '../match-list/match-list.component.css']
})
export class UserViewComponent implements OnInit {

  @Input() match_list: any
  @Input() selecteduser: any;

  constructor(private appService: AppService) { }

  ngOnInit() {}

}
