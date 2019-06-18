# README for Public Safety 2.0 functions

## To install:

* Put the wallet file for the Oracle cloud database you're using in the `wallet/` directory in each subdirectory.

* Make sure you're logged into Docker on the command line.

* `./buildme.sh` will build and deploy all of the components of an app called PublicSafety.

## Developer next steps:

* `hellodb` contains an example for how to load the `oracledb` database library. It needs to be built out further to test a connection to an actual database, following the instructions in step 6 of <https://oracle.github.io/learning-library/workshops/autonomous-transaction-processing/?page=LabGuide500Configurenode.jsAppWithATP.md>.
