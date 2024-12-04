# Troubleshoot SSL Exceptions in Java: ‘sun.security.validator.ValidatorException: PKIX path building failed’
Duration: 7 minutes

This sprint covers possible causes of a 'sun.security.validator.ValidatorException: PKIX path building failed' exception, and how to resolve them.

## Troubleshooting ‘sun.security.validator.ValidatorException: PKIX path building failed’ Exceptions

[Troubleshooting SSL Exceptions](videohub:1_3848m5e3)

### 1. Introduction

The TLS (Transport Layer Security) handshake is a crucial process that establishes a secure connection between a client and a server.

To establish a successful TLS handshake, it is essential to create a trusted chain of trust. Typically, TLS servers possess an X.509 certificate, which is issued and digitally signed by a trusted root Certificate Authority (CA). This certificate serves as proof of the server's identity, ensuring that the client can verify the server's authenticity and establish a secure connection.

For the client to establish a connection, it must trust the same root Certificate Authority (CA) that issued the server's certificate. This is achieved by configuring a trust store, a repository of trusted CA certificates. In Java environments, the default trust store is often located at `$JAVA_HOME/lib/security/cacerts`.

If the client is unable to validate the certificate chain presented by the server, it will throw an exception such as:

```
caused by: javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed:sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```

### 2. Common Causes

**Multiple JRE/JDK Versions:** Having multiple JRE/JDK installations in the client can result in the certificate being imported into the wrong `cacerts` file, leading to trust issues.

**Using a Custom Trust Store:** If a custom trust store is specified using `-Djavax.net.ssl.trustStore`, ensure the application is correctly pointing to it. Misconfiguration can override the default trust store (`cacerts`) and cause validation errors even if the root CA certificate is present.

**Using Self-Signed Certificates:** Java applications attempting to connect to a server using a self-signed certificate will encounter trust issues, as Java does not recognize self-signed certificates unless specifically configured to do so.

**Using a Non-popular Certificate Authority (CA):** This can happen when there are many intermediate certificate authorities involved in the chain of certificates used by the domain. In such cases, Java fails to validate authenticity unless all intermediate certificates are known to it.

### 3. Resolution

1. The public certificate needs to be imported into the Java trust store that your application uses. The JDK/JRE provides a tool to interact with the certificate store to administer its content. This tool is Keytool and can be found in `$JAVA_HOME/bin/keytool`.

2. Manually add the certificate to `cacerts` by executing the following command:

    ```
    <copy>keytool -import -trustcacerts
    -file [certificate-file]
    -alias [alias]
    -keystore $JAVA_HOME/lib/security/cacerts</copy>
    ```

3. Verify the certificates added to Java trust store by using the following command:

    ```
    <copy>
    keytool -list -v -keystore $JAVA_HOME/lib/security/cacerts
    </copy>
    ```

    This will return a list of all the entries. For example:
    ```
    Alias name: self-signed
    Creation date: Nov 1, 2024
    Entry type: trustedCertEntry

    Owner: O=Internet Widgits Pty Ltd, ST=MA, C=US
    Issuer: O=Internet Widgits Pty Ltd, ST=MA, C=US
    Serial number: b69d075cfca7982fded01076b14145362acc85e
    Valid from: Mon Nov 1 09:50:43 EST 2024 until: Tue Nov 1 09:50:43 EST 2025
    Certificate fingerprints:
    ```

4. Use the below script to automate the whole process (example given is for Unix):
    ```
    <copy>
    #!/bin/sh
    # cacerts.sh

    /usr/bin/openssl s_client -showcerts -connect $1:443 </dev/null 2>/dev/null |  /usr/bin/openssl x509 -outform PEM > /tmp/$1.pem

    $JAVA_HOME/bin/keytool -import -trustcacerts -file /tmp/$1.pem -alias $1 -keystore $JAVA_HOME/lib/security/cacerts

    rm /tmp/$1.pem
    </copy>
    ```
    This script opens an SSL connection to the domain name system (DNS) passed as the first argument and requests it to show the certificates. The certificate information is piped through OpenSSL and is stored as a PEM file. This PEM file is then used by keytool to import the certificate into the cacerts file with the DNS as the alias.

    For instance, we can try adding the certificate for https://<URL\>

    ```
    cacerts.sh <URL>
    ```

### 4. Debugging

If you are still unable to resolve the issue, the following debug parameters can be used to troubleshoot further:
```
-Djavax.net.debug=all
-Djava.security.debug=certpath
```

### 5. Some Less Common Causes

- This error can arise from a very strict network configuration or firewall rule. To eliminate this possibility, head to your favorite browser and try to access the URL that creates problems. If the browser can process it without errors, then it means the problem is with the client application’s certificate configuration.

- You may also come across this error after upgrading, reinstalling, or changing the configurations of your Java installation. At times, the certificate configurations in Java’s internal trust store may get messed up during these activities and can result in this error. So always check that your application is pointing to the right Java installation and verify the `cacerts` file is available in `$JAVA_HOME/lib/security`.

- Check if your trust store is outdated. If so, upgrade Java to the latest version supported by your application.


## Learn More
Oracle customers can refer to [Troubleshooting "sun.security.validator.ValidatorException: PKIX path building failed" Exceptions (Doc ID 2924538.1)](https://support.oracle.com/epmos/faces/DocumentDisplay?id=2924538.1) on the My Oracle Support portal.


## Acknowledgements
**Video** - Anjana Sajeev, Technical Support Engineer, Java Platform Group  
**Workshop** -  Jason Begy, Principal User Assistance Developer, Java Platform Group  
**Last Updated By/Date** - Jason Begy,  December 2024



