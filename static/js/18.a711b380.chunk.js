(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{247:function(e,n){e.exports={title:"1.2.15 Release",description:"RuneLite 1.2.15 is released!",author:"Adam",__content:'<p>An agility plugin has been added which shows the click boxes of ability obstaces.\nThanks to <a href="https://github.com/someonewithaninternetconnection">@SomeoneWithAnInternetConnection</a>\nfor their hard work on reversing the clickbox calculations and making this happen.</p>\n<p><img src="/img/blog/1.2.15-Release/agility1.png" alt="agility1"/></p>\n<p><img src="/img/blog/1.2.15-Release/agility2.png" alt="agility2"/></p>\n<p><img src="/img/blog/1.2.15-Release/agility3.png" alt="agility3"/></p>\n<p><a href="https://discordapp.com/rich-presence">Discord Rich Presence</a> support has been\nadded in a new Discord plugin from <a href="https://github.com/deathbeam">@deathbeam</a>.\nIt will show what skill you are training in game as your discord status.</p>\n<p><img src="/img/blog/1.2.15-Release/discord.png" alt="discord"/></p>\n<p>Additionally, abyss rift locations and player owned house locations are now\nmarked on the minimap thanks to <a href="https://github.com/sethtroll">@Sethtroll</a>.</p>\n<p><img src="/img/blog/1.2.15-Release/abyss.png" alt="abyss"/></p>\n<p><img src="/img/blog/1.2.15-Release/poh.png" alt="poh"/></p>\n<p>And the burners are now marked as lit or unlit:</p>\n<p><img src="/img/blog/1.2.15-Release/burners.png" alt="burners"/></p>\n<p>There are also several smaller improvements, including:</p>\n<ul>\n<li>The screenshot plugin now has configuration for the auto screenshot of\nlevelups and rewards</li>\n<li>There is now an option to overlay non-clan members in the player indicator\nplugin</li>\n<li>Theoretical boosts have been added to the item stats plugin</li>\n<li>Indicators have been added for stat boots as an alternative to the current\noverlay</li>\n<li>Fix sometimes drawing overlays at the wrong height above players and npcs</li>\n<li>Don&#39;t enable low memory mode on the audio subsystem when the client is\nconfigured in low memory mode, so the sounds sound normal</li>\n<li>The teamcape plugin has been readded</li>\n</ul>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 9 contributors this release!</p>\n<pre><code>Adam (10):\n      Revert &quot;runelite-client: remove teamcape plugin&quot;\n      cache client: log when index crc changes too\n      cache service: fix duplicating index to archive associations\n      cache service: split up into cache controller and service\n      Split out cache updater into own project\n      http service: change cache datasource to runelite-cache2\n      runelite-client: add central skill icon cache\n      screenshot plugin: add configuration for auto screenshot of levelups and rewards\n      screenshot plugin: fix test\n      player indicators: use new isFriend/isClanMember api\n\nBen Moyer (2):\n      add option to overlay non-clanmate player names\n      Add theoretical boost to item stat overlay\n\nKamiel (5):\n      info box component: vertically center images\n      Add indicators to boosts plugin\n      Fix several issues with indicators\n      Prevent tooltip from being shown when runepouch is empty\n      Make examine plugin work for runepouch\n\nMax Weber (4):\n      move session management into the SessionManager from the AccountPlugin\n      Add info panel plugin\n      field1147 &gt; logicalHeight\n      change getModelHeight to getLogicalHeight\n\nSeth (5):\n      runelite-api: add MiniMapImageLocation to perspective\n      runecraft plugin: add Abyss rifts overlay\n      make injected fields private\n      Fix color tags in OpponentInfo\n      Add Poh plugin\n\nSomeoneWithAnInternetConnection (9):\n      Decrease the injector plugin&#39;s verbosity\n      runescape-client: Rename some AABB-related fields\n      Simplify Triangle and Vertex with lombok\n      Move orientation incantation into Vertex.rotate\n      Add method to get the clickable area of a TileObject\n      Add events for Decorative and Ground TileObjects\n      Add agility plugin\n      Fix boosts plugin style nits\n      Fix NPEs from BoostsPlugin at startup\n\nTomas Slusny (6):\n      Change default overlay position to UNDER_WIDGETS\n      Add new overlay layer position\n      Adjust overlay layers and priorities\n      Fix MLM plugin overlay layer\n      Add Discord RPC service\n      Add Discord plugin\n\nUniquePassive (3):\n      Always use &quot;high memory&quot; audio\n      Rename highMemory to audioHighMemory\n      Rename ocLowDetail to objectCompositionLowDetail\n\nUnmoon (3):\n      Idle Notifier - Change wording and default value of &quot;Alert When Focused&quot;\n      Show ground items under widgets and with interfaces open\n      Remove unused import\n</code></pre>'}}}]);
//# sourceMappingURL=18.a711b380.chunk.js.map