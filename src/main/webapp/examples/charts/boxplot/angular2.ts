import {Component} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  selector: 'my-boxplot-chart-basic-component',
  template: `
  <vaadin-boxplot-chart id="box-plot">
  <chart-title>Vaadin Charts Box Plot Example</chart-title>
  <legend enabled="false"></legend>
  <x-axis>
    <categories>1,2,3,4,5</categories>
    <title>Experiment No.</title>
  </x-axis>
  <y-axis>
    <title>Observations</title>
    <plot-lines value="932" color="red" width="1">
      <label align="center" text="Theoretical mean: 932'">
        <style color="gray"></style>
      </label>
    </plot-lines>
  </y-axis>

  <plot-options>
    <boxplot>
      <tooltip header-format="<em>Experiment No {point.key}</em><br/>"></tooltip>
    </boxplot>
    <scatter>
      <marker fill-color="white" line-width="1" line-color="#3090F0"></marker>
      <tooltip point-format="Observation: {point.y}"></tooltip>
    </scatter>
  </plot-options>
  <data-series name="Observations">
    <data>
      [760, 801, 848, 895, 965], [733, 853, 939, 980, 1080], [714, 762, 817, 870, 918], [724, 802, 806, 871, 950], [834, 836, 864, 882, 910]
    </data>
  </data-series>
  <data-series name="Outlier" type="scatter">
    <color>#3090F0</color>
    <data>
      [0, 644], [4, 718], [4, 951], [4, 969]
    </data>
  </data-series>
</vaadin-boxplot-chart>
  `,
  directives: [ PolymerElement('vaadin-boxplot-chart') ]
})

export class MyBoxplotChartBasicComponent {

}
