---
title: "Fixing Latam's Broken Voting Systems with VotAR"
description: 'How WhatsApp, cryptography, and better design can bring voting into the 21st century.'
pubDate: '2025-12-16'
authors: ['Mitchell Ozmun']
heroImage: '/images/hero-fixing-latam-voting.png'
tags: ['voting', 'democracy', 'blockchain', 'cryptography', 'argentina', 'civic-tech', 'whatsapp', 'zero-knowledge']
---

Traditional voting systems feel like they've been frozen in time for centuries. The process is slow, expensive, and wildly inefficient; an institutional ritual that demands physical presence, mountains of paperwork, specialized infrastructure, and sometimes months of coordination. And despite all of that effort, most citizens participate maybe once a year. At the federal level, usually once every four.

This mountain of obstacles erodes democracy in many ways. When voting requires so much logistical lift, governments and institutions simply avoid doing it. Decisions get made by too few people, too infrequently, with too little transparency. Constituents become disenchanted with the system and don't feel represented by their elected representatives.

Voters deserve far better.

## The Reality in Argentina: A System That Can't Keep Up

During my time at Edge City and Devconnect in Argentina, I had the opportunity to listen to Argentinians, people who run municipal associations, government offices and community organizations. It's clear to me there are serious problems deeply entrenched in antiquated bureaucracy.

Have a gander at the bottlenecks I consistently hear:

- **Information is scattered everywhere.** Updates and key information get lost between emails, WhatsApp groups and verbal conversations that aren't documented.
- **Meetings are inaccessible.** Attendance collapses because in-person assemblies demand schedules that real people simply don't have. When attendance is too low, quorum isn't met, which means nothing can be decided. A complete waste of time.
- **Voting windows are absurdly short.** The hard reality is that most people activate and pay attention when it's time to vote. When a voting window is hours instead of days, hasty decisions are made.
- **The whole process crawls.** Reading, voting, verifying, and recounting all happen manually, at a pace that belongs to another era.

The weight of all the logistics including managing humans, systems, constantly changing schedules and unresponsive institutions, voting becomes too cumbersome and communities suffer as a result.

At every turn I look at the processes we put ourselves through and I think,

*Lord so help me, there must be a better way to do this.*

## The Moment Everything Clicked

During my time in the human.tech residency and the Argentina On-chain residency, something became clear: the country is ready for tools that make democratic participation easier, more transparent, and more frequent.

Argentina already has one of the highest crypto adoption rates in the world. People understand digital value. They understand decentralization. They're eager for systems they can trust without needing to trust a middleman.

While attending those residencies I was also able to spend time with the CEO of Vocdoni, Jordi who taught me how Vocdoni works and holy crap was that a big unlock for me. Their infrastructure for verifiable, cryptographically secure voting offered the backbone of a tool that could realize my dream of reinvigorating democracy.

I had also experimented with using WhatsApp and Telegram for civic participation in previous hackathons but never could find something that lived up to my dream.

I knew we needed to make a great UX, adapting to where people are already coordinating, in LatAm WhatsApp is the strikingly obvious answer. Nearly every participant, in every institution, already uses it daily.

Modern voting won't start by asking people to adopt a new tool. It will start by meeting them exactly where they already are.

## Introducing VotAR

VotAR is a WhatsApp-native civic participation platform powered by zero-knowledge proofs, verifiable identity, and blockchain-backed audit trails.

Our goal is simple:

**Make secure, private voting accessible to every institution in Argentina.**

Here's what changes with VotAR:

- **Voting from anywhere:** No polling stations, no travel, no excuses.
- **Longer voting windows:** Days or even weeks instead of hours, dramatically increasing participation.
- **Instant communication:** Reminders, notifications, and proposal details arrive where people already read them.
- **No new apps to learn:** If you can use WhatsApp, you can vote.
- **Real-time results:** The blockchain provides transparent and real-time voting results without manual processes.
- **Multiple voting methods:** Ranked, yes/no, single choice, all with cryptographic integrity.
- **Privacy guaranteed:** ZK technology proves eligibility without revealing personal data, including how anyone voted.

All types of institutions, from municipal associations to cooperatives to universities, can suddenly run secure votes in hours instead of weeks. They can poll their communities more often, gather more accurate sentiments, and make better decisions with more legitimacy.

## The Economics Are Impossible to Ignore

Elections across Latin America in the last decade typically have cost between $4 and $16 USD per registered voter. Those costs balloon due to logistics, staffing, security, and infrastructure.

VotAR can on average reduce that cost by ~85%, with votes costing under $1 per participant — a figure that drops further as institutions vote more frequently.

In 2023 Argentina spent $91.5 billion pesos on a federal election which when adjusted for inflation on the peso translates to ~$310M US Dollars!

