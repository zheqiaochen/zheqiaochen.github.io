---
layout: post
title: A Toolkit for OpenAI Batch
include: true
comments: true
toc: true
usemathjax: true
tags: [app, English]
---

**NEWS: I deployed the app online to make it easier to use. Visit [openaibatch.vercel.app](https://openaibatch.vercel.app) to give it a try!**

**The online service may not be able to process large CSV files. If you encounter any error, please pull the app and run it on your local device.**

## What is OpenAI Batch?

When using the OpenAI API for NLP tasks in social science research, I typically use the `openai` package with `pandas` to process CSV files, reading text and writing labels from OpenAI API responses. However, when a CSV file gets too large, the processing speed drops dramatically after handling a certain number of tasks. This is due to rate limits, as detailed in the [rate limits documentation](https://platform.openai.com/docs/guides/rate-limits).

To tackle large workloads more efficiently, the best approach is to use [OpenAI Batch](https://platform.openai.com/docs/guides/batch). With OpenAI Batch, users can upload a JSONL file in [a specific format](https://platform.openai.com/docs/guides/batch#1-preparing-your-batch-file). OpenAI processes the JSONL file (slower than standard API calls but more efficient for large jobs) and returns the results in the same format.

### Key Advantages of OpenAI Batch

- **Higher daily usage limits** compared to standard API calls.
- Faster processing for large-scale NLP projects.

### Workflow for Using OpenAI Batch

Here’s a simple workflow I follow to classify a set of sentences using OpenAI Batch:

1. Create a CSV file with my target sentences in one column.
2. Configure the task parameters and convert the CSV file to JSONL format.
3. Upload the JSONL file to the OpenAI Batch service. If there’s no error, wait for the results.
4. Download the processed JSONL file from the server and convert it back to a CSV file.

## What Can OpenAI Batch Tools Do?

The above process requires some coding, and dealing with JSONL format and batch service limits can get pretty annoying. That’s why I made this app, which you can download [here](https://github.com/zheqiaochen/openaibatch).

### Menu Overview

The app menu looks like this:

![menu](https://i.ibb.co/Y2gFd1n/Screenshot-2024-11-21-at-11-46-32-PM.png){:class="zoomable"}

It contains three tools to streamline the workflow:

1. **CSV to JSONL Converter**  
   Converts a CSV file to JSONL format, which is required for OpenAI Batch processing.  
   ![csv_to_jsonl](https://i.ibb.co/cbbp2WW/Screenshot-2024-11-26-at-11-08-09-AM.png){:class="zoomable"}

2. **JSONL File Splitter**  
   Splits a JSONL file into smaller files of equal size. If the JSONL file exceeds batch service limits, you can split it into smaller files, register new OpenAI accounts to process them separately, and combine the results later.  
   ![jsonl_splitter](https://i.ibb.co/KmkRr9v/Screenshot-2024-11-26-at-10-54-52-AM.png){:class="zoomable"}

3. **JSONL Response Extractor**  
   After downloading batch outcomes from the OpenAI server, this feature extracts the responses and converts them back to a CSV file.  
   ![jsonl_extractor](https://i.ibb.co/MscjT94/Screenshot-2024-11-26-at-10-54-55-AM.png){:class="zoomable"}

### How to Use

First, prepare a CSV file as input. Specify the column that contains the text you want to analyze in the "Text Column" field, configure the other parameters, and click the "Convert" button to generate a JSONL file.


```python
# Example of the parameters

# Model: I often use gpt-4o-mini, which is cheap and strikes a good balance between speed and quality.
# Max Tokens: This is the maximum number of tokens shared between the prompt and the response. 
# One token is roughly 4 characters in English.
# Temperature: 1 is the default. A higher value gives more creative responses, a lower value gives more conservative ones.
```

Once the JSONL file is ready, you can upload it to the [OpenAI Batch service](https://platform.openai.com/batches) to start processing.

After the batch service finishes processing, download the results and use the "JSONL Response Extractor" tool to convert them back to a CSV file.

Hope it can save you some time! 