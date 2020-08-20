# AI integration with OpenShift: Deploy and consume ready-to-use deep learning microservices on OpenShift
## August 20, 2020

* **Step 0: [Check Out Red Hat Marketplace](https://ibm.biz/Bdqugd)**

* **Step 1: [Sign Up for IBM Cloud](https://ibm.biz/BdqgsB)** 

You can also log in at this URL if you already have an IBM Cloud account.

* **Step 2: Create a Visual Recognition Service** https://cloud.ibm.com/catalog/services/visual-recognition

1. Select the **Lite** tier and click **Create.** Click **Service Credentials** on the left menu and note the **apikey** and **url**.
1. Open the **IBM Cloud Shell** by clicking in the upper-right of your IBM Cloud browser tab.
1. Call the service by copying the following URL `curl -u "apikey:{apikey}" "{url}/v3/classify?url={image_url}&version=2018-03-19"` and replace the **apikey** and **url** with your service credentials. Here is an example `image_url` to use: `https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1`

Now that we've created a cloud service, we'll see how easy it is to deploy our own microservice on a Red Hat OpenShift cluster.

* **Step 3: Assign Yourself a Red Hat OpenShift Cluster**

1. Visit https://rhosai.mybluemix.net/ and enter the **email address** you used to sign up for IBM Cloud.
1. Enter the key **oslab** and hit submit.

* **Review the Red Hat OpenShift Workshop instructions:** https://developer.ibm.com/tutorials/deploy-a-model-asset-exchange-microservice-on-red-hat-openshift/

# FAQ

1. **Will the workshop be recorded?** Yes, the workshop will be recorded and availalbe at the same URL on Crowdcast. It will take a few minutes to process at the end of the event, after which you'll be able to see it.
1. **Is this cluster all mine?** Depending on the number of participants, we may assign multiple people to each cluster, so please don't upload any personal information or protected code.
