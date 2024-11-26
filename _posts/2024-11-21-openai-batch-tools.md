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
When using the OpenAI API for NLP tasks in social science research, my usual practice involves using the openai package alongside pandas to process a CSV file, read text, and write labels from OpenAI API responses. However, if the CSV file is too large, the processing speed decreases dramatically after handling a certain number of tasks, as outlined in the [rate limits documentation](https://platform.openai.com/docs/guides/rate-limits). To efficiently handle large workloads, the best approach is to use [OpenAI Batch](https://platform.openai.com/docs/guides/batch), which allows users to upload a JSONL file in [a specified format](https://platform.openai.com/docs/guides/batch#1-preparing-your-batch-file). OpenAI server will process the JSONL file (takes a bit longer than the standard API calls), and the results will be returned in the same format as the input.

Another great feature of OpenAI Batch is that the batch service has a higher daily usage limit compared to the standard API calls. That means you can process more tasks in a day, and don't have to divide the CSV file into smaller parts and calculate the number of tasks per day. This greatly simplifies the process of handling large-scale NLP tasks.

## What can OpenAI Batch Tools do?

The above process requires some coding, it is really annoying to deal with the JSONL format and the batch service limits. So I made this app to facilitate the workflow, it can be downloaded from [here](https://github.com/zheqiaochen/openaibatch). 

The menu looks like this:

![menu](https://i.ibb.co/Y2gFd1n/Screenshot-2024-11-21-at-11-46-32-PM.png)

It contains three tools to streamline the process:

1. **CSV to JSONL Converter**: Converts a CSV file to JSONL format, which is required for OpenAI Batch processing.
![csv_to_jsonl](https://i.ibb.co/cbbp2WW/Screenshot-2024-11-26-at-11-08-09-AM.png)
2. **JSONL File Splitter**: Splits the JSONL file into several smaller files of equal size, making it easier to handle large datasets within the batch service limits.
![jsonl_splitter](https://i.ibb.co/KmkRr9v/Screenshot-2024-11-26-at-10-54-52-AM.png)
3. **JSONL Response Extractor**: After downloading the batch outcomes from the OpenAI server, this feature extracts the responses and converts them back to a CSV file.
![jsonl_extractor](https://i.ibb.co/MscjT94/Screenshot-2024-11-26-at-10-54-55-AM.png)

First, we need a CSV file as the input. Specify the column that contains the text you want to analyze in the "Text Column" field and configure the other parameters. Then click the "Convert" button to generate the JSONL file.

```python
# Example of the parameters
# Model: I often use gpt-4o-mini, which is the cheapest model and has a good balance between speed and quality.
# Max Tokens: this is the max number of tokens shared between the prompt and the response. One token is approximately 4 characters in English.
# Temperature: 1 is the default value, higher temperature leads to more creative responses, and lower temperature leads to more conservative responses.
```

Once the JSONL file is generated, you can upload the file to the [OpenAI Batch service](https://platform.openai.com/batches) and start processing. Or if the file is still too large, you may want to split the JSONL file into several smaller files to handle the batch service limits.

After the batch service finishes processing, you can download the results and use the "JSONL Response Extractor" tool to convert the results back to a CSV file.

Hope it can save you some time! 