# Network Traffic Analysis With Wireshark
Duration: 9 minutes

[video title](videohub:1_f4rft40n)

## Introduction

introduction to wireshark
how to capture http traffic
how to use the capture and display filters
how to decrypt traffic

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

## How to Capture HTTPS Traffic
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



## How to use the Capture and Display Filters

## How to Analyse HTTPS Traffic
