import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
    isCollapsed = signal(true);

  toggleMenu() { this.isCollapsed.update(v => !v); }
  closeMenu() { this.isCollapsed.set(true); }
}
