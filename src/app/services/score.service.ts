import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private mqttService: MqttService) { }

  score(): Observable<IMqttMessage> {
    return this.mqttService.observe('topic/goal');
  }

  mockScoreFromMqtt(score: Score): void {
    this.mqttService.unsafePublish('topic/goal', JSON.stringify(score));
  }
}
