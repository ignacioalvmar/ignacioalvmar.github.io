---
title: "The Value of Human Experience in the AI World"
collection: talks
type: "Blog"
permalink: /talks/value-of-human-experience
venue: "Blog"
date: 2026-04-15
location: "Online"
abstract: "How to upskill without giving away what makes you valuable. A field guide to building your digital belt, protecting your judgment, and finding the third door between resisting AI and surrendering to it."
---

<style>
/* ============================================================
   "The Value of Human Experience" — interactive blog styles
   Scoped under .page__content so nothing leaks into the theme.
   Palette mirrors the original LaTeX design.
   ============================================================ */
.page__content {
  --fg-deepbrown: #1E0802;
  --fg-warmgray:  #6B5B50;
  --fg-accent:    #B8562A;
  --fg-quotebg:   #F3EFEB;
  --fg-rule:      #D9CFC7;
  position: relative;
}

/* ---- Hero / byline / deck ---- */
.fg-subtitle {
  font-size: 1.25em;
  line-height: 1.4;
  color: var(--fg-warmgray);
  font-weight: 400;
  margin: -0.2em 0 0.9em;
}
.fg-byline {
  font-size: 0.95em;
  color: var(--fg-deepbrown);
  margin: 0 0 0.2em;
}
.fg-byline strong { color: var(--fg-deepbrown); }
.fg-meta {
  font-size: 0.85em;
  color: var(--fg-warmgray);
  letter-spacing: 0.02em;
  margin: 0 0 1.6em;
}
.fg-deck {
  font-size: 1.3em;
  line-height: 1.55;
  font-style: italic;
  color: var(--fg-deepbrown);
  background: var(--fg-quotebg);
  border-left: 3px solid var(--fg-accent);
  padding: 0.85em 1.1em;
  margin: 1.4em 0 2em;
}

/* ---- Thin centered divider (was \thinrule) ---- */
.fg-rule {
  border: 0;
  height: 0;
  width: 30%;
  margin: 2.6em auto;
  border-top: 1px solid var(--fg-rule);
}

/* ---- In-flow definition boxes (was \inlinequote) ---- */
.fg-definition {
  background: var(--fg-quotebg);
  border-left: 2.5px solid var(--fg-rule);
  padding: 0.8em 1.1em;
  margin: 1.6em 0;
  font-size: 1.02em;
  line-height: 1.55;
  color: var(--fg-deepbrown);
}
.fg-definition strong { color: var(--fg-deepbrown); }

/* ---- The inline marker that anchors a side callout ---- */
.fg-mark {
  display: inline-block;
  width: 1.05em;
  height: 1.05em;
  margin-left: 0.18em;
  vertical-align: super;
  font-size: 0.7em;
  line-height: 1.05em;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  background: var(--fg-accent);
  cursor: pointer;
  user-select: none;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease;
  box-shadow: 0 0 0 0 rgba(184,86,42,0.0);
}
.fg-mark::before { content: "✦"; }
.fg-mark:hover,
.fg-mark.is-active,
.fg-mark:focus {
  transform: translateY(-1px) scale(1.08);
  box-shadow: 0 0 0 4px rgba(184,86,42,0.18);
  outline: none;
}

/* ---- The callout itself (was \pullquote) ---- */
.fg-callout {
  background: var(--fg-quotebg);
  border-left: 3px solid var(--fg-accent);
  color: var(--fg-deepbrown);
  font-size: 0.95em;
  line-height: 1.5;
  padding: 0.85em 1.05em;
  box-sizing: border-box;
}
.fg-callout a { color: var(--fg-accent); }
.fg-callout em { font-style: italic; }

/* =========================================================
   MARGIN MODE  (wide screens with room on the right)
   Callouts float into the right gutter and fade in on scroll.
   ========================================================= */
.page__content.fg-margin .fg-callout {
  opacity: 0;
  transform: translateX(18px);
  transition: opacity .5s ease, transform .5s ease, box-shadow .2s ease;
  z-index: 2;
}
.page__content.fg-margin .fg-callout.is-visible {
  opacity: 1;
  transform: translateX(0);
}
.page__content.fg-margin .fg-callout.is-active {
  box-shadow: 0 6px 22px rgba(30,8,2,0.12);
}

