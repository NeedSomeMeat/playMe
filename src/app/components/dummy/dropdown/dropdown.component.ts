import {Component, Input, Output, EventEmitter, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'dropdown',
    styleUrls: ['./dropdown.component.less'],
    template: `
    <div class="btn-group open">
      <a class="btn btn-success dropdown-toggle" (click)="trigger()">
        {{marker}}
        <span class="caret"></span>
      </a>
      <ul class="dropdown-menu" *ngIf="expanded">
        <li *ngFor="let option of options">
            <a [class.disabled]="option === marker" (click)="select(option)">
            {{option}}
            </a>
        </li>
       </ul>
    </div>
  `
})
export class Dropdown implements AfterViewInit, OnDestroy {
    @Input() options: Array<any> = [];
    @Output() selected: EventEmitter<any> = new EventEmitter();
    private expanded: boolean = false;
    private subscriber: any;
    private marker: string;

    constructor() {
        this.subscriber = this.selected.subscribe((type:string) => this.marker = type)
    }

    public ngAfterViewInit():void {
        this.selected.emit(this.options[0]);
    }

    public ngOnDestroy():void {
        this.subscriber.unsubscribe();
    }

    private trigger():void {
        this.expanded = !this.expanded;
    }

    private select(target:string):void {
        this.selected.emit(target);
        this.trigger();
    }
}