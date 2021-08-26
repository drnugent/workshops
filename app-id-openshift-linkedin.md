# Hybrid Cloud Authentication Lab: Adding LinkedIn Auth to Red Hat OpenShift Clusters

Let's build out a LinkedIn authentication integration on Red Hat OpenShift! We're going to follow [the steps outlined in this blog post](https://www.ibm.com/cloud/blog/app-id-integrate-custom-identity), but updating them to work on Red Hat OpenShift and Kubernetes.

1. Sign Up for IBM Cloud: https://ibm.biz/os-linkedin-auth
1. Log In to LinkedIn: https://www.linkedin.com

# IBM Cloud Instructions

1. Ensure you're logged in to IBM Cloud: https://ibm.biz/os-linkedin-auth
2. Create an [App ID Service](https://cloud.ibm.com/catalog/services/app-id). Make sure you select the **Lite** tier before clicking **Create**.
3. In the left-hand menu, click **Applications**, then **Add Application**. Choose an application name and select **Web Application**, then click **Save**.
4. Click the tick mark next to your application to **expand** the application details. Here you'll find credentials to plug into your sample app.
5. In the left-hand menu, under **Identity Providers**, click **Custom Identity**.
6. Here is where you'll paste in the public key that we create in a later step. Keep this tab open.

# LinkedIn Instructions

1. In order to create an app through the LinkedIn Developer portal, you'll first need to [Create a Page on LinkedIn](https://www.linkedin.com/help/linkedin/answer/710/create-a-linkedin-page?lang=en)
1. [Create an App on LinkedIn](https://www.linkedin.com/developers/apps/new)
1. In the **Auth** tab, copy down your **Client ID** and **Client Secret**
1. In the **Products** tab, click the **Select** button next to **Sign In with LinkedIn**.

# Red Hat OpenShift Cluster Instructions

1. Fill out the form at https://openidauth2.mybluemix.net with the **email address** for your IBM Cloud account and **oslab** as the lab key.
1. Go to your [IBM Cloud Notifications](https://cloud.ibm.com/notifications) and find the message **You are invited to join an account in IBM Cloud.** Click **Join now.**
1. On the next page, click **Accept Invite**.
1. Go back to your [IBM Cloud Dashboard](https://cloud.ibm.com/). On the top menu bar, to the right, click on your account name (just to the right of "Manage") and select **1840867 - Advowork** from the drop-down menu.
1. [Click here to get a list of the clusters in your account](https://cloud.ibm.com/kubernetes/clusters). You should see one named something like **openidauth2-000**. Click it.
1. In the upper-right, click **Actions** then select **Connect via CLI**. Follow the instructions on this page to get your login command.
1. In the upper-right, click **IBM Cloud Shell**, just to the right of your account name.
1. When the shell loads, **paste** the login command into the shell.
1. You're now logged in to your Red Hat OpenShift cluster. Let's create a new command by executing `oc new-project webapp`
1. Now, let's generate some new public and private keys:
```
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -pubout -in private_key.pem -out public_key.pem
```
1. Execute `cat public_key.pem` and paste the results into the **App ID browser tab** we kept open from the prior steps. Click **Save**.
1. Execute `git clone https://github.com/drnugent/appid-rhos`, then `cd appid-rhos`


# Resources

* Link to Crowdcast: https://www.crowdcast.io/e/os-linkedin-auth?utm_source=profile&utm_medium=profile_web&utm_campaign=profile

# FAQ

1. **Will the workshop be recorded?** Yes, the workshop will be recorded and availalbe at the same URL on Crowdcast. It will take a few minutes to process at the end of the event, after which you'll be able to see it.
1. **Can I ask questions after the workshop?** Yes, Dave will be available on Twitter: https://twitter.com/drnugent
