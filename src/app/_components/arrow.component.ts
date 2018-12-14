import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ArrowService} from '../_services';
import { ArrowDialogComponent } from './arrow-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'arrow',
  templateUrl: 'arrow.component.html'
})

export class ArrowComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  hidden = false;
  up = false;

  constructor(private arrowService: ArrowService,
              private dialog: MatDialog) { }

  flip() {
    this.arrowService.flip();
  }

  ngOnInit() {
    this.subscription = this.arrowService.getState().subscribe(up => {
      this.up = up;
      this.dialog.open(ArrowDialogComponent, {data: {up: this.up, hidden: this.hidden}});
    });

    this.onResize(window.innerWidth);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onResize(innerWidth) {
    if (innerWidth < 600) {
      this.show();
    } else {
      this.hide();
    }
  }

  private hide() {
    this.hidden = true;
  }

  private show() {
    this.hidden = false;
  }
}
