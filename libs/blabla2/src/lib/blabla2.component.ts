import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'lib-blabla2',
  standalone: true,
  imports: [],
  templateUrl: './blabla2.component.html',
  styleUrl: './blabla2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Blabla2Component {
  value: InputSignal<string> = input.required<string>();
}
