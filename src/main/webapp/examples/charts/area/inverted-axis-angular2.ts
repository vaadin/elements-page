import {Component} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  selector: 'my-area-chart-inverted-axis-component',
  template: `
  <vaadin-area-chart id="inverted-axes">
    <chart inverted="true"></chart>
    <chart-title>Average fruit consumption during one week</chart-title>
    <legend layout="vertical" align="right" vertical-align="top" x="-150" y="100" floating="true">
    </legend>
    <x-axis>
      <categories>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
      </categories>
    </x-axis>
    <y-axis min="0">
      <title>Number of units</title>
      <labels formatter="function () { return this.value; }"></labels>
    </y-axis>
    <tooltip shared="true" value-suffix="units">
    </tooltip>
    <plot-options>
      <areaspline fill-opacity="0.5">
      </areaspline>
    </plot-options>
    <data-series name="John">
      <data>3, 4, 3, 5, 4, 10, 12</data>
    </data-series>
    <data-series name="Jane">
      <data>1, 3, 4, 3, 3, 5, 4</data>
    </data-series>
  </vaadin-area-chart>
  `,
  directives: [ PolymerElement('vaadin-area-chart') ]
})

export class MyAreaChartInvertedAxisComponent {

}
