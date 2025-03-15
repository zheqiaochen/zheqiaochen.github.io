---
layout: post
title: "To Do List: Late Chunking for Some Other Embedding Models"
include: true
comments: true
toc: false
usemathjax: false
highlight: false
tags: [todo, English]
---

<div class="emphasis-box" markdown="1">

3/15/2025: Anyway, an update can be found here: [zh-late-chunking: Late Chunking for Chinese](http://127.0.0.1:4000/2025/03/15/zh-late-chunking)

</div>

<div class="emphasis-box" markdown="1">

3/10/2025: I decided not to do this project, since there's a better way to do chunking as specified in this article: [Why We Should Not Do Overlap in Chunking (and What to Do Instead)](https://www.zheqiaoc.com/2025/03/07/why-not-overlap).

</div>
This article is a little reminder to myself.

I have been working on some projects where I need to chunk long texts and retrieve relevant information from them. Surprisingly, I came across this article: [Late Chunking in Long-Context Embedding Models](https://jina.ai/news/late-chunking-in-long-context-embedding-models/). It introduces a new method to chunk long texts while keeping the context information. The method sounds promising and has two pros:

1. It requires far fewer computing resources that llm aided chunking.
2. It does as good as or even better than llm aided chunking according to [Late Chunking: Contextual Chunk Embeddings Using Long-Context Embedding Models](https://arxiv.org/abs/2409.04701).

However, even though the authors claimed that it works on any embedding models that use avarage pooling technique, it still requires a lot of work to implement it. Plus, there is a language problem, because Chinese and other languages in late chunking differs from English. Therefore, to my knowledge, the only model supports this method is the `jina-embedding` series from [Jina AI](https://jina.ai/). Which I tried, and it does not work as well as the leading embedding models such as `openai/text-embedding-3` and `BAAI/bge-m3`.

In the next few months, if I have time, I will try to implement this method for some other embedding models.








