---
title: "Reflecting on Minecraft"
pubDate: 2021-10-29
layout: "../../layouts/BlogPostLayout.astro"
---

I have loved the voxel-based video game for well over 10 years, it is one of the very few popular video games which could run on 
Linux at that time, this was before [Proton](https://github.com/ValveSoftware/Proton) was even a thought. This lead me down a long garden path as I grew up and realised I was really
 into computers, how they work and how I can convince them to do my bidding through code. 

Since 2017 I have been writing plugins for Minecraft Servers after HPE Cloud gave us a monthly budget for hosting a Minecraft server for our
 local [Coderdojo](https://coderdojo.com/) in Leixlip, Ireland. This is what taught me the importance of system administration, how to manage what was ostensibly a VPS in the cloud as a 14/15-year-old. It was a fun form of Freedom, as I was the only kid with sufficient familiarity with Linux
to be able to do it. [^1]

In wanting to improve the server, I learned that you could write your own modifications for the server using something known as CraftBukkit. 
This is what introduced me to the Java Programming Language, which I now use on a daily basis -- both in College and in my work as a programming
teacher for [Olus Education](https://olusedu.com) [^2]

I remember writing my first Java programs using Netbeans[^3], where I'm pretty sure every second word that came out of my fingers was `static`. 
I'm glad that my inner linguist had me writing (relatively) easy to translate code. 

![A depiction of my awful implementation of a locale](https://i.imgur.com/DmD6BkS.png)
A pretty laughable attempt, but I had the right idea! You can see the rife static abuse, and weirdly inconsistent indentation.

In 2019 I started getting involved with a community of developers who were doing Minecraft server development, stemming from a subreddit [r/admincraft](https://www.reddit.com/r/admincraft/) [^4] and I managed to pick up some loose contract work, I was working as a Kitchen Porter that same summer so I was _very_ appreciative of earning ~€4/hr doing what I loved over the €10/hr for which I was doing some of the most physically intense labor of my life to date.

I wrote some publicly available modifications for Minecraft servers, simple ones -- a discord to Minecraft bridge and scheduled announcement system
which gained me enough notoriety to pick up a position at a larger organisation running Minecraft Servers; DestinyMc. 

It was this that actually technically challenged me enough to learn Java formally, and quickly at that. I was thrown in as the sole maintainer of a codebase spanning 4 years and with over 1.4m source lines of code, according to the [Statistic Plugin](https://plugins.jetbrains.com/plugin/4509-statistic) for Intellij. I was working on a (legally questionable) clone of Pokémon within Minecraft without the use of client-side mods, so anyone with a computer and no technical knowledge could join and play -- It requested no effort from the end-user. I am extremely proud of the work I did for them, even though most of my time was spent refactoring and refining the existing codebase. This also required decompiling and reverse-engineering substantial amounts of the (obfuscated) Minecraft
server source code, as there were many unacceptable tradeoffs or simply non-existing API implementations within [Bukkit](https://github.com/Bukkit/Bukkit) and it's spiritual successor, [Paper](https://github.com/PaperMC). 

I left that role at the end of July 2021 with 230,000 lines of code (total changes, not necessarily all additions) under my belt in a programming language 
I barely knew walking into it. I am indebted for the experience, and I loved working with everyone I did on it! 

Today I made the decision to leave the Minecraft development scene, after months of Hiatus. While I'm grateful for everything the community and the experience
 has given me, it's time that I move on, as I complete my degree and work on other consultancy and pedagogical projects which I have in the works. If you would
 be interested in taking over [conch](https://github.com/ParadauxIO/Conch), [AutoBroadcast](https://github.com/ParadauxIO/AutoBroadcast) or any of my other [spigot](https://www.spigotmc.org/resources/authors/paradaux.350999) projects, please do let me know. 

> This is more of an abriged version, I left out a lot of details for the sake of brevity, and besides that's content for future dissections, including the debugging of _so many_ concurrency issues.

 [^1]: I have now outgrown that VPS and I employ the use of an [AX41](https://www.hetzner.com/dedicated-rootserver/ax41-nvme) from Hetzner to serve as my "homelab." 
 [^2]: Formally known as The Academy of Code.
 [^3]: The thought of Netbeans and eclipse now, in the age of Intellij 😭
 [^4]: This community has stopped being a development community and is now just kids looking to make a quick buck by making a Minecraft server, there's an
 entire shadow industry dedicated to this, which is honestly deplorable. 