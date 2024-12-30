import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  imports: [CommonModule],
  template: `<h2>Child 1 Component</h2>`
})
export class Child1Component {}
