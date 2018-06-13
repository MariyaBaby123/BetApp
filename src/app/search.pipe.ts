import { NgModule, Pipe, PipeTransform } from '@angular/core';
import {User} from './leader-board/user.model';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(userlist: User[], searchText: string): any[] {
    if ( !userlist) {
      return [];
    }
    if ( !searchText) {
      return userlist;
    }
    searchText = searchText.toLowerCase();
    return userlist.filter( it => {
      return it.userName.toLowerCase().includes(searchText);
    });

  }
}


