# Introduction

## About Oracle GoldenGate 26ai Data Fabric

Oracle GoldenGate 26ai Data Fabric extends change data capture into a real-time data and intelligence pipeline. The new microservices architecture uses REST-enabled services to move transactional updates with low latency, and can route data through an AI Service to generate vector embeddings before replication to target systems.

The interactive demo requires no setup or prerequisites. Simply click through the workflow to:
- Compare standard replication and vector-enriched replication paths
- See where the AI Service adds in-flight embedding generation
- Follow the end-to-end flow from source database to target vector database
- Watch event-by-event logs in the Microservices Console
- Simulate network interruption and observe buffered recovery behavior


### **Try the Interactive Demo**
Note: You can minimze the menu by clicking '≡' to better interactive with the demo.

<iframe src="../goldengate-demo.html" width="100%" height="1100px" frameborder="0" style="min-width: 100%; min-height: 1100px; height: 1100px !important;" ></iframe>


###  
### 

### **What You'll Discover**
**Through the Interactive Demo you will discover:**
- How GoldenGate 26ai orchestrates Extract, Distribution, Receiver, and Replicat in a microservices data mesh
- How the AI Service transforms text payloads into vectors before downstream apply
- How visual state changes map to each replication stage in real time
- How console logs reflect each hop, transformation, and commit event
- How air-gap buffering preserves continuity during temporary disconnects

**Key Concepts You'll Understand:**
- **Microservices Architecture (MA):** Distributed, REST-enabled replication services instead of monolithic deployment patterns
- **In-Flight Intelligence:** Embedding generation happens while data is moving, not as a delayed offline batch
- **Vector-Aware Replication:** Structured transactions and semantic payloads can travel through one coordinated pipeline
- **Resilience by Design:** Trail buffering and resume behavior keep pipelines durable through network instability

### **Scenario Walkthrough**

**Real-Time Replication:**
- **Path:** Source -> Extract -> Distribution -> Receiver -> Replicat -> Target
- **Purpose:** Demonstrates standard high-speed CDC with low-latency apply
- **Watch for:** Continuous connector flow, service-by-service logs, and target commit confirmation

**GenAI Vector Pipeline:**
- **Path:** Source -> Extract -> Distribution -> AI Service -> Receiver -> Replicat -> Vector Target
- **Purpose:** Shows where GoldenGate 26ai performs text-to-vector conversion in the movement path
- **Watch for:** AI-specific log entries and visual packet transformation to vector mode

**Air-Gap Recovery:**
- **Path:** Source -> Extract -> Distribution (pause/buffer) -> Receiver -> Replicat -> Target
- **Purpose:** Simulates a network outage and automatic resume once connectivity returns
- **Watch for:** Warning/error logs, buffering indicator, and successful catch-up after restoration

### **How this will benefit your stakeholders:**
- **Faster AI readiness** - Keep operational data and AI-ready vectors synchronized as events happen, reducing stale context for analytics and GenAI.
- **Lower pipeline complexity** - Consolidate capture, transform, and delivery behavior in one orchestrated data fabric.
- **Higher resilience** - Maintain continuity through interruptions using buffering and replay semantics.
- **Clear operations visibility** - Give engineering and platform teams service-level observability tied directly to replication stages.
- **Scalable modernization path** - Extend existing GoldenGate patterns toward real-time AI use cases without rebuilding from scratch.

GoldenGate 26ai enables teams to move data and intelligence together, so cloud services, vector stores, and AI applications stay aligned with live business state.

## Learn More

- [Oracle GoldenGate Product Page](https://www.oracle.com/middleware/technologies/goldengate.html)
- [Oracle GoldenGate Documentation](https://docs.oracle.com/en/middleware/goldengate/core/)


## Acknowledgements
- **Author** — Matt Kowalik
- **Contributors** — Ley Sylvester
- **Last Updated By/Date** — Matt Kowalik, March 2026