/* =========================================================
   INLINE MODE  (narrow screens / not enough gutter)
   Marker becomes a pill that expands the callout in flow.
   ========================================================= */
.page__content.fg-inline .fg-mark {
  width: auto;
  height: auto;
  border-radius: 999px;
  vertical-align: baseline;
  padding: 0.05em 0.55em;
  font-size: 0.72em;
}
.page__content.fg-inline .fg-mark::before { content: "✦ note"; }
.page__content.fg-inline .fg-callout {
  display: block;
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  overflow: hidden;
  transition: max-height .45s ease, opacity .35s ease,
              padding .35s ease, margin .35s ease;
}
.page__content.fg-inline .fg-callout.is-open {
  max-height: 800px;
  opacity: 1;
  padding-top: 0.85em;
  padding-bottom: 0.85em;
  margin: 1.2em 0 1.4em;
}

/* ---- Closing footer ---- */
.fg-signoff {
  font-style: italic;
  color: var(--fg-warmgray);
  margin-top: 1.4em;
}
.fg-footer {
  text-align: center;
  color: var(--fg-warmgray);
  font-size: 0.85em;
  margin-top: 2.4em;
}
.fg-footer hr {
  border: 0;
  border-top: 1px solid var(--fg-rule);
  width: 30%;
  margin: 0 auto 0.9em;
}
</style>

<p class="fg-subtitle">How to Upskill Without Giving Away What Makes You Valuable</p>
<p class="fg-byline"><strong>Ignacio Alvarez</strong> &nbsp;&amp;&nbsp; <strong>Areen Alsaid</strong></p>
<p class="fg-meta">April 2026 &nbsp;·&nbsp; ~10 min read</p>

<div class="fg-deck">Why learning AI matters, and why protecting your human value matters even more.</div>

## The Pressure to Become AI-Relevant

Areen and I are both professors at university; one in the US, the other in Europe. Besides research, we usually chat about the cultural differences we see in our respective academic worlds, but the story that inspired this post is the same on both sides of the Atlantic and everywhere else in the world.

A student knocked on my office door a few weeks ago, sat down, and asked me a question that many of you have been thinking about too: *"Professor, by the time I graduate, will any of this still matter?"*

She is working on her master's thesis in User Experience Design. She was not lazy, and she was not naive. She was tired. Tired of every podcast, YouTube video, and TikTok telling her to "adapt or be left behind." Tired of recruiters dropping the phrase "AI fluency" into job posts as casually as they once asked for Excel.

We have been hearing versions of these questions almost every week for the past year and a half. From students entering the labor market. From senior engineers working at large corporations worried their craft is being silently commoditized. From designers in a quiet race against the very tools they use. From parents in their forties who were just told their company is "rolling out an AI strategy," which everyone in the room understood as a polite synonym for *rolling out fewer of you*.

So we decided to write this post about dealing with the pressure to become AI-relevant. It is not easy:<span class="fg-mark" data-ref="c1" role="button" tabindex="0" aria-label="Show side note"></span>

<aside class="fg-callout" id="c1" data-ref="c1">Use AI too little and you look slow. Use AI too much and you risk becoming a passable copy of a model any colleague can also call.</aside>

There is another way, and that's the path we are going to walk through in this post.

<hr class="fg-rule" />

## The False Choice

The current narrative wants you to pick one of two doors.

**Door 1:** Resist AI. Be a purist. Watch your relevance erode as everyone else becomes faster and more efficient than you. When AI crashes you'll be the last one standing.

**Door 2:** Embrace AI completely. Let it write your emails, your code, your slides, your strategy. Move faster, delegate your low-level thinking to cohorts of AI agents at your service.

Both doors are wrong. Door 1 is sentimental. Door 2 is far more dangerous than it looks, because it disguises itself as productivity.

