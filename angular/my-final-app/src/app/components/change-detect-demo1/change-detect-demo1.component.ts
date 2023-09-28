import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detect-demo1',
  templateUrl: './change-detect-demo1.component.html',
  styleUrls: ['./change-detect-demo1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectDemo1Component {
  @Input('data') data: string[] = [];

}
