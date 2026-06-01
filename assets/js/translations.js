window.DOCS_TRANSLATIONS = {
  en: {
    common: {
      siteName: "Promoter Bot Docs",
      siteTagline: "Clear guides for every promotion workflow",
      logoAlt: "Promoter Bot logo",
      menuLabel: "Open navigation",
      closeLabel: "Close navigation",
      mobileMenuTitle: "Navigate",
      mobileSections: {
        guide: "Guide",
        legal: "Legal"
      },
      navLabel: "Primary navigation",
      languageLabel: "Choose language",
      defaultSideTitle: "Made for real users",
      defaultSideText: "Each important feature has its own page so users can open the exact explanation they need.",
      footerTitle: "Promoter Bot Documentation",
      footerNote: "This site explains the current Promoter Bot and Promotion Bot feature flow for end users. Actual availability, moderation, and access can still depend on the bot owner and Telegram-side permissions.",
      metaKeywords: "Promoter Bot, Promotion Bot, Telegram promotion bot, Telegram promoter bot",
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
        nsfwGuide: "NSFW",
        referral: "Referral",
        addMeGems: "Bot + Gems",
        contest: "Contest",
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
        metaDescription: "Official multilingual documentation for the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Official Guide",
          title: "One site for every promotion mode.",
          lead: "This documentation matches the live bot flow more closely: standard user promotion, group promotion, Promo Join, referrals, contest rewards, premium tools, and admin controls.",
          pills: ["4 languages", "Bot-matched text", "Fast help pages"],
          actions: [
            { href: "user-promotion.html", label: "Start With User Promotion", primary: true },
            { href: "contest.html", label: "See Contest", primary: false }
          ],
          sidePanels: [
            { title: "For promoters", text: "Understand daily limits, saved content, premium upgrades, gems, and campaign-style tools before you start." },
            { title: "For admins", text: "See how Force Join and add-bot gem rewards fit into moderation, channel growth, and group promotion." }
          ]
        },
        sections: [
          {
            type: "stats",
            title: "At a glance",
            intro: "The bot mixes simple daily promotion with gems, premium upgrades, and referral-driven growth.",
            items: [
              { value: "5", title: "Base daily user promos", text: "Standard private promotion starts with 5 daily uses and can grow through referrals." },
              { value: "2 / 10", title: "Daily group promo runs", text: "Standard users get 2 group-promo runs per day, while premium users get 10." },
              { value: "+65 / -70", title: "Add-bot gem swing", text: "Eligible group owners can earn 65 gems for adding the bot, but later removal triggers a 70 gem penalty." }
            ]
          },
          {
            type: "cards",
            title: "Main sections",
            intro: "Each major workflow has its own page so you can share the right explanation without sending people through raw commands.",
            items: [
              { kicker: "Core", title: "User Promotion", text: "How saved links or text are sent to up to 15 users inside the network." },
              { kicker: "Reach", title: "Group Promotion", text: "How saved content is pushed into active groups with standard or premium limits." },
              { kicker: "Gems", title: "Promo Join", text: "Advanced promotion where gems buy join-and-verify campaigns." },
              { kicker: "Media", title: "Pic Broad", text: "Premium image broadcast with one photo, one caption, and up to 350 sends per day." },
              { kicker: "Growth", title: "Referral", text: "How personal invite links add more standard promotions to your daily limit." },
              { kicker: "Event", title: "Contest", text: "How special referral contests award gems and track leaderboard results." },
              { kicker: "Admin", title: "Force Join", text: "How groups can require channel joins before users continue chatting." }
            ]
          },
          {
            type: "callout",
            title: "Better docs reduce support noise.",
            text: "When the public site reflects the real bot behavior, users ask fewer repetitive questions and feature expectations stay cleaner."
          }
        ]
      },
      userPromotion: {
        metaTitle: "User Promotion",
        metaDescription: "How standard user-to-user promotion works in the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Private Reach",
          title: "How standard promotion really works.",
          lead: "User Promotion is the base mode for sending your saved link or message to random users who are available in the network.",
          pills: ["5 daily base promos", "Up to 15 users per run", "Referral boosts"],
          actions: [
            { href: "referral.html", label: "See Referral Bonuses", primary: true },
            { href: "help.html", label: "Open Help", primary: false }
          ],
          sidePanels: [
            { title: "Best for", text: "Simple link pushes, short updates, usernames, and light daily promotion without spending gems." }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Basic workflow",
            intro: "The command path is short, but the bot still checks saved content and content type before sending.",
            items: [
              { kicker: "Step 1", title: "Save content in private chat", text: "Send a valid link, username, or message so the bot has something to promote." },
              { kicker: "Step 2", title: "Answer the NSFW check if asked", text: "Some saved content stays pending until you classify it correctly as normal or NSFW." },
              { kicker: "Step 3", title: "Run /promote", text: "The bot sends your saved content to up to 15 users and then updates your remaining daily count." }
            ]
          },
          {
            type: "cards",
            title: "What matters most",
            intro: "This mode is easy to start, but the real limits are more specific than the old site copy suggested.",
            items: [
              { kicker: "Base", title: "5 daily uses by default", text: "The standard daily limit starts at 5 promotions before any referral bonuses are added." },
              { kicker: "Bonus", title: "Referrals increase the cap", text: "Every 3 referrals add 3 more standard promotions to your daily total." },
              { kicker: "Match", title: "Saved content is reused", text: "You do not build a separate campaign. The bot uses the content you already saved in private chat." }
            ]
          }
        ]
      },
      groupPromotion: {
        metaTitle: "Group Promotion",
        metaDescription: "How group promotion works in the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Group Reach",
          title: "Promote saved content into groups.",
          lead: "Group Promotion sends your saved message into groups where promotion is active and available at the time of the run.",
          pills: ["2 runs standard", "10 runs premium", "15 or 35 group target"],
          actions: [
            { href: "premium.html", label: "Compare Premium", primary: true },
            { href: "help.html", label: "Need Help?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "How a run happens",
            intro: "The bot checks more than just the command. It also checks bans, daily usage, saved content, and whether promotable groups are available.",
            items: [
              { kicker: "Step 1", title: "Keep saved content ready", text: "If you do not have saved content, group promotion cannot start." },
              { kicker: "Step 2", title: "Run /chatpromo", text: "The bot checks your status and begins a background send into available groups." },
              { kicker: "Step 3", title: "Read the summary", text: "When the run finishes, the bot reports how many groups actually received the promotion." }
            ]
          },
          {
            type: "cards",
            title: "Real limits",
            intro: "There are two different limits here: how many runs you get per day and how many groups each run tries to reach.",
            items: [
              { kicker: "Standard", title: "2 runs per day", text: "Standard users can trigger group promotion twice per day, targeting up to 15 successful group sends per run." },
              { kicker: "Premium", title: "10 runs per day", text: "Premium users get 10 daily group-promo runs and each run can reach up to 35 successful group sends." },
              { kicker: "Result", title: "Availability still matters", text: "If no active promotable groups are available, the command will stop even if your daily usage has not been exhausted." }
            ]
          }
        ]
      },
      promoJoin: {
        metaTitle: "Promo Join",
        metaDescription: "How Promo Join campaigns work in the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Gem Campaigns",
          title: "Buy verified joins with gems.",
          lead: "Promo Join is the advanced mode where you spend gems to send a target chat to users and reward them when they join and verify successfully.",
          pills: ["Starts with gems", "Verifier rewards", "Premium discount tiers"],
          actions: [
            { href: "https://t.me/DealmanyBot?start=buygems", label: "Buy Gems", primary: true },
            { href: "premium.html", label: "See Premium Benefits", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "How the system works",
            intro: "This is more than a view-based promo. It is a join-and-verify flow with gem balances and active campaign tracking.",
            items: [
              { kicker: "Balance", title: "Users start with gems", text: "A Promo Join user profile is created with a gem balance, and that balance is used to launch campaigns." },
              { kicker: "Setup", title: "Target chat must be set first", text: "Use /promojoin to set the channel or group that should receive joins before using /advance." },
              { kicker: "Reward", title: "Verifiers earn 1 gem", text: "Users who join and verify successfully receive 1 gem for completing the task." }
            ]
          },
          {
            type: "steps",
            title: "Campaign flow",
            intro: "The menu is simple, but the lifecycle has a few important rules users should know.",
            items: [
              { kicker: "Step 1", title: "Set the destination with /promojoin", text: "The bot must also be an admin in that target chat so it can verify membership correctly." },
              { kicker: "Step 2", title: "Use /advance and choose a tier", text: "Different tiers trade gem cost against verification goals and send volume, with lower gem cost for premium users." },
              { kicker: "Step 3", title: "Wait for verify progress", text: "The bot notifies the promoter as verifications come in and closes the campaign once the goal is reached." }
            ]
          },
          {
            type: "callout",
            title: "Need more gems?",
            text: "If your balance is low, buy gems first and then launch the next Promo Join campaign without delay.",
            actions: [
              { href: "https://t.me/DealmanyBot?start=buygems", label: "Buy Gems", primary: true }
            ]
          },
          {
            type: "callout",
            title: "Staying joined matters.",
            text: "If a verifier leaves too early, the bot can warn them to rejoin and later deduct 2 gems if they stay out beyond the recovery window."
          }
        ]
      },
      picBroad: {
        metaTitle: "Pic Broad",
        metaDescription: "How Pic Broad works in the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Premium Media",
          title: "Run a premium image broadcast.",
          lead: "Pic Broad is a premium-only feature for sending one photo with a caption to a much larger set of users.",
          pills: ["Premium only", "1 run per day", "Up to 350 sends"],
          actions: [
            { href: "premium.html", label: "View Premium Plans", primary: true },
            { href: "help.html", label: "Need Help?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "How to use it",
            intro: "The format is simple, but the broadcast only starts after the bot has the exact media it needs.",
            items: [
              { kicker: "Step 1", title: "Start with /picbroad", text: "The bot first checks whether your account has premium access and whether you already used today’s slot." },
              { kicker: "Step 2", title: "Send the photo with a caption", text: "The caption becomes the broadcast text that travels with the image." },
              { kicker: "Step 3", title: "Wait for completion", text: "The bot processes the broadcast in the background and then reports sent and failed counts." }
            ]
          },
          {
            type: "cards",
            title: "Actual limits",
            intro: "This feature is stronger than normal user promotion, but it is still intentionally capped.",
            items: [
              { kicker: "Capacity", title: "Up to 350 users", text: "Premium users can broadcast to as many as 350 users in a single day." },
              { kicker: "Frequency", title: "Once per day", text: "A non-admin premium user can only run Pic Broad once each day." },
              { kicker: "Use case", title: "Best for strong visuals", text: "Launch cards, posters, event banners, and polished offers usually perform better here than plain text." }
            ]
          }
        ]
      },
      nsfwGuide: {
        metaTitle: "NSFW Guide",
        metaDescription: "What NSFW means in the Promoter Bot, why the bot asks, and what content is not allowed.",
        hero: {
          eyebrow: "Content Classification",
          title: "What NSFW means and why the bot asks.",
          lead: "When the bot finds a link in your message, it may ask whether the content is NSFW or Normal. This does not block your promotion. It helps the bot send content to the appropriate audience, so reach stays more meaningful and relevant.",
          pills: ["Not a restriction", "Audience matching", "Wrong labels can ban"],
          actions: [
            { href: "terms.html", label: "Read Terms", primary: true },
            { href: "help.html", label: "Back to Help", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "What the label means",
            intro: "The NSFW question is a content-classification step, not an automatic punishment.",
            items: [
              { kicker: "Normal", title: "Ordinary content", text: "Normal content is standard public-safe material that does not need adult or sensitive-audience handling." },
              { kicker: "NSFW", title: "Sensitive or adult content", text: "NSFW usually means adult, sexual, explicit, or otherwise sensitive content that should only be promoted to users who are okay receiving it." },
              { kicker: "Result", title: "Correct NSFW marking can still promote", text: "If your content is allowed, marking it as NSFW does not stop promotion. It simply helps the bot target a more suitable audience." }
            ]
          },
          {
            type: "steps",
            title: "Why the bot asks",
            intro: "This is the same logic reflected in the current bot warning shown after a link is detected.",
            items: [
              { kicker: "Step 1", title: "The bot finds a link", text: "If a message includes a link, the bot may ask whether that content is NSFW or Normal before saving or promoting it." },
              { kicker: "Step 2", title: "You choose the correct label", text: "Your answer helps the system understand what type of audience should receive the content." },
              { kicker: "Step 3", title: "Promotion stays audience-matched", text: "Allowed NSFW content can still be promoted, but the goal is to reach users who are more likely to accept that type of content." }
            ]
          },
          {
            type: "legal",
            title: "Important warnings",
            intro: "These rules matter even if your content is otherwise promotable.",
            items: [
              { title: "1. Marking NSFW as Normal can ban you", text: "If you label NSFW content as Normal, the account may receive a permanent ban." },
              { title: "2. Illegal or too explicit content is not allowed", text: "Promoting illegal, prohibited, or excessively explicit content may lead to a permanent ban no matter how it is labeled." },
              { title: "3. Repeated misleading classification can ban you", text: "If you repeatedly provide false or misleading content labels, the account may be permanently banned." },
              { title: "4. You are responsible for what you promote", text: "The bot is not responsible for your promotions, links, offers, media, or legal exposure. The user who submits and promotes the content remains responsible." }
            ]
          },
          {
            type: "callout",
            title: "NSFW is not the same as unrestricted.",
            text: "Allowed NSFW content may still be promoted to a suitable audience, but illegal content, prohibited material, and excessively explicit content can still be blocked and banned."
          }
        ]
      },
      referral: {
        metaTitle: "Referral",
        metaDescription: "How the referral system increases daily promotion power in the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Referral Growth",
          title: "Turn invites into more daily promos.",
          lead: "Referral gives each user a personal bot link and turns successful signups into extra standard promotion capacity.",
          pills: ["Personal invite link", "3-for-3 bonus", "Contest entry path"],
          actions: [
            { href: "contest.html", label: "See Contest Rules", primary: true },
            { href: "help.html", label: "Open Help", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "How referrals help",
            intro: "The normal referral system and the contest system are related, but they are not the same thing.",
            items: [
              { kicker: "Link", title: "Each user gets a personal URL", text: "The normal referral link uses your user ID so new signups can be tied back to your account." },
              { kicker: "Bonus", title: "Every 3 referrals add 3 promos", text: "For standard daily promotion, each block of 3 successful referrals adds 3 extra daily promotions." },
              { kicker: "Tracking", title: "Progress is visible in account", text: "Your account page shows total referrals, bonus promotions, and how many more referrals are needed for the next bonus." }
            ]
          },
          {
            type: "callout",
            title: "Referral and contest are separate layers.",
            text: "Normal referrals grow your daily standard limit. Contest referrals use a special contest link and focus on gem rewards plus leaderboard ranking."
          }
        ]
      },
      addMeGems: {
        metaTitle: "Add Bot & Gems",
        metaDescription: "How to add the Promoter Bot to groups for gem rewards, including broadcast consent and anti-abuse rules.",
        hero: {
          eyebrow: "Group Rewards",
          title: "Add the bot and earn gems.",
          lead: "If you add the bot to an eligible group and keep it there, the system can reward you with gems. Because this feature supports promotion delivery, the bot may occasionally send broadcasts to that group.",
          pills: ["Eligible groups can earn gems", "Broadcast consent required", "Removal can cost gems"],
          actions: [
            { href: "terms.html", label: "Read Terms", primary: true },
            { href: "help.html", label: "Need Help?", primary: false }
          ]
        },
        sections: [
          {
            type: "callout",
            title: "Consent comes first.",
            text: "By using this feature, you agree that a group added for gem rewards may occasionally receive bot broadcasts or promotion messages."
          },
          {
            type: "cards",
            title: "How rewards work",
            intro: "The current bot logic rewards qualifying adds, but it also protects the system against quick removals and low-quality abuse.",
            items: [
              { kicker: "Reward", title: "Eligible adds can earn +65 gems", text: "When a valid group add passes the system checks, the account can receive a 65-gem reward." },
              { kicker: "Penalty", title: "Removal can trigger -70 gems", text: "If the bot is removed after the reward flow, the system can deduct 70 gems from the linked account." },
              { kicker: "Quality", title: "Abuse checks still apply", text: "Fake groups, disposable setups, or suspicious reward farming can be rejected, reviewed, or blocked." }
            ]
          },
          {
            type: "steps",
            title: "Best way to use it",
            intro: "This feature is meant for real groups where admins understand what they are agreeing to.",
            items: [
              { kicker: "Step 1", title: "Add the bot only to a real group", text: "Only use groups where occasional bot broadcasts are acceptable to the admins and members." },
              { kicker: "Step 2", title: "Keep the bot active in the group", text: "The bot needs to stay added so the system can verify placement and keep the reward valid." },
              { kicker: "Step 3", title: "Avoid farming with throwaway setups", text: "Do not rotate many accounts or temporary groups just to multiply gem rewards." }
            ]
          },
          {
            type: "callout",
            title: "This is not a loophole for mass-account farming.",
            text: "Trying to multiply benefits through many Telegram accounts or low-quality groups can lead to temporary or permanent moderation."
          }
        ]
      },
      contest: {
        metaTitle: "Contest",
        metaDescription: "How the referral contest works in the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Referral Contest",
          title: "Compete for gems and leaderboard rank.",
          lead: "When the contest is active, users can share a special contest referral link, earn gems for joins, and chase top-referrer rewards.",
          pills: ["Top 3 rewards", "7 day contest window", "Premium referrals can count double"],
          actions: [
            { href: "referral.html", label: "Back to Referral", primary: true },
            { href: "help.html", label: "Open Help", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "How contest mode works",
            intro: "This feature only matters while the contest is active. It is started and stopped by the bot owner/admin side.",
            items: [
              { kicker: "Step 1", title: "Wait for an active contest", text: "The contest page and special contest button appear when a 7-day contest is active." },
              { kicker: "Step 2", title: "Share your contest referral link", text: "The contest uses a dedicated start parameter, separate from your normal referral link." },
              { kicker: "Step 3", title: "Track leaderboard and rules", text: "Users can open the leaderboard and contest rules directly from the contest menu while the event is running." }
            ]
          },
          {
            type: "cards",
            title: "Important rules",
            intro: "These are the public-facing rules reflected in the current bot logic and contest messages.",
            items: [
              { kicker: "Rewards", title: "Joins earn gems", text: "A valid contest referral awards gems to the inviter, and Telegram Premium referred users can award double gems." },
              { kicker: "Eligibility", title: "50 referrals for top-reward eligibility", text: "The bot states that top-3 referrers must reach at least 50 eligible referrals to qualify for contest rewards." },
              { kicker: "Timing", title: "Contest lasts 7 days", text: "The contest start flow sets a 7-day window, and reward distribution messaging says counts are handled within 7 days after the contest ends." }
            ]
          },
          {
            type: "callout",
            title: "The normal referral link still matters.",
            text: "If the contest is inactive, users should still share their normal referral link for daily-promotion bonuses. Contest rewards only apply during active contest periods."
          }
        ]
      },
      forceJoin: {
        metaTitle: "Force Join",
        metaDescription: "How Force Join works for group admins in the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Admin Control",
          title: "Require joins before users chat.",
          lead: "Force Join lets group admins block ordinary messages until users join one or more required channels first.",
          pills: ["Group-only setup", "Channel membership checks", "Messages can be deleted"],
          actions: [
            { href: "help.html", label: "Admin Help", primary: true },
            { href: "group-promotion.html", label: "See Group Promotion", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Setup flow",
            intro: "The commands are short, but both the group and the target channel need the right bot permissions.",
            items: [
              { kicker: "Step 1", title: "Add the bot to the group", text: "The bot must be present in the group where user messages will be checked." },
              { kicker: "Step 2", title: "Run /set in the group", text: "Use a channel ID or @username to add the required join destination for that group." },
              { kicker: "Step 3", title: "Use /unset to remove it", text: "Admins can later remove a required channel from the group’s force-join list." }
            ]
          },
          {
            type: "cards",
            title: "What the bot actually does",
            intro: "The current logic is stricter than a passive reminder. It can actively block message flow for non-members.",
            items: [
              { kicker: "Check", title: "Membership is checked live", text: "For every non-admin message, the bot checks whether the user joined each required channel." },
              { kicker: "Action", title: "Messages can be deleted", text: "If the user is missing a required join, the bot can delete the message and send join buttons back into the group." },
              { kicker: "Requirement", title: "Bot must access the target channel", text: "The bot needs channel access, and in many cases admin rights there, to verify membership properly." }
            ]
          }
        ]
      },
      premium: {
        metaTitle: "Premium",
        metaDescription: "Premium plans and feature access for the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Upgrade Access",
          title: "Premium gives your promotions priority.",
          lead: "Premium helps your tasks move faster, gives your campaigns stronger visibility, unlocks bigger promo tools, and reduces gem cost inside Promo Join tiers.",
          pills: ["Priority task placement", "10 group runs per day", "Lower Promo Join costs"],
          actions: [
            { href: "https://t.me/DealmanyBot?start=buypremium", label: "Get Premium", primary: true },
            { href: "promo-join.html", label: "See Promo Join", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Main benefits",
            intro: "Premium is about stronger placement, faster handling, and access to the bot’s bigger promotion tools.",
            items: [
              { kicker: "Broadcast", title: "Pic Broad access", text: "Premium unlocks image + caption broadcasting to up to 350 users per day." },
              { kicker: "Groups", title: "10 group-promo runs daily", text: "Premium raises group promotion from 2 runs per day to 10 runs per day." },
              { kicker: "Priority", title: "Tasks are shown first", text: "Premium tasks are placed ahead of standard ones so users see them earlier when matching campaigns are available." },
              { kicker: "Speed", title: "Faster actions and processing", text: "The premium flow is designed for quicker handling and higher priority across supported promo actions." },
              { kicker: "Support", title: "Priority support", text: "Premium users get faster support attention when they need help." },
              { kicker: "Gems", title: "Lower Promo Join tier cost", text: "Promo Join tiers charge fewer gems for premium users than for standard users." }
            ]
          },
          {
            type: "callout",
            title: "Use premium when visibility matters most.",
            text: "If you want your tasks shown first, faster promo handling, and access to stronger campaign tools, open premium directly in Telegram.",
            actions: [
              { href: "https://t.me/DealmanyBot?start=buypremium", label: "Get Premium", primary: true }
            ]
          }
        ]
      },
      help: {
        metaTitle: "Help",
        metaDescription: "Quick answers for users of the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Help Center",
          title: "Quick answers for the most common issues.",
          lead: "This page focuses on the questions users actually hit while saving content, promoting, earning gems, joining contests, and managing premium access.",
          pills: ["User questions", "Admin questions", "Contest included"],
          actions: [
            { href: "terms.html", label: "Terms", primary: true },
            { href: "privacy.html", label: "Privacy", primary: false }
          ]
        },
        sections: [
          {
            type: "faq",
            title: "Frequently asked questions",
            intro: "Use this page when a user needs a fast answer before contacting support.",
            items: [
              { q: "Why does the bot say I do not have saved content?", a: "Because your active saved content is empty. Send a valid message, link, or username in private chat first." },
              { q: "How many standard promotions do I get per day?", a: "The base limit is 5 daily standard promotions, and every 3 referrals add 3 more." },
              { q: "How many group promotions do I get?", a: "Standard users get 2 group-promo runs per day. Premium users get 10." },
              { q: "Why is Pic Broad unavailable?", a: "Pic Broad is premium-only and non-admin premium users can only use it once per day." },
              { q: "Why did Promo Join verification fail?", a: "Usually because the user did not fully join, the bot could not verify membership, or the campaign was already closed." },
              { q: "How does the contest differ from normal referral?", a: "Normal referral raises your daily standard-promo limit. Contest referral uses a special event link and awards gems while the contest is active." },
              { q: "Why is Force Join not working?", a: "The bot may be missing permissions in the group, access in the required channel, or the setup may not have been completed by a group admin." }
            ]
          }
        ]
      },
      terms: {
        metaTitle: "Terms",
        metaDescription: "Terms and conditions for the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Legal",
          title: "Terms and conditions.",
          lead: "These short terms explain the basic rules for using promotion tools, premium access, gem-based features, and moderation-related systems.",
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
            intro: "This page stays intentionally short and readable.",
            items: [
              { title: "1. Content responsibility", text: "You are responsible for the material you submit or promote through the service." },
              { title: "2. Fair use", text: "Illegal, deceptive, harmful, or abusive use can lead to restrictions, suspension, or permanent removal." },
              { title: "3. Standard-user account limit", text: "A normal user may keep only 2 bot accounts active at the same time. Using many Telegram accounts to gain extra limits, rewards, or promotion advantages is not allowed." },
              { title: "4. Enforcement on extra accounts", text: "If more than 2 standard accounts are detected, the system may temporarily or permanently ban the account with the lowest referral credit first. Earned rewards are usually kept safe, but access can still be restricted." },
              { title: "5. Premium multi-account exception", text: "Premium users may operate multiple accounts, but anti-spam, abuse, and moderation rules still apply to every premium account." },
              { title: "6. Changes", text: "Features, limits, contest rules, account policies, and moderation decisions may change over time." }
            ]
          }
        ]
      },
      privacy: {
        metaTitle: "Privacy",
        metaDescription: "Privacy policy for the Promoter Bot and Promotion Bot.",
        hero: {
          eyebrow: "Legal",
          title: "Privacy policy.",
          lead: "This policy explains the operating data that may be stored so the bot can deliver promotions, track limits, manage rewards, and maintain account state.",
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
            intro: "Only the data needed to operate the service and its promotion features should be retained.",
            items: [
              { title: "1. Account data", text: "User ID, username, name, timestamps, and service-status markers may be stored for normal operation." },
              { title: "2. Promotion data", text: "Saved links, text, content classification, targets, and campaign-state records may be stored to make features work." },
              { title: "3. Usage data", text: "Daily limits, referral totals, gem balances, group rewards, and campaign progress may be tracked." },
              { title: "4. Purpose", text: "The stored data supports delivery, anti-abuse checks, rewards, premium access, contest tracking, and moderation." }
            ]
          }
        ]
      }
    }
  },
  ru: {
    common: {
      siteName: "Документация Promoter Bot",
      siteTagline: "Понятные гайды по всем сценариям продвижения",
      logoAlt: "Логотип Promoter Bot",
      menuLabel: "Открыть навигацию",
      closeLabel: "Закрыть навигацию",
      mobileMenuTitle: "Навигация",
      mobileSections: {
        guide: "Разделы",
        legal: "Правовая информация"
      },
      navLabel: "Основная навигация",
      languageLabel: "Выберите язык",
      defaultSideTitle: "Для реальных пользователей",
      defaultSideText: "У каждой важной функции есть своя страница, чтобы можно было быстро открыть нужное объяснение.",
      footerTitle: "Документация Promoter Bot",
      footerNote: "Этот сайт объясняет текущую логику Promoter Bot и Promotion Bot для конечных пользователей. Реальные лимиты и доступ всё равно зависят от владельца бота и прав Telegram.",
      metaKeywords: "Promoter Bot, Promotion Bot, Telegram promotion bot, Telegram promoter bot",
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
        nsfwGuide: "NSFW",
        referral: "Рефералы",
        addMeGems: "Бот + gems",
        contest: "Конкурс",
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
        metaDescription: "Официальная многоязычная документация по Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Официальный гид",
          title: "Один сайт для всех режимов продвижения.",
          lead: "Этот сайт лучше совпадает с реальным ботом: обычное промо, групповое промо, Promo Join, рефералы, конкурс, premium-инструменты и админские функции.",
          pills: ["4 языка", "Текст по реальному боту", "Быстрые help-страницы"],
          actions: [
            { href: "user-promotion.html", label: "Открыть User Promotion", primary: true },
            { href: "contest.html", label: "Смотреть конкурс", primary: false }
          ],
          sidePanels: [
            { title: "Для промо-пользователей", text: "Разберитесь с дневными лимитами, сохранённым контентом, premium, gems и продвинутыми кампаниями ещё до старта." },
            { title: "Для админов", text: "Посмотрите, как Force Join и награды за добавление бота связаны с ростом канала и модерированием." }
          ]
        },
        sections: [
          {
            type: "stats",
            title: "Коротко о главном",
            intro: "Бот сочетает простое ежедневное продвижение, premium-апгрейд, gems и реферальный рост.",
            items: [
              { value: "5", title: "Базовых промо в день", text: "Обычное приватное промо стартует с 5 использований в день и может расти через рефералов." },
              { value: "2 / 10", title: "Групповых запусков в день", text: "Обычный пользователь получает 2 group-promo запуска в день, premium — 10." },
              { value: "+65 / -70", title: "Баланс за add-bot", text: "За подходящую группу можно получить 65 gems, но удаление бота потом даёт штраф 70 gems." }
            ]
          },
          {
            type: "cards",
            title: "Основные разделы",
            intro: "У каждого важного сценария есть отдельная страница, чтобы не отправлять людей в сырые команды бота.",
            items: [
              { kicker: "Core", title: "User Promotion", text: "Как сохранённая ссылка или текст уходит до 15 пользователям внутри сети." },
              { kicker: "Reach", title: "Group Promotion", text: "Как сохранённый контент уходит в активные группы по стандартным или premium-лимитам." },
              { kicker: "Gems", title: "Promo Join", text: "Продвинутый режим, где gems тратятся на join-and-verify кампании." },
              { kicker: "Media", title: "Pic Broad", text: "Premium-рассылка: одна картинка, одна подпись и до 350 отправок в день." },
              { kicker: "Growth", title: "Referral", text: "Как личная ссылка добавляет больше обычных промо в ваш дневной лимит." },
              { kicker: "Event", title: "Contest", text: "Как специальный конкурс по рефералам выдаёт gems и ведёт таблицу лидеров." },
              { kicker: "Admin", title: "Force Join", text: "Как заставить пользователей вступить в канал до продолжения общения." }
            ]
          },
          {
            type: "callout",
            title: "Точные тексты уменьшают хаос.",
            text: "Когда публичная документация совпадает с реальным поведением бота, у пользователей меньше ложных ожиданий и повторяющихся вопросов."
          }
        ]
      },
      userPromotion: {
        metaTitle: "Промо пользователям",
        metaDescription: "Как работает стандартное продвижение между пользователями в Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Приватный охват",
          title: "Как реально работает стандартное промо.",
          lead: "User Promotion — базовый режим, где ваша сохранённая ссылка или текст отправляется случайным доступным пользователям в сети.",
          pills: ["5 базовых промо", "До 15 пользователей за запуск", "Реферальные бонусы"],
          actions: [
            { href: "referral.html", label: "Смотреть реферальные бонусы", primary: true },
            { href: "help.html", label: "Открыть помощь", primary: false }
          ],
          sidePanels: [
            { title: "Лучше всего подходит для", text: "Быстрых ссылок, коротких обновлений, username и лёгкого ежедневного продвижения без траты gems." }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Базовый сценарий",
            intro: "Командный путь короткий, но бот всё равно проверяет сохранённый контент и тип контента перед отправкой.",
            items: [
              { kicker: "Шаг 1", title: "Сохраните контент в личном чате", text: "Отправьте валидную ссылку, username или текст, чтобы у бота было что продвигать." },
              { kicker: "Шаг 2", title: "Ответьте на NSFW-вопрос, если он появился", text: "Некоторый сохранённый контент остаётся в ожидании, пока вы не укажете правильно normal или NSFW." },
              { kicker: "Шаг 3", title: "Запустите /promote", text: "Бот отправит сохранённый контент максимум 15 пользователям и обновит дневной остаток." }
            ]
          },
          {
            type: "cards",
            title: "Что важно знать",
            intro: "Этот режим простой, но реальные лимиты конкретнее, чем было написано раньше.",
            items: [
              { kicker: "Base", title: "5 использований в день по умолчанию", text: "Стандартный дневной лимит начинается с 5 промо, пока не добавятся реферальные бонусы." },
              { kicker: "Bonus", title: "Рефералы расширяют лимит", text: "Каждые 3 реферала добавляют ещё 3 обычных промо в день." },
              { kicker: "Reuse", title: "Используется уже сохранённый контент", text: "Не нужно собирать отдельную кампанию: бот берёт то, что вы уже сохранили в private chat." }
            ]
          }
        ]
      },
      groupPromotion: {
        metaTitle: "Промо в группы",
        metaDescription: "Как работает групповое продвижение в Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Охват через сообщества",
          title: "Продвигайте сохранённый контент в группах.",
          lead: "Group Promotion отправляет ваше сохранённое сообщение в группы, где продвижение сейчас активно и доступно.",
          pills: ["2 запуска standard", "10 запусков premium", "Цель 15 или 35 групп"],
          actions: [
            { href: "premium.html", label: "Сравнить Premium", primary: true },
            { href: "help.html", label: "Нужна помощь?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Как проходит запуск",
            intro: "Бот проверяет не только команду, но и бан-статус, дневной usage, saved content и наличие доступных групп.",
            items: [
              { kicker: "Шаг 1", title: "Держите saved content готовым", text: "Если сохранённого контента нет, групповое промо не сможет стартовать." },
              { kicker: "Шаг 2", title: "Запустите /chatpromo", text: "Бот проверяет статус и начинает фоновую отправку в доступные группы." },
              { kicker: "Шаг 3", title: "Прочитайте итог", text: "Когда run завершается, бот показывает, сколько групп реально получили промо." }
            ]
          },
          {
            type: "cards",
            title: "Реальные лимиты",
            intro: "Здесь есть два лимита: сколько запусков в день и сколько групп пытается достичь один запуск.",
            items: [
              { kicker: "Standard", title: "2 запуска в день", text: "Обычный пользователь может запустить group promotion дважды в день, и каждый запуск старается дойти до 15 успешных отправок." },
              { kicker: "Premium", title: "10 запусков в день", text: "Premium даёт 10 запусков в день, а каждая сессия может дойти до 35 успешных group sends." },
              { kicker: "Availability", title: "Наличие групп всё равно решает", text: "Если активных promotable groups нет, команда остановится, даже если дневной usage ещё не закончился." }
            ]
          }
        ]
      },
      promoJoin: {
        metaTitle: "Promo Join",
        metaDescription: "Как работают кампании Promo Join в Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Кампании за gems",
          title: "Покупайте подтверждённые вступления за gems.",
          lead: "Promo Join — продвинутый режим, где вы тратите gems, чтобы отправить целевой чат пользователям и наградить их после успешного join + verify.",
          pills: ["Старт с gems", "Награда verifier", "Скидка по tier для premium"],
          actions: [
            { href: "https://t.me/DealmanyBot?start=buygems", label: "Купить gems", primary: true },
            { href: "premium.html", label: "Смотреть преимущества premium", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Как устроена система",
            intro: "Это не режим на просмотры. Здесь есть gem-баланс, активные кампании и схема join-and-verify.",
            items: [
              { kicker: "Balance", title: "Пользователь получает gem-профиль", text: "Для Promo Join создаётся отдельный профиль с балансом gems, и именно он тратится на кампании." },
              { kicker: "Setup", title: "Сначала нужно задать target chat", text: "Используйте /promojoin, чтобы установить канал или группу, а уже потом открывайте /advance." },
              { kicker: "Reward", title: "Verifier получает 1 gem", text: "Пользователь, который вступил и успешно подтвердился, получает 1 gem за задачу." }
            ]
          },
          {
            type: "steps",
            title: "Путь кампании",
            intro: "Меню простое, но есть несколько важных правил, о которых пользователю лучше знать заранее.",
            items: [
              { kicker: "Шаг 1", title: "Настройте назначение через /promojoin", text: "Бот тоже должен быть админом в этом target chat, чтобы membership-check работал правильно." },
              { kicker: "Шаг 2", title: "Откройте /advance и выберите tier", text: "Разные tiers меняют цену в gems, цель по verify и объём отправки; premium платит меньше." },
              { kicker: "Шаг 3", title: "Ждите verify-прогресс", text: "Бот уведомляет промоутера по мере прихода verify и закрывает кампанию после достижения цели." }
            ]
          },
          {
            type: "callout",
            title: "Нужно больше gems?",
            text: "Если баланс заканчивается, сначала пополните gems, а потом запускайте следующую Promo Join кампанию без паузы.",
            actions: [
              { href: "https://t.me/DealmanyBot?start=buygems", label: "Купить gems", primary: true }
            ]
          },
          {
            type: "callout",
            title: "Оставаться в чате тоже важно.",
            text: "Если verifier вышел слишком рано, бот может попросить вернуться и позже списать 2 gems, если пользователь не вернётся в recovery window."
          }
        ]
      },
      picBroad: {
        metaTitle: "Pic Broad",
        metaDescription: "Как работает Pic Broad в Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Premium Media",
          title: "Запускайте premium image broadcast.",
          lead: "Pic Broad — premium-only функция для отправки одной фотографии с подписью на гораздо большую пользовательскую аудиторию.",
          pills: ["Только premium", "1 запуск в день", "До 350 отправок"],
          actions: [
            { href: "premium.html", label: "Смотреть Premium", primary: true },
            { href: "help.html", label: "Нужна помощь?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Как использовать",
            intro: "Формат очень простой, но broadcast стартует только после получения нужного медиа.",
            items: [
              { kicker: "Шаг 1", title: "Стартуйте с /picbroad", text: "Сначала бот проверяет premium-доступ и свободен ли сегодняшний слот." },
              { kicker: "Шаг 2", title: "Отправьте фото с подписью", text: "Подпись становится текстом broadcast-сообщения, которое уходит вместе с изображением." },
              { kicker: "Шаг 3", title: "Дождитесь завершения", text: "Бот обрабатывает рассылку в фоне и потом показывает sent/failed статистику." }
            ]
          },
          {
            type: "cards",
            title: "Фактические лимиты",
            intro: "Функция сильнее обычного user promotion, но она всё равно жёстко ограничена.",
            items: [
              { kicker: "Capacity", title: "До 350 пользователей", text: "Premium-пользователь может отправить Pic Broad максимум 350 пользователям за день." },
              { kicker: "Frequency", title: "Один раз в день", text: "Обычный premium-пользователь, не админ, может запускать Pic Broad только один раз в день." },
              { kicker: "Use case", title: "Лучше всего работает с сильным визуалом", text: "Карточки запуска, постеры, ивенты и polished offers обычно чувствуют себя здесь лучше plain text." }
            ]
          }
        ]
      },
      nsfwGuide: {
        metaTitle: "NSFW Guide",
        metaDescription: "Что означает NSFW в Promoter Bot, зачем бот спрашивает об этом и какой контент запрещён.",
        hero: {
          eyebrow: "Классификация контента",
          title: "Что значит NSFW и зачем бот спрашивает.",
          lead: "Когда бот находит ссылку в вашем сообщении, он может спросить, является ли контент NSFW или Normal. Это не блокирует продвижение. Это помогает отправлять контент подходящей аудитории, чтобы охват был более осмысленным и релевантным.",
          pills: ["Это не ограничение", "Подбор аудитории", "Неверная метка может забанить"],
          actions: [
            { href: "terms.html", label: "Читать условия", primary: true },
            { href: "help.html", label: "Назад к help", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Что означает эта метка",
            intro: "Вопрос про NSFW — это шаг классификации контента, а не автоматическое наказание.",
            items: [
              { kicker: "Normal", title: "Обычный контент", text: "Normal-контент — это стандартный материал, безопасный для широкой аудитории и не требующий adult или sensitive-обработки." },
              { kicker: "NSFW", title: "Чувствительный или adult-контент", text: "NSFW обычно означает adult, sexual, explicit или иной чувствительный контент, который нужно показывать только тем пользователям, кто готов его получать." },
              { kicker: "Result", title: "Правильная NSFW-метка всё ещё позволяет промо", text: "Если ваш контент разрешён, метка NSFW не останавливает продвижение. Она просто помогает подобрать более подходящую аудиторию." }
            ]
          },
          {
            type: "steps",
            title: "Почему бот спрашивает",
            intro: "Это та же логика, которая отражена в текущем предупреждении бота после обнаружения ссылки.",
            items: [
              { kicker: "Шаг 1", title: "Бот находит ссылку", text: "Если в сообщении есть ссылка, бот может спросить, является ли этот контент NSFW или Normal, до сохранения или продвижения." },
              { kicker: "Шаг 2", title: "Вы выбираете правильную метку", text: "Ваш ответ помогает системе понять, какой аудитории стоит показывать такой контент." },
              { kicker: "Шаг 3", title: "Промо остаётся аудиторно-точным", text: "Разрешённый NSFW-контент всё ещё может продвигаться, но цель — дойти до пользователей, которые с большей вероятностью готовы его получать." }
            ]
          },
          {
            type: "legal",
            title: "Важные предупреждения",
            intro: "Эти правила важны даже тогда, когда контент сам по себе мог бы продвигаться.",
            items: [
              { title: "1. NSFW, отмеченный как Normal, может забанить", text: "Если вы помечаете NSFW-контент как Normal, аккаунт может получить permanent ban." },
              { title: "2. Нелегальный или слишком explicit-контент запрещён", text: "Продвижение illegal, prohibited или excessively explicit контента может привести к permanent ban независимо от метки." },
              { title: "3. Повторяющаяся ложная классификация может забанить", text: "Если вы многократно даёте ложные или вводящие в заблуждение метки, аккаунт может быть permanently banned." },
              { title: "4. Ответственность за промо остаётся на вас", text: "Бот не несёт ответственности за ваши promotions, links, offers, media или юридические последствия. Ответственность остаётся на пользователе, который отправляет и продвигает контент." }
            ]
          },
          {
            type: "callout",
            title: "NSFW не означает безусловное разрешение.",
            text: "Разрешённый NSFW-контент может продвигаться для подходящей аудитории, но illegal content, prohibited material и excessively explicit контент всё равно могут быть заблокированы и привести к бану."
          }
        ]
      },
      referral: {
        metaTitle: "Рефералы",
        metaDescription: "Как реферальная система повышает дневную промо-мощность в Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Реферальный рост",
          title: "Превращайте приглашения в большее число дневных промо.",
          lead: "Referral выдаёт пользователю личную ссылку на бота и превращает успешные регистрации в дополнительную стандартную промо-ёмкость.",
          pills: ["Личная invite-ссылка", "Бонус 3-за-3", "Связь с contest"],
          actions: [
            { href: "contest.html", label: "Смотреть правила конкурса", primary: true },
            { href: "help.html", label: "Открыть помощь", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Как помогают рефералы",
            intro: "Обычная реферальная система и contest-система связаны, но это не одно и то же.",
            items: [
              { kicker: "Link", title: "У каждого пользователя есть личный URL", text: "Обычная referral-ссылка использует ваш user ID, чтобы бот мог привязать новый signup к вашему аккаунту." },
              { kicker: "Bonus", title: "Каждые 3 реферала дают 3 промо", text: "Для standard daily promotion каждая тройка успешных referrals добавляет ещё 3 промо в день." },
              { kicker: "Tracking", title: "Прогресс виден в account", text: "На странице аккаунта видны total referrals, bonus promotions и сколько ещё рефералов нужно до следующего бонуса." }
            ]
          },
          {
            type: "callout",
            title: "Referral и contest — это разные слои.",
            text: "Обычный referral увеличивает daily standard limit. Contest referral использует особую event-link и фокусируется на gems и leaderboard."
          }
        ]
      },
      addMeGems: {
        metaTitle: "Бот + gems",
        metaDescription: "Как добавлять Promoter Bot в группы ради gem-наград, включая согласие на broadcast и anti-abuse правила.",
        hero: {
          eyebrow: "Награды за группы",
          title: "Добавьте бота и получайте gems.",
          lead: "Если вы добавите бота в подходящую группу и оставите его там, система может выдать вам gems. Поскольку эта функция поддерживает доставку промо, бот может время от времени отправлять broadcast в эту группу.",
          pills: ["Подходящие группы дают gems", "Нужно согласие на broadcast", "Удаление может стоить gems"],
          actions: [
            { href: "terms.html", label: "Читать условия", primary: true },
            { href: "help.html", label: "Нужна помощь?", primary: false }
          ]
        },
        sections: [
          {
            type: "callout",
            title: "Сначала согласие.",
            text: "Используя эту функцию, вы соглашаетесь, что группа, добавленная ради gem-наград, может иногда получать broadcast или promo-сообщения от бота."
          },
          {
            type: "cards",
            title: "Как работают награды",
            intro: "Текущая логика бота награждает подходящие добавления, но одновременно защищает систему от быстрых удалений и низкокачественного abuse.",
            items: [
              { kicker: "Reward", title: "Подходящее добавление может дать +65 gems", text: "Если валидное добавление группы проходит системные проверки, аккаунт может получить награду в 65 gems." },
              { kicker: "Penalty", title: "Удаление может дать -70 gems", text: "Если бот удаляется после reward-flow, система может списать 70 gems со связанного аккаунта." },
              { kicker: "Quality", title: "Проверки на abuse всё равно работают", text: "Фейковые группы, одноразовые схемы и подозрительный reward-farming могут быть отклонены, отправлены на проверку или заблокированы." }
            ]
          },
          {
            type: "steps",
            title: "Как использовать правильно",
            intro: "Эта функция предназначена для реальных групп, где админы понимают, на что они соглашаются.",
            items: [
              { kicker: "Шаг 1", title: "Добавляйте бота только в реальную группу", text: "Используйте только те группы, где occasional bot broadcasts приемлемы для админов и участников." },
              { kicker: "Шаг 2", title: "Держите бота активным в группе", text: "Бот должен оставаться добавленным, чтобы система могла подтвердить placement и сохранить награду валидной." },
              { kicker: "Шаг 3", title: "Не фармите на одноразовых схемах", text: "Не крутите много аккаунтов или временных групп только ради умножения gem-наград." }
            ]
          },
          {
            type: "callout",
            title: "Это не лазейка для массового фарма аккаунтами.",
            text: "Попытки умножать выгоду через множество Telegram-аккаунтов или низкокачественные группы могут привести к временной или постоянной модерации."
          }
        ]
      },
      contest: {
        metaTitle: "Конкурс",
        metaDescription: "Как работает реферальный конкурс в Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Реферальный конкурс",
          title: "Соревнуйтесь за gems и место в лидерах.",
          lead: "Когда contest активен, пользователи делятся специальной contest-ссылкой, получают gems за joins и борются за top-referrer rewards.",
          pills: ["Награды top 3", "Окно 7 дней", "Premium referrals могут давать double reward"],
          actions: [
            { href: "referral.html", label: "Назад к Referral", primary: true },
            { href: "help.html", label: "Открыть помощь", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Как работает contest mode",
            intro: "Эта функция важна только когда contest active. Его включает и выключает owner/admin сторона.",
            items: [
              { kicker: "Шаг 1", title: "Дождитесь активного contest", text: "Страница contest и специальная кнопка появляются, когда идёт активный 7-дневный contest." },
              { kicker: "Шаг 2", title: "Поделитесь своей contest referral link", text: "Для конкурса используется отдельный start-параметр, а не обычная реферальная ссылка." },
              { kicker: "Шаг 3", title: "Следите за leaderboard и rules", text: "Пользователь может открыть leaderboard и contest rules прямо из contest menu, пока event идёт." }
            ]
          },
          {
            type: "cards",
            title: "Главные правила",
            intro: "Это публичные правила, которые сейчас отражены в сообщениях бота и contest-логике.",
            items: [
              { kicker: "Rewards", title: "Вступления дают gems", text: "Валидный contest referral приносит inviter-у gems, а приглашённые Telegram Premium users могут давать двойную награду." },
              { kicker: "Eligibility", title: "50 referrals для top-reward eligibility", text: "Бот прямо пишет, что для призов top 3 нужно иметь минимум 50 eligible referrals." },
              { kicker: "Timing", title: "Contest длится 7 дней", text: "Contest start-поток устанавливает 7-дневное окно, а выдача rewards по сообщению распределяется в течение 7 дней после окончания." }
            ]
          },
          {
            type: "callout",
            title: "Обычная referral-ссылка всё равно полезна.",
            text: "Если contest inactive, пользователю всё равно стоит делиться обычной referral-ссылкой ради bonus promos. Contest rewards работают только во время активного event."
          }
        ]
      },
      forceJoin: {
        metaTitle: "Force Join",
        metaDescription: "Как Force Join работает для администраторов групп в Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Admin Control",
          title: "Требуйте вступления до переписки.",
          lead: "Force Join позволяет админам группы блокировать обычные сообщения, пока пользователь не вступит в один или несколько обязательных каналов.",
          pills: ["Настройка только в группе", "Проверка membership", "Сообщения могут удаляться"],
          actions: [
            { href: "help.html", label: "Помощь для админов", primary: true },
            { href: "group-promotion.html", label: "Смотреть Group Promotion", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Порядок настройки",
            intro: "Команды короткие, но и у группы, и у target channel должны быть корректные права для бота.",
            items: [
              { kicker: "Шаг 1", title: "Добавьте бота в группу", text: "Бот должен быть в группе, где будут проверяться обычные пользовательские сообщения." },
              { kicker: "Шаг 2", title: "Используйте /set прямо в группе", text: "Передайте channel ID или @username, чтобы добавить обязательную точку вступления для этой группы." },
              { kicker: "Шаг 3", title: "Используйте /unset для удаления", text: "Позже админы могут убрать нужный канал из force-join списка группы." }
            ]
          },
          {
            type: "cards",
            title: "Что бот реально делает",
            intro: "Текущая логика строже, чем простой reminder: она реально может блокировать message flow для non-members.",
            items: [
              { kicker: "Check", title: "Membership проверяется вживую", text: "Для каждого сообщения от не-админа бот проверяет, вступил ли пользователь во все required channels." },
              { kicker: "Action", title: "Сообщения могут удаляться", text: "Если пользователь не выполнил required join, бот может удалить сообщение и отправить join-кнопки обратно в группу." },
              { kicker: "Requirement", title: "Боту нужен доступ к target channel", text: "Бот должен видеть целевой канал и часто иметь там admin-доступ, чтобы membership-check был корректным." }
            ]
          }
        ]
      },
      premium: {
        metaTitle: "Premium",
        metaDescription: "Premium-планы и доступ к функциям для Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Upgrade Access",
          title: "Premium даёт приоритет вашим промо.",
          lead: "Premium помогает задачам проходить быстрее, усиливает видимость кампаний, открывает более мощные инструменты продвижения и снижает gem cost внутри Promo Join tiers.",
          pills: ["Приоритет задач", "10 group runs в день", "Дешевле tiers в Promo Join"],
          actions: [
            { href: "https://t.me/DealmanyBot?start=buypremium", label: "Get Premium", primary: true },
            { href: "promo-join.html", label: "Смотреть Promo Join", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Главные преимущества",
            intro: "Premium нужен для более сильного размещения, более быстрой обработки и доступа к самым мощным promo-инструментам бота.",
            items: [
              { kicker: "Broadcast", title: "Доступ к Pic Broad", text: "Premium открывает image + caption broadcast до 350 пользователей в день." },
              { kicker: "Groups", title: "10 group-promo запусков в день", text: "Premium поднимает group promotion с 2 запусков в день до 10 запусков в день." },
              { kicker: "Priority", title: "Задачи показываются первыми", text: "Premium-задачи ставятся впереди стандартных, поэтому пользователи видят их раньше, когда доступна подходящая кампания." },
              { kicker: "Speed", title: "Быстрее действия и обработка", text: "Premium-режим рассчитан на более быструю обработку и повышенный приоритет в поддерживаемых promo-действиях." },
              { kicker: "Support", title: "Приоритетная поддержка", text: "Premium-пользователи получают более быстрое внимание поддержки, когда нужна помощь." },
              { kicker: "Gems", title: "Меньшая цена tier в Promo Join", text: "Для premium-пользователя Promo Join tiers стоят меньше gems, чем для standard user." }
            ]
          },
          {
            type: "callout",
            title: "Выбирайте premium, когда важна максимальная видимость.",
            text: "Если вам нужно, чтобы задачи показывались первыми, promo обрабатывалось быстрее, а крупные инструменты были открыты, откройте premium прямо в Telegram.",
            actions: [
              { href: "https://t.me/DealmanyBot?start=buypremium", label: "Get Premium", primary: true }
            ]
          }
        ]
      },
      help: {
        metaTitle: "Помощь",
        metaDescription: "Быстрые ответы для пользователей Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Help Center",
          title: "Короткие ответы на самые частые проблемы.",
          lead: "Эта страница покрывает вопросы, которые реально возникают при сохранении контента, запуске промо, получении gems, участии в contest и работе с premium.",
          pills: ["Вопросы пользователей", "Вопросы админов", "Contest тоже включён"],
          actions: [
            { href: "terms.html", label: "Условия", primary: true },
            { href: "privacy.html", label: "Конфиденциальность", primary: false }
          ]
        },
        sections: [
          {
            type: "faq",
            title: "Частые вопросы",
            intro: "Эту страницу удобно отправлять пользователю ещё до обращения в поддержку.",
            items: [
              { q: "Почему бот пишет, что нет сохранённого контента?", a: "Потому что active saved content пуст. Сначала отправьте валидное сообщение, ссылку или username в личный чат." },
              { q: "Сколько стандартных промо у меня в день?", a: "Базовый лимит — 5 обычных промо в день, а каждые 3 реферала добавляют ещё 3." },
              { q: "Сколько у меня group-promo запусков?", a: "Обычный пользователь получает 2 group-promo run в день. Premium-пользователь получает 10." },
              { q: "Почему Pic Broad недоступен?", a: "Pic Broad — premium-only функция, и для non-admin premium пользователя её можно использовать только один раз в день." },
              { q: "Почему verify в Promo Join не прошёл?", a: "Обычно из-за того, что пользователь не завершил join, бот не смог проверить membership, или campaign уже закрылась." },
              { q: "Чем contest отличается от обычного referral?", a: "Обычный referral повышает daily standard limit. Contest referral использует специальную event-link и выдаёт gems только во время активного конкурса." },
              { q: "Почему Force Join не работает?", a: "У бота может не хватать прав в группе, доступа в required channel или настройку мог не завершить group admin." }
            ]
          }
        ]
      },
      terms: {
        metaTitle: "Условия",
        metaDescription: "Условия использования Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Legal",
          title: "Условия использования.",
          lead: "Эти короткие условия объясняют базовые правила использования promotion tools, premium access, gem-based функций и moderation-сценариев.",
          pills: ["Читаемые правила", "Ответственность пользователя", "Правила доступа"],
          actions: [
            { href: "privacy.html", label: "Открыть privacy", primary: true },
            { href: "help.html", label: "Назад к help", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Основные правила",
            intro: "Страница специально сделана короткой и понятной.",
            items: [
              { title: "1. Ответственность за контент", text: "Вы несёте ответственность за материалы, которые отправляете или продвигаете через сервис." },
              { title: "2. Честное использование", text: "Незаконное, вредное, обманное или агрессивное использование может привести к ограничениям, блокировке или удалению доступа." },
              { title: "3. Лимит аккаунтов для обычного пользователя", text: "Обычный пользователь может держать активными только 2 аккаунта в боте одновременно. Использовать много Telegram-аккаунтов ради дополнительных лимитов, rewards или promo-преимуществ нельзя." },
              { title: "4. Что будет при лишних аккаунтах", text: "Если система найдёт более 2 стандартных аккаунтов, она может временно или навсегда забанить в первую очередь аккаунт с наименьшим referral credit. Уже заработанные rewards обычно остаются в безопасности, но доступ всё равно может быть ограничен." },
              { title: "5. Исключение для premium", text: "Premium-пользователи могут работать с несколькими аккаунтами, но anti-spam, abuse и moderation-правила всё равно действуют для каждого premium-аккаунта." },
              { title: "6. Изменения", text: "Функции, лимиты, contest-правила, account-политики и moderation-решения могут меняться со временем." }
            ]
          }
        ]
      },
      privacy: {
        metaTitle: "Конфиденциальность",
        metaDescription: "Политика конфиденциальности для Promoter Bot и Promotion Bot.",
        hero: {
          eyebrow: "Legal",
          title: "Политика конфиденциальности.",
          lead: "Эта политика объясняет, какие рабочие данные могут храниться, чтобы бот мог доставлять промо, отслеживать лимиты, управлять rewards и держать account state.",
          pills: ["Операционные данные", "Данные аккаунта", "История промо"],
          actions: [
            { href: "terms.html", label: "Открыть terms", primary: true },
            { href: "help.html", label: "Назад к help", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Какие данные могут храниться",
            intro: "Сохраняться должны только данные, которые реально нужны для работы сервиса и его promotion-функций.",
            items: [
              { title: "1. Данные аккаунта", text: "Для обычной работы могут храниться user ID, username, имя, timestamps и service-status markers." },
              { title: "2. Данные промо", text: "Сохранённые links, text, content classification, targets и campaign-state записи могут храниться для работы функций." },
              { title: "3. Данные использования", text: "Могут отслеживаться daily limits, referral totals, gem balances, group rewards и progress campaigns." },
              { title: "4. Назначение", text: "Эти данные поддерживают delivery, anti-abuse checks, rewards, premium access, contest tracking и moderation." }
            ]
          }
        ]
      }
    }
  },
  uk: {
    common: {
      siteName: "Документація Promoter Bot",
      siteTagline: "Зрозумілі гайди по всіх сценаріях просування",
      logoAlt: "Логотип Promoter Bot",
      menuLabel: "Відкрити навігацію",
      closeLabel: "Закрити навігацію",
      mobileMenuTitle: "Навігація",
      mobileSections: {
        guide: "Розділи",
        legal: "Правова інформація"
      },
      navLabel: "Основна навігація",
      languageLabel: "Оберіть мову",
      defaultSideTitle: "Для реальних користувачів",
      defaultSideText: "Кожна важлива функція має окрему сторінку, щоб можна було швидко відкрити потрібне пояснення.",
      footerTitle: "Документація Promoter Bot",
      footerNote: "Цей сайт пояснює поточну логіку Promoter Bot і Promotion Bot для кінцевих користувачів. Реальні ліміти та доступ усе одно залежать від власника бота і прав Telegram.",
      metaKeywords: "Promoter Bot, Promotion Bot, Telegram promotion bot, Telegram promoter bot",
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
        nsfwGuide: "NSFW",
        referral: "Реферали",
        addMeGems: "Бот + gems",
        contest: "Конкурс",
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
        metaDescription: "Офіційна багатомовна документація для Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Офіційний гід",
          title: "Один сайт для всіх режимів просування.",
          lead: "Цей сайт краще збігається з реальним ботом: звичайне промо, групове промо, Promo Join, реферали, конкурс, premium-інструменти та адмінські функції.",
          pills: ["4 мови", "Текст під реальний бот", "Швидкі help-сторінки"],
          actions: [
            { href: "user-promotion.html", label: "Відкрити User Promotion", primary: true },
            { href: "contest.html", label: "Дивитися конкурс", primary: false }
          ],
          sidePanels: [
            { title: "Для промо-користувачів", text: "Розберіться з денними лімітами, saved content, premium, gems і просунутими кампаніями ще до старту." },
            { title: "Для адмінів", text: "Подивіться, як Force Join і нагороди за додавання бота пов'язані з ростом каналу й модеруванням." }
          ]
        },
        sections: [
          {
            type: "stats",
            title: "Коротко про головне",
            intro: "Бот поєднує просте щоденне просування, premium-апгрейд, gems і реферальне зростання.",
            items: [
              { value: "5", title: "Базових промо на день", text: "Звичайне приватне промо стартує з 5 використань на день і може зростати через рефералів." },
              { value: "2 / 10", title: "Групових запусків на день", text: "Звичайний користувач отримує 2 group-promo запуски на день, premium — 10." },
              { value: "+65 / -70", title: "Баланс за add-bot", text: "За відповідну групу можна отримати 65 gems, але пізніше видалення бота дає штраф 70 gems." }
            ]
          },
          {
            type: "cards",
            title: "Основні розділи",
            intro: "Кожен важливий сценарій має окрему сторінку, щоб не відправляти людей у сирі команди бота.",
            items: [
              { kicker: "Core", title: "User Promotion", text: "Як збережене посилання або текст іде до 15 користувачів усередині мережі." },
              { kicker: "Reach", title: "Group Promotion", text: "Як збережений контент надсилається в активні групи за standard або premium-лімітами." },
              { kicker: "Gems", title: "Promo Join", text: "Просунутий режим, де gems витрачаються на join-and-verify кампанії." },
              { kicker: "Media", title: "Pic Broad", text: "Premium-розсилка: одна картинка, один caption і до 350 відправок на день." },
              { kicker: "Growth", title: "Referral", text: "Як особисте посилання додає більше звичайних промо у ваш денний ліміт." },
              { kicker: "Event", title: "Contest", text: "Як спеціальний реферальний конкурс видає gems і веде таблицю лідерів." },
              { kicker: "Admin", title: "Force Join", text: "Як змусити користувачів вступити в канал до продовження спілкування." }
            ]
          },
          {
            type: "callout",
            title: "Точні тексти зменшують хаос.",
            text: "Коли публічна документація збігається з реальною поведінкою бота, у користувачів менше хибних очікувань і повторюваних питань."
          }
        ]
      },
      userPromotion: {
        metaTitle: "Промо користувачам",
        metaDescription: "Як працює стандартне просування між користувачами в Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Приватне охоплення",
          title: "Як реально працює стандартне промо.",
          lead: "User Promotion — базовий режим, де ваше збережене посилання або текст надсилається випадковим доступним користувачам у мережі.",
          pills: ["5 базових промо", "До 15 користувачів за запуск", "Реферальні бонуси"],
          actions: [
            { href: "referral.html", label: "Подивитися реферальні бонуси", primary: true },
            { href: "help.html", label: "Відкрити допомогу", primary: false }
          ],
          sidePanels: [
            { title: "Найкраще підходить для", text: "Швидких посилань, коротких оновлень, username і легкого щоденного просування без витрати gems." }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Базовий сценарій",
            intro: "Шлях по команді короткий, але бот однаково перевіряє saved content і тип контенту перед відправкою.",
            items: [
              { kicker: "Крок 1", title: "Збережіть контент у приватному чаті", text: "Надішліть валідне посилання, username або текст, щоб у бота було що просувати." },
              { kicker: "Крок 2", title: "Відповідайте на NSFW-питання, якщо воно з'явилось", text: "Деякий збережений контент лишається в очікуванні, поки ви правильно не вкажете normal або NSFW." },
              { kicker: "Крок 3", title: "Запустіть /promote", text: "Бот відправить saved content максимум 15 користувачам і оновить денний залишок." }
            ]
          },
          {
            type: "cards",
            title: "Що важливо знати",
            intro: "Режим простий, але реальні ліміти конкретніші, ніж було написано раніше.",
            items: [
              { kicker: "Base", title: "5 використань на день за замовчуванням", text: "Стандартний денний ліміт починається з 5 промо, поки не додаються реферальні бонуси." },
              { kicker: "Bonus", title: "Реферали розширюють ліміт", text: "Кожні 3 реферали додають ще 3 звичайні промо на день." },
              { kicker: "Reuse", title: "Використовується вже збережений контент", text: "Не потрібно збирати окрему кампанію: бот бере те, що ви вже зберегли в private chat." }
            ]
          }
        ]
      },
      groupPromotion: {
        metaTitle: "Промо в групи",
        metaDescription: "Як працює групове просування в Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Охоплення через спільноти",
          title: "Просувайте saved content у групах.",
          lead: "Group Promotion відправляє ваше збережене повідомлення в групи, де просування зараз активне й доступне.",
          pills: ["2 запуски standard", "10 запусків premium", "Ціль 15 або 35 груп"],
          actions: [
            { href: "premium.html", label: "Порівняти Premium", primary: true },
            { href: "help.html", label: "Потрібна допомога?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Як проходить запуск",
            intro: "Бот перевіряє не лише команду, а й бан-статус, денний usage, saved content і наявність доступних груп.",
            items: [
              { kicker: "Крок 1", title: "Тримайте saved content готовим", text: "Якщо збереженого контенту немає, групове промо не зможе стартувати." },
              { kicker: "Крок 2", title: "Запустіть /chatpromo", text: "Бот перевіряє статус і починає фонову відправку в доступні групи." },
              { kicker: "Крок 3", title: "Прочитайте підсумок", text: "Коли run завершується, бот показує, скільки груп реально отримали промо." }
            ]
          },
          {
            type: "cards",
            title: "Реальні ліміти",
            intro: "Тут є два обмеження: скільки запусків на день і скільки груп намагається досягти один запуск.",
            items: [
              { kicker: "Standard", title: "2 запуски на день", text: "Звичайний користувач може запускати group promotion двічі на день, і кожен запуск намагається дійти до 15 успішних відправок." },
              { kicker: "Premium", title: "10 запусків на день", text: "Premium дає 10 запусків на день, а кожна сесія може дійти до 35 успішних group sends." },
              { kicker: "Availability", title: "Наявність груп усе одно вирішує", text: "Якщо активних promotable groups немає, команда зупиниться, навіть якщо денний usage ще не закінчився." }
            ]
          }
        ]
      },
      promoJoin: {
        metaTitle: "Promo Join",
        metaDescription: "Як працюють кампанії Promo Join в Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Кампанії за gems",
          title: "Купуйте підтверджені вступи за gems.",
          lead: "Promo Join — просунутий режим, де ви витрачаєте gems, щоб відправити цільовий чат користувачам і нагородити їх після успішного join + verify.",
          pills: ["Старт із gems", "Нагорода verifier", "Знижка по tier для premium"],
          actions: [
            { href: "https://t.me/DealmanyBot?start=buygems", label: "Купити gems", primary: true },
            { href: "premium.html", label: "Дивитися переваги premium", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Як влаштована система",
            intro: "Це не режим на перегляди. Тут є gem-баланс, active campaigns і схема join-and-verify.",
            items: [
              { kicker: "Balance", title: "Користувач отримує gem-профіль", text: "Для Promo Join створюється окремий профіль із балансом gems, і саме він витрачається на кампанії." },
              { kicker: "Setup", title: "Спочатку потрібно задати target chat", text: "Використайте /promojoin, щоб встановити канал або групу, а вже потім відкривайте /advance." },
              { kicker: "Reward", title: "Verifier отримує 1 gem", text: "Користувач, який вступив і успішно підтвердив участь, отримує 1 gem за задачу." }
            ]
          },
          {
            type: "steps",
            title: "Шлях кампанії",
            intro: "Меню просте, але є кілька важливих правил, про які краще знати заздалегідь.",
            items: [
              { kicker: "Крок 1", title: "Налаштуйте призначення через /promojoin", text: "Бот теж має бути адміном у цьому target chat, щоб membership-check працював правильно." },
              { kicker: "Крок 2", title: "Відкрийте /advance і виберіть tier", text: "Різні tiers змінюють ціну в gems, verify-ціль і обсяг відправки; premium платить менше." },
              { kicker: "Крок 3", title: "Чекайте verify-прогрес", text: "Бот повідомляє промоутеру про verify та закриває кампанію після досягнення цілі." }
            ]
          },
          {
            type: "callout",
            title: "Потрібно більше gems?",
            text: "Якщо баланс закінчується, спочатку поповніть gems, а потім запускайте наступну Promo Join кампанію без затримки.",
            actions: [
              { href: "https://t.me/DealmanyBot?start=buygems", label: "Купити gems", primary: true }
            ]
          },
          {
            type: "callout",
            title: "Залишатися в чаті теж важливо.",
            text: "Якщо verifier вийшов занадто рано, бот може попросити повернутися і пізніше списати 2 gems, якщо користувач не повернеться у recovery window."
          }
        ]
      },
      picBroad: {
        metaTitle: "Pic Broad",
        metaDescription: "Як працює Pic Broad у Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Premium Media",
          title: "Запускайте premium image broadcast.",
          lead: "Pic Broad — premium-only функція для відправки однієї фотографії з підписом на значно більшу аудиторію користувачів.",
          pills: ["Лише premium", "1 запуск на день", "До 350 відправок"],
          actions: [
            { href: "premium.html", label: "Дивитися Premium", primary: true },
            { href: "help.html", label: "Потрібна допомога?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Як використовувати",
            intro: "Формат дуже простий, але broadcast стартує лише після отримання потрібного медіа.",
            items: [
              { kicker: "Крок 1", title: "Стартуйте через /picbroad", text: "Спочатку бот перевіряє premium-доступ і чи вільний сьогоднішній слот." },
              { kicker: "Крок 2", title: "Надішліть фото з підписом", text: "Підпис стає текстом broadcast-повідомлення, яке йде разом із зображенням." },
              { kicker: "Крок 3", title: "Дочекайтесь завершення", text: "Бот обробляє розсилку у фоні й потім показує sent/failed статистику." }
            ]
          },
          {
            type: "cards",
            title: "Фактичні ліміти",
            intro: "Функція сильніша за звичайне user promotion, але вона все одно жорстко обмежена.",
            items: [
              { kicker: "Capacity", title: "До 350 користувачів", text: "Premium-користувач може відправити Pic Broad максимум 350 користувачам за день." },
              { kicker: "Frequency", title: "Один раз на день", text: "Звичайний premium-користувач, який не є адміном, може запускати Pic Broad лише один раз на день." },
              { kicker: "Use case", title: "Найкраще працює з сильним візуалом", text: "Картки запуску, постери, івенти та polished offers тут зазвичай працюють краще, ніж plain text." }
            ]
          }
        ]
      },
      nsfwGuide: {
        metaTitle: "NSFW Guide",
        metaDescription: "Що означає NSFW у Promoter Bot, навіщо бот питає про це і який контент заборонений.",
        hero: {
          eyebrow: "Класифікація контенту",
          title: "Що означає NSFW і навіщо бот питає.",
          lead: "Коли бот знаходить посилання у вашому повідомленні, він може спитати, чи є контент NSFW або Normal. Це не блокує просування. Це допомагає надсилати контент відповідній аудиторії, щоб охоплення було більш змістовним і релевантним.",
          pills: ["Це не обмеження", "Підбір аудиторії", "Неправильна мітка може забанити"],
          actions: [
            { href: "terms.html", label: "Читати умови", primary: true },
            { href: "help.html", label: "Назад до help", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Що означає ця мітка",
            intro: "Питання про NSFW — це крок класифікації контенту, а не автоматичне покарання.",
            items: [
              { kicker: "Normal", title: "Звичайний контент", text: "Normal-контент — це стандартний матеріал, безпечний для широкої аудиторії і без потреби в adult або sensitive-обробці." },
              { kicker: "NSFW", title: "Чутливий або adult-контент", text: "NSFW зазвичай означає adult, sexual, explicit або інший чутливий контент, який варто показувати лише користувачам, готовим його отримувати." },
              { kicker: "Result", title: "Правильна NSFW-мітка все одно дозволяє промо", text: "Якщо ваш контент дозволений, мітка NSFW не зупиняє просування. Вона лише допомагає підібрати більш доречну аудиторію." }
            ]
          },
          {
            type: "steps",
            title: "Чому бот питає",
            intro: "Це та сама логіка, яка відображена в поточному попередженні бота після виявлення посилання.",
            items: [
              { kicker: "Крок 1", title: "Бот знаходить посилання", text: "Якщо в повідомленні є посилання, бот може спитати, чи є цей контент NSFW або Normal, до збереження чи просування." },
              { kicker: "Крок 2", title: "Ви обираєте правильну мітку", text: "Ваша відповідь допомагає системі зрозуміти, якій аудиторії варто показувати такий контент." },
              { kicker: "Крок 3", title: "Промо залишається аудиторно-точним", text: "Дозволений NSFW-контент усе ще може просуватися, але мета — дійти до користувачів, які з більшою ймовірністю готові його отримувати." }
            ]
          },
          {
            type: "legal",
            title: "Важливі попередження",
            intro: "Ці правила важливі навіть тоді, коли сам контент міг би просуватися.",
            items: [
              { title: "1. NSFW, позначений як Normal, може забанити", text: "Якщо ви позначаєте NSFW-контент як Normal, акаунт може отримати permanent ban." },
              { title: "2. Нелегальний або занадто explicit-контент заборонений", text: "Просування illegal, prohibited або excessively explicit контенту може призвести до permanent ban незалежно від мітки." },
              { title: "3. Повторювана хибна класифікація може забанити", text: "Якщо ви неодноразово даєте хибні або оманливі мітки, акаунт може бути permanently banned." },
              { title: "4. Відповідальність за промо залишається на вас", text: "Бот не несе відповідальності за ваші promotions, links, offers, media або юридичні наслідки. Відповідальність залишається на користувачі, який надсилає і просуває контент." }
            ]
          },
          {
            type: "callout",
            title: "NSFW не означає безумовний дозвіл.",
            text: "Дозволений NSFW-контент може просуватися для відповідної аудиторії, але illegal content, prohibited material і excessively explicit контент усе одно можуть бути заблоковані та призвести до бану."
          }
        ]
      },
      referral: {
        metaTitle: "Реферали",
        metaDescription: "Як реферальна система підвищує денну промо-потужність у Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Реферальне зростання",
          title: "Перетворюйте запрошення на більше щоденних промо.",
          lead: "Referral видає користувачу особисте bot-посилання і перетворює успішні реєстрації на додаткову стандартну промо-ємність.",
          pills: ["Особисте invite-посилання", "Бонус 3-за-3", "Зв'язок із contest"],
          actions: [
            { href: "contest.html", label: "Дивитися правила конкурсу", primary: true },
            { href: "help.html", label: "Відкрити допомогу", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Як допомагають реферали",
            intro: "Звичайна реферальна система і contest-система пов'язані, але це не одна й та сама річ.",
            items: [
              { kicker: "Link", title: "Кожен користувач отримує особистий URL", text: "Звичайне referral-посилання використовує ваш user ID, щоб бот міг прив'язати новий signup до вашого акаунта." },
              { kicker: "Bonus", title: "Кожні 3 реферали дають 3 промо", text: "Для standard daily promotion кожен блок із 3 успішних referrals додає ще 3 промо на день." },
              { kicker: "Tracking", title: "Прогрес видно в account", text: "На сторінці акаунта видно total referrals, bonus promotions і скільки ще рефералів треба до наступного бонусу." }
            ]
          },
          {
            type: "callout",
            title: "Referral і contest — це різні шари.",
            text: "Звичайний referral збільшує daily standard limit. Contest referral використовує спеціальне event-посилання і фокусується на gems та leaderboard."
          }
        ]
      },
      addMeGems: {
        metaTitle: "Бот + gems",
        metaDescription: "Як додавати Promoter Bot у групи заради gem-нагород, включно зі згодою на broadcast і anti-abuse правилами.",
        hero: {
          eyebrow: "Нагороди за групи",
          title: "Додайте бота і отримуйте gems.",
          lead: "Якщо ви додаєте бота в придатну групу і залишаєте його там, система може нарахувати вам gems. Оскільки ця функція підтримує доставку промо, бот може час від часу надсилати broadcast у цю групу.",
          pills: ["Придатні групи дають gems", "Потрібна згода на broadcast", "Видалення може коштувати gems"],
          actions: [
            { href: "terms.html", label: "Читати умови", primary: true },
            { href: "help.html", label: "Потрібна допомога?", primary: false }
          ]
        },
        sections: [
          {
            type: "callout",
            title: "Спочатку згода.",
            text: "Користуючись цією функцією, ви погоджуєтесь, що група, додана заради gem-нагород, може інколи отримувати broadcast або promo-повідомлення від бота."
          },
          {
            type: "cards",
            title: "Як працюють нагороди",
            intro: "Поточна логіка бота винагороджує придатні додавання, але водночас захищає систему від швидких видалень і низькоякісного abuse.",
            items: [
              { kicker: "Reward", title: "Придатне додавання може дати +65 gems", text: "Якщо валідне додавання групи проходить системні перевірки, акаунт може отримати нагороду в 65 gems." },
              { kicker: "Penalty", title: "Видалення може дати -70 gems", text: "Якщо бота видаляють після reward-flow, система може списати 70 gems із пов'язаного акаунта." },
              { kicker: "Quality", title: "Перевірки на abuse все одно діють", text: "Фейкові групи, одноразові схеми або підозрілий reward-farming можуть бути відхилені, перевірені вручну або заблоковані." }
            ]
          },
          {
            type: "steps",
            title: "Як використовувати правильно",
            intro: "Ця функція створена для реальних груп, де адміни розуміють, на що погоджуються.",
            items: [
              { kicker: "Крок 1", title: "Додавайте бота тільки в реальну групу", text: "Використовуйте лише ті групи, де occasional bot broadcasts прийнятні для адміністраторів та учасників." },
              { kicker: "Крок 2", title: "Тримайте бота активним у групі", text: "Бот має залишатися доданим, щоб система могла підтвердити placement і зберегти нагороду валідною." },
              { kicker: "Крок 3", title: "Не фарміть на одноразових схемах", text: "Не прокручуйте багато акаунтів або тимчасових груп тільки для множення gem-нагород." }
            ]
          },
          {
            type: "callout",
            title: "Це не лазівка для масового фарму акаунтами.",
            text: "Спроби множити вигоду через багато Telegram-акаунтів або низькоякісні групи можуть призвести до тимчасової або постійної модерації."
          }
        ]
      },
      contest: {
        metaTitle: "Конкурс",
        metaDescription: "Як працює реферальний конкурс у Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Реферальний конкурс",
          title: "Змагайтеся за gems і місце в лідерах.",
          lead: "Коли contest активний, користувачі діляться спеціальним contest-посиланням, отримують gems за joins і борються за top-referrer rewards.",
          pills: ["Нагороди top 3", "Вікно 7 днів", "Premium referrals можуть давати double reward"],
          actions: [
            { href: "referral.html", label: "Назад до Referral", primary: true },
            { href: "help.html", label: "Відкрити допомогу", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Як працює contest mode",
            intro: "Функція важлива тільки тоді, коли contest active. Його вмикає і вимикає owner/admin сторона.",
            items: [
              { kicker: "Крок 1", title: "Дочекайтесь активного contest", text: "Сторінка contest і спеціальна кнопка з'являються, коли йде активний 7-денний contest." },
              { kicker: "Крок 2", title: "Поділіться своєю contest referral link", text: "Для конкурсу використовується окремий start-параметр, а не звичайне реферальне посилання." },
              { kicker: "Крок 3", title: "Слідкуйте за leaderboard і rules", text: "Користувач може відкрити leaderboard і contest rules прямо з contest menu, поки event триває." }
            ]
          },
          {
            type: "cards",
            title: "Головні правила",
            intro: "Це публічні правила, які зараз відображені в повідомленнях бота і contest-логіці.",
            items: [
              { kicker: "Rewards", title: "Вступи дають gems", text: "Валідний contest referral приносить inviter-у gems, а запрошені Telegram Premium users можуть давати подвійну нагороду." },
              { kicker: "Eligibility", title: "50 referrals для top-reward eligibility", text: "Бот прямо пише, що для призів top 3 потрібно мати мінімум 50 eligible referrals." },
              { kicker: "Timing", title: "Contest триває 7 днів", text: "Contest start-потік ставить 7-денне вікно, а видача rewards за повідомленням розподіляється впродовж 7 днів після завершення." }
            ]
          },
          {
            type: "callout",
            title: "Звичайне referral-посилання все одно корисне.",
            text: "Якщо contest inactive, користувачу все одно варто ділитися звичайною referral-link заради bonus promos. Contest rewards працюють тільки під час активного event."
          }
        ]
      },
      forceJoin: {
        metaTitle: "Force Join",
        metaDescription: "Як Force Join працює для адміністраторів груп у Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Admin Control",
          title: "Вимагайте вступ до спілкування.",
          lead: "Force Join дозволяє адмінам групи блокувати звичайні повідомлення, поки користувач не вступить в один або кілька обов'язкових каналів.",
          pills: ["Налаштування лише в групі", "Перевірка membership", "Повідомлення можуть видалятися"],
          actions: [
            { href: "help.html", label: "Допомога для адмінів", primary: true },
            { href: "group-promotion.html", label: "Дивитися Group Promotion", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Порядок налаштування",
            intro: "Команди короткі, але і в групі, і в target channel бот повинен мати правильні права.",
            items: [
              { kicker: "Крок 1", title: "Додайте бота в групу", text: "Бот має бути в групі, де перевірятимуться звичайні повідомлення користувачів." },
              { kicker: "Крок 2", title: "Використайте /set прямо в групі", text: "Передайте channel ID або @username, щоб додати обов'язкову точку вступу для цієї групи." },
              { kicker: "Крок 3", title: "Використайте /unset для видалення", text: "Пізніше адміни можуть прибрати потрібний канал зі force-join списку групи." }
            ]
          },
          {
            type: "cards",
            title: "Що бот реально робить",
            intro: "Поточна логіка суворіша за простий reminder: вона реально може блокувати message flow для non-members.",
            items: [
              { kicker: "Check", title: "Membership перевіряється вживу", text: "Для кожного повідомлення від не-адміна бот перевіряє, чи вступив користувач у всі required channels." },
              { kicker: "Action", title: "Повідомлення можуть видалятися", text: "Якщо користувач не виконав required join, бот може видалити повідомлення і відправити join-кнопки назад у групу." },
              { kicker: "Requirement", title: "Боту потрібен доступ до target channel", text: "Бот має бачити цільовий канал і часто мати там admin-доступ, щоб membership-check був коректним." }
            ]
          }
        ]
      },
      premium: {
        metaTitle: "Premium",
        metaDescription: "Premium-плани і доступ до функцій для Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Upgrade Access",
          title: "Premium дає пріоритет вашим промо.",
          lead: "Premium допомагає завданням проходити швидше, підсилює видимість кампаній, відкриває сильніші інструменти просування і знижує gem cost усередині Promo Join tiers.",
          pills: ["Пріоритет завдань", "10 group runs на день", "Дешевші tiers у Promo Join"],
          actions: [
            { href: "https://t.me/DealmanyBot?start=buypremium", label: "Get Premium", primary: true },
            { href: "promo-join.html", label: "Дивитися Promo Join", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Головні переваги",
            intro: "Premium потрібен для сильнішого розміщення, швидшої обробки і доступу до найбільших promo-інструментів бота.",
            items: [
              { kicker: "Broadcast", title: "Доступ до Pic Broad", text: "Premium відкриває image + caption broadcast до 350 користувачів на день." },
              { kicker: "Groups", title: "10 group-promo запусків на день", text: "Premium піднімає group promotion з 2 запусків на день до 10 запусків на день." },
              { kicker: "Priority", title: "Завдання показуються першими", text: "Premium-завдання ставляться попереду стандартних, тому користувачі бачать їх раніше, коли доступна відповідна кампанія." },
              { kicker: "Speed", title: "Швидші дії та обробка", text: "Premium-режим розрахований на швидшу обробку і вищий пріоритет у підтримуваних promo-діях." },
              { kicker: "Support", title: "Пріоритетна підтримка", text: "Premium-користувачі отримують швидшу увагу підтримки, коли потрібна допомога." },
              { kicker: "Gems", title: "Менша ціна tier у Promo Join", text: "Для premium-користувача Promo Join tiers коштують менше gems, ніж для standard user." }
            ]
          },
          {
            type: "callout",
            title: "Обирайте premium, коли важлива максимальна видимість.",
            text: "Якщо вам потрібно, щоб завдання показувалися першими, promo оброблялося швидше, а великі інструменти були відкриті, відкрийте premium прямо в Telegram.",
            actions: [
              { href: "https://t.me/DealmanyBot?start=buypremium", label: "Get Premium", primary: true }
            ]
          }
        ]
      },
      help: {
        metaTitle: "Допомога",
        metaDescription: "Швидкі відповіді для користувачів Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Help Center",
          title: "Короткі відповіді на найчастіші проблеми.",
          lead: "Ця сторінка покриває питання, які реально виникають під час збереження контенту, запуску промо, отримання gems, участі в contest і роботи з premium.",
          pills: ["Питання користувачів", "Питання адмінів", "Contest теж включений"],
          actions: [
            { href: "terms.html", label: "Умови", primary: true },
            { href: "privacy.html", label: "Конфіденційність", primary: false }
          ]
        },
        sections: [
          {
            type: "faq",
            title: "Часті питання",
            intro: "Цю сторінку зручно відправляти користувачу ще до звернення в підтримку.",
            items: [
              { q: "Чому бот каже, що немає saved content?", a: "Тому що active saved content порожній. Спочатку надішліть валідне повідомлення, посилання або username в особистий чат." },
              { q: "Скільки стандартних промо я маю на день?", a: "Базовий ліміт — 5 звичайних промо на день, а кожні 3 реферали додають ще 3." },
              { q: "Скільки group-promo запусків я маю?", a: "Звичайний користувач отримує 2 group-promo run на день. Premium-користувач отримує 10." },
              { q: "Чому Pic Broad недоступний?", a: "Pic Broad — premium-only функція, і для non-admin premium користувача її можна використовувати тільки один раз на день." },
              { q: "Чому verify у Promo Join не пройшов?", a: "Зазвичай через те, що користувач не завершив join, бот не зміг перевірити membership або campaign уже закрилася." },
              { q: "Чим contest відрізняється від звичайного referral?", a: "Звичайний referral підвищує daily standard limit. Contest referral використовує спеціальне event-посилання і видає gems тільки під час активного конкурсу." },
              { q: "Чому Force Join не працює?", a: "У бота може не вистачати прав у групі, доступу в required channel або налаштування міг не завершити group admin." }
            ]
          }
        ]
      },
      terms: {
        metaTitle: "Умови",
        metaDescription: "Умови використання Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Legal",
          title: "Умови використання.",
          lead: "Ці короткі умови пояснюють базові правила використання promotion tools, premium access, gem-based функцій і moderation-сценаріїв.",
          pills: ["Читабельні правила", "Відповідальність користувача", "Правила доступу"],
          actions: [
            { href: "privacy.html", label: "Відкрити privacy", primary: true },
            { href: "help.html", label: "Назад до help", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Основні правила",
            intro: "Сторінка спеціально зроблена короткою й зрозумілою.",
            items: [
              { title: "1. Відповідальність за контент", text: "Ви несете відповідальність за матеріали, які відправляєте або просуваєте через сервіс." },
              { title: "2. Чесне використання", text: "Незаконне, шкідливе, оманливе або агресивне використання може призвести до обмежень, блокування або видалення доступу." },
              { title: "3. Ліміт акаунтів для звичайного користувача", text: "Звичайний користувач може тримати активними лише 2 акаунти в боті одночасно. Використовувати багато Telegram-акаунтів заради додаткових лімітів, rewards або promo-переваг не можна." },
              { title: "4. Що буде при зайвих акаунтах", text: "Якщо система знайде більше 2 стандартних акаунтів, вона може тимчасово або назавжди забанити насамперед акаунт із найменшим referral credit. Уже зароблені rewards зазвичай залишаються в безпеці, але доступ усе одно може бути обмежений." },
              { title: "5. Виняток для premium", text: "Premium-користувачі можуть працювати з кількома акаунтами, але anti-spam, abuse і moderation-правила все одно діють для кожного premium-акаунта." },
              { title: "6. Зміни", text: "Функції, ліміти, contest-правила, account-політики та moderation-рішення можуть змінюватися з часом." }
            ]
          }
        ]
      },
      privacy: {
        metaTitle: "Конфіденційність",
        metaDescription: "Політика конфіденційності для Promoter Bot і Promotion Bot.",
        hero: {
          eyebrow: "Legal",
          title: "Політика конфіденційності.",
          lead: "Ця політика пояснює, які робочі дані можуть зберігатися, щоб бот міг доставляти промо, відстежувати ліміти, керувати rewards і тримати account state.",
          pills: ["Операційні дані", "Дані акаунта", "Історія промо"],
          actions: [
            { href: "terms.html", label: "Відкрити terms", primary: true },
            { href: "help.html", label: "Назад до help", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Які дані можуть зберігатися",
            intro: "Зберігатися мають лише дані, які реально потрібні для роботи сервісу і його promotion-функцій.",
            items: [
              { title: "1. Дані акаунта", text: "Для звичайної роботи можуть зберігатися user ID, username, ім'я, timestamps і service-status markers." },
              { title: "2. Дані промо", text: "Збережені links, text, content classification, targets і campaign-state записи можуть зберігатися для роботи функцій." },
              { title: "3. Дані використання", text: "Можуть відстежуватися daily limits, referral totals, gem balances, group rewards і progress campaigns." },
              { title: "4. Призначення", text: "Ці дані підтримують delivery, anti-abuse checks, rewards, premium access, contest tracking і moderation." }
            ]
          }
        ]
      }
    }
  },
  hi: {
    common: {
      siteName: "Promoter Bot Docs",
      siteTagline: "हर promotion workflow के लिए साफ guide",
      logoAlt: "Promoter Bot logo",
      menuLabel: "नेविगेशन खोलें",
      closeLabel: "नेविगेशन बंद करें",
      mobileMenuTitle: "नेविगेशन",
      mobileSections: {
        guide: "Guide",
        legal: "Legal"
      },
      navLabel: "मुख्य नेविगेशन",
      languageLabel: "भाषा चुनें",
      defaultSideTitle: "Real users के लिए",
      defaultSideText: "हर important feature की अपनी अलग page है ताकि user सीधे वही explanation खोल सके जो उसे चाहिए.",
      footerTitle: "Promoter Bot Documentation",
      footerNote: "यह site current Promoter Bot और Promotion Bot flow को end users के लिए आसान भाषा में समझाती है. Real limits और access अभी भी bot owner और Telegram permissions पर depend करते हैं.",
      metaKeywords: "Promoter Bot, Promotion Bot, Telegram promotion bot, Telegram promoter bot",
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
        nsfwGuide: "NSFW",
        referral: "Referral",
        addMeGems: "Bot + Gems",
        contest: "Contest",
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
        metaDescription: "Promoter Bot और Promotion Bot के लिए official multilingual guide.",
        hero: {
          eyebrow: "Official Guide",
          title: "हर promotion mode के लिए एक ही site.",
          lead: "यह site अब bot के actual behavior से ज़्यादा closely match करती है: standard promo, group promo, Promo Join, referral, contest, premium tools और admin features.",
          pills: ["4 languages", "Bot-matched text", "Fast help pages"],
          actions: [
            { href: "user-promotion.html", label: "User Promotion से शुरू करें", primary: true },
            { href: "contest.html", label: "Contest देखें", primary: false }
          ],
          sidePanels: [
            { title: "Promoters के लिए", text: "Daily limits, saved content, premium, gems और advanced campaign tools को start करने से पहले समझें." },
            { title: "Admins के लिए", text: "देखें कि Force Join और add-bot gem rewards moderation और channel growth से कैसे जुड़े हैं." }
          ]
        },
        sections: [
          {
            type: "stats",
            title: "एक नज़र में",
            intro: "Bot simple daily promotion, premium upgrade, gems और referral-based growth को एक साथ जोड़ता है.",
            items: [
              { value: "5", title: "Base daily user promos", text: "Standard private promotion 5 daily uses से शुरू होता है और referrals से बढ़ सकता है." },
              { value: "2 / 10", title: "Daily group promo runs", text: "Standard users को 2 group-promo runs मिलते हैं, जबकि premium users को 10." },
              { value: "+65 / -70", title: "Add-bot gem swing", text: "Eligible group owner bot add करके 65 gems कमा सकता है, लेकिन बाद में हटाने पर 70 gems penalty लगती है." }
            ]
          },
          {
            type: "cards",
            title: "Main sections",
            intro: "हर important workflow की अपनी page है ताकि users को raw commands में न भेजना पड़े.",
            items: [
              { kicker: "Core", title: "User Promotion", text: "Saved link या text network के अंदर 15 users तक कैसे भेजा जाता है." },
              { kicker: "Reach", title: "Group Promotion", text: "Saved content active groups में standard या premium limits के साथ कैसे जाता है." },
              { kicker: "Gems", title: "Promo Join", text: "Advanced mode जहाँ gems join-and-verify campaigns पर खर्च होते हैं." },
              { kicker: "Media", title: "Pic Broad", text: "Premium image broadcast जिसमें एक photo, एक caption और up to 350 daily sends होते हैं." },
              { kicker: "Growth", title: "Referral", text: "Personal link daily standard promo limit को कैसे बढ़ाती है." },
              { kicker: "Event", title: "Contest", text: "Special referral contest gems और leaderboard tracking कैसे देता है." },
              { kicker: "Admin", title: "Force Join", text: "Users को chat continue करने से पहले channel join कैसे कराना है." }
            ]
          },
          {
            type: "callout",
            title: "Accurate text confusion कम करता है.",
            text: "जब public documentation bot के real behavior से match करती है, तब users कम repeated questions पूछते हैं और expectations साफ रहती हैं."
          }
        ]
      },
      userPromotion: {
        metaTitle: "User Promotion",
        metaDescription: "Promoter Bot और Promotion Bot में standard user-to-user promotion कैसे काम करता है.",
        hero: {
          eyebrow: "Private Reach",
          title: "Standard promotion वास्तव में कैसे काम करता है.",
          lead: "User Promotion वह base mode है जहाँ आपका saved link या text network के available users को भेजा जाता है.",
          pills: ["5 base promos", "Up to 15 users per run", "Referral boosts"],
          actions: [
            { href: "referral.html", label: "Referral bonuses देखें", primary: true },
            { href: "help.html", label: "Help खोलें", primary: false }
          ],
          sidePanels: [
            { title: "Best for", text: "Quick links, short updates, usernames और light daily promotion जहाँ gems spend नहीं करने पड़ते." }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Basic workflow",
            intro: "Command path छोटा है, लेकिन bot भेजने से पहले saved content और content type check करता है.",
            items: [
              { kicker: "Step 1", title: "Private chat में content save करें", text: "Valid link, username या text भेजें ताकि bot के पास promote करने के लिए कुछ हो." },
              { kicker: "Step 2", title: "अगर NSFW check आए तो सही जवाब दें", text: "कुछ saved content pending रहता है जब तक आप उसे normal या NSFW के रूप में classify नहीं करते." },
              { kicker: "Step 3", title: "/promote चलाएँ", text: "Bot saved content को maximum 15 users तक भेजता है और फिर daily remaining count update करता है." }
            ]
          },
          {
            type: "cards",
            title: "क्या जानना ज़रूरी है",
            intro: "यह mode आसान है, लेकिन actual limits पहले वाली site copy से ज़्यादा clear और specific हैं.",
            items: [
              { kicker: "Base", title: "Default में 5 uses per day", text: "Standard daily limit 5 promotions से शुरू होती है, उसके बाद referrals इसे बढ़ाते हैं." },
              { kicker: "Bonus", title: "Referrals limit बढ़ाते हैं", text: "हर 3 referrals पर 3 extra standard daily promos मिलते हैं." },
              { kicker: "Reuse", title: "पहले से saved content reuse होता है", text: "अलग campaign build करने की ज़रूरत नहीं होती; bot वही content use करता है जो आपने private chat में save किया." }
            ]
          }
        ]
      },
      groupPromotion: {
        metaTitle: "Group Promotion",
        metaDescription: "Promoter Bot और Promotion Bot में group promotion कैसे काम करता है.",
        hero: {
          eyebrow: "Group Reach",
          title: "Saved content को groups में promote करें.",
          lead: "Group Promotion आपका saved message उन groups में भेजता है जहाँ promotion उस समय active और available है.",
          pills: ["2 runs standard", "10 runs premium", "15 या 35 group target"],
          actions: [
            { href: "premium.html", label: "Premium compare करें", primary: true },
            { href: "help.html", label: "Need Help?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Run कैसे होता है",
            intro: "Bot सिर्फ command नहीं देखता. वह ban status, daily usage, saved content और available groups भी check करता है.",
            items: [
              { kicker: "Step 1", title: "Saved content ready रखें", text: "अगर saved content नहीं है, तो group promotion start नहीं होगा." },
              { kicker: "Step 2", title: "/chatpromo चलाएँ", text: "Bot आपका status check करके background send शुरू करता है." },
              { kicker: "Step 3", title: "Summary पढ़ें", text: "Run complete होने पर bot बताता है कि promotion कितने groups तक पहुँचा." }
            ]
          },
          {
            type: "cards",
            title: "Actual limits",
            intro: "यहाँ दो तरह के limits हैं: प्रति दिन कितने runs और हर run कितने groups तक पहुँचने की कोशिश करता है.",
            items: [
              { kicker: "Standard", title: "2 runs per day", text: "Standard user दिन में 2 बार group promotion चला सकता है, और हर run maximum 15 successful group sends तक जाता है." },
              { kicker: "Premium", title: "10 runs per day", text: "Premium users को 10 daily group-promo runs मिलते हैं और हर run 35 successful group sends तक जा सकता है." },
              { kicker: "Availability", title: "Available groups फिर भी matter करते हैं", text: "अगर active promotable groups नहीं हैं, तो command रुक जाएगी चाहे आपका daily usage बचा हुआ हो." }
            ]
          }
        ]
      },
      promoJoin: {
        metaTitle: "Promo Join",
        metaDescription: "Promoter Bot और Promotion Bot में Promo Join campaigns कैसे काम करती हैं.",
        hero: {
          eyebrow: "Gem Campaigns",
          title: "Gems से verified joins खरीदें.",
          lead: "Promo Join वह advanced mode है जहाँ आप gems spend करके target chat users को भेजते हैं और successful join + verify के बाद उन्हें reward मिलता है.",
          pills: ["Gems से start", "Verifier reward", "Premium tier discount"],
          actions: [
            { href: "https://t.me/DealmanyBot?start=buygems", label: "Buy Gems", primary: true },
            { href: "premium.html", label: "Premium benefits देखें", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "System कैसे बना है",
            intro: "यह view-based promo नहीं है. यहाँ gem balance, active campaigns और join-and-verify flow होता है.",
            items: [
              { kicker: "Balance", title: "User को gem profile मिलता है", text: "Promo Join के लिए अलग profile बनता है जिसमें gem balance होता है, और वही campaigns पर खर्च होता है." },
              { kicker: "Setup", title: "पहले target chat set करना पड़ता है", text: "Use /promojoin करके channel या group set करें, फिर /advance खोलें." },
              { kicker: "Reward", title: "Verifier को 1 gem मिलता है", text: "जो user join करके successfully verify करता है, उसे task के लिए 1 gem मिलता है." }
            ]
          },
          {
            type: "steps",
            title: "Campaign flow",
            intro: "Menu simple है, लेकिन कुछ important rules हैं जिनका पहले से पता होना अच्छा है.",
            items: [
              { kicker: "Step 1", title: "/promojoin से destination set करें", text: "Bot को उस target chat में admin भी होना चाहिए ताकि membership check सही हो सके." },
              { kicker: "Step 2", title: "/advance खोलें और tier चुनें", text: "Different tiers gems cost, verify target और send volume बदलते हैं; premium users कम pay करते हैं." },
              { kicker: "Step 3", title: "Verify progress का wait करें", text: "Bot promoter को verification updates भेजता है और goal पूरा होने पर campaign close कर देता है." }
            ]
          },
          {
            type: "callout",
            title: "More gems चाहिए?",
            text: "अगर balance कम है, तो पहले gems खरीदें और फिर अगला Promo Join campaign बिना delay शुरू करें.",
            actions: [
              { href: "https://t.me/DealmanyBot?start=buygems", label: "Buy Gems", primary: true }
            ]
          },
          {
            type: "callout",
            title: "Joined रहना भी ज़रूरी है.",
            text: "अगर verifier जल्दी leave कर देता है, तो bot उसे rejoin warning दे सकता है और recovery window miss होने पर 2 gems काट सकता है."
          }
        ]
      },
      picBroad: {
        metaTitle: "Pic Broad",
        metaDescription: "Promoter Bot और Promotion Bot में Pic Broad कैसे काम करता है.",
        hero: {
          eyebrow: "Premium Media",
          title: "Premium image broadcast चलाएँ.",
          lead: "Pic Broad एक premium-only feature है जो एक photo और caption को बहुत बड़ी user audience तक भेजता है.",
          pills: ["Premium only", "1 run per day", "Up to 350 sends"],
          actions: [
            { href: "premium.html", label: "Premium देखें", primary: true },
            { href: "help.html", label: "Need Help?", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "कैसे use करें",
            intro: "Format simple है, लेकिन bot को exact media मिलने के बाद ही broadcast start होता है.",
            items: [
              { kicker: "Step 1", title: "/picbroad से शुरू करें", text: "Bot पहले premium access और आज का slot free है या नहीं, यह check करता है." },
              { kicker: "Step 2", title: "Photo with caption भेजें", text: "Caption वही text बनता है जो image के साथ broadcast होगा." },
              { kicker: "Step 3", title: "Completion का wait करें", text: "Bot background में broadcast चलाकर बाद में sent और failed counts बताता है." }
            ]
          },
          {
            type: "cards",
            title: "Actual limits",
            intro: "यह feature normal user promotion से stronger है, लेकिन इसकी hard caps फिर भी हैं.",
            items: [
              { kicker: "Capacity", title: "Up to 350 users", text: "Premium user Pic Broad को एक दिन में maximum 350 users तक भेज सकता है." },
              { kicker: "Frequency", title: "दिन में एक बार", text: "Non-admin premium user Pic Broad सिर्फ एक बार per day चला सकता है." },
              { kicker: "Use case", title: "Strong visuals के लिए best", text: "Launch cards, posters, event banners और polished offers यहाँ plain text से better perform करते हैं." }
            ]
          }
        ]
      },
      nsfwGuide: {
        metaTitle: "NSFW Guide",
        metaDescription: "Promoter Bot में NSFW का क्या मतलब है, bot यह क्यों पूछता है, और कौन-सा content allowed नहीं है.",
        hero: {
          eyebrow: "Content Classification",
          title: "NSFW क्या है और bot यह क्यों पूछता है.",
          lead: "जब bot आपके message में कोई link पाता है, तो वह पूछ सकता है कि content NSFW है या Normal. यह आपकी promotion को block नहीं करता. यह bot को सही audience तक content पहुँचाने में मदद करता है, ताकि reach ज़्यादा meaningful और relevant रहे.",
          pills: ["यह restriction नहीं है", "Audience matching", "गलत label पर ban हो सकता है"],
          actions: [
            { href: "terms.html", label: "Terms पढ़ें", primary: true },
            { href: "help.html", label: "Help पर वापस जाएँ", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Label का मतलब क्या है",
            intro: "NSFW वाला सवाल content-classification step है, automatic punishment नहीं.",
            items: [
              { kicker: "Normal", title: "सामान्य content", text: "Normal content वह standard public-safe material है जिसे adult या sensitive handling की ज़रूरत नहीं होती." },
              { kicker: "NSFW", title: "Sensitive या adult content", text: "NSFW आमतौर पर adult, sexual, explicit या दूसरे sensitive content के लिए होता है, जिसे सिर्फ उन users तक promote किया जाना चाहिए जो उसे receive करने के लिए okay हों." },
              { kicker: "Result", title: "सही NSFW label promotion को नहीं रोकता", text: "अगर आपका content allowed है, तो NSFW mark करने से promotion बंद नहीं होती. यह सिर्फ ज़्यादा suitable audience तक पहुँचने में मदद करता है." }
            ]
          },
          {
            type: "steps",
            title: "Bot यह क्यों पूछता है",
            intro: "यह वही logic है जो current bot warning में दिखती है जब link detect होता है.",
            items: [
              { kicker: "Step 1", title: "Bot link detect करता है", text: "अगर message में link है, तो bot content save या promote करने से पहले पूछ सकता है कि वह NSFW है या Normal." },
              { kicker: "Step 2", title: "आप सही label चुनते हैं", text: "आपका जवाब system को समझने में मदद करता है कि यह content किस तरह की audience तक जाना चाहिए." },
              { kicker: "Step 3", title: "Promotion audience-matched रहती है", text: "Allowed NSFW content फिर भी promote हो सकता है, लेकिन लक्ष्य उन users तक पहुँचना है जो उस तरह का content receive करने के लिए अधिक likely हों." }
            ]
          },
          {
            type: "legal",
            title: "Important warnings",
            intro: "ये rules तब भी लागू होते हैं जब आपका content otherwise promotable हो.",
            items: [
              { title: "1. NSFW को Normal mark करना ban दिला सकता है", text: "अगर आप NSFW content को Normal mark करते हैं, तो account को permanent ban मिल सकता है." },
              { title: "2. Illegal या बहुत explicit content allowed नहीं है", text: "Illegal, prohibited या excessively explicit content को promote करने पर permanent ban हो सकता है, चाहे आपने कोई भी label चुना हो." },
              { title: "3. बार-बार misleading classification ban करा सकती है", text: "अगर आप repeatedly false या misleading labels देते हैं, तो account permanently banned हो सकता है." },
              { title: "4. Promotion की responsibility आपकी है", text: "Bot आपके promotions, links, offers, media या legal consequences के लिए responsible नहीं है. Content submit और promote करने वाला user ही responsible रहता है." }
            ]
          },
          {
            type: "callout",
            title: "NSFW का मतलब unrestricted नहीं होता.",
            text: "Allowed NSFW content suitable audience तक promote हो सकता है, लेकिन illegal content, prohibited material और excessively explicit content फिर भी block और ban हो सकता है."
          }
        ]
      },
      referral: {
        metaTitle: "Referral",
        metaDescription: "Promoter Bot और Promotion Bot में referral system daily promotion power कैसे बढ़ाता है.",
        hero: {
          eyebrow: "Referral Growth",
          title: "Invites को ज़्यादा daily promos में बदलें.",
          lead: "Referral हर user को personal bot link देता है और successful signups को extra standard promotion capacity में बदलता है.",
          pills: ["Personal invite link", "3-for-3 bonus", "Contest connection"],
          actions: [
            { href: "contest.html", label: "Contest rules देखें", primary: true },
            { href: "help.html", label: "Help खोलें", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Referral कैसे मदद करता है",
            intro: "Normal referral system और contest system connected हैं, लेकिन दोनों same चीज़ नहीं हैं.",
            items: [
              { kicker: "Link", title: "हर user को personal URL मिलता है", text: "Normal referral link आपके user ID को use करती है ताकि bot new signup को आपके account से जोड़ सके." },
              { kicker: "Bonus", title: "हर 3 referrals पर 3 promos", text: "Standard daily promotion के लिए हर 3 successful referrals पर 3 extra daily promos मिलते हैं." },
              { kicker: "Tracking", title: "Progress account में दिखता है", text: "Account page पर total referrals, bonus promotions और अगले bonus तक की distance दिखाई देती है." }
            ]
          },
          {
            type: "callout",
            title: "Referral और contest अलग layers हैं.",
            text: "Normal referral daily standard limit बढ़ाता है. Contest referral special event link use करता है और gems + leaderboard पर focus करता है."
          }
        ]
      },
      addMeGems: {
        metaTitle: "Bot + Gems",
        metaDescription: "Promoter Bot को groups में add करके gem rewards लेने, broadcast consent और anti-abuse rules की guide.",
        hero: {
          eyebrow: "Group Rewards",
          title: "Bot add करें और gems कमाएँ.",
          lead: "अगर आप bot को eligible group में add करके वहाँ बनाए रखते हैं, तो system आपको gems दे सकता है. क्योंकि यह feature promotion delivery को support करता है, bot कभी-कभी उस group में broadcasts भेज सकता है.",
          pills: ["Eligible groups gems कमा सकते हैं", "Broadcast consent ज़रूरी है", "Removal पर gems कट सकते हैं"],
          actions: [
            { href: "terms.html", label: "Terms पढ़ें", primary: true },
            { href: "help.html", label: "Need Help?", primary: false }
          ]
        },
        sections: [
          {
            type: "callout",
            title: "पहले consent.",
            text: "इस feature को use करके आप मानते हैं कि gem rewards के लिए add किया गया group कभी-कभी bot broadcasts या promo messages receive कर सकता है."
          },
          {
            type: "cards",
            title: "Rewards कैसे काम करते हैं",
            intro: "Current bot logic valid adds को reward करती है, लेकिन quick removals और low-quality abuse से system को protect भी करती है.",
            items: [
              { kicker: "Reward", title: "Eligible add पर +65 gems मिल सकते हैं", text: "जब valid group add system checks pass करता है, linked account को 65 gems reward मिल सकता है." },
              { kicker: "Penalty", title: "Removal पर -70 gems कट सकते हैं", text: "अगर reward flow के बाद bot को remove किया जाता है, तो system linked account से 70 gems deduct कर सकता है." },
              { kicker: "Quality", title: "Abuse checks फिर भी लागू रहते हैं", text: "Fake groups, disposable setups या suspicious reward farming reject, review या block की जा सकती है." }
            ]
          },
          {
            type: "steps",
            title: "इसे सही तरीके से use करें",
            intro: "यह feature real groups के लिए है जहाँ admins जानते हों कि वे किस बात के लिए agree कर रहे हैं.",
            items: [
              { kicker: "Step 1", title: "Bot को सिर्फ real group में add करें", text: "सिर्फ उन्हीं groups का use करें जहाँ occasional bot broadcasts admins और members के लिए acceptable हों." },
              { kicker: "Step 2", title: "Bot को group में active रखें", text: "Bot को group में बना रहना चाहिए ताकि system placement verify कर सके और reward valid रहे." },
              { kicker: "Step 3", title: "Throwaway setups से farming न करें", text: "सिर्फ gem rewards multiply करने के लिए बहुत सारे accounts या temporary groups rotate न करें." }
            ]
          },
          {
            type: "callout",
            title: "यह mass-account farming का loophole नहीं है.",
            text: "बहुत सारे Telegram accounts या low-quality groups से benefits multiply करने की कोशिश temporary या permanent moderation तक ले जा सकती है."
          }
        ]
      },
      contest: {
        metaTitle: "Contest",
        metaDescription: "Promoter Bot और Promotion Bot में referral contest कैसे काम करता है.",
        hero: {
          eyebrow: "Referral Contest",
          title: "Gems और leaderboard rank के लिए compete करें.",
          lead: "जब contest active होता है, users special contest referral link share करते हैं, joins पर gems कमाते हैं और top-referrer rewards के लिए compete करते हैं.",
          pills: ["Top 3 rewards", "7 day window", "Premium referrals double reward दे सकते हैं"],
          actions: [
            { href: "referral.html", label: "Referral पर वापस जाएँ", primary: true },
            { href: "help.html", label: "Help खोलें", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Contest mode कैसे काम करता है",
            intro: "यह feature सिर्फ तब relevant है जब contest active हो. इसे owner/admin side से start और stop किया जाता है.",
            items: [
              { kicker: "Step 1", title: "Active contest का wait करें", text: "Contest page और special contest button तभी useful होते हैं जब 7-day contest active हो." },
              { kicker: "Step 2", title: "अपनी contest referral link share करें", text: "Contest के लिए अलग start parameter use होता है, normal referral link वाला नहीं." },
              { kicker: "Step 3", title: "Leaderboard और rules देखें", text: "User contest menu के अंदर ही leaderboard और contest rules दोनों खोल सकता है." }
            ]
          },
          {
            type: "cards",
            title: "Important rules",
            intro: "ये public-facing rules हैं जो current bot messages और contest logic में दिखते हैं.",
            items: [
              { kicker: "Rewards", title: "Joins gems देते हैं", text: "Valid contest referral inviter को gems देता है, और invited Telegram Premium users double reward भी दे सकते हैं." },
              { kicker: "Eligibility", title: "Top-reward eligibility के लिए 50 referrals", text: "Bot साफ कहता है कि top 3 reward eligibility के लिए कम से कम 50 eligible referrals चाहिए." },
              { kicker: "Timing", title: "Contest 7 days चलता है", text: "Contest start flow 7-day window set करता है, और reward distribution messaging कहती है कि counts contest end के 7 दिन के भीतर handle होते हैं." }
            ]
          },
          {
            type: "callout",
            title: "Normal referral link फिर भी useful है.",
            text: "अगर contest inactive है, तो users को normal referral link ही share करनी चाहिए ताकि daily bonus promos मिलते रहें. Contest rewards सिर्फ active event में काम करते हैं."
          }
        ]
      },
      forceJoin: {
        metaTitle: "Force Join",
        metaDescription: "Promoter Bot और Promotion Bot में group admins के लिए Force Join कैसे काम करता है.",
        hero: {
          eyebrow: "Admin Control",
          title: "Chat से पहले join required करें.",
          lead: "Force Join group admins को यह control देता है कि ordinary messages तब तक block रहें जब तक user required channel(s) join न कर ले.",
          pills: ["Group-only setup", "Membership checks", "Messages delete हो सकते हैं"],
          actions: [
            { href: "help.html", label: "Admin Help", primary: true },
            { href: "group-promotion.html", label: "Group Promotion देखें", primary: false }
          ]
        },
        sections: [
          {
            type: "steps",
            title: "Setup flow",
            intro: "Commands छोटी हैं, लेकिन group और target channel दोनों में bot की सही permissions होनी चाहिए.",
            items: [
              { kicker: "Step 1", title: "Bot को group में add करें", text: "Bot को उसी group में होना चाहिए जहाँ normal user messages check होंगे." },
              { kicker: "Step 2", title: "Group में /set चलाएँ", text: "Channel ID या @username भेजकर उस group के लिए required join destination add करें." },
              { kicker: "Step 3", title: "Remove करने के लिए /unset use करें", text: "बाद में admin उस required channel को force-join list से हटा सकता है." }
            ]
          },
          {
            type: "cards",
            title: "Bot actual में क्या करता है",
            intro: "Current logic simple reminder से ज़्यादा strict है: यह non-members के लिए message flow block कर सकता है.",
            items: [
              { kicker: "Check", title: "Membership live check होती है", text: "हर non-admin message पर bot check करता है कि user required channels join कर चुका है या नहीं." },
              { kicker: "Action", title: "Messages delete हो सकते हैं", text: "अगर required join पूरा नहीं है, तो bot message delete करके group में join buttons भेज सकता है." },
              { kicker: "Requirement", title: "Bot को target channel तक access चाहिए", text: "Membership verify करने के लिए bot को target channel दिखना चाहिए, और अक्सर वहाँ admin access भी चाहिए." }
            ]
          }
        ]
      },
      premium: {
        metaTitle: "Premium",
        metaDescription: "Promoter Bot और Promotion Bot के लिए premium plans और feature access.",
        hero: {
          eyebrow: "Upgrade Access",
          title: "Premium आपके promotions को priority देता है.",
          lead: "Premium tasks को तेज़ी से आगे बढ़ाता है, campaigns की visibility बेहतर करता है, बड़े promo tools unlock करता है और Promo Join tiers में gem cost कम करता है.",
          pills: ["Priority task placement", "10 group runs per day", "Lower Promo Join cost"],
          actions: [
            { href: "https://t.me/DealmanyBot?start=buypremium", label: "Get Premium", primary: true },
            { href: "promo-join.html", label: "Promo Join देखें", primary: false }
          ]
        },
        sections: [
          {
            type: "cards",
            title: "Main benefits",
            intro: "Premium का मतलब है better placement, faster handling और bot के बड़े promotion tools तक access.",
            items: [
              { kicker: "Broadcast", title: "Pic Broad access", text: "Premium image + caption broadcast को up to 350 users per day तक unlock करता है." },
              { kicker: "Groups", title: "10 daily group-promo runs", text: "Premium group promotion को 2 runs per day से 10 runs per day तक बढ़ा देता है." },
              { kicker: "Priority", title: "Tasks पहले दिखते हैं", text: "Premium tasks standard tasks से पहले रखे जाते हैं, इसलिए matching campaign मिलने पर users उन्हें पहले देखते हैं." },
              { kicker: "Speed", title: "Faster actions and processing", text: "Premium flow supported promo actions में faster handling और higher priority के लिए बनाया गया है." },
              { kicker: "Support", title: "Priority support", text: "जब मदद चाहिए होती है, premium users को support में तेज़ attention मिलती है." },
              { kicker: "Gems", title: "Promo Join tiers की कम cost", text: "Premium users के लिए Promo Join tiers standard users से कम gems charge करते हैं." }
            ]
          },
          {
            type: "callout",
            title: "जब maximum visibility चाहिए, तब premium चुनें.",
            text: "अगर आप चाहते हैं कि tasks पहले दिखें, promo तेज़ चले और bigger tools unlock हों, तो premium सीधे Telegram में खोलें.",
            actions: [
              { href: "https://t.me/DealmanyBot?start=buypremium", label: "Get Premium", primary: true }
            ]
          }
        ]
      },
      help: {
        metaTitle: "Help",
        metaDescription: "Promoter Bot और Promotion Bot users के लिए quick answers.",
        hero: {
          eyebrow: "Help Center",
          title: "सबसे common problems के लिए short answers.",
          lead: "यह page उन सवालों पर focus करती है जो users को content save करते समय, promo चलाते समय, gems कमाते समय, contest join करते समय और premium use करते समय आते हैं.",
          pills: ["User questions", "Admin questions", "Contest included"],
          actions: [
            { href: "terms.html", label: "Terms", primary: true },
            { href: "privacy.html", label: "Privacy", primary: false }
          ]
        },
        sections: [
          {
            type: "faq",
            title: "Frequently asked questions",
            intro: "Support से पहले user को यही page भेजना सबसे आसान होता है.",
            items: [
              { q: "Bot क्यों कहता है कि saved content नहीं है?", a: "क्योंकि active saved content empty है. पहले private chat में valid message, link या username भेजें." },
              { q: "मुझे standard promotions कितनी मिलती हैं?", a: "Base limit 5 normal promos per day है, और हर 3 referrals पर 3 और जुड़ते हैं." },
              { q: "मुझे group-promo runs कितनी मिलती हैं?", a: "Standard user को 2 group-promo runs per day मिलते हैं. Premium user को 10." },
              { q: "Pic Broad unavailable क्यों है?", a: "Pic Broad premium-only feature है और non-admin premium user इसे दिन में सिर्फ एक बार चला सकता है." },
              { q: "Promo Join verify fail क्यों हुआ?", a: "अक्सर इसलिए क्योंकि user ने join पूरा नहीं किया, bot membership verify नहीं कर पाया, या campaign बंद हो चुकी थी." },
              { q: "Contest और normal referral में क्या फर्क है?", a: "Normal referral daily standard limit बढ़ाता है. Contest referral special event link use करता है और active contest के दौरान gems देता है." },
              { q: "Force Join काम क्यों नहीं कर रहा?", a: "Bot के पास group में permissions कम हो सकती हैं, required channel में access कम हो सकता है, या setup group admin ने पूरा नहीं किया होगा." }
            ]
          }
        ]
      },
      terms: {
        metaTitle: "Terms",
        metaDescription: "Promoter Bot और Promotion Bot के terms.",
        hero: {
          eyebrow: "Legal",
          title: "Terms and conditions.",
          lead: "ये short terms promotion tools, premium access, gem-based features और moderation systems के basic rules समझाती हैं.",
          pills: ["Readable terms", "User responsibility", "Access rules"],
          actions: [
            { href: "privacy.html", label: "Privacy पढ़ें", primary: true },
            { href: "help.html", label: "Help पर वापस जाएँ", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "Main rules",
            intro: "यह page जानबूझकर short और readable रखी गई है.",
            items: [
              { title: "1. Content responsibility", text: "जो material आप submit या promote करते हैं, उसकी ज़िम्मेदारी आपकी होती है." },
              { title: "2. Fair use", text: "Illegal, harmful, deceptive या abusive use restrictions, suspension या permanent removal तक ले जा सकती है." },
              { title: "3. Standard user account limit", text: "एक normal user एक समय में सिर्फ 2 bot accounts active रख सकता है. Extra limits, rewards या promotion benefits पाने के लिए बहुत सारे Telegram accounts use करना allowed नहीं है." },
              { title: "4. Extra accounts पर action", text: "अगर system को 2 से ज़्यादा standard accounts मिलते हैं, तो वह सबसे कम referral credit वाले account को पहले temporary या permanent ban कर सकता है. Earned rewards आमतौर पर safe रहती हैं, लेकिन access फिर भी restrict हो सकता है." },
              { title: "5. Premium multi-account exception", text: "Premium users multiple accounts use कर सकते हैं, लेकिन anti-spam, abuse और moderation rules हर premium account पर फिर भी लागू होते हैं." },
              { title: "6. Changes", text: "Features, limits, contest rules, account policies और moderation decisions समय के साथ बदल सकते हैं." }
            ]
          }
        ]
      },
      privacy: {
        metaTitle: "Privacy",
        metaDescription: "Promoter Bot और Promotion Bot के लिए privacy policy.",
        hero: {
          eyebrow: "Legal",
          title: "Privacy policy.",
          lead: "यह policy बताती है कि bot promotions deliver करने, limits track करने, rewards manage करने और account state बनाए रखने के लिए कौन-सा data store कर सकता है.",
          pills: ["Operational data", "Account records", "Promotion history"],
          actions: [
            { href: "terms.html", label: "Terms पढ़ें", primary: true },
            { href: "help.html", label: "Help पर वापस जाएँ", primary: false }
          ]
        },
        sections: [
          {
            type: "legal",
            title: "क्या store किया जा सकता है",
            intro: "सिर्फ वही data रखी जानी चाहिए जो service और उसके promotion features चलाने के लिए वास्तव में ज़रूरी हो.",
            items: [
              { title: "1. Account data", text: "Normal operation के लिए user ID, username, name, timestamps और service-status markers store हो सकते हैं." },
              { title: "2. Promotion data", text: "Saved links, text, content classification, targets और campaign-state records features चलाने के लिए store हो सकते हैं." },
              { title: "3. Usage data", text: "Daily limits, referral totals, gem balances, group rewards और campaign progress track की जा सकती है." },
              { title: "4. Purpose", text: "यह data delivery, anti-abuse checks, rewards, premium access, contest tracking और moderation के लिए use होती है." }
            ]
          }
        ]
      }
    }
  }
};