Here is the critique in one line: **bad upskilling teaches people to produce faster while thinking less.** Output volume goes up. The signal that was uniquely yours goes down. The dashboards keep saying you are doing more, so you do not notice the trade.<span class="fg-mark" data-ref="c2" role="button" tabindex="0" aria-label="Show side note"></span>

<aside class="fg-callout" id="c2" data-ref="c2"><strong>Fun fact:</strong> Did you know that astronauts in zero gravity lose up to 20% of their muscle mass in just 5 to 11 days, and roughly 1% of bone density per month? Not because anything dramatic happens, but because the load disappears. The body is brutally efficient: it stops maintaining what it doesn't need. The unsettling part isn't the loss — it's that astronauts feel fine while it's happening. They notice when they try to stand on Earth again.</aside>

There is a third door, but you need to know how to find it.

<hr class="fg-rule" />

## Human Experience Is Not the Leftover

When we say *human experience* we are not saying *humans have souls and that is what makes us special*.

We mean something more concrete and more useful: human experience is a bundle of capabilities that current AI systems do not actually replace, even when they appear to. It is a productive asset. It changes the outcome.

Look at the work our students, our colleagues, and our former teammates do best, and the things that hold value over time are recognizable:

- **Lived experience** — what you learned by failing in public and trying again
- **Contextual judgment** — the read of a room, a culture, a market, a meeting
- **Values and taste** — knowing which of three good options is the *right* one for *this* situation
- **Moral reasoning** — asking whether something *should* be done, not just whether it *can*
- **Tacit knowledge** — the muscle memory of a craft that you cannot fully articulate
- **Social sensitivity** — how a team reads tone, holds disagreement, repairs trust
- **Embodied understanding** — what your body knows about the world that no transcript captures
- **The ability to care** — sustained attention to someone or something that is not yourself

No matter how much data AI processes, these are capabilities that are impossible to replace. These are your unique assets in an age of AI. That is also where the meaning of our work lives. Most people feel proud of their achievements, but after that, they remember the experience and miss the people whom they worked with.<span class="fg-mark" data-ref="c3" role="button" tabindex="0" aria-label="Show side note"></span>

<aside class="fg-callout" id="c3" data-ref="c3">Hiranya Peiris, an astrophysicist at Cambridge, recently put this sharply in <a href="https://www.nature.com/articles/s41550-026-02837-2" target="_blank" rel="noopener">Nature Astronomy</a>: the anxiety around AI is misplaced. Entire fields had already allowed execution to substitute for thought long before LLMs arrived — the paper mills, the incremental publications, the volume-over-quality treadmill. AI just makes it harder to ignore. And then the knife: if your contribution can be replicated by a process with no understanding of the underlying domain, the work was never sufficiently yours to begin with.</aside>

This is also why this post is not, and we will never be, anti-technology. The message is not *human good, machine bad*. The message is *know what you bring*. If you do not, the system will happily tell you that you bring nothing, and price you accordingly.

<hr class="fg-rule" />

## From Replacement to Amplification

The question we keep being handed — *"How do I compete with AI?"* — is the wrong question. It assumes a race on a single track, where speed is the only metric and there is exactly one finish line. Compete with a calculator at arithmetic and you will lose. Compete with a search engine at recall and you will lose. Compete with a language model at producing fluent average prose and you will lose, twice.

The better question is the one Doug Engelbart asked in 1962, long before any of this was fashionable: *how do we augment human intellect?* How do we build tools that make a human's good judgment land harder, travel further, and reach more people? Replace your verb. **Stop competing. Start amplifying.**

I love what Garry Kasparov did with this idea after he lost to Deep Blue. Instead of sulking, he invented *advanced chess*: humans plus engines, working in pairs. What he found, and what years of follow-up have largely confirmed, is that for a long time the strongest entity on the board was not the strongest human and not the strongest engine. It was a thoughtful human paired with a competent engine and a good *process* for using it. The process did most of the work.

The same lesson is showing up across knowledge work right now. The big winners are not the people with the most powerful model. They are the people with the most thoughtful workflow.<span class="fg-mark" data-ref="c4" role="button" tabindex="0" aria-label="Show side note"></span><span class="fg-mark" data-ref="c5" role="button" tabindex="0" aria-label="Show side note"></span>

