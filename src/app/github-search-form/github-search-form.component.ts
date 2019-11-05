import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-github-search-form',
  templateUrl: './github-search-form.component.html',
  styleUrls: ['./github-search-form.component.css']
})
export class GithubSearchFormComponent implements OnInit {
  @Output() emitSearch = new EventEmitter <any>()
  @Output() emitRepo = new EventEmitter <any> ()

  searchTerm:string;
  constructor() { }

  search(){
    this.emitSearch.emit(this.searchTerm);
  }

  repo(){
    this.emitRepo.emit(this.searchTerm);
  }


  ngOnInit() {
  }

}
