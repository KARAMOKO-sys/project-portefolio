import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// ❌ RouterOutlet n'est plus nécessaire → supprimé

@Component({
  selector: 'app-root',
  // ✅ imports retiré car aucun module n'est nécessaire ici
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
    host: { 'ngSkipHydration': '' }  // ← Ajoutez cette ligne
})
export class App implements OnInit {
  protected readonly title = signal('portfolio-karamoko');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.setupSmoothScroll());
      } else {
        this.setupSmoothScroll();
      }
    }
  }

  private setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = (anchor as HTMLAnchorElement).getAttribute('href');
        if (targetId && targetId !== '#') {
          const target = document.querySelector(targetId) as HTMLElement;
          if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
}