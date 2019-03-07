import { Component, OnInit } from '@angular/core';
import { VelocityService } from '../../services/velocity.service';
import { Velocity } from '../../models/velocity';

@Component({
  selector: 'app-velocity',
  templateUrl: './velocity.component.html',
  styleUrls: ['./velocity.component.scss']
})
export class VelocityComponent implements OnInit {
  _velocity: Velocity = {velocity: 0};

  constructor(private velocityService: VelocityService) { }

  ngOnInit() {
    this.velocityService.velocity().subscribe(velocity =>
      this._velocity = velocity
    );
  }

}