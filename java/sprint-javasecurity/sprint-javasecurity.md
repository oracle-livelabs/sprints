# Understand the java.security File
Duration: 7 minutes

This sprint introduces the reader to the `java.security` file: what it is, how it is used by the JDK, and how to disable crptographic algorithms.

## The java.security File
[Understand the java.security File](videohub:1_twqibl5d)

1. Introduction  
The `java.security` file is a vital component of Java's security framework. It contains important configuration data, and maintains security properties for the JDK environment. It is crucial to know that it's location can vary, depending on your operating system.


2. File Locations  
Understanding where to find the `java.security` file is key. For Linux, Solaris, macOS, and Windows, the location varies across different JDK versions. Here is how to find them:

    - Linux / Solaris / macOS
        - JDK 11 and later: \[JDK_HOME\]/jdk-\[VERSION\]/conf/security/java.security
        - JDK 7 and 8: \[JDK_HOME\]/jre/lib/security/java.security

    - Windows
        - JDK 11 and later: \[JDK_HOME\]\jdk-\[VERSION]\conf\security\java.security
        - JDK 8: \[JDK_HOME\]\jre\lib\security\java.security


3. Alternate Properties File  
You can specify an alternate `java.security` properties file via the command line using the system property `-Djava.security.properties=<URL>`. These command line values can override those in the primary file.

4. Setting Java Security Properties  
Java security properties cannot be set directly via the command line, but rather, is done through the `java.security` file, or dynamically by using Security class methods.


5. Disabled and Restricted Cryptographic Algorithms  
The Java security model involves disabling certain algorithms during TLS protocol negotiation. In certain environments, some algorithms or key lengths might be undesirable when using TLS.  
The following properties are discussed below:
    - `jdk.certpath.disabledAlgorithms`
    - `jdk.tls.disabledAlgorithms`
    - `jdk.jar.disabledAlgorithms`
    - `jdk.disabled.namedCurves`
    - `jdk.security.legacyAlgorithms`


6. jdk.certpath.disabledAlgorithms  
CertPath code uses the `jdk.certpath.disabledAlgorithms` property to determine which algorithms should not be allowed during CertPath checking.  
For example, when a TLS server sends an identifying certificate chain, a client trust manager that uses a CertPath implementation to verify the received chain will not allow the stated condition.  
Example: `jdk.certpath.disabledAlgorithms=MD2, DSA, RSA keySize < 2048`


7. jdk.tls.disabledAlgorithms  
The `jdk.tls.disabledAlgorithms` security property is used by some JSSE code to disable TLS/DTLS protocols, keys, cipher suites, and other related features.  
Example: `jdk.tls.disabledAlgorithms=MD5, SSLv3, DSA, RSA keySize < 2048`

8. jdk.tls.legacyAlgorithms  
Algorithms that the JDK considers "legacy" may be found in the security property `jdk.tls.legacyAlgorithms`. Some algorithms may be unsuitable in specific situations, yet because they are part of legacy software, cannot be turned off. Legacy algorithms are not negotiated during TLS/DTLS security parameter negotiations unless no alternative candidates are available. 
Example: `jdk.tls.legacyAlgorithms=DH_anon, DES_CBC, SSL_RSA_WITH_RC4_128_MD5`

9. jdk.jar.disabledAlgorithms  
The `jarsigner` command determines whether algorithms are deemed a security concern by using the security properties `jdk.jar.disabledAlgorithms` and `jdk.security.legacyAlgorithms`. The JAR file will be regarded as "unsigned" if any disabled algorithms were used to sign it.  
Example: `jdk.jar.disabledAlgorithms=MD2, MD5, RSA keySize < 1024`  
Example: `jdk.security.legacyAlgorithms=SHA1`

10. jdk.disabled.namedCurves  
The `jdk.disabled.namedCurves` property contains a list of disabled EC named curves. Any named curves specified with this property will be automatically included in the `jdk.certpath.disabledAlgorithms`, `jdk.tls.disabledAlgorithms`, and `jdk.jar.disabledAlgorithms` properties.

11. Disabled SHA-1 JARs  
SHA-1 signed JAR files are disabled by default. Exceptions apply, but this policy impacts the digests, signatures, certificates, CRLs, and OCSP responses used in JAR verification.

12. Disabled SHA-1 XML Signatures  
XML signature secure validation mode enhances security when validating XML signatures. It enforces restrictions such as forbidding XSLT transforms, and limiting the number of elements.

13. Enhancements in JDK 17  
Starting in JDK 17, XML signature secure validation mode is enabled by default, providing improved security. Additionally, SHA-1 XML signatures are now disabled by default as well, although users can re-enable SHA-1 at their own risk.

14. Deprecate Weak Algorithms in Kerberos  
Weak encryption algorithms, including 3DES and RC4 Kerberos, have been deprecated in the JDK. They are disabled by default but users can re-enable them by adjusting configuration settings.

15. Conclusion  
Understanding and managing the `java.security` file is vital for maintaining a secure Java environment. Disabling weak cryptographic algorithms enhances security. Staying informed about JDK enhancements and security policies is crucial for maintaining robust security practices.


16. Additional Help  
- Java SE Support subscribers can learn more by viewing [Document 2937047.1 Disabling and Restricting Cryptographic Algorithms in the JDK](https://support.oracle.com/epmos/faces/DocumentDisplay?_afrLoop=472322353756120&id=2937047.1) on My Oracle Support.
- Support subscribers can also open a Service Request with Java SE Support on [My Oracle Support](https://support.oracle.com) (use product code 856).

## Further Reading
- [Disable weak named curves by default in TLS, CertPath, and Signed JAR](https://bugs.openjdk.org/browse/JDK-8235540)
- Java SE "Security Developer's Guide" for:
    - [JDK 21](https://docs.oracle.com/en/java/javase/21/security/index.html#Java-Platform%2C-Standard-Edition)
    - [JDK 17](https://docs.oracle.com/en/java/javase/17/security/index.html#Java-Platform%2C-Standard-Edition)
    - [JDK 11](https://docs.oracle.com/en/java/javase/11/security/index.html#Java-Platform%2C-Standard-Edition)
- [Java Security Overview (JDK 8)](https://docs.oracle.com/javase/8/docs/technotes/guides/security/overview/jsoverview.html)


## Acknowledgements
**Video** - Cody Gaffney, Technical Support Engineer, Java Platform Group
**Workshop** -  Jason Begy, Principal User Assistance Developer, Java Platform Group
**Last Updated By/Date** - Jason Begy,  February 2024



