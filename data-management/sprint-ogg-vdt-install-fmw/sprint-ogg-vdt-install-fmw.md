# How do I install the Fusion Middleware infrastructure?

Duration: 2 minutes

### Prerequisites
  * Linux
  * Oracle Database 19c (19.3.0.0) (for the repository)
  * Java 1.8 or higher
  * [Oracle GoldenGate Veridata Software](https://www.oracle.com/middleware/technologies/goldengate-downloads.html)

## Install the Fusion Middleware Infrastructure

1. Open a terminal session. Run the following command: `java -jar fmw_12.2.1.4.0_infrastructure_generic.jar`
    ![](./imagesfmw-welcomescreen.png " ")
2. Click **Next** to continue to the **Auto Updates** section. Leave the default option **Skip Auto Updates** selected and click **Next**.
    ![](./images/fmw-autoupdates.png " ")
3. Enter a location for Oracle Home to store the binary files.
    ![](./images/fmw-installationlocation.png " ")
4. Click **Next** to continue.
5. Select either installation type (Fusion Middleware infrastructure With Examples or Fusion Middleware Infrastructure). Towards the end of this step, the Oracle WebLogic Server gets installed.
    ![](./images/fmw-installationtype.png " ")
6. Wait for the progress bar to reach 100%. The Java version required is 1.8 or higher. Click **Next** to continue to the **Prerequisites Checks** screen.
    ![](./images/fmw-prerequisiteschecks.png " ")
7. Click **Next** to continue to the **Installation Summary** screen.
    ![](./images/fmw-installationsummary.png " ")
8. On the **Installation Summary** screen, click **Next** to display the **Installation Progress** panel.
    ![](./images/fmw-installationprogress.png " ")
9. Click **Install** to continue and wait for the progress bar to reach 100%. You can optionally view the logs.
10. Click **Next** to display the **Installation Complete** section.
    ![](./images/fmw-installationcomplete.png " ")
11. Click **Finish**.


## Learn More

* [Oracle GoldenGate Veridata documentation](https://docs.oracle.com/en/middleware/goldengate/veridata/12.2.1.4/index.html)
* [Veridata Basic Workshop-Oracle LiveLabs: Get Started with Oracle GoldenGate Veridata workshop](https://apexapps.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=833)
* [Oracle LiveLabs: Master Oracle GoldenGate Veridata Advanced Features workshop](https://apexapps.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=913)
