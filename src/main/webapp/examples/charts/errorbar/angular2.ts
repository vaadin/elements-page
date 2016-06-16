import {Component} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  selector: 'my-errorbar-chart-basic-component',
  template: `
  <vaadin-errorbar-chart id="error-bar">
    <chart-title>Temperature vs Rainfall</chart-title>
    <x-axis>
      <categories>Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</categories>
    </x-axis>
    <y-axis>
      <labels format="{value} C">
        <style color="#EC6464"></style>
      </labels>
      <title text="Temperature">
        &lt;style color="#EC6464"&gt;&lt;/style&gt;
      </title>
    </y-axis>
    <y-axis opposite="true">
      <labels format="{value} mm">
        <style color="#3090F0"></style>
      </labels>
      <title text="Rainfall">
        &lt;style color="#3090F0"&gt;&lt;/style&gt;
      </title>
    </y-axis>
    <tooltip shared="true"></tooltip>
    <plot-options>
      <column>
        <tooltip point-format="<span style='font-weight: bold; color: {series.color}'>{series.name}</span>: <b>{point.y:.1f} mm</b>"></tooltip>
      </column>
      <errorbar>
        <tooltip point-format=" (error range: {point.low}-{point.high} mm)<br/>"></tooltip>
      </errorbar>
      <spline>
        <tooltip point-format="<span style='font-weight: bold; color: {series.color}'>{series.name}</span>: <b>{point.y:.1f}C</b>"></tooltip>
      </spline>
    </plot-options>
    <data-series name="Rainfall" type="column" y-axis="1">
      <data>
        49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4
      </data>
    </data-series>

    <data-series name="Rainfall error" y-axis="1">
      <data>
        [48, 51], [68, 73], [92, 110], [128, 136], [140, 150], [171, 179], [135, 143], [142, 149], [204, 220], [189, 199], [95, 110], [52, 56]
      </data>
    </data-series>

    <data-series name="Temperature" type="spline">
      <data>
        7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6
      </data>
    </data-series>
  </vaadin-errorbar-chart>
  `,
  directives: [ PolymerElement('vaadin-errorbar-chart') ]
})

export class MyErrorbarChartBasicComponent {
}
