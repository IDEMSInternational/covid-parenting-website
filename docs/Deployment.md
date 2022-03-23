# How to Deploy Covid Parenting Website

## Overview

The Covid Parenting website is available at [covid19parenting.com][1].
The DNS for this is currently on Wix.
This URL points to a Google Cloud Load Balancer in the _Covid Parenting Websites_ GCloud project.
This load balancer then serves the website from one of two backend storage buckets:
- covid-website-storage1 (live)
- covid-website-storage2 (staging)

We upload to bucket 2 that isn't live, but is available to view at [covidp2.idems.international][2]. If everything is ok, the contents of bucket 2 can be copied to bucket 1, to make the changes available on the live site.

## Requirements

### GCloud CLI
Install [Google Cloud CLI][3].

Log in to GCloud.
```
gcloud auth login
```

Switch to the _Covid Parenting Websites_ project.
```
gcloud config set project covid-parenting-websites
```

Verify that `gsutil` is working by attempting to list all buckets.
```
gsutil ls
```

You should see the following amongst the output.
```
gs://covid-website-storage1/
gs://covid-website-storage2/
```

### npm

Install [npm][4].

Set up the project.
```
npm install
```

## How to release a new app website to production

Whenever a change is pushed to the `master` branch, a [Github Action][5] will automatically build the website and copy it to the staging bucket.

1. Wait until the website has been built and pushed to the staging bucket.
1. Check the [staging site][2] to make sure that your changes have been deployed and that the site is working.
1. If everything is ok, run `npm run golive`, to copy the changes from the staging bucket to the live bucket.
1. Check the live site to make sure everything is ok.
1. If so, run `npm run deploy-cleanup`, to remove unecessary files from the live bucket.
1. You are done!


[1]: https://covid19parenting.com
[2]: http://covidp2.idems.international/
[3]: https://cloud.google.com/sdk/docs/install
[4]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[5]: ../.github/workflows/build.yml
