import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityComponent } from './velocity.component';
import { VelocityService } from '../../services/velocity.service';
import { MatCardModule, MatIconModule, MatMenuModule } from '@angular/material';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';

describe('VelocityComponent', () => {
  let component: VelocityComponent;
  let fixture: ComponentFixture<VelocityComponent>;
  const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
    hostname: 'localhost',
    port: 9001,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelocityComponent ],
      imports: [MatCardModule, MatMenuModule, MatIconModule, MqttModule.forRoot(MQTT_SERVICE_OPTIONS)],
      providers: [VelocityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelocityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display fixed velocity from service', () => {
    component._velocity = 46.3;

    fixture.detectChanges();
    const cardContent = fixture.nativeElement.querySelector('.dashboard-card-content');
    const velocity = cardContent.querySelector('h1').textContent;

    expect(velocity).toBe('46.3 km/h');
  });
});
