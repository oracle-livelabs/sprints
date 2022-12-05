# How do I connect to a pluggable database (PDB)?
Duration: 3 minutes

The multitenant architecture enables an Oracle database to function as a multitenant container database (CDB). A PDB is a user-created set of schemas, objects, and related structures that appears logically to a client application as a separate database. A PDB is 'plugged' into a CDB. A CDB can host multiple PDBs whereas each PDB can serve a completely different purpose.


## (Direct) Connect to a pluggable database (PDB)

You can directly connect to a PDB using its registered service name in the listener.

### Examples

If you are using EZCONNECT (Oracle's easy connect naming method): 

```
CONN system/password@//localhost:1521/pdb1
```


If you have set up a TNS alias in your tnsnames.ora file, you can connect like so:

```
CONN system/password@pdb1
```

## Connecting to PDB from a Container Database (CDB)

If you are connected to a CDB, you can directly connect (or 'alter your session') to a PDB.

First, connect to the CDB:

EZCONNECT:

```
CONN system/password@//localhost:1521/cdb1
```

TNSNAMES.ORA:

```
CONN system/password@cdb1
```

Let's assume your PDB is named 'pdb1', then you can connect like so:

```
ALTER SESSION SET CONTAINER=pdb1;
```

You can also check to which database you are connected by using the following command:

```
SHOW CON_NAME
```


## Learn More

* [Learn more about the concepts of PDB and CDB](https://docs.oracle.com/en/database/oracle/oracle-database/21/cncpt/CDBs-and-PDBs.html#GUID-5C339A60-2163-4ECE-B7A9-4D67D3D894FB)
* [Connecting to a Pluggable Database (PDB) on Tim Hall's Blog](https://oracle-base.com/articles/12c/multitenant-connecting-to-cdb-and-pdb-12cr1#pdb)
