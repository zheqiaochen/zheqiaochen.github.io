---
layout: post
title: A Toolkit for OpenAI Batch
include: true
comments: true
toc: true
usemathjax: true
tags: [app, English]
---

The app can be found [HERE](https://github.com/zheqiaochen/openaibatch). Please follow the readme file to install.

## What is OpenAI Batch?
When using the OpenAI API for NLP tasks in social science research, my usual practice involves using the openai package alongside pandas to process a CSV file, read text, and write labels from OpenAI API responses. However, if the CSV file is too large, the processing speed decreases dramatically after handling a certain number of tasks, as outlined in the [rate limits documentation](https://platform.openai.com/docs/guides/rate-limits). To efficiently handle large workloads, the best approach is to use [OpenAI Batch](https://platform.openai.com/docs/guides/batch), which allows users to upload a JSONL file in [a specified format](https://platform.openai.com/docs/guides/batch#1-preparing-your-batch-file).

## What is OpenAI Batch Tools？
That said, the batch service also has a daily usage limit, though the cap is significantly higher than the standard rate limits. To work around this, I typically register multiple OpenAI accounts, divide the CSV file into smaller parts, and process them separately. Once all parts are processed, I merge the results into a single CSV file.

This process requires some coding, and since I'm a lazy guy, I made an app to facilitate the workflow. The menu looks like this:

![menu](https://i.ibb.co/Y2gFd1n/Screenshot-2024-11-21-at-11-46-32-PM.png)

The menu contains three features to streamline the process:

1. **CSV to JSONL Converter**: Converts a CSV file to JSONL format, which is required for OpenAI Batch processing.
2. **JSONL File Splitter**: Splits the JSONL file into several smaller files of equal size, making it easier to handle large datasets within the batch service limits.
3. **JSONL Response Extractor**: After downloading the batch outcomes from the OpenAI server, this feature extracts the responses and converts them back to a CSV file.

This app simplifies the entire workflow, from preparing data for OpenAI Batch to processing the results.
