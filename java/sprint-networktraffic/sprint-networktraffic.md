# Network Traffic Analysis With Wireshark on Linux
Duration: 9 minutes

[video title](videohub:1_f4rft40n)

## Wireshark Overview
Wireshark is an open source network traffic analyzer. It offers deep insights into the behaviour and performance of networks, and supports multiple operating systems. It can capture network traffic from internet, Bluetooth, and wireless connections, and stores the data for offline analysis.

Wireshark helps us to understand how communication takes place across networks. It is useful for analysis and identifying issues.

Key uses include:
- Troubleshooting, to identify and analyze network issues such as latency or packet loss
- Security Analysis, to detect potential security issues by marking suspicious traffic
- Protocol Development, to assist developers in debugging and testing network protocols

In capturing network traffic, Wireshark will trace the entire packet from layers 2 to 7 of the OSI model.

## Packets
Wireshark captures packets from network connections. A packet is a piece of data sent over a network, also known as a network frame.

Packets contain various headers to specify the type of packet, the source and destination IP addresses, and the protocol.

## How to Capture and Analyze HTTPS Traffic
Launch Wireshark from a Linux terminal using:
```
wireshark &
```
When Wireshark opens, we need to select a network interface to capture traffic. To find out which interface to select, use the `ifconfig` command.

This will tell us the local IP address and to which network interface it is mapped. Select this interface.

There are three ways to capture packets in Wireshark:
1. Click the **Start capturing packets** button in the tool bar
    wireshark-start.png
2. Under the **Capture** menu, select **Start**
3. Under the **Capture** menu, select **Options**. The Capture Options window opens.

In the Capture Options window, the **Capture filter for selected interfaces:** text field can be used to limit which traffic is captured. To capture HTTPS traffic, enter "port 443" in the field and click the **Start** button.

In your web browser, navigate to a website of your choice, and then return to Wireshark to see the traffic being captured. Stop recording by clicking the **Stop capturing packets** button in the toolbar.
    wireshark-stop.png

You can now analyze captured packets.

The display filter can be used to filter packets for display. For example, to view TLS packets only, enter "tls" in the display filter field.

To filter for TLS handshake packets, enter "tls.handshake" in the display filter field.

To filter for TLS Client Hello packets, enter "tls.handshake.type eq 1" in the display filter field.

To filter for TLS Server Hello packets, enter "tls.handshake.type eq 1" in the display filter field.

In the Server Hello packets, you can see that in the Info field there are entries for "Server Hello," "Change Cipher Spec," and "Application Data."

To find out if the application data is in an encrypted formant, select the packet entry, and then expand the **Transport Layer Security** tree in the bottom left.
    encrypted-packet.png

In the tree, expand **TLSv1.3 Record Layer: Application Data Protocol: Hypertext Transfer Protocol**.  The **Encrypted Application Data** entry means that the packet was encrypted.

Another way to find out if a packet was encrypted is to first select the packet, and then under the **Analyze** menu, expand **Follow** to select **TCP Stream**. You can also select **TLS Stream** from this menu, and if there is no data visible then it was encrypted.



To decrypt this message, we can use a TLS key.

To do so, first export the SSLKEYLOGFILE environment variable by entering the following in the terminal:
```
export SSLKEYLOGFILE=~/ssl-key.log
```
In Wireshark, under the **Edit** menu select **Preferences**. In the Preferences window, expand **Protocols**. Scroll down and select **TLS**. Specify a (Pre)-Master-Secret log filename by clicking **Browse**. Navigate to your home directory and select the `ssl-key.log` file.

The entries in the Info column for encrypted packets will now be decrypted.
    decrypted-packet.png

