# Build an AI-Powered Application with Oracle APEX

Welcome to this **LiveLabs FastLab** workshop.

LiveLabs FastLab workshops give you clear, step-by-step instructions to help you quickly gain hands-on experience with the Oracle AI Database. You will go from beginner to confident user in a short time.

Estimated Time: 10 minutes

## FastLab Introduction

This workshop focuses on using the AI-powered assistant in Oracle APEX to generate an application from natural language. You will create an application foundation and refine it using conversational prompts.

In this 10-minute FastLab, you'll generate a working APEX application from a plain-English description and iterate on it without writing code.

### Prerequisites

- An Oracle Autonomous Database

  - Check our [LiveLabs FastLab - Create an Autonomous AI Database. Fast!](https://livelabs.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=4276)

## Task 1: Launch Oracle APEX App Builder

1. From the Autonomous Database console, open **Database Actions**.
2. Launch **Oracle APEX** and sign in to your workspace.
3. Click **App Builder**.

## Task 2: Start the APEX AI Application Generator

The APEX AI Application Generator creates an application foundation using metadata, not custom code.

1. Click **Create App**.
2. Select **Generate App using AI**.
3. Open the AI prompt panel.

## Task 3: Generate an Application from Natural Language

Describe the application you want to build using plain English.

1. Enter the following prompt:

   ```
   Create an application to track project requests.
   Each request has a title, description, priority, status, requestor, and submission date.
   Users should be able to submit, review, and update requests.
   ```

2. Click **Generate**.

APEX automatically creates the data model, pages, navigation, and sample data.

## Task 4: Review the Generated Application

The generated application follows standard APEX patterns and remains fully editable.

1. Review the data model created by APEX.
2. Inspect the generated forms, reports, and navigation.
3. Open the application and review the sample data.

## Task 5: Refine the Application Using AI Prompts

You can iteratively refine the application using follow-up prompts.

1. Enter one or more of the following prompts:

   ```
   Add a dashboard showing requests by status.
   Add validation so priority is required.
   Rename the application to Project Tracker.
   ```

2. Apply the suggested changes.

The application updates without requiring a rebuild or manual rework.

## Signature Workshop

Ready to dive deeper? These workshops move you from demo to hands-on practice.

👉 [Build AI-Powered Apps with Oracle APEX](https://livelabs.oracle.com)

## Learn More

* [Oracle APEX Documentation](https://docs.oracle.com/en/database/oracle/apex/)
* [Oracle APEX AI Assistant Blog](https://blogs.oracle.com/apex/coding-with-the-ai-powered-apex-assistant-on-oracle-apex)
* [Oracle LiveLabs](https://livelabs.oracle.com)

## Acknowledgements

* **Author** – Oracle Database Product Management
* **Last Updated By/Date** – September 2026

