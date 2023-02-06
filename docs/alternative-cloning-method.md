It is possible to clone this repository without the 'tip sheet' PDF files, which are not generally useful for development purposes.

```
git init covid-parenting-website
cd covid-parenting-website
git config lfs.fetchexclude "tip_sheets"
git remote add origin git@github.com:IDEMSInternational/covid-parenting-website.git
git fetch origin
git switch master
git lfs checkout
```

If some or all the tip sheets are required, then amend the `lfs.fetchexclude` configuration accordingly, then git lfs fetch/checkout again.
