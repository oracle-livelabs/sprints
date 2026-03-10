# Introduction

## About Oracle SQL Firewall

**Oracle SQL Firewall** is a kernel-resident security control built directly into Oracle AI Database 26ai that provides real-time protection against SQL injection attacks. Unlike application-based firewalls or Web Application Firewalls (WAFs) that rely on pattern matching, SQL Firewall operates at the database kernel level, the last line of defense before malicious SQL executes.

SQL Firewall learns normal SQL traffic patterns, creates an allow-list of legitimate SQL statements and connection contexts, and then enforces that policy by blocking any SQL that doesn't match. This allow-list approach protects against both known and unknown attack patterns, including zero-day exploits that bypass traditional defenses.

SQL injection remains one of the most critical database security threats, consistently ranking #3 in the OWASP Top 10 for web application vulnerabilities. With 42% of attacks on public-facing systems being SQL injection-based, organizations need protection that works even when application-level defenses fail.

[Video hosted on Oracle Video Hub](videohub:)

### **Try the Interactive Demo**
Note: You can minimize the menu by clicking '≡' to better interact with the demo.

<iframe src="../sql-firewall3.html" width="100%" height="1000px" frameborder="0" style="min-width: 100%; min-height: 1000px; height: 1000px !important;" ></iframe>

###  
### 

### What You'll Discover:

- **Complete 5-Step Workflow**: Experience the full SQL Firewall deployment lifecycle from monitoring setup through enforcement and violation logging.
- **Monitoring Phase**: Watch SQL Firewall learn normal application SQL patterns during the observation period with continuous packet animations showing traffic flow.
- **Enforcement Activation**: See the transition from learning mode to active protection as the firewall shield changes from blue (monitoring) to green (enforcing) with pulsing glow effects.
- **Real-Time Attack Blocking**: Experience continuous blocked query attempts with red particle explosions at the firewall shield, showing how SQL Firewall stops unauthorized SQL before execution.
- **Data Safe Integration**: Observe violations automatically logged to Oracle Data Safe with a live violation counter that increments as attacks are blocked.
- **Kernel-Resident Architecture**: Understand how being built into the database kernel allows SQL Firewall to see ALL traffic including network connections, stored procedures, and internal jobs.
- **Visual Learning Experience**: Follow the smooth animations showing SQL packets traveling from application to database, with reliable particle explosions indicating success (green) or blocking (red).

### Interactive Demo Features:

- **6 Action Buttons**: Step through the complete workflow - Setup Monitoring, Run SQL Query, Enforce Blocking, Re-run Query (blocked), View in Data Safe, and Reset
- **Live Animations**: Continuous SQL packet flows during monitoring and enforcing modes with real-time pattern capture counters
- **Attack Simulation**: Blocked queries repeat organically every 1.8 seconds in step 4, showing persistent attack attempts being stopped
- **Dynamic Stats Badges**: Real-time counters display patterns captured, queries allowed, and queries blocked
- **Data Safe Visualization**: Purple alert panel appears when violations are logged, with pulsing animation drawing attention to security events
- **SQL Command Display**: Each step shows the actual Oracle SQL commands used to configure and operate SQL Firewall
- **Full-Screen Mode**: Press 'F' or click the full-screen button for an immersive experience

### Key Benefits:

- **Last Line of Defense**: SQL Firewall protects at the database kernel level, stopping SQL injection attacks that bypass application controls and WAFs.
- **Allow-List Approach**: Unlike pattern-based systems, SQL Firewall learns legitimate SQL and blocks everything else, protecting against zero-day exploits.
- **Kernel-Resident Architecture**: Built into the database engine, SQL Firewall sees ALL SQL traffic including bequeath connections, stored procedures, and internal jobs that network firewalls miss.
- **Minimal Performance Impact**: Less than 1-1.5% CPU overhead with no observable latency, making it practical for production deployments.
- **No Client Changes Required**: Simple, scalable deployment across your database fleet with no client-side configuration or networking changes.
- **Comprehensive Visibility**: Logs all violations with full context (SQL text, IP address, OS user, program name) for security monitoring and forensics.
- **Dual Protection Modes**: Can operate in observe-only mode for monitoring or blocking mode for active protection.
- **Works Everywhere**: Available in Oracle AI Database 26ai across on-prem, OCI, multicloud, Always Free tier, and downloadable database images.

