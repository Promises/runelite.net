(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{312:function(e,n){e.exports={title:"1.5.18 Release",description:"Quest list plugin and special attack sharing enhancement",author:"Jordan",__content:'<p>A Quest List plugin has been added, which adds a button to toggle visibility of completed quests,\nand adds a search button to limit the shown quests in the list. Thanks to\n<a href="https://github.com/spudjb">@spudjb</a> for adding this feature!</p>\n<p><img src="/img/blog/1.5.18-Release/completed-quest-toggle.png" alt="Completed quest toggle button"/>\n<img src="/img/blog/1.5.18-Release/quest-search.png" alt="Quest search dialog"/></p>\n<p>The\n<a href="https://github.com/runelite/runelite/wiki/Special-Attack-Counter">Special Attack Counter plugin</a>\nnow shares special attack hits with your party members, with this information displayed in the\ntooltip.</p>\n<p><img src="/img/blog/1.5.18-Release/party-specs.gif" alt="Shared party special attacks"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The Bank Value plugin has been renamed to the Bank plugin, and now offers options to force\nright-clicking on the deposit inventory/worn buttons</li>\n<li>The XP tracker no longer resets the overall XP display when using the &quot;Reset others&quot; right-click\noption</li>\n<li>The Special Attack Counter plugin no longer tracks special attacks on other players</li>\n<li>The loot tracker now tracks loot obtained from the Brimstone chest</li>\n<li>The <code>!kc</code> chat command will now track herbiboar harvest counts</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 10 contributors this release!</p>\n<pre><code>Adam (11):\n      api: add event for controlling menu left click behavior\n      Revert &quot;client: load jagex config and client over https&quot;\n      config service: return an empty config if no config is found\n      xptracker: fix &quot;Reset others&quot; resetting overall xp\n      client: show error dialog when unable to load client\n      client: verify client signature\n      http-service: update mysql driver to mariadb 2.2.3\n      spec plugin: only count specs on npcs\n      spec plugin: share specs with party\n      mixins: fix incorrect usage of getNameables()\n      chat message builder: escape messages\n\nAdam Ballinger (1):\n      Add brimstone chest support to loot tracker\n\nAndrew Ghaly (1):\n      hooks: fix typos in javadoc\n\nHydrox6 (3):\n      client: rename `Bank Value` plugin to `Bank`\n      bank: add option to force right click on deposit container buttons\n      chat filter: Fix issue where special attack overheads crashed the game\n\nJim Frode Nilsen (1):\n      chat commands: add herbiboar kc\n\nKevin Zita (1):\n      Fix &quot;Bandind&quot; typo in coordinate clue descriptions (#8287)\n\nMax Weber (1):\n      ChatboxPanelManager: Be more resilient when scripts mismatch\n\nTomas Slusny (6):\n      Make GPU plugin DPI aware on Java 9+\n      Check for empty strings when initializing twitch client\n      Always close twitch client in connect() method\n      Normalize configuration between cache-updater and http-service\n      Migrate OAuth callback to Spring configuration property\n      Add development configuration for Spring http-service\n\nspudjb (1):\n      Add quest list plugin\n\nxDemoN (2):\n      Remove incorrect farming guild location (#8250)\n      Clue Scroll: Fixe Varrock East Bank Cryptic Clue (#8241)\n</code></pre>'}}}]);
//# sourceMappingURL=83.84bb48d9.chunk.js.map