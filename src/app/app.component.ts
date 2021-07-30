import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [
    {
      url: 'https://s2.glbimg.com/sjbIwYbTyJMCcO4JTs_yOSn-SBU=/620x480/e.glbimg.com/og/ed/f/original/2018/11/06/wave-3473335_1920.jpg',
      dsc: 'Ocean'
    },
    {
      url: 'https://ensia.com/wp-content/uploads/2017/06/feature_DeepOcean_mainNew-760x378.jpg',
      dsc: 'Deep Ocean'
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5al2-xvEjkkrkC2FnNKRxiJFdm9FzyXId7p_MYJrhmRC3hjWu9y9RUngNenIFOArQTS4&usqp=CAU',
      dsc: 'Ominous Ocean'
    }
  ]
}
