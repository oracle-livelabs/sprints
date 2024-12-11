# How to enable SSL debugging in the JDK?
Duration: 5 minutes

## Enable SSL debugging in the JDK

[How to Enable SSL Debugging](videohub:1_5vweehhb)

1. What Java options are needed to enable SSL debugging?

    There are two Java system properties: `javax.net.debug` and `java.security.debug`.

    For SSL connections, `javax.net.debug` is used. It is a JSSE dynamic debug utility.

    For security-related issues, `java.security.debug` is used.


2. Options for javax.net.debug

    Commonly-used options for `javax.net.debug` include:

    - `-Djavax.net.debug=help` shows all available options provided by the JSSE dynamic debugging utility.

    - `-Djavax.net.debug=all` turns on JSSE debugging including SSL debugging.

    - **NOTE:** `-Djavax.net.debug=ssl` is currently not functioning as expected; see [JDK-8044609](https://bugs.openjdk.org/browse/JDK-8044609) for details.

    If you don't know which option to choose, use the `all` option.

    See [Java Secure Socket Extension (JSSE) Reference Guide: Debugging Utilities](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html#Debug) for more details.


3. Options for java.security.debug

    The `java.security.debug` property is helpful when troubleshooting security-related issues. Commonly-used options include:

    - `java.security.debug=help` shows all the available options.

    - `java.security.debug=all` shows all debug information in security-related areas applicable to your Java application.

    - `java.security.debug=certpath` shows the certificate path.

    - `java.security.debug=provider` shows the security provider.

    - `java.security.debug=certpath,provider` shows both the certificate path and the security provider.

    If you don't know which to use, `all` is the best option.

    See the [Java Troubleshooting Security Guide](https://docs.oracle.com/javase/8/docs/technotes/guides/security/troubleshooting-security.html) for more details about this property.


4. Where to add the options?

    SSL connections happen on both the client and server ends. It is better to enable the options on both ends.

    For an SSL server or client Java application, the debug options are added to the command line.


5. Start a sample SSL server

    To start a sample SSL server, execute the following on the command line:

    ```
    <copy>java -Djavax.net.debug=all -Djava.security.debug=certpath -Djavax.net.ssl.keyStore=./etc/keystore -Djavax.net.ssl.keyStorePassword=passphrase EchoServer</copy>
    ```

    When Java runs, it will print the related debugging information to the standard output. The output can be redirected to a file.


6. Start a sample SSL client

    To start a sample SSL client, execute the following on the command line:

    ```
    <copy>java -Djavax.net.debug=all -Djava.security.debug=certpath -Djavax.net.ssl.trustStore=./etc/truststore  -Djavax.net.ssl.trustStorePassword=passphrase  -Djdk.tls.client protocols='TLSv1.2'  SSLConnect</copy>
    ```

    The debug output will go to standard output. The output can be redirected to a file.


## More Information

- [Java Secure Socket Extension (JSSE) Reference Guide: Debugging Utilities section](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html#Debug) 

- [Troubleshooting Security](https://docs.oracle.com/javase/8/docs/technotes/guides/security/troubleshooting-security.html)

- [Debugging SSL/TLS connections](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/ReadDebug.html) 

- Subscribers can always go to [My Oracle Support](https://support.oracle.com/portal/) for more information.

## Acknowledgements
**Video** - Amy Wang, Technical Support Engineer, Java Platform Group  
**Workshop** -  Jason Begy, Principal User Assistance Developer, Java Platform Group  
**Last Updated By/Date** - Jason Begy,  December 2024



