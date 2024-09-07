import { Component,Inject, OnInit,PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.component.html',
  styleUrl: './starting.component.css'
})
export class StartingComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      this.typingEffect();
    }
    //this.typingEffect();
  }

  typingEffect() {
    const phrases = ['Developer', 'Designer', 'Creator'];
    let phraseIndex = 0;
    let letterIndex = 0;
    const typingElement = document.getElementById('typing') as HTMLElement;

    const type = () => {
      if (letterIndex < phrases[phraseIndex].length) {
        typingElement.textContent += phrases[phraseIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 200);
      } else {
        setTimeout(erase, 2000);
      }
    };

    const erase = () => {
      if (letterIndex > 0) {
        typingElement.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100);
      } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 200);
      }
    };

    type();
  }
}