---
title: "48 hours until air — The SISTEM Story"
pubDate: 2022-03-07
layout: "../../layouts/BlogPostLayout.astro"
---

## What is SISTEM?

SISTEM is the **S**tudent **I**nter-**S**ociety **T**ech & **E**nterprise **M**eetup. An annual technical conference for students across the Isle of Ireland. This year’s conference was held on Saturday, the 26th of February, in UCD’s O’Brien Centre for Science. It was also possible to attend online via the [Hopin](https://hopin.com/) Platform.

![](https://www.ucd.ie/conferences/t4media/obrien-centre-for-science-1.jpg)
UCD's O'Brien Centre for Science, Exterior. [UCD Conferences.](https://www.ucd.ie/conferences/gallery/obriencentre/)

Over the past 5 or so months, I helped organise SISTEM as I am the current treasurer of [DU Netsoc](https://netsoc.ie) which is an ex-officio member of the organisation committee. Other members of the committee were made up by representatives of other computing/CS societies across Ireland.

It has taken weekly meetings, and a metric shit-tonne[^1] of work to pull off what we did, and there was definitely 7 days of hell before the event tying up loose ends, and getting things mailed out. There were also a few instances of worry that things wouldn't arrive in time. Fortunately, by Friday we had basically everything in place and were ready for a dry run the night before. 

One of my favourite types of documentary to watch are those which show the logistics of how a major event was prepared for, or how things are done behind the scenes. In particular, I love [7 days out](https://en.wikipedia.org/wiki/7_Days_Out). [^2]

“7 days out” follows key people involved in the preparation of a large, upcoming event, such as the re-opening of [Eleven Madison Park](https://en.wikipedia.org/wiki/Eleven_Madison_Park) following renovations or the finale of the [Cassini Mission](https://en.wikipedia.org/wiki/Cassini%E2%80%93Huygens). If you like nerding out about event logistics, you should definitely check it out. 

## The Week Leading up to it

The organisation of SISTEM really reminded me of 7 days out. In the run-up to the event, the entire team was working flat-out to get everything done. This included trying to get last-minute quotes for t-shirts [^3], as well as printing and trying to pin-down transportation to get our attendees from all stretches of the country to UCD for 9:30am on a Saturday. 

We all had to do all this alongside our studies — most of us were coming up to the break in term, where there are a lot of mid-semester examinations and assignments coming up due. It's honestly a miracle that we managed to get what we had done in time. Constant and clear communication over Slack was key here.

Two nights before the event, Thursday the 24th, we had a few members of the committee go out to UCD. We did this to check out how the venue had changed since our last in-person SISTEM in 2020. It also allowed us to reacquaint ourselves with the venue. We had booked 2 lecture theatres, the Moore Auditorium, the Lynch theatre, as well as two classrooms; one as a quiet/green room and another to host our workshops.  

![](http://sx.paradaux.io/A4Hm)
The Moore Auditorium, SISTEM 2022 photo taken by myself. Taken during the Mastercard Opening Talk

## The Night Before

We were pretty excited at first by the setup in the Moore Auditorium, it had a ceiling-mounted camera which could be moved via a control deck at the podium, as well as a dual-microphone audio system, and dual-projectors which could be individually controlled. 

Unfortunately, this particular theatre did not have the ability for us to hook into the audiovisual feeds for use on the computer present at the desk, they were restricted to a local recording device, which according to UCD's IT Services, was not possible to hook into. 

Estates & Facilities also never delivered the tables and seating we had pre-arranged. We ended up commandeering some seating and tables from the café / respite area on the ground floor (we made sure to put it back, UCD!) 

It was pretty clear at this point that things weren't going to go as smoothly as we had thought from the scouting mission the night before. 

The panel room in particular had us stuck for about an hour, the room had two desk-mounted microphones which could be moved but not sufficiently to allow for five panellists to talk huddled around the podium. We had to figure out a way to hook into a preferably wireless microphone into the room's sound system, and our streaming setup to Hopin. 

![](http://sx.paradaux.io/Fnmh)
The Lynch theatre, hosting the Women in Tech Panel. Features Nadia Alramli, Chloe Thompson, Karen Emelu, Susanne Manning, Valerie Oyiki, Grace Angulu

## The Streaming Setup

As I alluded to earlier, we had an issue in the Moore Auditorium in that we couldn't access the camera or video feeds, but we still needed to be able to broadcast the main track to our viewers at home. I was put in charge of solving this particular issue, which actually worked out well in the end. 

At home, I had an [Elgato Wave 3](https://www.elgato.com/en/wave-3) microphone and [Logitech C920](Logitech C920 ) webcam, which I used for the various video calling and for my work as a Programming Teacher @ [Olus Education](https://olusedu.com). These together proved to be all we needed to have a functional stream on the day. We could place the webcam on the monitor at the desk, so it had a good view of the podium from the side, and for our virtual-first speakers we could spin it around to give them a view of the audience. 

This then came with the issue of how we were going to broadcast our speaker's screens to Hopin. It wouldn't be realistic to get them setup with OBS Studio and the like and have them stream to Hopin themselves. Funnily enough, Zoom — a piece of software we're all too familiar with at this point — has the ability to livestream a meeting via RMTP, a protocol which Hopin supports. We ended up using this to our advantage. 

My laptop would remain at the podium hosting the Zoom call and providing audio and video, and when a speaker brought up their own computer we could have them simply join the Zoom meeting via a bit.ly link on the desk, and share their screen via that. They would also be hooked directly into the projects via HDMI or USB-C. 

![](http://sx.paradaux.io/2Kod)
The lecture podium, with the wave 3 and webcam. The presenter's monitor showed the in-ceiling camera as well as a view of the slides behind them. My laptop is there, broadcasting to zoom. 

Using zoom for this also allowed us to stream our remote-only speakers much more easily, all they had to do is join the Zoom meeting, and they would be broadcast on Hopin and in the room via my laptop. 

I'm not going to lie, I thought I was a genius for coming up with this little setup. For those in the room, we used the microphones provided by the venue, as they were hooked up into the room's speakers. 

![](http://sx.paradaux.io/UtEl)
James Whelton: "Building Things For Fun & Occasional Profit", a remote-only speaker as seen from Hopin

![](http://sx.paradaux.io/ZzkA)
That same talk from the audience's perspective 

![](http://sx.paradaux.io/mUjc)
Luke Rynne Cullen: "How to Start a Startup" as seen from Hopin.

The panel room was also hooked up with a similar setup, however the Lynch theatre's in-ceiling camera was directly connected to the computer there. This allowed us to use that for the stream, as well as the microphone's present in the room. 

The microphones in the room however were not sufficient for the panels, as we needed the ability to hear the speakers who were off to the side. Fortunately again, James on the Committee had a Shure condenser microphone, and UCD had lent us an abnormally long XLR cable. With both of these we were able to unplug one of the two microphones on the desk (which simply used XLR) and in their place hook-up our microphone. This allowed us to use one of the desk microphones for the panel host, and a microphone which could be passed around for our panellists. 

For future SISTEM meetups, we're going to be sure to rent out a wireless microphone for this purpose, as well as the correct camera equipment to ensure we can livestream much more efficiently and pleasantly. 

We have also discussed ditching Hybrid for SISTEM 2023, however this will be a decision left up to them. I hope the conference can come to Trinity in 2024, during my final year, as I would love to see everyone on our home turf. 

There were talks of having it in Trinity this year, however with the uncertainty of the pandemic back in August I was hesitant to put forward it as an option, with how strict the college was on the initial return to on-campus teaching. 

# Hopin: A review from an organiser's point of view

Hopin is a perfectly fine piece of software from the perspective of a user. They go to the event page, purchase the ticket of their choosing, checkout with stripe, and they'll be emailed when the event goes live. 

From an organiser's perspective it's a nightmare, with obtrusive UI, really unintuitive design choices and bad documentation. It's also horribly overpriced. 

Running SISTEM on Hopin cost us a $99+VAT subscription for the month. This granted us 100 registrations which weren't subject to additional "booking fees" from Hopin and access to their platform. 

Their platform does, in fairness, have very useful features for a conference such as our own. It lets us have a main stage, and multiple sessions, each with their own independent streams. This also includes a per-stream chat and virtual booths for companies to use. 

The virtual booths are incredibly hard to show companies how to use. The documentation for them is very limited, and we also have to provide the companies tickets to use the virtual booths (costing us additional money, as we still pay for free registrations.) Following the booth staff getting tickets, to add them as moderators, manually after the fact, rather than giving them a moderator sign-up link. This lead to some mistakes on our part as we thought we already had them as moderators. 

Hopin supposedly records everything streamed to it. Before the event we had enabled recordings, however buried in the footnotes it had a warning that sessions streamed via RMTP were not recorded. I wish I had known this _before_ the event that way I could've had Zoom record it, this meant we lost the recordings of our panel discussions, which took place over a session. We do have the main track recording, although there are a few issues with that as well. 

We also got a surprise bill after the event for €60 for the additional 100 registrations that took place. This is a ridiculously high price to pay per registration, considering most didn't even use the Hopin software, and were attending entirely in-person. We only had a few dozen online attendees. The "profits" of this event are to be donated to Belong2 Youth Services, so I'm not happy I'm forking over almost €200 to a software company which didn't contribute as much value as they claim. 

If we're paying a subscription to use the software, there shouldn't also be a fee per-ticket. You shouldn't be able to get us both ways, either have a price-per-ticket fee or charge a subscription, doing both is greedy, and I will be advising the next committee away from Hopin in the future. 

This is second to the various scandals which have been popping up, including cutting [12% of their staff](https://techcrunch.com/2022/02/10/virtual-events-platform-hopin-cuts-12-of-staff-citing-goal-of-sustainable-growth/?guccounter=1) weeks before the event took place.

## Closing Remarks

In short, I think the day was really enjoyable. It was an absolute pleasure to meet everyone on the committee for the first time (We had been isolated to Google Meet for our weekly meetings, being from all around the country) and our post-event pints were definitely enjoyable! 

I'm excited to see what the future holds for the conference, as it has only got bigger year-on-year, and we have aspirations to extend it to international speakers and societies, particularly those from Great Britain. 

Thank you to everyone who came, as well as our speakers who gave up their time on a Saturday morning. It was really nice to move back into an in-person event for the first time in two years, and I hope this is only the first of many. 

Rían 

## Photo Dump
Here are some of the pictures from the day which I couldn't smoothly integrate into the rest of this post. Videos, recordings and other pictures will be released over time as we filter and sort through them. They'll be made available on the SISTEM Socials, as well as the profiles of our various speakers. 

If you're a speaker, and you haven't received materials from your talk 2 or so weeks from the date of this post, feel free to reach out to me at [rian@paradaux.io](mailto:rian@paradaux.io), and I'll make sure you're sorted. We're still collating all the pictures from our various photographers and sorting them by talk/speaker/etc. We also have some short videos recorded from the day, which we need to sift through as well. 

![](http://sx.paradaux.io/YLsw)
From left to right, Daniel Guerin ([DUCSS](https://ducss.ie/)), myself ([Netsoc](https://netsoc.ie)) and [Neil Kilbane](https://kilbane.ie) (Netsoc) photo taken by Mitchell.

![](http://sx.paradaux.io/Gvv4)The SISTEM Team, 2022

![](http://sx.paradaux.io/zKnw)
Company Booths, including Workday, Accenture, Tines, Hubspot, Microsoft, Redhat

![](http://sx.paradaux.io/kgXQ)
Stephen Howell's Disability in Tech Workshop for Microsoft. 

![](http://sx.paradaux.io/Cj9U)
Me, probably complaining about my lack of sleep during the closing talk

[^1]: This is a real unit of measure, and you cannot refute this point. I am so glad to have my Thursday evenings back now, following the event. 
[^2]: The documentary [6 days to air](https://en.wikipedia.org/wiki/6_Days_to_Air) is also a worth a mention, which shows the production cycle of the television series [South Park](https://en.wikipedia.org/wiki/South_Park)
[^3]: Shoutout to Barry @ [texpro.ie](http://texpro.ie) for giving us a 5-day turnaround for 26 shirts, including hand-delivery on a Friday afternoon to UCD Campus, absolute gent! 