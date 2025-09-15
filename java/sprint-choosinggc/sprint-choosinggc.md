# Choosing a Garbage Collector
Duration: 45 minutes

This is a beginner level introduction to Java memory management.

[Choosing a Garbage Collector](videohub:1_ut7i2uzu)


## Safe Harbor Statement
??

## Table of Contents
1. Introducing the Java Heap
2. Java Heap Space
3. Garbage Collectors
4. Heap Layouts
5. Managing the Young Generation
6. Managing the Old Generation
7. Z Garbage Collector (ZGC) – Something Different
8. Monitoring and Troubleshooting
9. Summary and Further  Learning

## 1. Introducing the Java Heap
![Diagram of the Java Heap](./images/1-intro.png)

The Java heap is a memory pool within the virtual memory space of a Java process. It contains the Java objects, their fields, references, class names, and so on.  When Java program code creates a new object, the memory for that object is allocated in the Java heap at runtime.  

The Java heap is just one of several memory consumers in a Java process. For example, the Metaspace is another memory pool, and it contains the loaded Java classes and their metadata. In fact, objects in the Java heap contain references to their class data in the Metaspace.  

The Java heap and the virtual memory consumers depicted in green are managed by the JVM.  This means JVM utilities can monitor their memory usage and other behaviors. The native consumers depicted in gray are managed by the operating system and require system utilities for monitoring them.

It’s a common misconception that the system memory usage of a Java process will be about equivalent to the Java heap size.  While this may be true for some applications, it's not always the case. It’s important to consider the other memory consumers, along with how your application uses memory. For example, an application that implements a native cache versus one that implements an on-heap cache. The total system memory needed by a Java  application may be considerably more than what is used for object allocations alone. 

## 2. Java Heap Space



## Acknowledgements
**Video** - Sandra Payne, Technical Support Engineer, Java Platform Group  
**Workshop** -  Jason Begy, Principal User Assistance Developer, Java Platform Group  
**Last Updated By/Date** - Jason Begy,  September 2025