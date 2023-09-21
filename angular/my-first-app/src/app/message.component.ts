import {Component} from '@angular/core'
@Component({
    selector: 's-message',
    template: `
        <h2>{{message}}</h2>
    `
})
export class MessageComponent{
    message: string = 'Default Message'
}