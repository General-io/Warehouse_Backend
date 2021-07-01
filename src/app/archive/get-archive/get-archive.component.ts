import { Component, OnInit } from '@angular/core';
import { Archive } from 'src/app/Archive';
import { ArchiveServiceService } from 'src/app/archive-service.service';

@Component({
  selector: 'app-get-archive',
  templateUrl: './get-archive.component.html',
  styleUrls: ['./get-archive.component.scss']
})
export class GetArchiveComponent implements OnInit {

  archives : Archive[];

  constructor(private archiveService: ArchiveServiceService) { }

  ngOnInit(): void {
    this.archiveService.getAllItemFromArchive().subscribe(data => {
      this.archives = data;
    });

  }

  fetchData() {
    this.archiveService.getAllItemFromArchive().subscribe(data =>{
        this.archives = data;
    });
  }
  

  searchValue: string;
  quantity: number;

}
