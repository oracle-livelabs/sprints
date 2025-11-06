# Introduction

## About Oracle AI Vector Search

Oracle AI Vector Search is a breakthrough capability in Oracle AI Database that enables searching data by semantic meaning rather than just keywords. This technology bridges the gap between traditional structured data and the growing volume of unstructured business data - documents, images, support tickets, and more - allowing you to search them all by their conceptual content. Using ONNX-based embeddings, you can combine semantic similarity with business filters directly in SQL, keeping operations simple.


<iframe id="kaltura_player" src='https://cdnapisec.kaltura.com/p/2171811/embedPlaykitJs/uiconf_id/54927872?iframeembed=true&amp;entry_id=1_aasjdfcc&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_f4r29m1z%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A0%7D'  style="width: 512px;height: 288px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="Demo: AI Vector Search"></iframe>


The interactive demo requires no setup or prerequisites. Simply click through the workflow to:
- Observe the transformation from text to vectors
- Compare traditional versus semantic search results
- Watch real-time clustering visualization
- See actual similarity percentages
- Each step displays the underlying SQL operations, making it easy to understand and apply these concepts to your own use cases.


### **Try the Interactive Demo**
Note: You can minimze the menu by clicking '≡' to better interactive with the demo.

<iframe src="../vector-demo.html" width="100%" height="1100px" frameborder="0" style="min-width: 100%; min-height: 1100px; height: 1100px !important;" ></iframe>


###  
### 

### **What You'll Discover**
**Through the Interactive Demo you will discover:**
- How support incidents with different descriptions but similar meanings automatically cluster together
- Why "system crash," "spontaneous reboot," and "freeze" are found together despite sharing no common keywords
- The dramatic difference between traditional LIKE searches and semantic similarity search
- How similarity scoring works on a 0-100% scale
- Real-time visualization of how vectors organize themselves in semantic space

**Key Concepts You'll Understand:**
- **Vectors as Semantic Fingerprints**: Mathematical representations that capture meaning
- **The Similarity Property**: Similar content produces vectors that are mathematically close together
- **Distance Metrics**: How databases measure conceptual similarity using cosine, Euclidean, and other formulas
- **Converged Database Advantage**: Unifying vector search with relational, JSON, and graph capabilities

**The Power of Similarity:**
When a support ticket describes "system became unresponsive," the database understands this is semantically similar to "computer crashed" - even though they share no common words. This happens because their vector representations are mathematically close in high-dimensional space.

The demo visualizes this by showing:
- Crash-related issues clustering together
- Performance problems forming their own group
- Hardware issues creating another cluster
- Unrelated problems (like printer jams) appearing far from computer issues


**The Problem with Traditional Search:**
A keyword search for "crash" completely misses:
- "System became unresponsive"
- "Computer froze during operation"
- "Application stopped working"
- "Blue screen appeared"
- "Unexpected restart occurred"

**The Vector Search Solution:**
All these descriptions are automatically recognized as semantically related. They appear close together in vector space and are returned together in search results, regardless of the specific words used.

### **Flexible Vector Generation**

Oracle provides four approaches for creating embeddings:
1. **Pre-created vectors** from external systems
2. **Database-integrated embedding** using DBMS_VECTOR functions
3. **Application-layer generation** with your preferred libraries
4. **In-database models** using ONNX for complete data locality

The demo showcases approach #2, demonstrating how text is converted to vectors using built-in database functions.

### **How this will benefit your stakeholders:**
- **Lower TCO & complexity** - Do similarity search in the database alongside business data; avoid moving data to a separate vector store and the integration/security overhead that comes with it. 
- **Enterprise-grade by default** - Because AI runs inside Oracle Database, you inherit HA, performance, and security: Partitioning, RAC, Sharding, Exadata, Data Guard, TDE, Key Vault, Audit Vault, VPD, and more.
- **Deploy anywhere you already run Oracle** - Cloud, on-prem, hybrid; VMs, containers, Kubernetes. A feature of Oracle AI Database.
- **Ready now** - Load an embedding model via ONNX, generate vectors, and query with vector_distance() alongside SQL filters.
- **RAG-ready** - Retrieve governed business context for LLMs to reduce hallucinations without retraining on sensitive data.
- **Included** - AI Vector Search is a no-charge feature in every Oracle AI Database.
 
AI in the database means less friction and more impact—sharper decisions, faster innovation, and momentum that compounds.

## Learn More

- [AI Vector Search Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/vecse/overview-ai-vector-search.html)
- [LiveLabs Hands-On Workshops](https://livelabs.oracle.com/pls/apex/f?p=133:180:114898719666832::::wid:4166)
- [Always Free Autonomous Database](https://www.oracle.com/autonomous-database/free-trial/)
- [Oracle Database 23ai Free](https://www.oracle.com/database/free/get-started/)

## Acknowledgements
- Author — Francis Regalado
- Contributors — William Masdon, Brianna Ambler, Ley Sylvester, Mary Hess, David Start
- Last Updated By/Date — Francis Regalado, October 2025