<aside class="fg-callout" id="c4" data-ref="c4">Google discovered something eerily similar about teams. In 2012, they launched <a href="https://psychsafety.com/googles-project-aristotle/" target="_blank" rel="noopener">Project Aristotle</a> to figure out what made their best teams work. They expected it to be about talent — the right mix of skills, experience, IQ. It wasn't. The single strongest predictor of team performance was psychological safety: whether people felt safe enough to take risks, ask dumb questions, and admit what they didn't know. The smartest room lost to the room where people actually talked to each other honestly. The parallel to advanced chess is hard to miss. In both cases, the winning advantage wasn't raw capability. It was the quality of the interaction.</aside>

<aside class="fg-callout" id="c5" data-ref="c5">The future does not belong to the people who imitate machines best. It belongs to the people who know how to build working relationships with machines, while deepening their own judgment.</aside>

<hr class="fg-rule" />

## The Digital Belt

So how do you build that working relationship in practice? This is where I want to introduce the central image of this post. In our discussions with students we have been calling it the AI-tool belt; to be more generic, let's call it the **digital belt**.

<div class="fg-definition">The <strong>digital belt</strong> is a growing set of literacies, tools, workflows, and reflective habits that let you collaborate with AI effectively, without outsourcing responsibility for the result.</div>

We like the belt metaphor because it captures four things that a "toolbox" or a "stack" do not. A belt is *modular* — you can add and remove items. A belt is *personal* — what hangs from a carpenter's belt is not what hangs from a climber's belt or a paramedic's belt. A belt is *worn on you* — it travels where you travel. A belt is *evolving* — you upgrade pieces, retire pieces, and the shape of the belt grows with the work.

Tools matter. Knowing *when and why* to reach for which tool matters more. The belt is the difference between owning a hammer and being a builder.

We organize the first version of the digital belt into **five clusters**. Think of them as the compartments on the belt, not as a curriculum to march through in order.

### A. Model Literacy

Understanding what AI systems actually *are*: roughly how they are built, why they work, where they fail, and how they hallucinate. Most people get this wrong. You don't need to know the math behind Reinforcement Learning with Human Feedback, but you need a good mental model. A language model is a probability distribution over tokens, not an oracle. Confidence and accuracy are different things, and a model that sounds sure of itself is not the same as a model that is right.

### B. Interaction Literacy

Prompting, decomposition, iteration, context-setting, critique, evaluation. The ability to take a fuzzy real-world goal, break it into pieces a model can help with, scaffold the strategy, and phrase it in a way the model can understand. Then learning how to read its answers like an editor, rather than an audience. Most "AI courses" over-index on this cluster — just look for "prompt engineering" or the more recent trend, "agentic engineering." We will abstract these as human-AI interaction skills. They are incredibly important and genuinely useful, but they are only one of the five.

### C. Thinking Literacy

Critical thinking, planning, systems thinking, design thinking, engineering thinking, judgment, reflection, creativity. This is the cluster AI does *not* replace. If you keep this one sharp, you can spend a lot of money on the other clusters and still come out ahead. If you let this one rust, you are doomed. There is a fundamental long-term limitation of the use of AI in knowledge work: with the right instructions, it can even do the thinking for you. But the longer you do that, the less you will understand what it is doing. You may be able to outsource your thinking, but you can never outsource your understanding. Staying sharp, then, requires you to use AI to sharpen your thinking literacy.

### D. Human Responsibility Literacy

A fundamental follow-up from thinking literacy is your responsibility to perform ethical reasoning, carefully design collaboration structures, mindfully optimize workflow design, always consider accountability, and, crucially, to maintain the wisdom to know when *not* to automate. Some decisions have value precisely because a human owned them. Recognizing those decisions and protecting them is a skill. It is also, increasingly, a job description.

### E. Delivery Literacy

Knowing how to ship — when to ship, and *when not* to ship. AI can produce drafts at a thrilling speed, but a draft is not a deliverable. Delivery literacy is the practical glue: integrating AI output into a real product, a real report, a real classroom; verifying it; putting your name on it; taking responsibility when it is wrong.

