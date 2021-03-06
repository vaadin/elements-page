import {Component} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  selector: 'my-pyramid-chart-basic-component',
  template: `
  <vaadin-pyramid-chart id="pyramid">
    <chart-title>Sales pyramid</chart-title>
    <plot-options>
      <series>
        <data-labels enabled="true" format="<b>{point.name}</b> ({point.y:.0f})" color="black" soft-connector="true">
        </data-labels>
      </series>
    </plot-options>
    <legend enabled="false"></legend>
    <data-series name="Unique users">
      <data>
        ['Website visits',   15654],
        ['Downloads',       4064],
        ['Requested price list', 1987],
        ['Invoice sent',    976],
        ['Finalized',    846]
      </data>
    </data-series>
  </vaadin-pyramid-chart>
  `,
  directives: [ PolymerElement('vaadin-pyramid-chart') ]
})

export class MyPyramidChartBasicComponent {
}
