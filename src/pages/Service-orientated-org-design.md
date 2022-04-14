---
# Example: src/pages/page.md
layout: '../layouts/Blog.astro'

title: "Service Orientated Org Design"
subtitle: "In enterprise IT monolithic-applications are making way for micro-services. It goes one of two ways; a painful transition to pure micro-service that often requires rebuilding an application from the ground up or a hybrid design emerges."
imageSrc: "images/Service-orientated-org-design.jpeg"
author: "Thomas Ridings"
authorImageSrc: "images/ThomasRidingsAuthor.jpg"
date: "24 March 2016"
dateNum: 20160324
tag1: "Digital"
url: "./Service-orientated-org-design"
---

## Monolith vs Micro-Service

Many techies will have heard the term ‘monolithic’ banded around recently. It’s used, often with negative connotations, to describe applications where all of the data, logic and interface layers are bundled together and served up from a self-contained box.

Newer approaches focus more on micro-services as an alternative approach. Micro-services are a number of independent single function services that can easily come together to provide the complex functionality required of an overall application.

There are two main principles in micro-service design; each micro-service does only one thing very well and each must adhere to a strict set of rules describing exactly how it communicates with the other services. The first principle prevents each service from becoming too complex and encourages reuse across applications; this supports speed and innovation. The second principle, common communication principles, ensures that application systems can quickly add new services as and when they are available.

The micro-service approach of meshing together individual services to form applications gives many benefits to an IT organisation; not least it enables them to quickly innovate new services when they are required and easily plug them into a whole range of applications. When a shared service needs changes to be made it’s quick and easy to implement regardless of the number of applications it’s used in.

![](https://media.licdn.com/dms/image/C4E12AQGnLCXwwD5hPg/article-inline_image-shrink_1000_1488/0?e=1582156800&v=beta&t=695Ffa1xrklWmGoEjQH9q8-OzDERWfZ5OQHkrHRONAw)

Above diagram is taken from http://martinfowler.com/articles/microservices.html. There is also a really good article on that site on the technical discussion of micro-service vs monolithic

## Welcome Monzo and the Ecosystem

On Monday 1st March Monzo bank’s crowd funding site went live and very quickly got taken down; the website hosting site’s servers had been inundated with requests and couldn’t handle the volume of traffic. They had another go on Thursday 3rd March and within 96 seconds had received the full £1 million investment; the fastest recorded crowdfunding of all time. Monzo say they are “trying to build the best bank on the planet…one that updates your balance instantly, gives intelligent notifications and is easy to use”. It sounds sensible but you could argue it’s not ground breaking stuff, where is the real value in Monzo then?

Beyond the snazzy app and fresh looking UI, one of the biggest benefits is their open platform approach that allows 3rd parties to create interfaces into and on-top of the banking platform. This gives their customers an opportunity to string together complex, bespoke applications.

At the flick of a switch a Monzo customer could plug in an expense reporting tool that automatically reports their transaction data to their business expense claiming tool, or services like Ravelin (where integration already exists) can analyse each transaction for fraudulent activity in real-time. Traditionally speaking Monzo alone wouldn’t worry the established banks but as an ecosystem with its partners it poses a much bigger threat.

Many large organisations today struggle to keep up with the quickening pace of change their customers demand. Retail banks have been notoriously slow to innovate their customer experience and service offerings. In turn they have opened the door to new entrants such as Metro. Metro Bank was Britain’s first new high street bank for nearly 100 years. They have made some great improvements around the customer experience and are claiming through the roof NPS results of around 80. Whilst Metro Bank excel at providing an outstanding customer experience, they follow many of the traditional structures and formats of established players. Despite their recent success, there are reasons to believe that they are ‘just more of the same’ and will eventually slip the same way as today’s established players.

Monzo have approached the problem in a somewhat different way. They allow customers to select their own 3rd party services and turn them on or off, allowing them to create their own bespoke applications. Because the services are standalone, 3rd parties are free to rapidly innovate new solutions much quicker than traditional firms who have many tightly coupled processes and functions that slow them down and hold them back. Customers are free to turn their services off or on as and when they are wanted. Overall innovation across the open ecosystem greatly exceeds that of the traditional firm.

[In the blog post last week, Lee described the rapid rise of the Slack chat client and discussed the role that their approach to open integration has played in their success](http://shiftbase.net/blog/2016/03/09/the-chat-overload-is-just-beginning/). Other stories of success are not too hard to find; recent announcements have revealed the Sailfish open-source mobile operating system is back with new parters in MiFone, Fairphone and Intek allowing customers to effectively select their own features from 3rd parties. Mobile World Congress last month also gave mobile firms a chance to showcase their modular hardware designs, with announcements from Google’s Project Ara and Fonkraft.

In Q2 2014 the percentage of Twitter users relying on 3rd party applications to interact with the platform was around 25% and showed signs that it was on the rise. Users bought into the platform but the UI lagged behind their expectations, Tweetdeck and other 3rd parties quickly responded with innovative standalone solutions that provided a much improved UI and overall customer experience.

Uber are another example of open ecosystem innovation. In 2014 they opened up their service, allowing anyone to create 3rd party applications to be built leveraging a number of their services. Businesses, events and others could integrate with the Uber services directly from their own platforms (website, app etc). They also addressed the flow of money issue by providing a fixed referral fee for each journey booked through 3rd party applications. Uber have since started to expand into new markets within the US; opening their platform up to allow retailers and restaurants to leverage their transportation services to deliver goods and meals in near real-time with UberRush and Uber Eat products, again without the user ever leaving the retailers/restaurants platform.

## Service Orientated Org Design

In enterprise IT monolithic-applications are making way for micro-services. It goes one of two ways; a painful transition to pure micro-service that often requires rebuilding an application from the ground up or a hybrid design emerges. The core logic maintains a monolithic design (because it works) but the layers that need more innovation are decoupled and cast out to run independently, calling on the core logic functions when required. This approach allows changes to be made to the decoupled services without fear of breaking something deep down; it allows them to innovate much much quicker.

A similar approach can work in org design. Shared support services such as HR and Finance maintain their monolithic patterns and expose their services to a common business platform. Autonomous, agile and service-orientated teams operate above; being decoupled from the bureaucratic processes means they can move very fast and innovate.

As for the banks vs Monzo – Monzo have rocked up to a black tie event in fancy dress, we’ll have to wait and see how it plays out.