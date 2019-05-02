(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{276:function(e,n){e.exports={title:"1.4.10 Release",description:"Loot tracker, minnows overlay, prayer bar flick helper and bug fixes",author:"Tomas",__content:'<p>A loot tracker plugin has been added which will be able to track your loot from:</p>\n<ul>\n<li>Monsters</li>\n<li>Bosses (like Vorkath and Zulrah)</li>\n<li>Clue scrolls</li>\n<li>Chambers of Xeric</li>\n<li>Theatre of Blood</li>\n<li>Barrows Brothers</li>\n<li>Players you PK (!)</li>\n</ul>\n<p>For now, all these data will be tracked only per-session and not persisted and there is only per-kill view,\nbut we are planning to extend both these areas in future. This plugin is disabled by default, so make sure\nto enable it in settings under <strong>Loot tracker</strong>.</p>\n<p>This feature is result of hard work of <a href="https://github.com/WooxSolo">@WooxSolo</a>, <a href="https://github.com/Adam-">@Adam-</a>,\n<a href="https://github.com/TheStonedTurtle">@TheStonedTurtle</a> and <a href="https://github.com/Psikoi">@Psikoi</a>, so thank you all for\nyour great work on it:</p>\n<p><img src="/img/blog/1.4.10-Release/loottracker1.png" alt="loottracker1"/>\n<img src="/img/blog/1.4.10-Release/loottracker2.png" alt="loottracker2"/>\n<img src="/img/blog/1.4.10-Release/loottracker3.png" alt="loottracker3"/>\n<img src="/img/blog/1.4.10-Release/loottracker4.png" alt="loottracker4"/></p>\n<p>Support for minnows timers has been added to the Fishing plugin which displays a countdown until the minnow spot will\nmove. Thanks to <a href="https://github.com/jkybtw">@jkybtw</a> who contributed this feature.</p>\n<p><img src="/img/blog/1.4.10-Release/minnows.png" alt="minnows"/></p>\n<p>The flicking helper in Prayer plugin has been extended to also display in prayer bar, if it is enabled, thanks to\n<a href="https://github.com/forsco">@forsco</a>:</p>\n<p><img src="/img/blog/1.4.10-Release/prayerbarflick.gif" alt="prayerbarflick"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Ungael (Vorkath) obstacles has been added to agility plugin</li>\n<li>Meyerditch obstacles has been added to agility plugin</li>\n<li>Fairy ring clues will now warn about missing spade from inventory</li>\n<li>Lumbridge swamp emote clue now shows correct location</li>\n<li>Loading of window sidebar has been fixed, now it should not mysteriously disappear anymore</li>\n<li>Dig location for Barbarian Villag Hot&amp;Cold clue is now correct</li>\n<li>Idle notifier now notify on crafting leather idle</li>\n<li>Requirement for slaying an Abyssal Demon corrected in Achievement Diary\nplugin</li>\n<li>Fix tile overlay height when highlighting a tile next to the edge of a bridge</li>\n<li>Add config for whether the killcount command is enabled</li>\n<li>Fix minimap overlay dot overlay being slightly off</li>\n<li>Crafting leather has been added to the idle notifier</li>\n</ul>\n<p>Enjoy!</p>\n<p>~ Tomas</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 18 contributors this release!</p>\n<pre><code>Adam (12):\n      perspective: fix worldToCanvas to convert from local to scene coords correctly\n      Revert &quot;perspective: fix worldToCanvas to convert from local to scene coords correctly&quot;\n      perspective: use less magic constants in getTileHeight\n      Revert &quot;perspective: fix regression caused by 2599db2&quot;\n      perspective: split tile height logic out of local to world\n      perspective: fix getCanvasTileAreaPoly when getting tile next to a bridge\n      perspective: fix checkstyle\n      runelite-mixins: correct worldToCanvas arguments\n      perspective: change worldToMinimap location calculation back\n      fishing plugin: add minnows overlay\n      fishing plugin: add position to config\n      Add LootManager\n\nDevin (1):\n      kourend library plugin: Use correct enum naming convention\n\nJacob McElroy (1):\n      Fix dig location of the West Barbarian Village H/C clue (#4524)\n\nJaimy Smets (1):\n      Add alternative dragon pickaxes to emote clue\n\nJordan Atwood (23):\n      item charge plugin: Use constant for checked string\n      timers plugin: Use constants for checked strings\n      Add color utility class\n      notifier: Use ColorUtil functions\n      chat message manager: Use ColorUtil functions\n      widget menu option: Use ColorUtil functions\n      achievement diary plugin: Use ColorUtil functions\n      boosts plugin: Use ColorUtil functions\n      friend notes plugin: Use ColorUtil functions\n      ground items plugin: Use ColorUtil functions\n      inventory tags plugin: Use ColorUtil functions\n      item prices plugin: Use ColorUtil functions\n      item stats plugin: Use ColorUtil functions\n      menu entry swapper plugin: Use ColorUtil functions\n      player indicators plugin: Use ColorUtil functions\n      puzzle solver plugin: Use ColorUtil functions\n      rune pouch plugin: Use ColorUtil functions\n      slayer plugin: Use ColorUtil functions\n      achievement diary plugin: Fix Abyssal demon req\n      achievement diary plugin: Fix Belladonna farming req\n      achievement diary plugin: Fix waka canoe requirement\n      clues: Fix Lumbridge swamp cave emote clue location\n      agility: Add Ungael obstacles\n\nJuul Damen (1):\n      Add missing killcount command config (#4489)\n\nKristian Welsh (1):\n      overlay util: adjust renderMinimapLocation for newer worldToMinimap\n\nMagic fTail (3):\n      TimerPlugin: Fix prayer enhance length\n      Clarify wording of default log tracker message (#4602)\n      Fix Theatre Of Blood InventoryID (#4608)\n\nMax Weber (5):\n      mixins: Prevent runScript from being called recursively\n      runelite-client: Rename ClientThread::invokeLater to invoke\n      runelite-client: Always call done after changed in ChatboxInptutManager\n      fairyring: Always run scripts outside of chatbox input callbacks\n      runelite-client: Make hotkeys run on KeyPressed\n\nMichael Goodwin (3):\n      Add Chambers Of Xeric and TOB inventories\n      Add TOB varbits\n      Add TOB widget ids\n\nMitch Barnett (1):\n      Add Meyerditch to agility obstacles (#4538)\n\nSu-Shing Chen (1):\n      Fix Assembler tests when autocrlf=true on Windows\n\nTomas Slusny (12):\n      Fix loading of chat colors on startup\n      Use consistent API and order for title and sides\n      Add isTab property to title buttons\n      Merge PluginToolbar and TitleToolbar together\n      Add simple info log with startup time\n      Properly use javax.inject.Provider\n      Pack and show frame only after properties update\n      Fix NPE when trying to draw null names\n      Add null check for Perspective.getCanvasTextLoc\n      Account for plane in TileObject canvas location\n      Fix FontManagerTest package\n      Fix getCanvasTileAreaPoly ArrayOutOfBounds\n\nWooxSolo (1):\n      Add NPC death animations\n\naquivers (1):\n      Add spade requirement reminder to fairy ring clues (#4585)\n\nforsco (1):\n      Add flick helper to player bar (#3882)\n\npsikoi (1):\n      Add loot tracker plugin\n\nrswindows10 (2):\n      Add support for crafting leather idle notification (#4600)\n      Remove comment regarding crafting leather (#4601)\n</code></pre>'}}}]);
//# sourceMappingURL=47.96e2aeb2.chunk.js.map