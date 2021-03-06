import {Component} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  selector: 'my-column-chart-3d-component',
  template: `
  <vaadin-column-chart class="chart">
  <chart-title>Monthly Average Rainfall</chart-title>
  <subtitle>Source: WorldClimate.com</subtitle>

  <x-axis>
    <categories>Jan, Feb, Mar, Apr</categories>
  </x-axis>

  <y-axis min="0">
    <title>Rainfall (mm)</title>
  </y-axis>

  <tooltip formatter="function() {return this.x +': ' + this.y + ' mm';}"></tooltip>

  <plot-options>
    <column point-padding="0.2" border-width="0" group-z-padding="10">
    </column>
  </plot-options>

  <chart>
    <options3d enabled="true" alpha="5" beta="30" depth="100" view-distance="200">
    </options3d>
  </chart>

  <data-series name="Tokyo">
    <data>49.9, 71.5, 106.4, 129.2</data>
  </data-series>
  <data-series name="New York">
    <data>83.6, 78.8, 98.5, 93.4</data>
  </data-series>
  <data-series name="London">
    <data>48.9, 38.8, 39.3, 41.4</data>
  </data-series>
  <data-series name="Berlin">
    <data>42.4, 33.2, 34.5, 39.7</data>
  </data-series>
</vaadin-column-chart>
  `,
  directives: [ PolymerElement('vaadin-column-chart') ]
})

export class MyColumnChart3dComponent {

}
