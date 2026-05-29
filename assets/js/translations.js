window.DOCS_TRANSLATIONS = {
  en: {
    common: {
      siteName: "Promoter Docs",
      siteTagline: "Clear guides for every promotion mode",
      logoAlt: "Promoter logo",
      menuLabel: "Open navigation",
      closeLabel: "Close navigation",
      mobileMenuTitle: "Navigate",
      mobileSections: {
        guide: "Guide",
        legal: "Legal"
      },
      navLabel: "Primary navigation",
      languageLabel: "Choose language",
      defaultSideTitle: "Simple to use",
      defaultSideText: "Every important feature has its own page, clear explanation, and direct link .",
      footerTitle: "Promoter Documentation",
      footerNote: "This site explains the product clearly for end users. Actual moderation, limits, and access still depend on the bot owner and current Telegram-side permissions.",
      languages: {
        en: "English",
        ru: "Русский",
        uk: "Українська",
        hi: "हिंदी"
      },
      nav: {
        home: "Overview",
        userPromotion: "User Promotion",
        groupPromotion: "Group Promotion",
        promoJoin: "Promo Join",
        picBroad: "Pic Broad",
        referral: "Referral",
        forceJoin: "Force Join",
        premium: "Premium",
        help: "Help",
        terms: "Terms",
        privacy: "Privacy"
      }
    },
    pages: {
      home: {
        metaTitle: "Overview",
        metaDescription: "Professional multilingual guide for the Promoter bot.",
        hero: {
          eyebrow: "Promoter Guide",
          title: "A polished guide for every growth workflow.",
          lead: "Learn how standard promotion, group promotion, Promo Join, referrals, premium tools, and admin-side features work without digging through raw bot commands.",
          pills: ["4 languages", "Separate links", "Fast help pages"],
          actions: [
            { href: "user-promotion.html", label: "Start With User Promotion", primary: true },
            { href: "help.html", label: "Open Help", primary: false }
          ],
          sidePanels: [
            { title: "For users", text: "Understand how to save a message, promote it, gain more reach, and use premium features properly." },
            { title: "For admins", text: "See how Force Join and group-side tools fit into moderation and audience growth." }
          ]
        },
        sections: [
          {
            type: "stats",
            title: "At a glance",
            intro: "The bot combines easy daily promotion with stronger advanced tools for users who need more reach.",
            items: [
              { value: "5+", title: "Daily standard promos", text: "Base user promotion starts free and grows with referral bonuses." },
              { value: "15 / 35", title: "Group targets", text: "Standard group promotion aims up to 15 groups, premium up to 35." },
              { value: "350", title: "Pic Broad reach", text: "Premium image broadcast can send a visual promo to a much larger audience." }
            ]
          },
          {
            type: "cards",
            title: "Main sections",
            intro: "Each topic has its own page so you can open or share exactly what you need.",
            columns: 2,
            items: [
              { kicker: "Core", title: "User Promotion", text: "How private saved content is sent to users inside the network." },
              { kicker: "Reach", title: "Group Promotion", text: "How the bot posts your saved message into available groups." },
              { kicker: "Gems", title: "Promo Join", text: "Advanced campaigns built around gems and join verification." },
              { kicker: "Media", title: "Pic Broad", text: "Premium-only image promotion with higher daily reach." },
              { kicker: "Growth", title: "Referral", text: "How invite links increase your daily standard promotion power." },
              { kicker: "Admin", title: "Force Join", text: "How group admins can require users to join channels before chatting." }
            ]
          },
          {
            type: "callout",
            title: "Built to reduce confusion.",
            text: "When users understand the feature flow before they start, support gets easier and promotion results get cleaner."
          }
        ]
      },
      userPromotion: {
        metaTitle: "User Promotion",
        metaDescription: "How user-to-user promotion works in Promoter.",
        hero: {
          eyebrow: "User to User",
          title: "How standard promotion works.",
          lead: "User Promotion is the quickest way to push a saved message or link to people inside the bot network.",
          pills: ["Private chat workflow", "Free daily access", "Referral boosts"],
          actions: [
            { href: "referral.html", label: "See Referral Bonuses", primary: true },
            { href: "help.html", label: "Need Help?", primary: false }
          ],
          sidePanels: [
            { title: "Best for", text: "Simple daily promotion when you want fast delivery without running a full campaign." }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Basic workflow",
            intro: "Most users only need three steps.",
            items: [
              { kicker: "Step 1", title: "Send content in private chat", text: "Your message should contain a link, username, or clear destination." },
              { kicker: "Step 2", title: "Confirm the content type", text: "If the bot asks about NSFW or normal content, answer correctly so delivery stays aligned with user settings." },
              { kicker: "Step 3", title: "Run /promote", text: "The bot sends your saved content and updates your remaining daily count." }
            ]
          },
          {
            type: "cards",
            title: "Why users choose it",
            intro: "It is the simplest promotion mode in the product.",
            items: [
              { kicker: "Fast", title: "No extra setup", text: "You do not need campaign tiers, target chats, or gem spending to use it." },
              { kicker: "Flexible", title: "Good for quick offers", text: "It works well for invite links, small updates, limited offers, and short calls to action." },
              { kicker: "Expandable", title: "Gets stronger over time", text: "Referrals can raise your daily promo allowance without changing the workflow." }
            ]
          }
        ]
      },
      groupPromotion: {
        metaTitle: "Group Promotion",
        metaDescription: "How group promotion works in Promoter.",
        hero: {
          eyebrow: "Group Reach",
          title: "Promote your content into groups.",
          lead: "Group Promotion takes your saved message and posts it to groups where promotion is currently enabled.",
          pills: ["15 groups standard", "35 groups premium", "Daily group limits"],
          actions: [
            { href: "premium.html", label: "Compare Premium", primary: true },
            { href: "help.html", label: "Open Help", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "How a run happens",
            intro: "The user flow is short, but the bot checks availability and limits in the background.",
            items: [
              { kicker: "Step 1", title: "Save content first", text: "The bot cannot run group promotion if your current message is empty." },
              { kicker: "Step 2", title: "Run /chatpromo", text: "The bot checks your access, ban status, daily usage, and group availability." },
              { kicker: "Step 3", title: "Wait for the summary", text: "After delivery, the bot reports how many groups received the message." }
            ]
          },
          {
            type: "cards",
            title: "Why this mode matters",
            intro: "This is the broader public-facing promotion mode.",
            items: [
              { kicker: "Visibility", title: "Reach communities", text: "Your message can appear where multiple people may notice it at once." },
              { kicker: "Reuse", title: "Uses saved content", text: "You do not need a separate editor just to start the group run." },
              { kicker: "Scale", title: "Premium goes further", text: "Premium raises both the number of runs and the target group count." }
            ]
          }
        ]
      },
      promoJoin: {
        metaTitle: "Promo Join",
        metaDescription: "How Promo Join campaigns work in Promoter.",
        hero: {
          eyebrow: "Gem Campaigns",
          title: "Drive verified joins with Promo Join.",
          lead: "Promo Join is the advanced mode where you spend gems to attract real joins and move a campaign forward through verification.",
          pills: ["Gem based", "Verification driven", "Premium tier discounts"],
          actions: [
            { href: "premium.html", label: "See Premium Savings", primary: true },
            { href: "help.html", label: "FAQ", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "How it works",
            intro: "Promo Join is built for users who care about real channel or group joins, not only message views.",
            items: [
              { kicker: "Setup", title: "Target chat required", text: "You first set a target channel or group so the bot knows where users should join." },
              { kicker: "Cost", title: "Campaigns use gems", text: "Each tier has a gem price, and premium users usually get a lower cost." },
              { kicker: "Progress", title: "Verification completes the run", text: "A campaign moves toward completion as users join and verify successfully." }
            ]
          },
          {
            type: "steps",
            title: "Campaign flow",
            intro: "The setup is still straightforward once you know the sequence.",
            items: [
              { kicker: "Step 1", title: "Use /promojoin", text: "Set the destination chat before opening the advanced menu." },
              { kicker: "Step 2", title: "Open /advance", text: "Choose a tier based on budget, campaign size, and desired verification count." },
              { kicker: "Step 3", title: "Watch verification progress", text: "Users join, verify, and your campaign completes when the goal is reached." }
            ]
          },
          {
            type: "callout",
            title: "Best for serious promotion.",
            text: "Promo Join works best when the destination channel or group is worth joining and has a clear reason for people to stay."
          }
        ]
      },
      picBroad: {
        metaTitle: "Pic Broad",
        metaDescription: "How the premium image broadcast works.",
        hero: {
          eyebrow: "Premium Media",
          title: "Send a visual broadcast with Pic Broad.",
          lead: "Pic Broad is a premium-only feature for sending one image with a caption to a larger user audience.",
          pills: ["Premium only", "One run per day", "Visual promotion"],
          actions: [
            { href: "premium.html", label: "View Premium Plans", primary: true },
            { href: "help.html", label: "Need Help?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "How to use it",
            intro: "The feature is simple, but the input format matters.",
            items: [
              { kicker: "Step 1", title: "Start /picbroad", text: "The bot checks whether your account has premium access and whether the daily slot is free." },
              { kicker: "Step 2", title: "Send a photo with caption", text: "Your caption becomes the message text for the broadcast." },
              { kicker: "Step 3", title: "Wait for the result", text: "The bot reports how many sends were successful and how many failed." }
            ]
          },
          {
            type: "cards",
            title: "When it performs best",
            intro: "This mode is for promotions where visuals do more work than plain text.",
            items: [
              { kicker: "Launches", title: "Use for posters and branded visuals", text: "Strong images often land better for launches, invitations, events, and polished offers." },
              { kicker: "Reach", title: "Higher daily capacity", text: "The feature is designed for broader delivery than normal private message promotion." },
              { kicker: "Control", title: "Premium keeps it exclusive", text: "That helps protect the network from unlimited image spam." }
            ]
          }
        ]
      },
      referral: {
        metaTitle: "Referral",
        metaDescription: "How referrals increase daily promotion power.",
        hero: {
          eyebrow: "Referral Growth",
          title: "Turn invites into extra promotions.",
          lead: "Referral lets you share a personal bot link and turn successful signups into extra daily promotion capacity.",
          pills: ["Personal invite link", "Bonus promos", "Progress shown in account"],
          actions: [
            { href: "user-promotion.html", label: "Back to User Promotion", primary: true },
            { href: "help.html", label: "Open Help", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "How referrals help",
            intro: "Referral rewards active users with more daily standard reach.",
            items: [
              { kicker: "Link", title: "You get a personal referral URL", text: "The bot gives you a shareable link that already includes your user ID." },
              { kicker: "Bonus", title: "Referrals increase daily promos", text: "Every successful group of referrals adds extra standard promotions to your daily limit." },
              { kicker: "Tracking", title: "Progress stays visible", text: "Your account page shows referral count and how close you are to the next bonus." }
            ]
          },
          {
            type: "callout",
            title: "Share value, not only the link.",
            text: "Referral performs best when people understand what the bot does for them before they click your invite."
          }
        ]
      },
      forceJoin: {
        metaTitle: "Force Join",
        metaDescription: "How Force Join works for group admins.",
        hero: {
          eyebrow: "Admin Control",
          title: "Require users to join before they chat.",
          lead: "Force Join is for group admins who want members to join selected channels before they continue messaging inside the group.",
          pills: ["Admin-only setup", "Channel checks", "Useful for linked communities"],
          actions: [
            { href: "help.html", label: "Admin Help", primary: true },
            { href: "group-promotion.html", label: "See Group Promotion", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Setup flow",
            intro: "The commands are short, but the bot needs correct permissions.",
            items: [
              { kicker: "Step 1", title: "Add the bot to the group", text: "The bot needs to be present where the message checks will happen." },
              { kicker: "Step 2", title: "Run /set", text: "Use a channel username or channel ID to add the destination to the force-join list." },
              { kicker: "Step 3", title: "Use /unset when needed", text: "Admins can remove a requirement later if the rule changes." }
            ]
          },
          {
            type: "cards",
            title: "Why admins use it",
            intro: "It combines moderation and audience growth in one feature.",
            items: [
              { kicker: "Control", title: "Stops non-members from chatting freely", text: "The bot can remove messages until the required joins are complete." },
              { kicker: "Flexibility", title: "More than one destination can be required", text: "One group can enforce several join points if needed." },
              { kicker: "Value", title: "Works best with useful channels", text: "Users accept the rule more easily when the required channel gives real updates or benefits." }
            ]
          }
        ]
      },
      premium: {
        metaTitle: "Premium",
        metaDescription: "Premium features, plans, and upgraded access.",
        hero: {
          eyebrow: "Upgrade Access",
          title: "What premium unlocks.",
          lead: "Premium expands your reach, unlocks richer promotion tools, and makes advanced campaigns more efficient.",
          pills: ["Pic Broad access", "Stronger group promotion", "Promo Join discounts"],
          actions: [
            { href: "pic-broad.html", label: "See Pic Broad", primary: true },
            { href: "help.html", label: "Open Help", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Main benefits",
            intro: "Premium is most valuable for active promoters.",
            items: [
              { kicker: "Media", title: "Pic Broad access", text: "Send a visual promotion with image and caption to a larger audience." },
              { kicker: "Groups", title: "More group power", text: "Premium raises both daily usage and target group count for group promotion." },
              { kicker: "Campaigns", title: "Lower gem costs", text: "Promo Join tiers are more efficient for premium users." }
            ]
          },
          {
            type: "cards",
            title: "Current plans",
            intro: "These are the plan shapes currently reflected in the product messaging.",
            items: [
              { kicker: "1 Week", title: "₹30 or 15 Stars", text: "Good for short-term access and testing premium features." },
              { kicker: "3 Weeks", title: "₹75 or 38 Stars", text: "Balanced option for users who need longer access without jumping to full monthly use." },
              { kicker: "1 Month", title: "₹89 or 45 Stars", text: "Best fit for regular promotion usage and repeated campaigns." }
            ]
          }
        ]
      },
      help: {
        metaTitle: "Help",
        metaDescription: "Frequently asked questions and quick help.",
        hero: {
          eyebrow: "Help Center",
          title: "Quick answers without the confusion.",
          lead: "This page covers the most common questions users and admins ask about content saving, limits, campaigns, and premium access.",
          pills: ["Predefined answers", "User and admin topics", "Fast troubleshooting"],
          actions: [
            { href: "terms.html", label: "Terms", primary: true },
            { href: "privacy.html", label: "Privacy", primary: false }
          ]
        },
        sections: [
          {
            type: "faq",
            title: "Frequently asked questions",
            intro: "Share this page when someone needs a quick answer before contacting support.",
            items: [
              { q: "Why does the bot say I do not have a saved message?", a: "Because your promotion source is empty. Send a valid message in private chat first." },
              { q: "Why is NSFW classification important?", a: "It helps the bot deliver content only to the audience that agreed to receive it." },
              { q: "Why did my standard promotion stop for today?", a: "Standard promotion uses a daily limit system. Referral bonuses can increase that allowance." },
              { q: "Why is Pic Broad unavailable?", a: "Pic Broad is premium-only and also follows a daily usage rule." },
              { q: "Why did Promo Join verification fail?", a: "Usually because the user did not fully join, the bot could not verify membership, or the campaign already expired." },
              { q: "Why is Force Join not working in my group?", a: "The bot may be missing required permissions in the protected group or the target channel." }
            ]
          }
        ]
      },
      terms: {
        metaTitle: "Terms",
        metaDescription: "Terms and conditions for the Promoter bot.",
        hero: {
          eyebrow: "Legal",
          title: "Terms and conditions.",
          lead: "These terms explain the basic rules for using the bot, premium access, and promotion tools.",
          pills: ["Readable terms", "User responsibility", "Access rules"],
          actions: [
            { href: "privacy.html", label: "Read Privacy", primary: true },
            { href: "help.html", label: "Back to Help", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Main rules",
            intro: "This page is intentionally short and readable.",
            items: [
              { title: "1. Content responsibility", text: "You are responsible for the material you submit or promote through the service." },
              { title: "2. Fair use", text: "Illegal, deceptive, harmful, or abusive use can lead to restrictions, suspension, or permanent removal." },
              { title: "3. Premium access", text: "Premium unlocks extra tools, but it does not guarantee identical results for every user or campaign." },
              { title: "4. Changes", text: "Features, limits, and moderation rules may change over time as the service evolves." }
            ]
          }
        ]
      },
      privacy: {
        metaTitle: "Privacy",
        metaDescription: "Privacy policy for the Promoter bot.",
        hero: {
          eyebrow: "Legal",
          title: "Privacy policy.",
          lead: "This policy explains what operating data may be stored so the bot can deliver promotions, handle rewards, and manage account access.",
          pills: ["Operational data", "Account records", "Promotion history"],
          actions: [
            { href: "terms.html", label: "Read Terms", primary: true },
            { href: "help.html", label: "Back to Help", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "What may be stored",
            intro: "Only the data needed to operate the service and its promotion features should be kept.",
            items: [
              { title: "1. Account data", text: "User ID, username, name, timestamps, and status markers may be stored for normal operation." },
              { title: "2. Promotion data", text: "Saved messages, links, content type, campaign targets, and result-related information may be recorded." },
              { title: "3. Usage data", text: "Daily limits, referral totals, gem balances, and campaign progress can be tracked to keep the features working correctly." },
              { title: "4. Purpose", text: "The stored data supports delivery, anti-abuse logic, rewards, premium access, and moderation." }
            ]
          }
        ]
      }
    }
  },
  ru: {
    common: {
      siteName: "Promoter Docs",
      siteTagline: "Понятные инструкции по режимам продвижения",
      logoAlt: "Логотип Promoter",
      menuLabel: "Открыть меню",
      closeLabel: "Закрыть меню",
      mobileMenuTitle: "Навигация",
      mobileSections: {
        guide: "Разделы",
        legal: "Правила"
      },
      navLabel: "Основная навигация",
      languageLabel: "Выберите язык",
      defaultSideTitle: "Понятно и быстро",
      defaultSideText: "Каждая важная функция имеет собственную страницу и отдельную ссылку.",
      footerTitle: "Документация Promoter",
      footerNote: "Этот сайт объясняет функции продукта простым языком. Реальные лимиты и доступ зависят от владельца бота и текущих настроек Telegram.",
      languages: {
        en: "English",
        ru: "Русский",
        uk: "Українська",
        hi: "हिंदी"
      },
      nav: {
        home: "Обзор",
        userPromotion: "Промо пользователям",
        groupPromotion: "Промо в группы",
        promoJoin: "Promo Join",
        picBroad: "Pic Broad",
        referral: "Рефералы",
        forceJoin: "Force Join",
        premium: "Premium",
        help: "Помощь",
        terms: "Условия",
        privacy: "Конфиденциальность"
      }
    },
    pages: {
      home: {
        metaTitle: "Обзор",
        metaDescription: "Многоязычный гид по боту Promoter.",
        hero: {
          eyebrow: "Гид Promoter",
          title: "Один аккуратный сайт для всех сценариев роста.",
          lead: "Здесь собраны понятные объяснения по обычному промо, групповому промо, Promo Join, рефералам, premium-инструментам и функциям для администраторов.",
          pills: ["4 языка", "Отдельные ссылки", "Быстрая помощь"],
          actions: [
            { href: "user-promotion.html", label: "Открыть базовое промо", primary: true },
            { href: "help.html", label: "Открыть помощь", primary: false }
          ],
          sidePanels: [
            { title: "Для пользователей", text: "Поймите, как сохранить сообщение, запускать промо и использовать premium или gems." },
            { title: "Для админов", text: "Быстро разберитесь, как работают Force Join и связанные групповые функции." }
          ]
        },
        sections: [
          {
            type: "stats",
            title: "Коротко о главном",
            intro: "Бот сочетает простое ежедневное продвижение и более сильные инструменты для тех, кому нужен больший охват.",
            items: [
              { value: "5+", title: "Ежедневные обычные промо", text: "Базовый лимит можно увеличивать через реферальные бонусы." },
              { value: "15 / 35", title: "Цель по группам", text: "Обычный режим стремится до 15 групп, premium — до 35." },
              { value: "350", title: "Охват Pic Broad", text: "Premium-рассылка с изображением может охватывать намного больше пользователей." }
            ]
          },
          {
            type: "cards",
            title: "Главные разделы",
            intro: "Каждая тема вынесена на отдельную страницу.",
            columns: 2,
            items: [
              { kicker: "База", title: "Промо пользователям", text: "Как личное сохраненное сообщение доставляется другим пользователям." },
              { kicker: "Охват", title: "Промо в группы", text: "Как бот размещает ваш текст в доступных группах." },
              { kicker: "Gems", title: "Promo Join", text: "Продвинутые кампании с gems и подтвержденными вступлениями." },
              { kicker: "Медиа", title: "Pic Broad", text: "Premium-режим для продвижения через изображение и подпись." },
              { kicker: "Рост", title: "Рефералы", text: "Как личная ссылка увеличивает дневной лимит обычного промо." },
              { kicker: "Админ", title: "Force Join", text: "Как заставить вступить в канал перед общением в группе." }
            ]
          },
          {
            type: "callout",
            title: "Понятная документация снижает хаос.",
            text: "Когда пользователь заранее понимает продукт, у вас меньше повторяющихся вопросов и чище сам сценарий использования."
          }
        ]
      },
      userPromotion: {
        metaTitle: "Промо пользователям",
        metaDescription: "Как работает стандартное продвижение между пользователями.",
        hero: {
          eyebrow: "Пользователь → пользователь",
          title: "Как работает стандартное промо.",
          lead: "Это самый быстрый способ продвинуть сообщение или ссылку внутри сети бота.",
          pills: ["Личный чат", "Бесплатный дневной доступ", "Бонусы за рефералов"],
          actions: [
            { href: "referral.html", label: "Смотреть рефералы", primary: true },
            { href: "help.html", label: "Нужна помощь?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Базовый сценарий",
            intro: "Большинству пользователей достаточно трех шагов.",
            items: [
              { kicker: "Шаг 1", title: "Отправьте сообщение в личный чат", text: "Сообщение должно содержать ссылку, username или понятный путь перехода." },
              { kicker: "Шаг 2", title: "Подтвердите тип контента", text: "Если бот спрашивает про NSFW или normal, отвечайте правильно." },
              { kicker: "Шаг 3", title: "Запустите /promote", text: "После этого бот отправляет сохраненный контент и обновляет дневной остаток." }
            ]
          },
          {
            type: "cards",
            title: "Почему это удобно",
            intro: "Это самый простой режим продвижения внутри продукта.",
            items: [
              { kicker: "Быстро", title: "Без сложной настройки", text: "Не нужны gems, tier-кампании или отдельные цели для запуска." },
              { kicker: "Гибко", title: "Подходит для коротких офферов", text: "Хорошо работает для invite-ссылок, обновлений и простых call to action." },
              { kicker: "Рост", title: "Становится сильнее со временем", text: "Рефералы могут расширять ежедневный лимит без смены сценария." }
            ]
          }
        ]
      },
      groupPromotion: {
        metaTitle: "Промо в группы",
        metaDescription: "Как работает продвижение через группы.",
        hero: {
          eyebrow: "Охват через сообщества",
          title: "Продвигайте контент в группах.",
          lead: "Групповое промо берет ваш сохраненный текст и размещает его там, где групповой режим сейчас доступен.",
          pills: ["15 групп standard", "35 групп premium", "Дневные лимиты"],
          actions: [
            { href: "premium.html", label: "Сравнить premium", primary: true },
            { href: "help.html", label: "Открыть помощь", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Как проходит запуск",
            intro: "Пользовательский путь короткий, а проверки бот делает сам.",
            items: [
              { kicker: "Шаг 1", title: "Сначала сохраните контент", text: "Если активного сообщения нет, бот не сможет начать продвижение." },
              { kicker: "Шаг 2", title: "Запустите /chatpromo", text: "Бот проверит доступ, бан-статус, дневной лимит и наличие групп." },
              { kicker: "Шаг 3", title: "Дождитесь итогов", text: "После отправки бот покажет, сколько групп получили сообщение." }
            ]
          },
          {
            type: "cards",
            title: "Почему этот режим важен",
            intro: "Он дает более публичный охват, чем обычное личное промо.",
            items: [
              { kicker: "Видимость", title: "Сообщение попадает в сообщества", text: "Оно может быть замечено сразу несколькими людьми внутри обсуждений." },
              { kicker: "Удобство", title: "Использует уже сохраненный текст", text: "Не нужен отдельный интерфейс, чтобы начать групповой запуск." },
              { kicker: "Масштаб", title: "Premium идет дальше", text: "Premium дает и больше запусков, и большую цель по группам." }
            ]
          }
        ]
      },
      promoJoin: {
        metaTitle: "Promo Join",
        metaDescription: "Как работают кампании Promo Join.",
        hero: {
          eyebrow: "Кампании за gems",
          title: "Получайте подтвержденные вступления через Promo Join.",
          lead: "Promo Join — продвинутый режим, где вы тратите gems ради реальных join + verify результатов.",
          pills: ["Gem-based", "Verify flow", "Скидки для premium"],
          actions: [
            { href: "premium.html", label: "Посмотреть premium", primary: true },
            { href: "help.html", label: "FAQ", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Как это работает",
            intro: "Promo Join нужен тем, кто хочет не просто просмотры, а реальные вступления.",
            items: [
              { kicker: "Setup", title: "Нужен целевой чат", text: "Сначала вы задаете канал или группу, куда бот должен вести пользователей." },
              { kicker: "Cost", title: "Кампании стоят gems", text: "Каждый tier имеет свою цену, а premium может платить меньше." },
              { kicker: "Progress", title: "Verify завершает кампанию", text: "Кампания движется к цели только через успешные вступления и подтверждения." }
            ]
          },
          {
            type: "steps",
            title: "Поток кампании",
            intro: "После первого знакомства сценарий остается достаточно понятным.",
            items: [
              { kicker: "Шаг 1", title: "Используйте /promojoin", text: "Назначьте целевой чат перед открытием advanced-меню." },
              { kicker: "Шаг 2", title: "Откройте /advance", text: "Выберите tier по бюджету, размеру кампании и цели verify." },
              { kicker: "Шаг 3", title: "Следите за verify", text: "Пользователи вступают, подтверждают участие и двигают вашу кампанию к завершению." }
            ]
          },
          {
            type: "callout",
            title: "Лучше всего работает для серьезного продвижения.",
            text: "Если сам канал или группа не дают ценности после вступления, эффективность Promo Join быстро падает."
          }
        ]
      },
      picBroad: {
        metaTitle: "Pic Broad",
        metaDescription: "Как работает premium-рассылка с изображением.",
        hero: {
          eyebrow: "Premium media",
          title: "Отправляйте визуальную рассылку через Pic Broad.",
          lead: "Pic Broad — premium-функция для отправки одного изображения с подписью по более широкой аудитории.",
          pills: ["Только premium", "1 запуск в день", "Визуальное промо"],
          actions: [
            { href: "premium.html", label: "Открыть premium", primary: true },
            { href: "help.html", label: "Нужна помощь?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Как использовать",
            intro: "Функция простая, но формат важен.",
            items: [
              { kicker: "Шаг 1", title: "Запустите /picbroad", text: "Бот проверит premium-доступ и свободен ли дневной слот." },
              { kicker: "Шаг 2", title: "Отправьте фото с подписью", text: "Подпись становится текстом всей рассылки." },
              { kicker: "Шаг 3", title: "Получите итог", text: "После завершения бот покажет число успешных и неуспешных отправок." }
            ]
          },
          {
            type: "cards",
            title: "Когда режим особенно полезен",
            intro: "Он нужен там, где изображение продает идею быстрее, чем простой текст.",
            items: [
              { kicker: "Визуал", title: "Подходит для постеров и креативов", text: "Особенно полезно для запусков, афиш, баннеров и брендированных промо." },
              { kicker: "Охват", title: "Больше дневная емкость", text: "Режим создан для более широкой доставки, чем обычное сообщение." },
              { kicker: "Контроль", title: "Premium ограничивает спам", text: "Эксклюзивность помогает удерживать качество сетевой доставки." }
            ]
          }
        ]
      },
      referral: {
        metaTitle: "Рефералы",
        metaDescription: "Как реферальная система увеличивает дневной лимит промо.",
        hero: {
          eyebrow: "Реферальный рост",
          title: "Превращайте приглашения в дополнительные промо.",
          lead: "Реферальная система дает персональную ссылку бота и превращает успешные приглашения в большее количество ежедневных стандартных промо.",
          pills: ["Личная invite-link", "Bonus promos", "Виден прогресс"],
          actions: [
            { href: "user-promotion.html", label: "Вернуться к user promo", primary: true },
            { href: "help.html", label: "Открыть помощь", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Как помогают рефералы",
            intro: "Рефералы — один из самых простых способов расширить дневной reach без покупки premium.",
            items: [
              { kicker: "Link", title: "У вас есть личный URL", text: "Бот выдает ссылку, в которой уже зашит ваш user ID." },
              { kicker: "Bonus", title: "Рефералы дают реальные промо", text: "Группы успешных приглашений добавляют extra standard promotions." },
              { kicker: "Tracking", title: "Прогресс виден в аккаунте", text: "Вы всегда можете увидеть текущий счет и путь к следующему бонусу." }
            ]
          },
          {
            type: "callout",
            title: "Сначала объясняйте пользу, а потом кидайте ссылку.",
            text: "Чем понятнее человеку ценность бота, тем лучше работает реферальная ссылка."
          }
        ]
      },
      forceJoin: {
        metaTitle: "Force Join",
        metaDescription: "Как работает Force Join для администраторов групп.",
        hero: {
          eyebrow: "Admin control",
          title: "Требуйте вступление перед общением.",
          lead: "Force Join помогает администраторам делать вступление в канал обязательным до продолжения общения в группе.",
          pills: ["Только для админов", "Проверка membership", "Полезно для экосистем"],
          actions: [
            { href: "help.html", label: "Помощь для админов", primary: true },
            { href: "group-promotion.html", label: "Смотреть group promo", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Порядок настройки",
            intro: "Команды короткие, но у бота должны быть нужные права.",
            items: [
              { kicker: "Шаг 1", title: "Добавьте бота в группу", text: "Бот должен находиться там, где будут проверяться сообщения пользователей." },
              { kicker: "Шаг 2", title: "Используйте /set", text: "Добавьте канал или ID канала в force-join список текущей группы." },
              { kicker: "Шаг 3", title: "Если нужно, используйте /unset", text: "Администратор всегда может убрать требование позже." }
            ]
          },
          {
            type: "cards",
            title: "Почему это используют",
            intro: "Функция совмещает модерацию и рост аудитории.",
            items: [
              { kicker: "Control", title: "Ограничивает не вступивших", text: "Бот может удалять сообщения, пока required join не будет выполнен." },
              { kicker: "Flexibility", title: "Можно требовать несколько каналов", text: "При необходимости одна группа может иметь несколько обязательных join-points." },
              { kicker: "Value", title: "Лучше всего работает с полезными каналами", text: "Пользователи легче принимают правило, если required channel действительно нужен." }
            ]
          }
        ]
      },
      premium: {
        metaTitle: "Premium",
        metaDescription: "Premium-доступ, планы и усиленные возможности.",
        hero: {
          eyebrow: "Upgrade access",
          title: "Что открывает premium.",
          lead: "Premium расширяет охват, открывает более мощные инструменты и делает advanced-кампании эффективнее.",
          pills: ["Pic Broad", "Сильнее group promo", "Скидки на Promo Join"],
          actions: [
            { href: "pic-broad.html", label: "Открыть Pic Broad", primary: true },
            { href: "help.html", label: "Помощь", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Главные преимущества",
            intro: "Premium особенно ценен для активных пользователей.",
            items: [
              { kicker: "Media", title: "Доступ к Pic Broad", text: "Позволяет продвигаться через изображение и подпись с большей емкостью." },
              { kicker: "Groups", title: "Больше силы в group promo", text: "Premium увеличивает и дневной usage, и целевое число групп." },
              { kicker: "Campaigns", title: "Ниже стоимость по gems", text: "Promo Join tiers становятся экономичнее для premium-аккаунта." }
            ]
          },
          {
            type: "cards",
            title: "Текущие планы",
            intro: "Это форматы планов, отраженные в текущем продукте.",
            items: [
              { kicker: "1 Week", title: "₹30 или 15 Stars", text: "Подходит для короткого доступа и теста premium-функций." },
              { kicker: "3 Weeks", title: "₹75 или 38 Stars", text: "Сбалансированный вариант для более длительного использования." },
              { kicker: "1 Month", title: "₹89 или 45 Stars", text: "Лучше всего подходит для регулярного промо и частых запусков." }
            ]
          }
        ]
      },
      help: {
        metaTitle: "Помощь",
        metaDescription: "Частые вопросы и быстрые ответы по боту Promoter.",
        hero: {
          eyebrow: "Help center",
          title: "Быстрые ответы без путаницы.",
          lead: "Эта страница покрывает самые частые вопросы по сохранению контента, лимитам, кампаниям и premium-доступу.",
          pills: ["Готовые ответы", "Темы для users и admins", "Быстрая диагностика"],
          actions: [
            { href: "terms.html", label: "Условия", primary: true },
            { href: "privacy.html", label: "Privacy", primary: false }
          ]
        },
        sections: [
          {
            type: "faq",
            title: "Частые вопросы",
            intro: "Хорошая страница для отправки пользователю до обращения в поддержку.",
            items: [
              { q: "Почему бот пишет, что нет сохраненного сообщения?", a: "Потому что активный источник промо пуст. Сначала отправьте валидное сообщение в личный чат." },
              { q: "Почему важна NSFW-классификация?", a: "Она помогает доставлять контент только той аудитории, которая согласилась его получать." },
              { q: "Почему обычное промо закончилось на сегодня?", a: "Стандартное продвижение работает по дневным лимитам. Реферальные бонусы могут увеличивать этот лимит." },
              { q: "Почему Pic Broad недоступен?", a: "Pic Broad доступен только premium-пользователям и имеет дневное ограничение." },
              { q: "Почему verify в Promo Join не прошел?", a: "Обычно из-за неполного вступления, ошибки проверки membership или истечения кампании." },
              { q: "Почему Force Join не сработал?", a: "Частая причина — нехватка прав у бота в группе или целевом канале." }
            ]
          }
        ]
      },
      terms: {
        metaTitle: "Условия",
        metaDescription: "Условия использования бота Promoter.",
        hero: {
          eyebrow: "Legal",
          title: "Условия использования.",
          lead: "Эта страница объясняет базовые правила по использованию бота, premium-доступа и инструментов продвижения.",
          pills: ["Понятный формат", "Ответственность пользователя", "Правила доступа"],
          actions: [
            { href: "privacy.html", label: "Открыть privacy", primary: true },
            { href: "help.html", label: "Назад к помощи", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Основные правила",
            intro: "Страница сделана короткой и читаемой.",
            items: [
              { title: "1. Ответственность за контент", text: "Вы сами отвечаете за материалы, которые отправляете или продвигаете через сервис." },
              { title: "2. Честное использование", text: "Незаконное, вредное, обманное или агрессивное использование может привести к ограничениям и удалению доступа." },
              { title: "3. Premium-доступ", text: "Premium открывает дополнительные возможности, но не гарантирует одинаковый результат для всех пользователей." },
              { title: "4. Изменения", text: "Функции, лимиты и moderation rules могут меняться со временем." }
            ]
          }
        ]
      },
      privacy: {
        metaTitle: "Конфиденциальность",
        metaDescription: "Политика конфиденциальности для бота Promoter.",
        hero: {
          eyebrow: "Legal",
          title: "Политика конфиденциальности.",
          lead: "Здесь объясняется, какие рабочие данные могут храниться для доставки промо, наград и управления доступом.",
          pills: ["Операционные данные", "Данные аккаунта", "История промо"],
          actions: [
            { href: "terms.html", label: "Открыть условия", primary: true },
            { href: "help.html", label: "Назад к помощи", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Какие данные могут храниться",
            intro: "Храниться должна только та информация, которая нужна для работы сервиса.",
            items: [
              { title: "1. Данные аккаунта", text: "Могут сохраняться user ID, username, имя, временные метки и служебные статусы." },
              { title: "2. Данные промо", text: "Могут храниться saved message, link, тип контента, цели кампаний и related result data." },
              { title: "3. Данные использования", text: "Могут учитываться daily limits, referrals, gem balances и progress campaign features." },
              { title: "4. Назначение", text: "Эти данные поддерживают delivery, anti-abuse, rewards, premium access и moderation logic." }
            ]
          }
        ]
      }
    }
  },
  uk: {
    common: {
      siteName: "Promoter Docs",
      siteTagline: "Зрозумілі інструкції по режимах просування",
      logoAlt: "Логотип Promoter",
      menuLabel: "Відкрити меню",
      closeLabel: "Закрити меню",
      mobileMenuTitle: "Навігація",
      mobileSections: {
        guide: "Розділи",
        legal: "Правила"
      },
      navLabel: "Основна навігація",
      languageLabel: "Оберіть мову",
      defaultSideTitle: "Швидко і зрозуміло",
      defaultSideText: "Кожна важлива функція має власну сторінку та окреме посилання.",
      footerTitle: "Документація Promoter",
      footerNote: "Цей сайт пояснює продукт простою мовою. Реальні ліміти та доступ залежать від власника бота і поточних налаштувань Telegram.",
      languages: {
        en: "English",
        ru: "Русский",
        uk: "Українська",
        hi: "हिंदी"
      },
      nav: {
        home: "Огляд",
        userPromotion: "Промо користувачам",
        groupPromotion: "Промо в групи",
        promoJoin: "Promo Join",
        picBroad: "Pic Broad",
        referral: "Реферали",
        forceJoin: "Force Join",
        premium: "Premium",
        help: "Допомога",
        terms: "Умови",
        privacy: "Конфіденційність"
      }
    },
    pages: {
      home: {
        metaTitle: "Огляд",
        metaDescription: "Багатомовний гід по боту Promoter.",
        hero: {
          eyebrow: "Гід Promoter",
          title: "Один охайний сайт для всіх сценаріїв росту.",
          lead: "Тут зібрані зрозумілі пояснення про звичайне промо, промо в групи, Promo Join, реферали, premium-інструменти та функції для адміністраторів.",
          pills: ["4 мови", "Окремі посилання", "Швидка допомога"],
          actions: [
            { href: "user-promotion.html", label: "Відкрити базове промо", primary: true },
            { href: "help.html", label: "Відкрити допомогу", primary: false }
          ],
          sidePanels: [
            { title: "Для користувачів", text: "Дізнайтеся, як зберегти повідомлення, запускати промо та використовувати premium або gems." },
            { title: "Для адмінів", text: "Швидко розберіться, як працюють Force Join та пов'язані групові інструменти." }
          ]
        },
        sections: [
          {
            type: "stats",
            title: "Коротко про головне",
            intro: "Бот поєднує просте щоденне просування і сильніші інструменти для тих, кому потрібне більше охоплення.",
            items: [
              { value: "5+", title: "Щоденні звичайні промо", text: "Базовий ліміт можна збільшувати через реферальні бонуси." },
              { value: "15 / 35", title: "Ціль по групах", text: "Звичайний режим іде до 15 груп, premium — до 35." },
              { value: "350", title: "Охоплення Pic Broad", text: "Premium-розсилка із зображенням може охоплювати значно більшу аудиторію." }
            ]
          },
          {
            type: "cards",
            title: "Головні розділи",
            intro: "Кожна тема винесена на окрему сторінку.",
            columns: 2,
            items: [
              { kicker: "База", title: "Промо користувачам", text: "Як особисте збережене повідомлення доставляється іншим користувачам." },
              { kicker: "Охоплення", title: "Промо в групи", text: "Як бот розміщує ваш текст у доступних групах." },
              { kicker: "Gems", title: "Promo Join", text: "Просунуті кампанії з gems і підтвердженими вступами." },
              { kicker: "Медіа", title: "Pic Broad", text: "Premium-режим для просування через зображення і підпис." },
              { kicker: "Ріст", title: "Реферали", text: "Як особисте посилання збільшує денний ліміт звичайного промо." },
              { kicker: "Адмін", title: "Force Join", text: "Як вимагати вступ до каналу перед спілкуванням у групі." }
            ]
          },
          {
            type: "callout",
            title: "Зрозуміла документація зменшує хаос.",
            text: "Коли користувач заздалегідь розуміє продукт, у вас менше повторюваних питань і чистіший сценарій використання."
          }
        ]
      },
      userPromotion: {
        metaTitle: "Промо користувачам",
        metaDescription: "Як працює стандартне просування між користувачами.",
        hero: {
          eyebrow: "Користувач → користувач",
          title: "Як працює стандартне промо.",
          lead: "Це найшвидший спосіб просунути повідомлення або посилання всередині мережі бота.",
          pills: ["Особистий чат", "Безкоштовний денний доступ", "Реферальні бонуси"],
          actions: [
            { href: "referral.html", label: "Подивитися реферали", primary: true },
            { href: "help.html", label: "Потрібна допомога?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Базовий сценарій",
            intro: "Більшості користувачів достатньо трьох кроків.",
            items: [
              { kicker: "Крок 1", title: "Надішліть повідомлення в особистий чат", text: "Повідомлення повинно містити посилання, username або зрозумілий напрямок переходу." },
              { kicker: "Крок 2", title: "Підтвердьте тип контенту", text: "Якщо бот питає про NSFW або normal, дайте правильну відповідь." },
              { kicker: "Крок 3", title: "Запустіть /promote", text: "Після цього бот надсилає збережений контент і оновлює денний залишок." }
            ]
          },
          {
            type: "cards",
            title: "Чому це зручно",
            intro: "Це найпростіший режим просування всередині продукту.",
            items: [
              { kicker: "Швидко", title: "Без складного налаштування", text: "Не потрібні gems, tier-кампанії чи окремі цілі для запуску." },
              { kicker: "Гнучко", title: "Підходить для коротких офферів", text: "Добре працює для invite-посилань, оновлень і простих call to action." },
              { kicker: "Ріст", title: "Стає сильнішим з часом", text: "Реферали можуть розширювати денний ліміт без зміни сценарію." }
            ]
          }
        ]
      },
      groupPromotion: {
        metaTitle: "Промо в групи",
        metaDescription: "Як працює просування через групи.",
        hero: {
          eyebrow: "Охоплення через спільноти",
          title: "Просувайте контент у групах.",
          lead: "Групове промо бере ваш збережений текст і розміщує його там, де груповий режим зараз доступний.",
          pills: ["15 груп standard", "35 груп premium", "Денні ліміти"],
          actions: [
            { href: "premium.html", label: "Порівняти premium", primary: true },
            { href: "help.html", label: "Відкрити допомогу", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Як проходить запуск",
            intro: "Користувацький шлях короткий, а перевірки бот робить сам.",
            items: [
              { kicker: "Крок 1", title: "Спочатку збережіть контент", text: "Якщо активного повідомлення немає, бот не зможе почати просування." },
              { kicker: "Крок 2", title: "Запустіть /chatpromo", text: "Бот перевірить доступ, бан-статус, денний ліміт і наявність груп." },
              { kicker: "Крок 3", title: "Дочекайтеся підсумків", text: "Після відправки бот покаже, скільки груп отримали повідомлення." }
            ]
          },
          {
            type: "cards",
            title: "Чому цей режим важливий",
            intro: "Він дає більш публічне охоплення, ніж звичайне особисте промо.",
            items: [
              { kicker: "Видимість", title: "Повідомлення потрапляє в спільноти", text: "Його можуть помітити одразу кілька людей всередині обговорень." },
              { kicker: "Зручність", title: "Використовує вже збережений текст", text: "Не потрібен окремий інтерфейс, щоб запустити груповий режим." },
              { kicker: "Масштаб", title: "Premium іде далі", text: "Premium дає і більше запусків, і більшу ціль по групах." }
            ]
          }
        ]
      },
      promoJoin: {
        metaTitle: "Promo Join",
        metaDescription: "Як працюють кампанії Promo Join.",
        hero: {
          eyebrow: "Кампанії за gems",
          title: "Отримуйте підтверджені вступи через Promo Join.",
          lead: "Promo Join — просунутий режим, де ви витрачаєте gems заради реальних join + verify результатів.",
          pills: ["Gem-based", "Verify flow", "Знижки для premium"],
          actions: [
            { href: "premium.html", label: "Подивитися premium", primary: true },
            { href: "help.html", label: "FAQ", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Як це працює",
            intro: "Promo Join потрібен тим, хто хоче не просто перегляди, а реальні вступи.",
            items: [
              { kicker: "Setup", title: "Потрібен цільовий чат", text: "Спочатку ви задаєте канал або групу, куди бот повинен вести користувачів." },
              { kicker: "Cost", title: "Кампанії коштують gems", text: "Кожен tier має свою ціну, а premium може платити менше." },
              { kicker: "Progress", title: "Verify завершує кампанію", text: "Кампанія рухається до мети лише через успішні вступи та підтвердження." }
            ]
          },
          {
            type: "steps",
            title: "Потік кампанії",
            intro: "Після першого знайомства сценарій залишається доволі зрозумілим.",
            items: [
              { kicker: "Крок 1", title: "Використайте /promojoin", text: "Призначте цільовий чат перед відкриттям advanced-меню." },
              { kicker: "Крок 2", title: "Відкрийте /advance", text: "Оберіть tier за бюджетом, розміром кампанії та verify-ціллю." },
              { kicker: "Крок 3", title: "Слідкуйте за verify", text: "Користувачі вступають, підтверджують участь і рухають кампанію до завершення." }
            ]
          },
          {
            type: "callout",
            title: "Найкраще працює для серйозного просування.",
            text: "Якщо сам канал або група не дають цінності після вступу, ефективність Promo Join швидко падає."
          }
        ]
      },
      picBroad: {
        metaTitle: "Pic Broad",
        metaDescription: "Як працює premium-розсилка із зображенням.",
        hero: {
          eyebrow: "Premium media",
          title: "Надсилайте візуальну розсилку через Pic Broad.",
          lead: "Pic Broad — premium-функція для відправки одного зображення з підписом по ширшій аудиторії.",
          pills: ["Лише premium", "1 запуск на день", "Візуальне промо"],
          actions: [
            { href: "premium.html", label: "Відкрити premium", primary: true },
            { href: "help.html", label: "Потрібна допомога?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Як використовувати",
            intro: "Функція проста, але формат важливий.",
            items: [
              { kicker: "Крок 1", title: "Запустіть /picbroad", text: "Бот перевірить premium-доступ і чи вільний денний слот." },
              { kicker: "Крок 2", title: "Надішліть фото з підписом", text: "Підпис стає текстом усієї розсилки." },
              { kicker: "Крок 3", title: "Отримайте підсумок", text: "Після завершення бот покаже кількість успішних і неуспішних відправок." }
            ]
          },
          {
            type: "cards",
            title: "Коли режим особливо корисний",
            intro: "Він потрібен там, де зображення продає ідею швидше, ніж простий текст.",
            items: [
              { kicker: "Візуал", title: "Підходить для постерів і креативів", text: "Особливо корисно для запусків, афіш, банерів і брендованих промо." },
              { kicker: "Охоплення", title: "Більша денна ємність", text: "Режим створений для ширшої доставки, ніж звичайне повідомлення." },
              { kicker: "Контроль", title: "Premium обмежує спам", text: "Ексклюзивність допомагає зберігати якість мережевої доставки." }
            ]
          }
        ]
      },
      referral: {
        metaTitle: "Реферали",
        metaDescription: "Як реферальна система збільшує денний ліміт промо.",
        hero: {
          eyebrow: "Реферальний ріст",
          title: "Перетворюйте запрошення на додаткові промо.",
          lead: "Реферальна система дає персональне посилання бота й перетворює успішні запрошення на більше щоденних стандартних промо.",
          pills: ["Особисте invite-link", "Bonus promos", "Видимий прогрес"],
          actions: [
            { href: "user-promotion.html", label: "Повернутися до user promo", primary: true },
            { href: "help.html", label: "Відкрити допомогу", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Як допомагають реферали",
            intro: "Реферали — один із найпростіших способів розширити денний reach без покупки premium.",
            items: [
              { kicker: "Link", title: "У вас є особистий URL", text: "Бот видає посилання, в якому вже зашитий ваш user ID." },
              { kicker: "Bonus", title: "Реферали дають реальні промо", text: "Групи успішних запрошень додають extra standard promotions." },
              { kicker: "Tracking", title: "Прогрес видно в акаунті", text: "Ви завжди можете побачити поточний рахунок і шлях до наступного бонусу." }
            ]
          },
          {
            type: "callout",
            title: "Спочатку пояснюйте користь, а потім кидайте посилання.",
            text: "Чим зрозуміліша людині цінність бота, тим краще працює реферальне посилання."
          }
        ]
      },
      forceJoin: {
        metaTitle: "Force Join",
        metaDescription: "Як працює Force Join для адміністраторів груп.",
        hero: {
          eyebrow: "Admin control",
          title: "Вимагайте вступ перед спілкуванням.",
          lead: "Force Join допомагає адміністраторам робити вступ до каналу обов'язковим до продовження спілкування в групі.",
          pills: ["Лише для адмінів", "Перевірка membership", "Корисно для екосистем"],
          actions: [
            { href: "help.html", label: "Допомога для адмінів", primary: true },
            { href: "group-promotion.html", label: "Дивитися group promo", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Порядок налаштування",
            intro: "Команди короткі, але бот повинен мати потрібні права.",
            items: [
              { kicker: "Крок 1", title: "Додайте бота в групу", text: "Бот повинен бути там, де перевірятимуться повідомлення користувачів." },
              { kicker: "Крок 2", title: "Використайте /set", text: "Додайте канал або ID каналу до force-join списку поточної групи." },
              { kicker: "Крок 3", title: "Якщо потрібно, використайте /unset", text: "Адміністратор завжди може прибрати вимогу пізніше." }
            ]
          },
          {
            type: "cards",
            title: "Чому це використовують",
            intro: "Функція поєднує модерацію і ріст аудиторії.",
            items: [
              { kicker: "Control", title: "Обмежує тих, хто не вступив", text: "Бот може видаляти повідомлення, поки required join не буде виконано." },
              { kicker: "Flexibility", title: "Можна вимагати кілька каналів", text: "За потреби одна група може мати кілька обов'язкових join-points." },
              { kicker: "Value", title: "Найкраще працює з корисними каналами", text: "Користувачі легше приймають правило, якщо required channel дійсно потрібний." }
            ]
          }
        ]
      },
      premium: {
        metaTitle: "Premium",
        metaDescription: "Premium-доступ, плани та посилені можливості.",
        hero: {
          eyebrow: "Upgrade access",
          title: "Що відкриває premium.",
          lead: "Premium розширює охоплення, відкриває потужніші інструменти й робить advanced-кампанії ефективнішими.",
          pills: ["Pic Broad", "Сильніше group promo", "Знижки на Promo Join"],
          actions: [
            { href: "pic-broad.html", label: "Відкрити Pic Broad", primary: true },
            { href: "help.html", label: "Допомога", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Головні переваги",
            intro: "Premium особливо цінний для активних користувачів.",
            items: [
              { kicker: "Media", title: "Доступ до Pic Broad", text: "Дозволяє просуватися через зображення і підпис із більшою ємністю." },
              { kicker: "Groups", title: "Більше сили в group promo", text: "Premium збільшує і денний usage, і цільове число груп." },
              { kicker: "Campaigns", title: "Нижча вартість по gems", text: "Promo Join tiers стають економнішими для premium-акаунта." }
            ]
          },
          {
            type: "cards",
            title: "Поточні плани",
            intro: "Це формати планів, відображені в поточному продукті.",
            items: [
              { kicker: "1 Week", title: "₹30 або 15 Stars", text: "Підходить для короткого доступу і тесту premium-функцій." },
              { kicker: "3 Weeks", title: "₹75 або 38 Stars", text: "Збалансований варіант для довшого використання." },
              { kicker: "1 Month", title: "₹89 або 45 Stars", text: "Найкраще підходить для регулярного промо і частих запусків." }
            ]
          }
        ]
      },
      help: {
        metaTitle: "Допомога",
        metaDescription: "Часті питання і швидкі відповіді по боту Promoter.",
        hero: {
          eyebrow: "Help center",
          title: "Швидкі відповіді без плутанини.",
          lead: "Ця сторінка покриває найчастіші питання про збереження контенту, ліміти, кампанії та premium-доступ.",
          pills: ["Готові відповіді", "Теми для users і admins", "Швидка діагностика"],
          actions: [
            { href: "terms.html", label: "Умови", primary: true },
            { href: "privacy.html", label: "Privacy", primary: false }
          ]
        },
        sections: [
          {
            type: "faq",
            title: "Часті питання",
            intro: "Хороша сторінка для відправки користувачу ще до звернення в підтримку.",
            items: [
              { q: "Чому бот каже, що немає збереженого повідомлення?", a: "Тому що активне джерело промо порожнє. Спочатку надішліть валідне повідомлення в особистий чат." },
              { q: "Чому важлива NSFW-класифікація?", a: "Вона допомагає доставляти контент лише тій аудиторії, яка погодилася його отримувати." },
              { q: "Чому звичайне промо закінчилося на сьогодні?", a: "Стандартне просування працює за денними лімітами. Реферальні бонуси можуть збільшувати цей ліміт." },
              { q: "Чому Pic Broad недоступний?", a: "Pic Broad доступний лише premium-користувачам і має денне обмеження." },
              { q: "Чому verify у Promo Join не пройшов?", a: "Зазвичай через неповний вступ, помилку перевірки membership або завершення кампанії." },
              { q: "Чому Force Join не спрацював?", a: "Часта причина — нестача прав у бота в групі або цільовому каналі." }
            ]
          }
        ]
      },
      terms: {
        metaTitle: "Умови",
        metaDescription: "Умови використання бота Promoter.",
        hero: {
          eyebrow: "Legal",
          title: "Умови використання.",
          lead: "Ця сторінка пояснює базові правила щодо використання бота, premium-доступу та інструментів просування.",
          pills: ["Зрозумілий формат", "Відповідальність користувача", "Правила доступу"],
          actions: [
            { href: "privacy.html", label: "Відкрити privacy", primary: true },
            { href: "help.html", label: "Назад до допомоги", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Основні правила",
            intro: "Сторінка зроблена короткою і читабельною.",
            items: [
              { title: "1. Відповідальність за контент", text: "Ви самі відповідаєте за матеріали, які надсилаєте або просуваєте через сервіс." },
              { title: "2. Чесне використання", text: "Незаконне, шкідливе, оманливе або агресивне використання може призвести до обмежень і видалення доступу." },
              { title: "3. Premium-доступ", text: "Premium відкриває додаткові можливості, але не гарантує однаковий результат для всіх користувачів." },
              { title: "4. Зміни", text: "Функції, ліміти та moderation rules можуть змінюватися з часом." }
            ]
          }
        ]
      },
      privacy: {
        metaTitle: "Конфіденційність",
        metaDescription: "Політика конфіденційності для бота Promoter.",
        hero: {
          eyebrow: "Legal",
          title: "Політика конфіденційності.",
          lead: "Тут пояснюється, які робочі дані можуть зберігатися для доставки промо, нагород і керування доступом.",
          pills: ["Операційні дані", "Дані акаунта", "Історія промо"],
          actions: [
            { href: "terms.html", label: "Відкрити умови", primary: true },
            { href: "help.html", label: "Назад до допомоги", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Які дані можуть зберігатися",
            intro: "Зберігатися повинна лише та інформація, яка потрібна для роботи сервісу.",
            items: [
              { title: "1. Дані акаунта", text: "Можуть зберігатися user ID, username, ім'я, часові мітки та службові статуси." },
              { title: "2. Дані промо", text: "Можуть зберігатися saved message, link, тип контенту, цілі кампаній і related result data." },
              { title: "3. Дані використання", text: "Можуть враховуватися daily limits, referrals, gem balances і progress campaign features." },
              { title: "4. Призначення", text: "Ці дані підтримують delivery, anti-abuse, rewards, premium access і moderation logic." }
            ]
          }
        ]
      }
    }
  },
  hi: {
    common: {
      siteName: "Promoter Docs",
      siteTagline: "हर प्रमोशन मोड के लिए साफ़ गाइड",
      logoAlt: "Promoter logo",
      menuLabel: "मेनू खोलें",
      closeLabel: "मेनू बंद करें",
      mobileMenuTitle: "नेविगेशन",
      mobileSections: {
        guide: "Pages",
        legal: "Legal"
      },
      navLabel: "मुख्य नेविगेशन",
      languageLabel: "भाषा चुनें",
      defaultSideTitle: "साफ़ और आसान",
      defaultSideText: "हर ज़रूरी feature की अपनी page link है और explanation भी simple है.",
      footerTitle: "Promoter Documentation",
      footerNote: "यह site end users के लिए feature flow को आसान भाषा में समझाती है. Real limits और access अभी भी bot owner और Telegram permissions पर depend करते हैं.",
      languages: {
        en: "English",
        ru: "Русский",
        uk: "Українська",
        hi: "हिंदी"
      },
      nav: {
        home: "Overview",
        userPromotion: "User Promotion",
        groupPromotion: "Group Promotion",
        promoJoin: "Promo Join",
        picBroad: "Pic Broad",
        referral: "Referral",
        forceJoin: "Force Join",
        premium: "Premium",
        help: "Help",
        terms: "Terms",
        privacy: "Privacy"
      }
    },
    pages: {
      home: {
        metaTitle: "Overview",
        metaDescription: "Promoter bot ke liye multilingual guide.",
        hero: {
          eyebrow: "Promoter Guide",
          title: "हर growth workflow के लिए एक साफ़ website guide.",
          lead: "यहाँ standard promo, group promo, Promo Join, referral, premium tools और admin-side features सब कुछ आसान तरीके से समझाया गया है.",
          pills: ["4 languages", "Direct links", "Quick help"],
          actions: [
            { href: "user-promotion.html", label: "User Promotion देखें", primary: true },
            { href: "help.html", label: "Help खोलें", primary: false }
          ],
          sidePanels: [
            { title: "Users के लिए", text: "समझें कि message save कैसे होता है, promo कैसे चलता है और premium या gems कहाँ useful हैं." },
            { title: "Admins के लिए", text: "Force Join और group-side control features का clear overview पाएं." }
          ]
        },
        sections: [
          {
            type: "stats",
            title: "एक नज़र में",
            intro: "Bot simple daily promotion और deeper campaign tools दोनों को combine करता है.",
            items: [
              { value: "5+", title: "Daily standard promos", text: "Base limit referral bonuses से बढ़ सकता है." },
              { value: "15 / 35", title: "Group targets", text: "Standard mode लगभग 15 groups तक और premium 35 तक जा सकता है." },
              { value: "350", title: "Pic Broad reach", text: "Premium image broadcast बहुत बड़ी audience तक जा सकता है." }
            ]
          },
          {
            type: "cards",
            title: "Main sections",
            intro: "हर topic की अपनी page है ताकि direct sharing आसान रहे.",
            columns: 2,
            items: [
              { kicker: "Core", title: "User Promotion", text: "Private saved content users तक कैसे भेजा जाता है." },
              { kicker: "Reach", title: "Group Promotion", text: "Bot आपका message available groups में कैसे भेजता है." },
              { kicker: "Gems", title: "Promo Join", text: "Advanced campaigns जो gems और verification पर based हैं." },
              { kicker: "Media", title: "Pic Broad", text: "Premium image + caption promotion mode." },
              { kicker: "Growth", title: "Referral", text: "Personal invite link से daily promotion power कैसे बढ़ती है." },
              { kicker: "Admin", title: "Force Join", text: "Group chat से पहले channel join कैसे required होता है." }
            ]
          },
          {
            type: "callout",
            title: "Clear documentation support load कम करती है.",
            text: "जब users पहले से flow समझ लेते हैं, तो repeated confusion काफी कम हो जाती है."
          }
        ]
      },
      userPromotion: {
        metaTitle: "User Promotion",
        metaDescription: "Standard user-to-user promotion ka guide.",
        hero: {
          eyebrow: "User to User",
          title: "Standard promotion कैसे काम करता है.",
          lead: "यह सबसे तेज़ mode है जहाँ bot आपके saved message या link को network के users तक पहुँचाता है.",
          pills: ["Private chat flow", "Free daily access", "Referral boosts"],
          actions: [
            { href: "referral.html", label: "Referral bonus देखें", primary: true },
            { href: "help.html", label: "Help", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Basic workflow",
            intro: "ज़्यादातर users के लिए यह तीन steps में हो जाता है.",
            items: [
              { kicker: "Step 1", title: "Private chat में content भेजें", text: "Message में link, username या clear destination होना चाहिए." },
              { kicker: "Step 2", title: "Content type confirm करें", text: "अगर bot NSFW या normal पूछे, तो सही option चुनें." },
              { kicker: "Step 3", title: "/promote चलाएँ", text: "Bot आपका saved content भेजता है और daily remaining count update करता है." }
            ]
          },
          {
            type: "cards",
            title: "यह mode क्यों useful है",
            intro: "यह product का सबसे आसान promotion mode है.",
            items: [
              { kicker: "Fast", title: "Extra setup नहीं चाहिए", text: "Gems, target chats या campaign tiers की ज़रूरत नहीं होती." },
              { kicker: "Flexible", title: "Quick offers के लिए सही", text: "Invite links, updates और short calls to action के लिए अच्छा है." },
              { kicker: "Scalable", title: "समय के साथ stronger होता है", text: "Referral bonuses आपकी daily reach बढ़ा सकते हैं." }
            ]
          }
        ]
      },
      groupPromotion: {
        metaTitle: "Group Promotion",
        metaDescription: "Group promotion system ka guide.",
        hero: {
          eyebrow: "Group Reach",
          title: "Content को groups में promote करें.",
          lead: "Group Promotion आपके saved message को उन groups में भेजता है जहाँ यह mode अभी available है.",
          pills: ["15 groups standard", "35 groups premium", "Daily limits"],
          actions: [
            { href: "premium.html", label: "Premium compare करें", primary: true },
            { href: "help.html", label: "Help", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Run कैसे होता है",
            intro: "User side पर flow छोटा है, लेकिन checks bot खुद करता है.",
            items: [
              { kicker: "Step 1", title: "Content save होना चाहिए", text: "अगर active message नहीं है, तो group promotion शुरू नहीं होगा." },
              { kicker: "Step 2", title: "/chatpromo चलाएँ", text: "Bot access, ban status, daily usage और group availability check करता है." },
              { kicker: "Step 3", title: "Summary का इंतज़ार करें", text: "Run के बाद bot बताता है कि कितने groups तक message गया." }
            ]
          },
          {
            type: "cards",
            title: "यह mode क्यों important है",
            intro: "यह private delivery से ज़्यादा public visibility देता है.",
            items: [
              { kicker: "Visibility", title: "Communities तक पहुँच", text: "एक ही बार में कई लोग आपका message देख सकते हैं." },
              { kicker: "Reuse", title: "Saved content फिर use होता है", text: "अलग editor की ज़रूरत नहीं होती." },
              { kicker: "Scale", title: "Premium और आगे जाता है", text: "Premium users को ज़्यादा runs और higher group target मिलता है." }
            ]
          }
        ]
      },
      promoJoin: {
        metaTitle: "Promo Join",
        metaDescription: "Promo Join campaigns ka guide.",
        hero: {
          eyebrow: "Gem Campaigns",
          title: "Promo Join से verified joins लें.",
          lead: "Promo Join advanced mode है जहाँ gems खर्च करके real join + verify results लाए जाते हैं.",
          pills: ["Gem-based", "Verify flow", "Premium savings"],
          actions: [
            { href: "premium.html", label: "Premium देखें", primary: true },
            { href: "help.html", label: "FAQ", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "यह mode कैसे काम करता है",
            intro: "यह उन users के लिए है जिन्हें सिर्फ views नहीं, बल्कि real joins चाहिए.",
            items: [
              { kicker: "Setup", title: "Target chat चाहिए", text: "पहले channel या group set किया जाता है जहाँ users को join कराना है." },
              { kicker: "Cost", title: "Campaign gems use करता है", text: "हर tier की cost होती है, और premium users कम pay कर सकते हैं." },
              { kicker: "Progress", title: "Verify campaign पूरा करता है", text: "Successful joins और confirmations campaign को goal तक ले जाते हैं." }
            ]
          },
          {
            type: "steps",
            title: "Campaign flow",
            intro: "पहली बार के बाद यह sequence काफ़ी clear हो जाता है.",
            items: [
              { kicker: "Step 1", title: "/promojoin use करें", text: "Advanced menu खोलने से पहले destination chat set करें." },
              { kicker: "Step 2", title: "/advance खोलें", text: "Budget, size और verify target के हिसाब से tier चुनें." },
              { kicker: "Step 3", title: "Verify progress देखें", text: "Users join करते हैं, confirm करते हैं, और campaign target की तरफ बढ़ता है." }
            ]
          },
          {
            type: "callout",
            title: "यह serious promotion के लिए best है.",
            text: "अगर target channel खुद valuable नहीं है, तो Promo Join की long-term value जल्दी कम हो जाती है."
          }
        ]
      },
      picBroad: {
        metaTitle: "Pic Broad",
        metaDescription: "Premium image broadcast feature ka guide.",
        hero: {
          eyebrow: "Premium Media",
          title: "Pic Broad से visual broadcast भेजें.",
          lead: "Pic Broad premium-only feature है जो एक image और caption को बड़ी audience तक पहुँचाने के लिए बनाया गया है.",
          pills: ["Premium only", "1 run per day", "Visual promotion"],
          actions: [
            { href: "premium.html", label: "Premium plans देखें", primary: true },
            { href: "help.html", label: "Help", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "कैसे use करें",
            intro: "Feature simple है, लेकिन input सही होना चाहिए.",
            items: [
              { kicker: "Step 1", title: "/picbroad चलाएँ", text: "Bot premium access और free daily slot check करता है." },
              { kicker: "Step 2", title: "Photo with caption भेजें", text: "Caption ही broadcast text बनता है." },
              { kicker: "Step 3", title: "Result देखें", text: "Run खत्म होने के बाद bot successful और failed sends दिखाता है." }
            ]
          },
          {
            type: "cards",
            title: "कब सबसे useful है",
            intro: "जब visual plain text से ज्यादा अच्छा काम करे.",
            items: [
              { kicker: "Visual", title: "Posters और creatives के लिए सही", text: "Launches, banners और branded promotional posts के लिए अच्छा है." },
              { kicker: "Reach", title: "Higher daily capacity", text: "यह mode सामान्य private messaging से बड़ी delivery के लिए बनाया गया है." },
              { kicker: "Control", title: "Premium access spam कम रखता है", text: "Exclusive access quality को better बनाए रखने में मदद करता है." }
            ]
          }
        ]
      },
      referral: {
        metaTitle: "Referral",
        metaDescription: "Referral system se daily promotion power kaise badhti hai.",
        hero: {
          eyebrow: "Referral Growth",
          title: "Invites को extra promotions में बदलें.",
          lead: "Referral system आपकी personal bot link को ज्यादा daily standard promotion capacity में बदल देता है.",
          pills: ["Personal invite link", "Bonus promos", "Visible progress"],
          actions: [
            { href: "user-promotion.html", label: "User promo पर जाएँ", primary: true },
            { href: "help.html", label: "Help", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Referral कैसे मदद करता है",
            intro: "यह premium खरीदे बिना daily reach बढ़ाने का आसान तरीका है.",
            items: [
              { kicker: "Link", title: "आपको personal URL मिलता है", text: "Bot ऐसी link देता है जिसमें आपका user ID पहले से शामिल होता है." },
              { kicker: "Bonus", title: "Referrals real promos देते हैं", text: "Successful invites extra standard promotions जोड़ सकते हैं." },
              { kicker: "Tracking", title: "Progress account में दिखता है", text: "आप current count और next bonus की दूरी देख सकते हैं." }
            ]
          },
          {
            type: "callout",
            title: "सिर्फ link नहीं, benefit भी share करें.",
            text: "जब सामने वाले को bot की value समझ आती है, तब referral conversion बेहतर होता है."
          }
        ]
      },
      forceJoin: {
        metaTitle: "Force Join",
        metaDescription: "Group admins के लिए Force Join guide.",
        hero: {
          eyebrow: "Admin Control",
          title: "Chat से पहले join required करें.",
          lead: "Force Join admins को यह control देता है कि user selected channel join किए बिना group में freely chat न कर सके.",
          pills: ["Admin only", "Membership checks", "Community linking"],
          actions: [
            { href: "help.html", label: "Admin help", primary: true },
            { href: "group-promotion.html", label: "Group promo देखें", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Setup flow",
            intro: "Commands छोटे हैं, लेकिन bot permissions सही होनी चाहिए.",
            items: [
              { kicker: "Step 1", title: "Bot को group में add करें", text: "Bot वहीं होना चाहिए जहाँ message checks होने हैं." },
              { kicker: "Step 2", title: "/set use करें", text: "Current group के लिए channel या ID को force-join list में जोड़ें." },
              { kicker: "Step 3", title: "ज़रूरत पर /unset use करें", text: "Admin बाद में requirement को हटा सकता है." }
            ]
          },
          {
            type: "cards",
            title: "Admins इसे क्यों use करते हैं",
            intro: "यह moderation और audience growth को एक feature में जोड़ता है.",
            items: [
              { kicker: "Control", title: "Non-members को रोकता है", text: "Required join होने तक bot messages हटा सकता है." },
              { kicker: "Flexibility", title: "Multiple channels required हो सकते हैं", text: "एक group के लिए एक से ज्यादा join points set किए जा सकते हैं." },
              { kicker: "Value", title: "Useful channels पर best काम करता है", text: "अगर required channel valuable है, तो users rule को ज्यादा आसानी से accept करते हैं." }
            ]
          }
        ]
      },
      premium: {
        metaTitle: "Premium",
        metaDescription: "Premium plans aur advanced access ka guide.",
        hero: {
          eyebrow: "Upgrade Access",
          title: "Premium क्या unlock करता है.",
          lead: "Premium reach बढ़ाता है, richer tools देता है और advanced campaigns को ज्यादा efficient बनाता है.",
          pills: ["Pic Broad", "Stronger group promo", "Promo Join savings"],
          actions: [
            { href: "pic-broad.html", label: "Pic Broad देखें", primary: true },
            { href: "help.html", label: "Help", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Main benefits",
            intro: "Premium active users के लिए सबसे useful होता है.",
            items: [
              { kicker: "Media", title: "Pic Broad access", text: "Image + caption promotion higher capacity के साथ possible हो जाता है." },
              { kicker: "Groups", title: "Stronger group promo", text: "Premium users को ज्यादा daily usage और bigger group target मिलता है." },
              { kicker: "Campaigns", title: "Lower gem cost", text: "Promo Join tiers premium account के लिए ज्यादा efficient हो जाते हैं." }
            ]
          },
          {
            type: "cards",
            title: "Current plans",
            intro: "ये वही plan shapes हैं जो current product messaging में दिखते हैं.",
            items: [
              { kicker: "1 Week", title: "₹30 या 15 Stars", text: "Short-term access और premium feature testing के लिए ठीक." },
              { kicker: "3 Weeks", title: "₹75 या 38 Stars", text: "Longer usage के लिए balanced option." },
              { kicker: "1 Month", title: "₹89 या 45 Stars", text: "Regular promotion और repeated campaigns के लिए best fit." }
            ]
          }
        ]
      },
      help: {
        metaTitle: "Help",
        metaDescription: "Promoter bot ke common questions aur quick answers.",
        hero: {
          eyebrow: "Help Center",
          title: "Quick answers without confusion.",
          lead: "यह page content saving, limits, campaigns और premium access से जुड़े common सवालों का जवाब देता है.",
          pills: ["Predefined answers", "User + admin topics", "Fast troubleshooting"],
          actions: [
            { href: "terms.html", label: "Terms", primary: true },
            { href: "privacy.html", label: "Privacy", primary: false }
          ]
        },
        sections: [
          {
            type: "faq",
            title: "Frequently asked questions",
            intro: "Support से पहले यह page share करना सबसे आसान तरीका है.",
            items: [
              { q: "Bot क्यों कहता है कि saved message नहीं है?", a: "क्योंकि active promotion source empty है. पहले private chat में valid message भेजें." },
              { q: "NSFW classification क्यों ज़रूरी है?", a: "ताकि content सिर्फ वही audience receive करे जिसने ऐसा material accept किया है." },
              { q: "Standard promotion आज के लिए क्यों खत्म हो गया?", a: "इस mode में daily limits होती हैं. Referral bonuses से ये limit बढ़ सकती है." },
              { q: "Pic Broad unavailable क्यों है?", a: "यह premium-only feature है और daily usage rule follow करता है." },
              { q: "Promo Join verify fail क्यों हुआ?", a: "हो सकता है user ने पूरा join नहीं किया, bot verify न कर पाया, या campaign expire हो गया." },
              { q: "Force Join काम क्यों नहीं कर रहा?", a: "अक्सर reason missing permissions या incorrect admin setup होता है." }
            ]
          }
        ]
      },
      terms: {
        metaTitle: "Terms",
        metaDescription: "Promoter bot ke terms and conditions.",
        hero: {
          eyebrow: "Legal",
          title: "Terms and conditions.",
          lead: "यह page bot use, premium access और promotion tools के basic rules को simple language में समझाती है.",
          pills: ["Readable terms", "User responsibility", "Access rules"],
          actions: [
            { href: "privacy.html", label: "Privacy पढ़ें", primary: true },
            { href: "help.html", label: "Help पर जाएँ", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Main rules",
            intro: "यह page जानबूझकर short और readable रखी गई है.",
            items: [
              { title: "1. Content responsibility", text: "जो material आप submit या promote करते हैं, उसकी ज़िम्मेदारी आपकी है." },
              { title: "2. Fair use", text: "Illegal, harmful, deceptive या abusive use access restriction या removal तक ले जा सकता है." },
              { title: "3. Premium access", text: "Premium extra tools unlock करता है, लेकिन हर user के लिए identical result guarantee नहीं करता." },
              { title: "4. Changes", text: "Features, limits और moderation rules समय के साथ बदल सकते हैं." }
            ]
          }
        ]
      },
      privacy: {
        metaTitle: "Privacy",
        metaDescription: "Promoter bot ke liye privacy policy.",
        hero: {
          eyebrow: "Legal",
          title: "Privacy policy.",
          lead: "यह page बताती है कि कौन-सा operating data store हो सकता है ताकि bot promotions, rewards और account access को manage कर सके.",
          pills: ["Operational data", "Account records", "Promotion history"],
          actions: [
            { href: "terms.html", label: "Terms पढ़ें", primary: true },
            { href: "help.html", label: "Help पर जाएँ", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "What may be stored",
            intro: "सिर्फ वही data रखा जाना चाहिए जो service को चलाने के लिए ज़रूरी हो.",
            items: [
              { title: "1. Account data", text: "User ID, username, name, timestamps और service status markers store किए जा सकते हैं." },
              { title: "2. Promotion data", text: "Saved messages, links, content type और campaign targets जैसी जानकारी record हो सकती है." },
              { title: "3. Usage data", text: "Daily limits, referrals, gem balances और campaign progress जैसे counters track हो सकते हैं." },
              { title: "4. Purpose", text: "यह data delivery, anti-abuse, rewards, premium access और moderation के लिए use होता है." }
            ]
          }
        ]
      }
    }
  }
};
