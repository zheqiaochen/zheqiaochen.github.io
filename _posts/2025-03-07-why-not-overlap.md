---
layout: post
title: "Why We Should Not Do Overlap in Chunking (and What to Do Instead)"
include: true
comments: true
toc: false
usemathjax: false
highlight: false
tags: [English, data]
---
When I was working on chunking long texts for embedding models, I tried to chunk texts into smaller segments and add some overlap. Because, as mentioned in many documents, articles, and tutorials, we should add overlaps to keep contextual information. However, this is not an elegant way to do chunking.

Overlapping chunks do help in preserving context, but they introduce a trade-off:
- **Too short** can cause the loss of critical context.
- **Too long** wastes computational resources and may degrade retrieval performance by generating larger chunks. FYI, [Chunk large documents for vector search solutions in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents).

## A Structure-Aware Approach

Rather than relying on arbitrary overlaps, I found that leveraging the structure of a document can produce more semantically coherent segments. A simple pipeline is like:

1. **Markdown OCR:**  
   Use an OCR engine that outputs markdown to capture the document’s natural hierarchy. This preserves important formatting like heading levels (`#`, `##`, `###`).

2. **Structure Extraction:**  
   Identify and extract text segments between hierarchical markers. This creates natural boundaries.

3. **Adaptive Chunking:**  
   - For shorter sections, retain them as single, coherent chunks.  
   - For longer sections, apply large-context LLMs (for example, Gemini 1.5, which is free) to segment the text along semantic boundaries.

## Several considerations

- **OCR Selection:**  
Choose an OCR model that supports markdown output. I use [MinerU](https://github.com/opendatalab/MinerU) for this purpose.

- **Length Thresholds:**  
  Carefully choose the threshold for long and short texts. Use character counts instead of token counts. (Or maybe dynamically adjusting it based on the long text length).



This approach provides semantically coherent segments. While I won’t provide detailed step-by-step instructions here, my experiments have shown that this strategy works pretty well.