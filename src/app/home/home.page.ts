import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  result:any = [];
  data: Observable<any>;
  username: string;
  password: string;

  constructor(public http1: HttpClient, public http: Http, private router: Router) {}

  login(){
  	
  	var url = "http://localhost:64908/Service2.svc/autUSR";

  	try{
	  	
	  	url += '?U={%22cuenta%22:%22' + this.username + '%22,%22password%22:%22' + this.password + '%22}'; 
	  	
	  	this.http.get(url).subscribe((response) => {
		    if(response['_body'] == 0){
		    	document.getElementById('answ')['type'] = "text";
		    	this.router.navigateByUrl('/logged/'+this.username);
		    }else{
		    	document.getElementById('answ')['type'] = "Readonly";
		    	document.getElementById('answ')['value'] = "Verificar usuario o contraseña";
		    }
		    
		});

  	}catch(error){
  		console.log("error");
  		console.log(error);
  	}
  }

  login2(){
  	try{
  		var headers = new Headers();
	    headers.append("Accept", 'application/json');
	    headers.append('Content-Type', 'application/json' );
	    const requestOptions = new RequestOptions({ headers: headers });

	    let postData = {
	        "cuenta": this.username,
	        "password": this.password
		}

		this.http.post("http://localhost:64908/Service2.svc/autUSR2", postData, requestOptions)
	      .subscribe(data => {
	        console.log(data['_body']);
	       }, error => {
	        console.log(error);
	      });
  	}catch(error){
  		console.log(error);
  	}
  }

  login3(){
  	try{
  		var body = '<?xml version="1.0"?><usuario><cuenta>'+this.username+'</cuenta><password>'+this.password+'</password></usuario>';
  		var invocation = new XMLHttpRequest();
  		var url = "http://localhost:64908/Service2.svc/autUSR2"
  		if(invocation)
	    {
	      invocation.open('POST', url, true);
	      invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
	      invocation.setRequestHeader('Content-Type', 'application/xml');
	      invocation.onreadystatechange = function () {
		        
		            console.log("asd");
		        
		    };
	      invocation.send(body); 
	    }else{
	    console.log("no invoc")
	    }
  	}catch(error){
  		console.log(error);
  	}
  }

}
