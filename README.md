Example of a simple Lambda function (with serverless framework) that triggers wercker build!

`npm i -g serverless`

Configure via `secrets.yml`

```
wercker: token
applicationId: get it from fetchApplications
username: your_user
```

Listing all applications:

`serverless invoke local -f fetchApplications`

To test it locally:

`serverless invoke local -f triggerBuild`

To deploy it:

`serverless deploy`

It will trigger a build every 6 hours by default.
