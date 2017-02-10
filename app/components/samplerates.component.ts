import { Component } from '@angular/core';
//import { MDL } from './MaterialDesignLiteUpgradeElement';

declare var __moduleName: string;

@Component({
    moduleId: __moduleName,
    selector: 'my-app',
    templateUrl: './samplerates.component.html',
    //directives: [MDL]
})
export class SampleRatesComponent {

    constructor() {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        var audioCtx = new AudioContext();
        // Older webkit/blink browsers require a prefix

        console.log(audioCtx.sampleRate);

    }
}