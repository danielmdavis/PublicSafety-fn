# README for Public Safety 2.0 functions

## To install:

* Make sure you're logged into Docker on the command line, using the credentials Shane can provide. (The user is orasenatdpltintegration01/Burlington-faas-user.)

* Copy `oci.yaml` into your `~/.fn/contexts/` directory to set up a context called `oci`.

* Test the whole thing out by running `fn list apps.` For a full guide on getting started, see <https://blogs.oracle.com/developers/oracle-functions:-serverless-on-oracle-cloud-developers-guide-to-getting-started-quickly>.

## To deploy functions as you revise them:

* chdir into one of the function directories (currently, `OpenTicket` and `TellDroneAboutTicket`).

* `fn -v deploy --app ps20` to send the app up to OCI.

## TBD process for local development without deployment to OCI

* _fill me in_
