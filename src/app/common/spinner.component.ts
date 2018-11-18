import { Component, Input, OnInit } from '@angular/core';

@Component ({
    selector:'app-spinner',
    template: `<i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x"></i>`,
})
export class SpinnerComponent implements OnInit{
    @Input() visible;
    ngOnInit() {
        console.log(this.visible)
    }
}

