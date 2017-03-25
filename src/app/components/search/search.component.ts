import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit{
    users: User[];
    request: number = 0;
    done: number = 0;
    QUALITIES = [
      {value: 1, name:'Ligth'},
      {value: 2, name:'Medium'},
      {value: 3, name:'High'}
    ];

    constructor(private spotifyService:SpotifyService,
                private userService:UserService){}

    ngOnInit(): void {
      this.getUsers();
      this.sortUsers();
    }

    searchMusic(user: User): void{
      this.request += 1;
      this.spotifyService.searchMusic(user.search)
          .subscribe(res => {
            setTimeout(()=>{
              user.results = res.artists.items;
              this.done += 1;
            }, 0)
          })
    }

    getUsers(): void{
      this.userService.getUsers().subscribe(res => {
        this.users = res;
      })
    }

    run(): void{
      for(let user of this.users){
        this.searchMusic(user);
      }
    }

    sortUsers(e?): void{
      this.users.sort(this.sort);
    }

    sort(from, to){
      let value = 0;
      if(from.register && !to.register){
        value -= 1;
      }
      if(!from.register && to.register){
        value += 10;
      }

      if(from.quality < to.quality){
        value += 1;
      }

      if(from.quality > to.quality){
        value -= 1
      }

      return value
    }
}


