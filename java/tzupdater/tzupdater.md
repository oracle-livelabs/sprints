# How Can I Update the Timezone Data in Java?
Duration: 2 minutes

## Video
[TZUpdater Tutorial](videohub:1_oshhvfcf)

## Slides

### 1. Introduction
![Slide 1 - Introduction](./images/slide1.png)

This is a quick tutorial on how to use TZUpdater to update the tzdata in Java.

Oracle updates the TZ Data database irregularly.

Whenever a new tzdata is released from the Standards body IANA, the database is usually made available in between Java releases, so Java will rarely have the most recent updates.

TZUpdater has an option `-L` which allows the user to go to the IANA website and update using the most recent version of the TZ Database.

So the user can instantly be on the current TZ Database without having to update their Java version.

### 2. TZUPdater Download
![Slide 2 - TZUpdater Download](./images/slide2.png)

Customers can download the latest TZUpdater tool from [Document 1439822.2 Supported Java SE and Java Component Downloads](https://support.oracle.com/epmos/faces/DocumentDisplay?_afrLoop=294109915825213&id=1439822.2) on My Oracle Support.

**NOTE:** All users can [download TZUpdater here](https://www.oracle.com/java/technologies/downloads/tools/#TZUpdater).

### 3. How to Verify TZ Data Version
![Slide 3 - How to Verify TZ Data Version](./images/slide3.png)

From the directory of where you have the tzupdater jar file, you can check the tzdata version by running this command:
You only need to note the line with JRE tzdata version.
You can ignore the rest.

### 4. Latest tzdata
![Slide 4 - Latest tzdata](./images/slide4.png)
You can find the latest tzdata on the IANA website.
Right click the link with tzdata and copy the link.

### 5. Update tzadata
![Slide 5 - Update tzadata](./images/slide5.png)
Use this command and paste the latest tzdata link you copied.
This will install tzdata directly from the IANA website.
If you get an error, check you have the right permissions and try again.

### 6. - Verify Again to Confirm
![Slide 6 - Verify Again to Confirm](./images/slide6.png)
Run the verify command again to see if the change has taken effect.

### 7. References
![Slide 7 - References](./images/slide7.png)
Java SE Subscribers can learn more by viewing [Document 1999305.1 on My Oracle Support](https://mosemp.us.oracle.com/epmos/faces/DocumentDisplay?_afrLoop=294479586613931&id=1999305.1).  

## Additional Information
[TZUpdater Documentation.](https://www.oracle.com/java/technologies/javase/tzupdater-readme.html)

Currently, the `-XshowSettings:all` option does not display the tzdata version. This will be fixed in an upcoming release. See [JDK-8305950](https://bugs.openjdk.org/browse/JDK-8305950) for details.




## Acknowledgements
**Video** - Cody Gaffney, Technical Support Engineer, Java Platform Group  
**Workshop** -  Jason Begy, Principal User Assistance Developer, Java Platform Group  
**Last Updated By/Date** - Jason Begy,  July 2023



