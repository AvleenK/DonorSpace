import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.css']
})
export class NavBarComponentComponent implements OnInit {
  

    constructor() { }

    registerationModal(){
        var modal = document.getElementById('regModal');
        modal.style.display = "block";

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    requestModal() {
        var modal = document.getElementById('reqModal');
        modal.style.display = "block";

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    ngOnInit() {
        var regBtn = document.getElementById("regBtn");
        regBtn.addEventListener("click", (e:Event) => this.registerationModal());
        
        var reqBtn = document.getElementById("reqBtn");
        reqBtn.addEventListener("click", (e:Event) => this.requestModal());
    }

}
