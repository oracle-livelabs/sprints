# How do I geocode addresses in Autonomous Database?
Duration: 5 minutes

## Geocoding in Autonomous Database

Geocoding determines the geographic coordinates of an address. This enables map visualization and location analysis of your address data. Geocoding in ADB requires that a privilege be granted. Once the privilege is granted, a user may perform geocoding.

1. Connect to SQL Worksheet as the **ADMIN** user to grant the required privilege to a non-admin user.
   
    Use an existing non-admin user for this exercise. Or if a non-admin a user needs to be created:

    ```
    <copy>
    GRANT CREATE SESSION TO <username> IDENTIFIED BY <password>;
    </copy>
    ```  

   Grant the required privilege:

    ```
    <copy>
    EXEC SDO_GCDR.ELOC_GRANT_ACCESS(<username>);
    </copy>
    ```

    For example:

    ```
    <copy>
    EXEC SDO_GCDR.ELOC_GRANT_ACCESS('SCOTT');

    PL/SQL procedure successfully completed.
    </copy>
    ```  

2. Connect to SQL Worksheet as the user that's been granted the privilege.
   
    Geocode an address:

    ```
    <copy>
    SELECT SDO_GCDR.ELOC_GEOCODE(<street address>,<city>,<state>,<postal code>,<country code>) 
    FROM DUAL;
    </copy>
    ```

    For example:

    ```
    <copy>
    SELECT SDO_GCDR.ELOC_GEOCODE('123 Beacon St', 'Boston', 'MA', '02116' , 'US') 
    FROM DUAL;

    [{"id":"0","matchCount":"1","matches":[{"sequence":"0","x":-71.07355166666666,"y":42.355174166666664,
    "houseNumber":"123","street":"Beacon St","settlement":"Boston","municipality":"Suffolk","region":"MA",
    "postalCode":"02116","country":"US","language":"ENG","name":"","edgeId":946710796,
    "percent":0.08333333333333333,"side":"R","matchCode":1,"matchVector":"???10101010??000?"}]}]
    </copy>
    ```  

3. Extract items from the geocode result:

    ```
    <copy>
    SELECT json_value(<item>) 
    FROM  (<geocode subquery>);
    </copy>
    ```

    For example:

    ```
    <copy>
    SELECT
     json_value(geocode_result,'$[0].matches[0].x') as lon,
     json_value(geocode_result,'$[0].matches[0].y') as lat,
     json_value(geocode_result,'$[0].matches[0].matchCode') as matchCode
    FROM ( 
     SELECT SDO_GCDR.ELOC_GEOCODE('123 Beacon St', 'Boston', 'MA', '02116' , 'US') as geocode_result
     FROM DUAL );

    
    LON                   LAT                 MATCHCODE
    -71.07355166666666    42.355174166666664  1
    </copy>
    ```

      To geocode using columns in a table, replace the hardcoded parameters in the examples above with columns names from your table. 
  
## Learn More

* See [blog](https://blogs.oracle.com/oraclespatial/post/new-in-database-geocoder-for-autonomous-database-shared) for overview and examples.
* See [documentation](https://docs.oracle.com/en/database/oracle/oracle-database/19/spatl/SDO_GCDR-reference.html) for the following operations:
    * SDO\_GCDR.ELOC\_GRANT\_ACCESS
    * SDO\_GCDR.ELOC\_REVOKE\_ACCESS
    * SDO\_GCDR.ELOC\_GEOCODE
    * SDO\_GCDR.ELOC\_GEOCODE\_AS\_GEOM

## Acknowledgements

* **Author** - David Lapp, Database Product Management, Oracle
* **Last Updated By/Date** - David Lapp, April 2023