Running the numbers I estimate votAR could drop those costs by 90%, being able to run a federal election at scale for around $30.5M USD, and the cost per election actually decreases as the frequency of elections increase.

![Cost comparison between traditional voting and VotAR](/images/costs-traditional-vs-votar.webp)

That is a massive budget saving opportunity that institutions should be paying attention to.

## Why We're Building in Public

Building voting infrastructure is not something you do behind closed doors. It must earn trust, not through marketing, but through transparency, open scrutiny, and the willingness to let experts examine every component.

So we're choosing to build VotAR in public.

- Sharing architecture and decisions openly
- Inviting critique from security researchers and civic technologists
- Stress-testing assumptions with institutions on the ground
- Reporting our progress, failures, and learnings as we go

Democracy requires accountability and open-source software in order to bring back constituents to believe in the system again.

## We're Looking for Partners in Argentina

I'm building VotAR with my co-founder Ed whom I met in Patagonia at the human.tech residency, he's a superstar full stack developer based in Chubut, Argentina.

As we kick off VotAR, we're opening the doors for collaborators who want to help shape the future of democratic participation:

### We're seeking:

- **Argentinian Institutional Experts:** Connected individuals that understand and know how to interface with Argentinian institutions, governments and municipal associations
- **Civic organizations, cooperatives, unions, universities, and neighborhood groups:** Communities interested in running pilots with modern, secure, low-cost voting infrastructure.
- **Experts in privacy, digital governance, cryptography, and law:** Domain experts who want to challenge us, guide us, and ensure what we build is worthy of public trust.

If that's you, reach out.

We want your eyes on this. We want your feedback. We want your skepticism, your contributions, your critiques.

This is an incredible opportunity to make a massive impact in communities that need it now.

And if we do this right, Argentina can become the global example of how democratic participation should work in the 21st century.

**VotAR begins now.**

If you want to get in touch feel free to use any of the following channels:

- Send me an email at [mitch@votar.casa](mailto:mitch@votar.casa)
- Shoot me a DM on Twitter — [https://x.com/divine_comedian](https://x.com/divine_comedian)
- Reach out via Telegram [@divine_comedian](https://t.me/divine_comedian)

## Sources

1. Registraduría Nacional del Estado Civil (RNEC) & Consejo Nacional Electoral (CNE), Colombia. Organismos responsables del sistema electoral colombiano. [https://www.registraduria.gov.co/-RNEC-CNE-.html](https://www.registraduria.gov.co/-RNEC-CNE-.html)

2. El Heraldo (Colombia). "¿Cuánto le cuesta al país las elecciones de este año?" March 13, 2022. [https://www.elheraldo.co/politica/2022/03/13/cuanto-le-cuesta-al-pais-las-elecciones-de-este-ano/](https://www.elheraldo.co/politica/2022/03/13/cuanto-le-cuesta-al-pais-las-elecciones-de-este-ano/)

3. El Financiero Costa Rica. "¿Cuánto dinero se presupuestó para las votaciones y cuánto 'cuesta' una segunda ronda?" [https://www.elfinancierocr.com/economia-y-politica/cuanto-dinero-se-presupuesto-para-las-votaciones-y/KWLPKVCGVBAATO54JOZYE4JSJY/story/](https://www.elfinancierocr.com/economia-y-politica/cuanto-dinero-se-presupuesto-para-las-votaciones-y/KWLPKVCGVBAATO54JOZYE4JSJY/story/)

4. Servicio Electoral de Chile (SERVEL). Documentación oficial sobre procesos electorales y gastos — Elecciones 2021. [https://www.servel.cl/servel/modulo-de-archivos/?y=2021&sv_documenttype_id=35&sv_variableattribute_id=26&offset=0](https://www.servel.cl/servel/modulo-de-archivos/?y=2021&sv_documenttype_id=35&sv_variableattribute_id=26&offset=0)

5. Laboratorio Electoral (México). "(III) Elecciones México 2024: El costo de la elección." [https://laboratorioelectoral.mx](https://laboratorioelectoral.mx)

6. Infobae (Argentina). "Cuánto es el costo previsto de las elecciones y cuáles son los rubros que se llevarán las principales partidas." June 3, 2023. [https://www.infobae.com/politica/2023/06/03/cuanto-es-el-costo-previsto-de-las-elecciones-y-cuales-son-los-rubros-que-se-llevaran-las-principales-partidas/](https://www.infobae.com/politica/2023/06/03/cuanto-es-el-costo-previsto-de-las-elecciones-y-cuales-son-los-rubros-que-se-llevaran-las-principales-partidas/)

7. Congreso Nacional de Chile. Resumen Ejecutivo — Congreso 2021. Documento institucional, 2021. [https://www.congreso.cl](https://www.congreso.cl)
