# How do I apply a patch on an Oracle GoldenGate Veridata release?

Duration: 2 minutes

## Apply a patch on an Oracle GoldenGate Veridata release

This is an optional step. You can skip this step if you do not want to apply a patch.

You need to apply a patch on the current release of Oracle GoldenGate Veridata only if you want to avail any or all of the following benefits:
  * new functionalities embedded in the latest patch
  * corrected problems or bug fixes (known issues or limitations that existed in the previous release or patch have been corrected)
  * enhancements over existing functionalities

**Assumptions**:
* The `ORACLE_HOME` environment variable is set to the directory where you have installed Oracle GoldenGate Veridata.
* The OPatch location `$ORACLE_HOME/OPatch` is added to the environment variable.

**Prerequisites**:
*  Ensure that all the servers and agents have been stopped.

To apply a patch on an Oracle GoldenGate Veridata release:

1. Go to [Oracle Support](https://mosemp.us.oracle.com/epmos/faces/index.jspx?_afrLoop=174795690219928&_afrWindowMode=0&_adf.ctrl-state=1bogh2ruei_94) and download the required Patch and extract the zip file to a location. This location will be referred to as `PATCH_TOP` in the subsequent steps.
2. Set your current directory to the directory where the patch is located. In the command prompt, run the following command: `cd PATCH_TOP/32436110`. In this example, 32436110 is the patch number.
3. Run `opatch apply` to replace the binaries of the main release with the patch binaries. After the patch is successfully applied, the **OPatch succeeded** message is displayed.
4. Run `opatch lsinventory` to verify the version/patch ID of the applied patch.

## Learn More

* [Oracle GoldenGate Veridata documentation](https://docs.oracle.com/en/middleware/goldengate/veridata/12.2.1.4/index.html)
* [Veridata Basic Workshop-Oracle LiveLabs: Get Started with Oracle GoldenGate Veridata workshop](https://apexapps.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=833)
* [Oracle LiveLabs: Master Oracle GoldenGate Veridata Advanced Features workshop](https://apexapps.oracle.com/pls/apex/dbpm/r/livelabs/view-workshop?wid=913)
