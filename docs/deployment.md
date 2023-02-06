# Requirements

You must have write access to this repository to deploy to the live site.

# How to publish changes to the live site

1. Push changes to `master` branch - this will automatically trigger a deployment to the staging site.
1. Wait until the ["Deploy to staging"][5] workflow has completed.
1. Check the [staging site][2] to make sure that your changes have been deployed and that the site is working.
1. If everything is ok, manually trigger the ["Go live!"][6] workflow, to copy the changes from the staging bucket to the live bucket.
1. Check the [live site][1] to make sure everything is ok.
1. You are done!

# Notes

The Covid Parenting website is available at [covid19parenting.com][1].

The DNS for this is currently on Wix.

This URL points to a Google Cloud Load Balancer in the _Covid Parenting Websites_ Google Cloud project. This load balancer then serves the website from one of two backend storage buckets:
- covid-website-storage1 (live)
- covid-website-storage2 (staging)


[1]: https://covid19parenting.com
[2]: http://covidp2.idems.international/
[3]: https://cloud.google.com/sdk/docs/install
[4]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[5]: https://github.com/IDEMSInternational/covid-parenting-website/actions/workflows/build.yml
[6]: https://github.com/IDEMSInternational/covid-parenting-website/actions/workflows/go-live.yaml
