import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const pathname = location.url.pathname;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Statement of Faith', path: '/statement-of-faith' },
    { name: 'Church History', path: '/church-history' },
    { name: 'Contact', path: '/contact' },
  ];

  const isMenuOpen = useSignal(false);

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
  });

  const closeMenu = $(() => {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  });

  return (
    <header class="site-header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <Link href="/" class="logo-link">
              <span class="logo-text">Barrydale Christian Fellowship</span>
            </Link>
          </div>
          <nav class={`main-nav ${isMenuOpen.value ? 'is-active' : ''}`}>
            <ul class="nav-list">
              {links.map((link) => (
                <li key={link.path} class="nav-item">
                  <Link
                    href={link.path}
                    class={`nav-link ${
                      pathname === link.path ? 'active' : ''
                    }`}
                    onClick$={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div class="mobile-menu-toggle">
            <button class={`menu-button ${isMenuOpen.value ? 'is-active' : ''}`} onClick$={toggleMenu}>
              <span class="menu-icon"></span>
              <span class="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});