### The Challenge SQL Firewall Solves:

SQL injection attacks continue to plague data-driven applications despite decades of awareness:

**Application Defenses Are Unreliable**: Developers make mistakes, code reviews miss problems, and new vulnerabilities are discovered constantly. Traditional approaches like input validation, prepared statements, and avoiding dynamic queries often fail in practice. Even with the best development practices, a single overlooked input field can expose the entire database.

**WAFs Have Limited Effectiveness**: Web Application Firewalls use regular expression patterns to detect known SQL injection payloads, but they're helpless against zero-day exploits. They can't evaluate the actual content of injection payloads and can't use full SQL context when making decisions. Attackers continuously evolve their techniques to bypass pattern-based detection.

**Network Firewalls Have Blind Spots**: External database firewalls can only monitor SQL traffic over the network, missing stored procedure execution, bequeath connections, and local connections. They require complex in-line deployment, create single points of failure, and struggle with encrypted traffic. They also can't see the real object information like CURRENT_SCHEMA or resolve synonyms.

**The Last Line of Defense**: SQL Firewall operates at the database kernel level, the last possible interception point before malicious SQL executes. It understands SQL intent through parsing rather than pattern matching, and enforces allow-lists that protect against both known and unknown attack patterns.

### How It Works:

The demo illustrates SQL Firewall's straightforward five-step deployment process:

**Step 1 - Setup Monitoring**: Activate SQL Firewall in OBSERVE mode for the target user. The shield turns blue indicating monitoring mode, and continuous SQL packets begin flowing from the application to the database. SQL Firewall starts learning normal SQL patterns with a live "Patterns" counter showing captured signatures.

**Step 2 - Run SQL Query**: Execute a test query that succeeds normally. The SQL packet travels to the database with a green particle explosion indicating successful execution. The pattern is captured in the allow-list, shown by the incrementing patterns counter.

**Step 3 - Enforce Blocking**: Stop capture, generate the allow-list from learned patterns, and enable enforcement mode with `block => TRUE`. The shield changes from blue to green with a pulsing glow effect, indicating active protection. Allowed queries continue flowing through with green explosions.

**Step 4 - Re-run Query (Blocked)**: Attempt to execute a modified SQL statement not in the allow-list. The BLOCKED packet stops at the firewall shield with massive red particle explosions. A purple Data Safe alert appears showing the violation was logged. This repeats continuously every 1.8 seconds, simulating persistent attack attempts, with the blocked counter incrementing.

**Step 5 - View in Data Safe**: Query the violation log showing complete audit trail with username, SQL text, client IP, violation cause, and timestamp. A Data Safe panel appears in the canvas showing the total violation count, and the violations table displays detailed forensic information.

### Advanced Capabilities:

**Execution Context Enforcement**: Beyond just SQL signatures, SQL Firewall can enforce trusted connection paths by verifying client IP addresses, OS usernames, and program names - protecting against compromised credentials. If legitimate credentials are used from unexpected locations or programs, SQL Firewall detects and blocks the attempt.

**Flexible Management Options**: Administer SQL Firewall through multiple interfaces:
- Oracle Data Safe (centralized OCI console management)
- DBMS_SQL_FIREWALL PL/SQL package (direct database administration)
- Oracle Enterprise Manager (enterprise-wide monitoring and control)

**Integration with Database Vault**: SQL Firewall is included with Oracle Database Vault, allowing you to combine realm protection (schema and object protection), command rules (operation control), and SQL statement allow-lists (SQL Firewall) for holistic database security. This defense-in-depth approach provides multiple layers of protection.

**Comprehensive Audit Trail**: All violations are logged to `DBA_SQL_FIREWALL_VIOLATIONS` with full context:
- Exact SQL text that was attempted
- Username and session information
- Client IP address and program name
- OS username
- Timestamp and violation cause
- Whether the statement was blocked

This enables security monitoring, forensic analysis, compliance reporting, and detection of attack patterns.

**Gradual Deployment**: Start with observe-only mode (`enforce => DBMS_SQL_FIREWALL.OBSERVE`) to understand your SQL patterns without impacting applications. Monitor the violations log to identify legitimate SQL that wasn't captured during the learning period. Once confident in the allow-list coverage, transition to blocking mode (`block => TRUE`) for active protection.