That is the heart of it. These five clusters are our belief for staying on top of AI no matter what the next model can do. They are the core of the belt. They are the core of your human value. The rest of this post is about how to wear the belt without letting the belt wear you.

<hr class="fg-rule" />

## A Belt Is Not a Toolbox

A belt is not a toolbox. This distinction matters because the entire idea of upskilling depends on it.

A toolbox is a collection of objects. You can buy one, dump it in a bag or a drawer, and have a toolbox. A belt, by contrast, is a way of organizing capability around a person. It assumes the person. It is shaped by what the person actually does.<span class="fg-mark" data-ref="c6" role="button" tabindex="0" aria-label="Show side note"></span>

<aside class="fg-callout" id="c6" data-ref="c6">Think about driving. Knowing every feature of a car (the toolbox) is different from knowing how to drive in traffic (the belt). Driver's ed doesn't teach you the dashboard. It teaches you judgment — when to brake, how to read other drivers. Most AI training is a dashboard tour.</aside>

Most "AI training" on the market today is selling toolboxes. Twenty prompts you should memorize. Five new apps to install. A list of plugins that will 10x your output. None of that is wrong, exactly. It is also not the belt. The belt is the difference between knowing twenty prompts and knowing *which prompt this situation needs, why, and how to tell whether the answer is good*.

<div class="fg-definition"><strong>Shallow adoption:</strong> "I know how to ask ChatGPT for output."<br><br><strong>Deeper fluency:</strong> "I know how to frame a problem, inspect a result, judge quality, trace risk, revise a workflow, and decide what must remain human."</div>

The first sentence describes a user. The second describes a professional. The gap between them is the gap any serious AI education should be trying to close.

<hr class="fg-rule" />

## What This Looks Like in Practice

Yes, we know abstractions are nice, but you probably can picture this better if we give you some examples. What does this look like in practice?

### For a Design Student

AI can sketch fifty exploratory directions in the time it would take you to outline three. That is genuinely useful. But the value you bring does not live in the sketches. It lives upstream, in *framing the problem in a way the AI never could have framed on its own*, and downstream, in *deciding which of the fifty directions actually serves the human you are designing for*. Use the AI to widen the funnel. Keep the funnel's mouth and the funnel's exit yours.

### For a Software Engineer

AI is a remarkable junior developer with infinite stamina, no memory of your codebase, and a confidence problem. It can produce code faster than you can read it. Your value moved up the stack. It is now in architecture, in debugging the *assumptions* (not just the lines), and in reasoning about systems, security, and team coordination. The engineers we see thriving with AI today treat its output the way a senior reviewer treats a junior PR: with curiosity, with respect, and most importantly, with a critical eye.

### For an HCI / UX Practitioner

AI can generate flows, mocks, and interface variants in seconds. But interfaces do not live in seconds. They live in cultures, in bodies, in trust relationships, in accessibility constraints. Your value as a human-centered practitioner is precisely in the territory the model does not see. You are the one who runs the study, watches the participant fumble, and reads the silence. None of that comes out of a prompt.

### For a Professional in Transition

If you are mid-career and re-entering the workforce after a layoff, a parental leave, or a pivot, the loudest message you are getting right now is "learn AI." Fine, but incomplete. The goal is not to become a prompt vending machine that any new graduate can outprice. The goal is to *pair* the domain experience you already have with the new AI collaboration skills. That pairing is rare and valuable. A 20-year supply chain veteran who can also drive an AI workflow is not competing with a fresh grad. They are in a different category.

### For an Academic or Researcher

