import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'lib-blabla',
  standalone: true,
  imports: [],
  templateUrl: './blabla.component.html',
  styleUrl: './blabla.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlablaComponent {
  value: InputSignal<string> = input.required<string>();
}