### Real-World Protection Scenarios:

**Mitigate SQL Injection Risks**: Block attacks that bypass application input validation, protecting against unauthorized data access, data modification, privilege escalation, and data exfiltration. Common attack patterns like `' OR '1'='1` or union-based injection are stopped before execution.

**Detect Compromised Credentials**: Identify when legitimate database credentials are used from unexpected locations, programs, or IP addresses, catching credential theft and insider threats. For example, if an application service account suddenly connects from an administrator's workstation instead of the application server.

**Prevent Application Bypass**: Stop users from bypassing application logic by connecting directly to the database with tools like SQL*Plus, SQL Developer, or third-party query tools. Only connections from approved programs are allowed.

**Protect Legacy Applications**: Add a security layer to applications that can't be easily modified, protecting vulnerable code without application changes. This is especially valuable for purchased applications where source code isn't available or for legacy systems where modification carries high risk.

**Enforce Least Privilege**: Ensure database users can only execute the specific SQL statements they need for their role. Even if an account is compromised, the attacker is limited to the allow-listed SQL operations.

### SQL Firewall vs. Network Database Firewall:

Both Oracle SQL Firewall (kernel-resident) and Oracle Audit Vault and Database Firewall (AVDF, network-based) provide SQL injection protection, but they have different strengths:

**SQL Firewall Advantages**:
- Simple, scalable deployment with no networking changes
- Sees ALL traffic including local connections and stored procedures
- Minimal CPU overhead (1-1.5%) with no latency
- No single point of failure
- Works with encrypted connections without TLS termination
- Can see real object information (schemas, synonyms)

**Database Firewall (AVDF) Advantages**:
- Supports non-Oracle databases (MySQL, MS-SQL, IBM DB2, SAP Sybase)
- Supports Oracle Database from 11.2 through 26ai (on Base Database Service and Exadata)
- Centralized audit collection across heterogeneous database fleets
- Zero performance overhead on database server (in monitoring mode)
- Can be deployed without database changes

**When to Use Each**:
- Use SQL Firewall for Oracle Database 23ai and later when you want kernel-level protection with zero networking complexity
- Use AVDF when protecting non-Oracle databases, or when you need centralized monitoring and compliance reporting across a mixed fleet (including Oracle 26ai, 21c, 19c, and older)
- Use both together for defense-in-depth: SQL Firewall provides kernel-level enforcement inside the database, while AVDF monitors network traffic and delivers a unified audit view across your entire database estate

For comprehensive protection, both can be used together. SQL Firewall is included free with the AVDF license for Oracle databases.

### Performance and Scalability:

**Minimal Overhead**: SQL Firewall adds less than 1-1.5% CPU overhead in production environments. This minimal impact comes from efficient kernel-level implementation that avoids expensive operations like network proxying or external process calls.

**No Observable Latency**: Query response times are not affected because SQL Firewall's signature checking is highly optimized and happens in-memory within the database kernel. The allow-list is indexed for fast lookup.

**Scales with Database**: Because SQL Firewall is built into the database kernel, it automatically scales with your database infrastructure. In Oracle RAC environments, the allow-list is shared across all instances. With Exadata, you get both SQL Firewall protection and Exadata's performance advantages.

**Production-Ready**: Organizations run SQL Firewall in production environments protecting mission-critical databases processing thousands of transactions per second with no performance degradation.

## Learn More

- [Oracle SQL Firewall Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/dbseg/using-oracle-sql-firewall.html)
- [Oracle Data Safe SQL Firewall](https://docs.oracle.com/en-us/iaas/data-safe/doc/sql-firewall.html)
- [LiveLabs SQL Firewall Workshop](https://livelabs.oracle.com/pls/apex/f?p=133:100:::::SEARCH:sql%20firewall)
- [SQL Injection Mitigation Technical Report](https://www.oracle.com/a/ocom/docs/database/oracle-database-sql-firewall.pdf)
- [Always Free Autonomous Database](https://www.oracle.com/autonomous-database/free-trial/)
- [Oracle AI Database Free](https://www.oracle.com/database/free/get-started/)

## Acknowledgements

- Author - Francis Regalado, Database Product Manager
- Contributors - 
- Last Updated By/Date - Francis Regalado, March 2026
