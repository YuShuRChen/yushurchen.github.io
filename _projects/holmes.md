---
layout: page
title: HoLmeS - Design Space Exploration for High-Level Synthesis
description: # with background image
img: # assets/img/12.jpg
importance: 3
category: current
related_publications: false
---

Given a set of optimization constraints, design space exploration (DSE) aims to efficiently find optimal solutions within a design space that is too large to exhaustively explore in a practical amount of time. When creating hardware designs using high-level synthesis (HLS), HLS designers have a multitude of "knobs" (i.e., compiler directives) that they can use to tune the properties of the compiler-produced design. Since these properties are often at odds with one another (e.g., performance vs. area) and a single HLS design can take hours to synthesize, the process of finding the optimal set of directive configurations requires a powerful DSE framework. Sherlock is a flexible DSE framework for finding Pareto-optimal solutions in a variety of design spaces. In this work, we evaluate Sherlock’s performance against that of other state-of-the-art DSE frameworks on DB4HLS, a comprehensive/standardized database of DSEs comprising over 100,000 HLS design points. Alongside this empirical evaluation, we introduce a number of extensions to Sherlock’s DSE algorithms to improve its performance within the HLS domain. We package these improvements as a new HLS-specific DSE framework named HoLmeS. 