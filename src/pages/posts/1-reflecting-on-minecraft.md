---
title: "Reflecting on Minecraft"
pubDate: 2021-10-29
lastEdited: 2023-04-09
author: "Rían Errity"
summary30: "Reflecting on my experience with Minecraft, beginning with learning about Linux and server management, developing a passion for Java and creating plugins for Minecraft servers, which led to jobs and recognition in the community. The skills and experiences I gained were invaluable as I navigate University education and my career."
layout: "../../layouts/BlogPostLayout.astro"
type: blog
---
Minecraft was a constant in my life for well over ten years. At the time, it was one of the few popular video games which ran on Linux at all. This was years before the likes of the Steam Deck or Proton. 

My dad is a programmer and has been since I was a young child. Thanks to that, my first computer ran one of those lightweight Ubuntu forks, either Xubuntu or Lubuntu — I can't remember which. This instilled the 'figure it out yourself' philosophy, reminiscent of computing in the eighties or nineties. This helped me fall in love with computers and how they work. It's only in hindsight I can appreciate how little he helped me with my computer.

I have been writing software for Minecraft Servers since early 2016, but I was actively involved in and playing on and moderating Minecraft servers since 2014. It was in 2016 when HP (now HPE) Cloud gave us some server space to run a server for our local Coderdojo[^1]. This was something completely new to me, while I knew the very basics about running programs via the command-line at the time I didn't know a thing about SSH or Firewalls or anything of that sort.

As I was the only kid there with experience with Linux and running Minecraft servers, I was given the 'keys to the castle,' so-to-speak. I was to set up the server in such a way that only approved accounts could access it, but make it generally available over the internet. This made me learn about ports, and firewall rules, as well as just how to connect to the server by generating an RSA keypair. It was definitely challenging for a 14-year-old kid, which I was at the time. 

With some help from some of the Mentors — The adults present at the coding clubs — I was able to get Java installed, the dedicated server software installed and the server online. There was just one problem. I couldn't access it. The person who owned the HPE Cloud account had to open a port, 25565 in order for us to be able to access it from outside its local network. He had me justify why I needed the port open, and what I could do to make sure the open port wasn't abused, all useful things to begin thinking about for a young System Administrator like I had just become. 

In wanting to improve my new project, my Minecraft server, I learned that you could use plugins to enhance the experience of its users. This consisted of custom software add-ons which allow server-sided modifications to the game. You see, Minecraft draws the distinction between Mods which (usually) must be installed on both the server and client, whereas plugins reside only on the server itself. 
ß
They can be used to allow players to protect their belongings and their land in game, by restricting who can interact with their stuff to being able to control what people can say or do. In trying to create a swear filter using an off the shelf plugin, I learned quickly about the [Scunthorpe Problem,](https://en.wikipedia.org/wiki/Scunthorpe_problem) where implementing filters can have unintended consequences on otherwise innocent words. 

I was beginning to see all the cool things plugins could do, and I wanted to implement some of the ideas me and the other kids had come up with in-game. This led me to learning Java for the first time, a language which I continue to use and adore to this day. In fact, as of March 2021 I have been regularly teaching classes in Java to children for [Olus Education](https://olus.education) by making simple games and animations using Java in processing. 

I remember writing my first programs using NetBeans, where every second word I used would have been `static`. It's pretty funny thinking about it now, given how poorly I understood how programming in Java works, it probably took me until 2018 - 2019 to get a solid mental model of Java and how OOP works in general, with thanks to my friends in the space.

<div className="aside">

![A depiction of my awful implementation of a locale](https://i.imgur.com/DmD6BkS.png)

A pretty laughable attempt, but I had the right idea! You can see the rife static abuse, and weirdly inconsistent indentation.

</div>

I started getting involved with a community of Minecraft developers and server owners on Reddit, known as `r/admincraft`[^2]. This community also had an IRC channel on Espernet, and later a discord server. Through the connections I made there I was able to pick up some loose contract work, writing simple plugins for are and there, although the entire 'economy' in this space is made up of children paying other children by using unverified PayPal accounts and a 'trust me bro' attitude, as you can imagine — scamming is rampant. 

At this point I was 16 going on 17, working as a kitchen porter at a local restaurant, so I was very appreciative of earning €4/hr doing what I loved (writing minecraft plugins) over the €10/hr I was earning for doing some of the most physically intense labour I will probably ever have to do. I can at least say I gave my time in the service industry, I have so much respect for those who still are, thanks to that. I was using a lot of my pay cheque from this to have my own dedicated server space at Hetzner to run my own servers and my own infrastructure in general. I essentially got into the 'homelabbing' hobby from running Minecraft servers as a kid, something I'm now taking into my work as I manage the server infrastructure for [Abair](https://abair.ie).

Sometime in 2019 I also began publishing and maintaining my own open-source plugins. At the start, these were very rudimentary. For example, I wrote a plugin to automatically send pre-configured messages to all online players at regular intervals, which became my most popular plugin with around 7,000 downloads[^3]. The project which really levelled up my abilities though was a Minecraft to Discord bridge[^4]. Discord was really blowing up at the time, and allowing players in-game to talk to those who weren't, was a highly desired feature. This provided me enough notoriety to pick up a position at one of the larger servers, where I was able to work on much larger projects.

At the start of the pandemic, just after my 18<sup>th</sup> birthday, I picked up a position on a Minecraft server, earning a flat €500/month to maintain a pre-existing two-million line of code set of custom plugins.

The plugins aimed to recreate the gameplay of Pokémon solely through the use of server-sided modifications. This was easily one of the most technically challenging projects I had ever worked on. It forced me to learn Java formally and thoroughly, I was now working on a project so large the only reasonable way to navigate it was using the search all files shortcut on IntelliJ to search for particular text rather than traversing the insane class path. I was now the sole maintainer of a codebase spanning 4 years.

The project itself was definitely legally questionable, but that didn't concern me at the time, I was too excited by the opportunities for learning and bettering my programming ability (and earning a few quid while I did it!) It was my only source of income during the pandemic, as the restaurant I had worked for closed down just before the pandemic. 

I left that role at the end of July 2021 with 230,000 lines of code (total changes, not necessarily all additions) under my belt in a programming language I thought I knew walking into it, but really I didn't. I am indebted for the experience, and it stood with me as I moved on to other things, like beginning University already knowing how to program quite well, and later landing an internship at Microsoft. 
  
I still come back to the game every once in a while, but I don't think I'll ever have the passion for it that I once did, in fact I'm noticing as I get older that I'm not enjoying playing games as much as I used to. I'm not entirely sure how I feel about it, but I suppose it's just a sign of getting older as I move on to making new things and spending my time differently. 

[^1]: CoderDojo is a movement which has spawned the creation of thousands of computing clubs around the world for kids ages 7-17, in order to bolster programming skills among kids. 
[^2]: I hesitate to link the subreddit, as the moderator has been questionable, most users at the time myself included have migrated to [Syscraft](https://syscraft.dev)t. 
[^3]: It's called AutoBroadcast, and it can be found [here](https://www.spigotmc.org/resources/autobroadcast.69377/), on spigotmc a website which hosts the (terrible) Spigot Minecraft Server Software as well as most plugins for the game. 
[^4]: This became HiberniaDiscord (Hibernia for Ireland) which can be found [here](https://www.spigotmc.org/resources/hiberniadiscord-%C2%BB-chat-to-discord-integration.67795/)