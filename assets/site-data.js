/*
 * 网站内容都在这里修改。无需数据库、Node.js 或构建工具。
 * 注意：此文件中的人物、文章和项目都是演示内容；上线前请替换为自己的真实资料。
 * 将 github 设置为完整的 GitHub 个人主页地址后，页脚会自动显示链接。
 */
window.SITE_DATA = {
  site: {
    brand: 'YOUR SPACE',
    personName: '你的名字',
    avatarText: 'YOU',
    role: '开发者 · 记录者 · 终身学习者',
    heroDescription: '你好，这是我的个人空间。分享技术探索、开发中的作品，以及那些值得被记录的想法。',
    about: '我喜欢把脑海中的想法变成真正可用的东西：可能是一个小工具、一段代码，也可能只是对一个问题的深入思考。这里是作品集，也是持续更新的公开笔记。',
    skills: ['Web 开发', '开源技术', '游戏创作', '学习笔记', '持续探索'],
    github: ''  // 例如 'https://github.com/your-username'；留空则隐藏
  },
  posts: [
    {
      slug: 'hello-github-pages',
      category: '技术随笔',
      date: '2026-11-04',
      readMinutes: 5,
      title: '从一个想法，到真正上线的个人网站',
      excerpt: '为什么我想拥有一个属于自己的小站？从页面设计到 GitHub Pages 部署，记录一次简单却完整的实践。',
      visual: 'violet',
      visualWord: 'HELLO / WORLD',
      featured: true,
      content: [
        {type: 'p', text: '互联网的信息更新得太快了。收藏夹越来越长，真正属于自己的记录却不一定越来越多。于是我想，或许可以有一个安静的角落，用来存放代码、想法和作品。'},
        {type: 'h2', text: '为什么是一个独立网站？'},
        {type: 'p', text: '社交平台适合交流，但个人网站更像是长期整理的书架。文章按照自己的方式归档，项目可以有完整的来龙去脉，界面也能自由设计。'},
        {type: 'quote', text: '网站不必一开始就很完整。让它上线，再慢慢迭代。'},
        {type: 'h2', text: '选择 GitHub Pages'},
        {type: 'p', text: '对于一个以文章和项目展示为主的静态网站，GitHub Pages 是轻量的选择：HTML、CSS 和 JavaScript 就足够了，不需要维护服务器。'},
        {type: 'list', items: ['先完成一个可以浏览的首页。', '准备一套易于修改的文章和项目数据。', '使用 GitHub 仓库管理版本。', '启用 GitHub Pages，让每次更新能够自动发布。']},
        {type: 'h2', text: '以后还会增加什么？'},
        {type: 'p', text: '可能是专题文章、开发日志，也可能是一些小工具。比起一次性完成所有功能，我更希望这个网站能够持续生长。'},
        {type: 'callout', text: '这是一篇演示文章。请在 assets/site-data.js 中换成你自己的内容。'}
      ]
    },
    {
      slug: 'personal-knowledge-system',
      category: '学习记录',
      date: '2026-10-27',
      readMinutes: 4,
      title: '我的知识整理方法：从碎片到体系',
      excerpt: '比起收藏更多资料，我更关心如何把碎片化信息变成能够反复使用的知识。',
      visual: 'mint',
      visualWord: 'IDEAS / NOTES',
      content: [
        {type: 'p', text: '记笔记并不等于掌握知识。最常见的情况是：资料存了很多，却很少再打开。对我而言，一个有用的知识系统，首先要足够简单。'},
        {type: 'h2', text: '先记录，再整理'},
        {type: 'p', text: '看到有价值的东西，先快速写下出处和自己的理解；等到需要使用时，再将它整理为可以直接实践的步骤。'},
        {type: 'list', items: ['用一句话概括核心问题。', '记录验证方法，而不仅仅是结论。', '把相关笔记连接到一个主题。', '定期删除不再有价值的信息。']},
        {type: 'h2', text: '让知识产生输出'},
        {type: 'p', text: '写一篇解释、做一个小项目、帮助别人解决一个问题，都能够检验自己是否真正理解了内容。这个博客就是我练习输出的场所。'},
        {type: 'callout', text: '这是一篇演示文章。请在 assets/site-data.js 中换成你自己的内容。'}
      ]
    },
    {
      slug: 'pixel-game-devlog',
      category: '项目日志',
      date: '2026-10-18',
      readMinutes: 6,
      title: '像素游戏开发笔记：让世界开始回应玩家',
      excerpt: '从一张地图到能够交互的小世界，聊聊游戏原型里那些容易忽略的细节。',
      visual: 'orange',
      visualWord: 'PLAY / CREATE',
      content: [
        {type: 'p', text: '游戏开发最有趣的瞬间，并不是把画面堆得多复杂，而是第一次看到角色与世界产生联系：一个按钮、一扇门，或者一段简短对话。'},
        {type: 'h2', text: '先搭建最小闭环'},
        {type: 'p', text: '我会先让角色能够移动、碰撞、触发交互，再逐步加入任务和反馈。这样每增加一个功能，都能直接检验它是否有趣。'},
        {type: 'list', items: ['保持移动与操作的响应一致。', '将可交互对象的逻辑尽量复用。', '先验证玩法，再替换正式美术资源。', '给每个重要操作明确的视觉或声音反馈。']},
        {type: 'h2', text: '从原型走向作品'},
        {type: 'p', text: '当基础操作稳定之后，真正的挑战会变成节奏、关卡设计和内容管理。小步迭代，可以让这些复杂问题更容易被发现。'},
        {type: 'callout', text: '这是一篇演示文章。请在 assets/site-data.js 中换成你自己的内容。'}
      ]
    },
    {
      slug: 'notes-on-everyday-life',
      category: '随想',
      date: '2026-10-08',
      readMinutes: 3,
      title: '给日常留一点记录的空间',
      excerpt: '不是每个想法都需要变成作品。有些瞬间，值得被简单地记下来。',
      visual: 'blue',
      visualWord: 'SLOW / DOWN',
      content: [
        {type: 'p', text: '常常觉得，时间过得很快。一些当时清晰的想法，如果没有及时记录，过不了多久就只剩下模糊的印象。'},
        {type: 'h2', text: '记录无需宏大'},
        {type: 'p', text: '可以是一本书带来的启发，可以是解决问题时的新方法，也可以是今天学到的一个小知识点。重要的是让这些微小的积累有一个去处。'},
        {type: 'quote', text: '缓慢但持续地更新，也是一种前进。'},
        {type: 'p', text: '所以这里不仅会有技术和项目，也会留给生活与思考一些位置。'},
        {type: 'callout', text: '这是一篇演示文章。请在 assets/site-data.js 中换成你自己的内容。'}
      ]
    }
  ],
  projects: [
    {
      number: '01',
      icon: '◈',
      title: 'Pixel Journey',
      subtitle: '像素冒险游戏原型',
      description: '从角色移动、场景交互到任务系统，探索如何构建一个有温度的像素世界。',
      tags: ['Game Dev', 'Godot', 'Prototype'],
      visual: 'purple',
      status: '演示项目',
      url: ''  // 可填写 GitHub 仓库或演示网站地址；留空时不显示外链
    },
    {
      number: '02',
      icon: '⌘',
      title: 'Knowledge Base',
      subtitle: '个人知识整理工具',
      description: '一个轻量、可搜索的知识收集实验，把零散笔记组织成容易再次找到的内容。',
      tags: ['Web', 'Notes', 'Search'],
      visual: 'cyan',
      status: '演示项目',
      url: ''
    },
    {
      number: '03',
      icon: '✳',
      title: 'Open Source Radar',
      subtitle: '开源项目观察站',
      description: '用简单的列表和分类记录有意思的开源工具，关注技术方案和实际使用场景。',
      tags: ['Open Source', 'Tools', 'Ideas'],
      visual: 'amber',
      status: '演示项目',
      url: ''
    }
  ]
};
