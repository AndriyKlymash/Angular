import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName:string;

  constructor(private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
    this.dataTransfer.store.subscribe(value => this.userName=value)
  }
}
