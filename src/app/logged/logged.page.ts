import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.page.html',
  styleUrls: ['./logged.page.scss'],
})
export class LoggedPage implements OnInit {

  cuenta;
  usuario;
  constructor(private route: ActivatedRoute, public http: Http) { }

  ngOnInit() {
  var url = "http://localhost:64908/Service2.svc/getUSR";
  

  	try{
	  	this.cuenta = this.route.snapshot.paramMap.get('cuenta');

	  	url += '?U={%22cuenta%22:%22' + this.cuenta + '%22}'; 
	  	
	  	this.http.get(url).subscribe((response) => {
	  		this.usuario=JSON.parse(response['_body']);
		});

  	}catch(error){
  		console.log(error);
  	}
  	
  }

}