This is the case we live in personally. AI is changing how literature is reviewed, how data is processed, how figures are drafted, how grants are written. A recent piece in [*Nature Astronomy*](https://www.nature.com/articles/s41550-026-02837-2) captures the tension nicely: AI tools can accelerate discovery, but they can also flatten the slow, weird, intuition-driven thinking that produced most of the science we still cite. The belt for a researcher has to include AI fluency *and* a stubborn protection of unhurried thought. Speed is not the only academic virtue, and it might not even be the most important one.

<hr class="fg-rule" />

## AI Can Amplify People, but It Can Also Deskill Them

This is the part of the post I want you to take most seriously. The danger of AI is not, in my honest opinion, the science-fiction one. The danger is quieter, more boring, and already happening: **not every efficiency is a gain.** Sometimes efficiency comes at the cost of understanding, and you do not feel the cost until much later, when you reach for a skill and discover it is no longer there.

This is not a new pattern. We have been here before, in other industries.

### What Aviation Already Taught Us

In 1983, Lisanne Bainbridge published a paper called *Ironies of Automation* that anyone working with AI today should read. Her argument, roughly: the more we automate the easy parts of a task, the more demanding the remaining human role becomes, and the worse we get at it, because we no longer practice.

Pilots who fly mostly on autopilot lose the manual stick-and-rudder feel they need precisely on the day the autopilot disengages. Air France 447 in 2009 is the textbook tragedy. The automation worked beautifully, until it didn't, and the humans in the loop were no longer the humans they would have been if they had been hand-flying all along.

The lesson generalizes. *If you only use the tool, you will eventually only be able to use the tool.*

### What the New Studies Are Saying

The early empirical work on generative AI is starting to show the same shape. A 2025 study from Microsoft Research and Carnegie Mellon [(Lee et al., CHI 2025)](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/) surveyed knowledge workers and found a striking inverse pattern: the more confidence people had in the AI, the less critical thinking they reported doing. Confidence in their own expertise pushed in the opposite direction. The tool itself was neutral. What changed was *the human posture in front of it*.

A second piece I keep returning to is Dell'Acqua and colleagues' study with BCG consultants [(Dell'Acqua et al., HBS 2023)](https://www.hbs.edu/faculty/Pages/item.aspx?num=64700). Inside the "jagged frontier" of tasks GPT-4 was good at, AI-augmented consultants outperformed their unaugmented peers by a wide margin. *Outside* that frontier, on tasks the model was subtly bad at, AI-augmented consultants performed *worse* than the control group, because they trusted the confident-sounding output and turned off their own skepticism. Same model. Same humans. Different posture. Very different outcomes.

### What AI Is Good At, What Humans Are Good At

I do not think we have a clean, final answer to this question, and I am suspicious of anyone who tells you they do. The rough current shape is something like this:

- **AI is genuinely good at** pattern completion, broad recall, fluent first drafts, transformations between formats, summarization of long material, generating many alternatives quickly, and operating at a tireless and predictable pace.
- **Humans are still genuinely good at** setting goals worth achieving, understanding context the model cannot see, exercising judgment under uncertainty, taking moral and legal responsibility, recognizing when a problem is the wrong problem, and caring — really caring — about the outcome.

The good teaming strategies lean into this asymmetry instead of fighting it. **Let the AI draft; you decide.** **Let the AI generate options; you choose.** **Let the AI summarize; you verify and own.** Keep that direction of the arrow consistent, and AI amplifies you. Reverse it, and you become the verifier of an opinion that was never yours.

<hr class="fg-rule" />

## What Upskilling Should Really Mean

If we take all of the above seriously, then "learn AI" has to mean more than "take a prompting course." Real upskilling is closer to learning a new language and a new workplace culture at the same time. It is technical, but also social, ethical, and reflective.

The kind of education we believe in for this era teaches four things at once:

- **Learning how AI works.**
- **Learning how to work with it.**
- **Learning how to think with it.**
- **Learning how to resist letting it think for you.**

This is what education for the AI era has to become. Not training in a specific tool that will be deprecated in six months, but the cultivation of *durable* capabilities you can carry across whatever comes next.

### A Quick Note on Safe AI Use

A digital belt that does not include safety is not a belt; it is a hazard. Three things deserve dedicated attention:

- **Privacy.** Treat any prompt as a potential disclosure. Default to not pasting client data, personal data, or proprietary code into systems whose data policies you have not read. The convenience cost of being careful is small. The cost of getting this wrong is not.
- **Trust.** Both *over-trust* and *under-trust* are failure modes. Over-trust is the consultant accepting a confident but wrong answer because it sounded good. Under-trust is the colleague refusing to use AI for things it is genuinely good at and falling behind. The skill is calibration: trust the tool exactly as much as it has earned, no more.
- **Bias.** Models reproduce, and sometimes magnify, the patterns in their training data. A 2026 piece in *Nature* [(Nature, 2026)](https://www.nature.com/articles/s41586-026-10319-8) documents how easily small biases compound when humans defer to model outputs without inspection. If your workflow does not include a step where a human looks at the output through the lens of *who could this hurt*, your workflow is incomplete.

What can we learn from industries that already lived through this? Aviation went through it with autopilot. Medicine went through it with clinical decision support. Manufacturing went through it with CNC machines. The pattern repeats: the tool becomes excellent, the humans become rusty, and one day the tool reaches its edge and the humans have to reach back. The professions that survived well are the ones that designed the human role *deliberately*, instead of letting it shrink by default. We are now that profession. All of us.

<hr class="fg-rule" />

## Protect What Makes You Valuable

So if you are going to wear the belt, what do you protect?

I want to be honest about which parts of yourself I think are most worth defending. Not out of nostalgia, but because these are the parts that, if you let them go, you will not get back easily.

### Language and Expression

Writing is thinking made visible. The struggle of finding the right word is not inefficiency; it is the place where the idea actually forms. Rough drafts are not the unfortunate cost of producing a polished one. Rough drafts are how you discover what you actually believe.

LLMs produce fluent language without interiority. There is no one behind the words. The text reads beautifully and means nothing in particular, because nothing was at stake when it was generated. Your voice is different. Your voice is the residue of everything you have lived through, leaked into your sentences. That is not a literary luxury; it is the signal employers, students, readers, and friends are actually paying attention to.

If you stop writing, you stop having thoughts you did not already have. You become a curator of AI prose instead of an originator of your own. The defense is small and concrete: *write before you prompt*. Use the model to refine, not to originate. Keep a raw, messy, embarrassing ideas journal that the model never sees. That journal is where the next version of you is hiding.

### Critical Thinking

Critical thinking is not a vibe. It is a set of habits: asking what you would have to believe for a claim to be true, looking for the steel-man of the opposing view, noticing when an answer feels too clean, checking the citation, sitting with the discomfort of not yet knowing.

AI tempts you to skip every one of those habits, because it serves you a confident answer before the discomfort even has time to arrive. The defense, again, is small and concrete: *slow down before you accept*. Ask the model to argue against its own answer. Ask yourself what you would have said before reading the AI's response. The point is not to be slower for its own sake. The point is to keep the muscle.

### Memory and Knowledge

Human memory is lossy, emotional, and weirdly associative. That is a feature, not a bug. The thing your brain remembered without trying is often more interesting than the thing the search returned. Expertise is built out of strange, half-remembered scraps that connect later in ways you could not have planned.

Offload all of it to retrieval and expertise hollows out. You end up with people who can navigate tools but have no bedrock of their own, and bedrock is what holds you steady when the tools are wrong. The defense: *learn things the slow way sometimes*. Explain a concept out loud without looking it up. Let yourself not know something for a few minutes before searching. Read whole books. Take walks. Be a little inefficient on purpose. Your future self will be the one who benefits.

<hr class="fg-rule" />

## The Third Door

I want to end this where it started: with that student in my office.

I told her that the question was not whether *any of this* would still matter. It was which parts of *her* she was going to keep sharp while everything around her changed. The technology is real. The shift is real. The pressure is real. None of those things are going away because we are anxious about them.

The people who do well in this transition, in my experience, are not the people with the best prompts. They are the people who keep their judgment, their voice, their care, and their craft, and who pick up the new tools without letting the new tools pick them up.

So if you take one thing from this post, let it be a short list of working principles for the next few years:

- **Build the belt, don't buy the toolbox.** Tools change, fluency compounds.
- **Write before you prompt.** Originate first, refine second.
- **Let AI draft; you decide.** Keep the direction of the arrow consistent.
- **Calibrate trust to evidence.** Not to confidence, and not to fashion.
- **Protect the slow muscles.** Memory, judgment, reflection, taste.
- **Own the output.** If your name is on it, your name is on it.

Build your digital belt. Learn the tools. Learn the workflows. Learn the language of AI.<span class="fg-mark" data-ref="c7" role="button" tabindex="0" aria-label="Show side note"></span> And protect the parts of yourself that no tool should replace.

<aside class="fg-callout" id="c7" data-ref="c7">The task ahead is not to become machine-like. It is to become more fully human, with better tools.</aside>

That is the third door. It is real, and it is open. We will see you on the other side of it…

<p class="fg-signoff">— Prof. Ignacio Alvarez &amp; Areen Alsaid</p>

<div class="fg-footer">
<hr>
Made with care by Ignacio &amp; Areen &nbsp;·&nbsp; © 2026
</div>

<script>
(function () {
  function init() {
    var content = document.querySelector('.page__content');
    if (!content) return;
    var callouts = [].slice.call(content.querySelectorAll('.fg-callout'));
    if (!callouts.length) return;

    var marks = {};
    [].forEach.call(content.querySelectorAll('.fg-mark'), function (m) {
      marks[m.getAttribute('data-ref')] = m;
    });

    function anchorFor(c) {
      return marks[c.getAttribute('data-ref')] || c;
    }

    function layout() {
      var contentRect = content.getBoundingClientRect();
      var avail = window.innerWidth - contentRect.right - 24;
      var marginMode = window.innerWidth >= 1100 && avail >= 220;

      content.classList.toggle('fg-margin', marginMode);
      content.classList.toggle('fg-inline', !marginMode);

      callouts.forEach(function (c) {
        c.style.position = '';
        c.style.left = '';
        c.style.top = '';
        c.style.width = '';
      });

      if (!marginMode) return;

      var noteW = Math.min(Math.max(avail - 8, 220), 300);
      var ordered = callouts.slice().sort(function (a, b) {
        return anchorFor(a).getBoundingClientRect().top -
               anchorFor(b).getBoundingClientRect().top;
      });

      var prevBottom = -99999;
      ordered.forEach(function (c) {
        var aRect = anchorFor(c).getBoundingClientRect();
        var top = aRect.top - contentRect.top;
        if (top < prevBottom + 16) top = prevBottom + 16;
        c.style.position = 'absolute';
        c.style.left = (content.clientWidth + 24) + 'px';
        c.style.top = top + 'px';
        c.style.width = noteW + 'px';
        prevBottom = top + c.offsetHeight;
      });
    }

    // Fade callouts in as they scroll into view (margin mode).
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      callouts.forEach(function (c) { io.observe(c); });
    } else {
      callouts.forEach(function (c) { c.classList.add('is-visible'); });
    }

    // Hover sync + click-to-expand behavior.
    callouts.forEach(function (c) {
      var mark = marks[c.getAttribute('data-ref')];
      if (!mark) return;

      function activate() {
        c.classList.add('is-active');
        mark.classList.add('is-active');
        if (content.classList.contains('fg-inline')) c.classList.add('is-open');
      }
      function deactivate() {
        c.classList.remove('is-active');
        mark.classList.remove('is-active');
      }

      mark.addEventListener('mouseenter', activate);
      mark.addEventListener('mouseleave', deactivate);
      c.addEventListener('mouseenter', function () {
        c.classList.add('is-active');
        mark.classList.add('is-active');
      });
      c.addEventListener('mouseleave', deactivate);

      mark.addEventListener('click', function () {
        if (content.classList.contains('fg-inline')) {
          c.classList.toggle('is-open');
        } else {
          c.classList.add('is-visible', 'is-active');
          c.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
      mark.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          mark.click();
        }
      });
    });

    layout();
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(layout, 150);
    });
    window.addEventListener('load', layout);
    // Re-run after fonts/MathJax settle and shift line heights.
    setTimeout(layout, 350);
    setTimeout(layout, 1200);
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
</script>
