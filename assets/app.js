(() => {
  'use strict';
  const data = window.SITE_DATA;
  if (!data) return;
  const { site, posts, projects } = data;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const node = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };
  const formatDate = date => {
    const [year, month, day] = date.split('-');
    return `${year}.${month}.${day}`;
  };
  const validWebLink = url => {
    try { return ['https:', 'http:'].includes(new URL(url).protocol); }
    catch { return false; }
  };

  // 主题：本地存储失效时仍可使用。
  let storedTheme = null;
  try { storedTheme = localStorage.getItem('site-theme'); } catch (_) {}
  const preferredTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
  const setTheme = theme => {
    document.documentElement.dataset.theme = theme;
    $$('.theme-icon').forEach(icon => { icon.textContent = theme === 'dark' ? '☼' : '☾'; });
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b1020' : '#f6f8fd');
    try { localStorage.setItem('site-theme', theme); } catch (_) {}
  };
  setTheme(preferredTheme);
  $$('.theme-toggle').forEach(button => button.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  }));

  // 页面共用信息。
  $$('[data-brand]').forEach(el => { el.textContent = site.brand; });
  if ($('[data-person-name]')) $('[data-person-name]').textContent = site.personName;
  if ($('[data-person-role]')) $('[data-person-role]').textContent = site.role;
  if ($('[data-avatar]')) $('[data-avatar]').textContent = site.avatarText;
  if ($('[data-hero-description]')) $('[data-hero-description]').textContent = site.heroDescription;
  if ($('[data-about-text]')) $('[data-about-text]').textContent = site.about;
  if ($('#copyright')) $('#copyright').textContent = `© ${new Date().getFullYear()} ${site.personName}`;
  if ($('#skill-tags')) site.skills.forEach(skill => $('#skill-tags').append(node('span', 'skill-tag', skill)));
  const githubLink = $('#github-link');
  if (githubLink && validWebLink(site.github)) { githubLink.href = site.github; githubLink.hidden = false; }
  document.title = document.body.dataset.page === 'home' ? `${site.personName} · 个人空间` : `文章 · ${site.personName}`;

  // 移动端导航。
  const menu = $('#mobile-nav');
  const menuToggle = $('.mobile-menu-toggle');
  if (menu && menuToggle) {
    menuToggle.addEventListener('click', () => {
      const open = menu.hidden;
      menu.hidden = !open;
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? '关闭菜单' : '展开菜单');
      $('.menu-icon').textContent = open ? '✕' : '☰';
    });
    $$('a', menu).forEach(link => link.addEventListener('click', () => {
      menu.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', '展开菜单');
      $('.menu-icon').textContent = '☰';
    }));
  }

  if (document.body.dataset.page === 'home') {
    const articleGrid = $('#article-grid');
    const filterBar = $('#article-filters');
    const searchInput = $('#article-search');
    let activeFilter = '全部';
    const categories = ['全部', ...new Set(posts.map(post => post.category))];

    categories.forEach(category => {
      const button = node('button', 'filter-button' + (category === activeFilter ? ' active' : ''), category);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(category === activeFilter));
      button.addEventListener('click', () => {
        activeFilter = category;
        $$('.filter-button', filterBar).forEach(btn => {
          const selected = btn.textContent === category;
          btn.classList.toggle('active', selected);
          btn.setAttribute('aria-pressed', String(selected));
        });
        renderPosts();
      });
      filterBar.append(button);
    });

    const createPostCard = (post, index) => {
      const card = node('a', 'article-card');
      card.href = `./article.html?slug=${encodeURIComponent(post.slug)}`;
      const poster = node('div', `article-poster poster-${post.visual}`);
      poster.append(node('span', 'poster-code', `// ${String(index + 1).padStart(2, '0')}`));
      poster.append(node('span', 'poster-word', post.visualWord));
      poster.append(node('span', 'poster-glyph', '✳'));
      const body = node('div', 'article-card-body');
      const meta = node('div', 'article-meta');
      meta.append(node('span', 'article-category', post.category));
      meta.append(node('span', 'meta-divider', '·'));
      meta.append(node('time', '', formatDate(post.date)));
      const title = node('h3', 'article-title', post.title);
      const excerpt = node('p', 'article-excerpt', post.excerpt);
      const bottom = node('div', 'article-card-bottom');
      bottom.append(node('span', '', `${post.readMinutes} 分钟阅读`));
      bottom.append(node('span', 'card-arrow', '↗'));
      body.append(meta, title, excerpt, bottom);
      card.append(poster, body);
      return card;
    };

    const renderPosts = () => {
      const search = (searchInput?.value || '').toLocaleLowerCase().trim();
      const filtered = posts.filter(p => (activeFilter === '全部' || p.category === activeFilter) &&
        `${p.title} ${p.excerpt} ${p.category}`.toLocaleLowerCase().includes(search));
      articleGrid.replaceChildren(...filtered.map(createPostCard));
      $('#article-empty').hidden = filtered.length > 0;
    };
    searchInput?.addEventListener('input', renderPosts);
    renderPosts();

    const projectGrid = $('#project-grid');
    projects.forEach(project => {
      const card = node('article', `project-card project-${project.visual}`);
      const top = node('div', 'project-card-top');
      top.append(node('span', 'project-index', `PROJECT / ${project.number}`));
      top.append(node('span', 'project-icon', project.icon));
      const visual = node('div', 'project-visual');
      visual.append(node('span', 'project-visual-icon', project.icon));
      visual.append(node('span', 'project-visual-grid'));
      const detail = node('div', 'project-detail');
      detail.append(node('span', 'project-status', project.status));
      detail.append(node('h3', '', project.title));
      detail.append(node('p', 'project-subtitle', project.subtitle));
      detail.append(node('p', 'project-description', project.description));
      const tags = node('div', 'project-tags');
      project.tags.forEach(tag => tags.append(node('span', '', tag)));
      detail.append(tags);
      if (typeof project.articleSlug === 'string' && posts.some(post => post.slug === project.articleSlug)) {
        const link = node('a', 'project-link', '了解项目 ↗');
        link.href = `./article.html?slug=${encodeURIComponent(project.articleSlug)}`;
        detail.append(link);
      }
      if (validWebLink(project.url)) {
        const link = node('a', 'project-link', '查看项目 ↗');
        link.href = project.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        detail.append(link);
      }
      card.append(top, visual, detail);
      projectGrid.append(card);
    });

    // 用户向下滚动时标记当前主导航区域。
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          $$('.desktop-nav .nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        });
      }, { rootMargin: '-25% 0px -60% 0px' });
      ['home', 'about', 'articles', 'projects'].forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });
    }
  }

  if (document.body.dataset.page === 'article') {
    const slug = new URLSearchParams(window.location.search).get('slug');
    const post = posts.find(p => p.slug === slug);
    const content = $('#article-content');
    if (!post) {
      const box = node('div', 'not-found');
      box.append(node('div', 'not-found-code', '404'));
      box.append(node('h1', '', '没有找到这篇文章'));
      box.append(node('p', '', '文章可能已被移除，或者链接有误。'));
      const back = node('a', 'button button-primary', '返回首页 ↗');
      back.href = './';
      box.append(back);
      content.append(box);
    } else {
      document.title = `${post.title} · ${site.personName}`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', post.excerpt);
      const head = node('header', 'post-header');
      const kicker = node('div', 'post-kicker');
      kicker.append(node('span', 'article-category', post.category));
      kicker.append(node('span', '', '·'));
      const time = node('time', '', formatDate(post.date));
      time.dateTime = post.date;
      kicker.append(time);
      kicker.append(node('span', '', '·'));
      kicker.append(node('span', '', `${post.readMinutes} 分钟阅读`));
      head.append(kicker, node('h1', '', post.title), node('p', 'post-intro', post.excerpt));
      const banner = node('div', `post-banner poster-${post.visual}`);
      banner.append(node('span', 'poster-word', post.visualWord));
      banner.append(node('span', 'poster-glyph', '✳'));
      const article = node('article', 'post-body');
      post.content.forEach(block => {
        if (block.type === 'p') article.append(node('p', '', block.text));
        if (block.type === 'h2') article.append(node('h2', '', block.text));
        if (block.type === 'h3') article.append(node('h3', '', block.text));
        if (block.type === 'quote') article.append(node('blockquote', '', block.text));
        if (block.type === 'callout') article.append(node('aside', 'post-callout', block.text));
        if (block.type === 'list' && Array.isArray(block.items)) {
          const list = node('ul', 'post-list');
          block.items.forEach(item => list.append(node('li', '', item)));
          article.append(list);
        }
        if (block.type === 'code') {
          const pre = node('pre', 'post-code');
          pre.append(node('code', '', block.text));
          article.append(pre);
        }
      });
      content.append(head, banner, article);
    }
  }
})();
