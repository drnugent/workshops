# Red Hat OpenShift with Watson VR
## July 30, 2020

* **Sign Up for IBM Cloud:** https://ibm.biz/rhos-20200730

You can also log in at this URL if you already have an IBM Cloud account.

* **Check Out [Red Hat Marketplace](https://ibm.biz/rhos-20200730)**

[Red Hat Marketplace](https://ibm.biz/BdqhS6), built in partnership between Red Hat and IBM, is an open cloud marketplace that makes it easier to discover and access certified software for container-based environments in public clouds and on-prem. With automated deployment, software is immediately available to deploy on any Red Hat® OpenShift® cluster, providing a fast, integrated experience

* **Review the Red Hat OpenShift Workshop instructions:** https://developer.ibm.com/tutorials/openshift-ai-integration-max-model-deployment-labs/

These instructions include a Red Hat OpenShift environment that you can use.

## Workshop Instruction
* ** Create Watson VR service and get credential info
If you already have this, you don't have to create it. you can just use exsisting service
Reffer https://cloud.ibm.com/docs/visual-recognition?topic=visual-recognition-getting-started-tutorial
and get "apikey" (Save this to your note)

* ** setup Openshift
Go to https://www.ibm.com/demos/
Select "Red Hat OpenShift on IBM Cloud" (scroll down)
then Select "Hands on Labs for Red Hat OpenShift on IBM Cloud"
then Select Lab1 and "launch Lab", you can see command line interface on the right.
Go to Exercise 2 and lauch the OpenShift Web console as described in that page.
You can see the OpenShift console in another tab.
Copy login command to your clipboard. (right upper corner, click your account name)
Paste that to command line console.

* ** Create project and deploy application.
Input these command to create project and deploy a@pplication.
```
oc new-app https://github.com/osonoi/watson-vr-node-e.git -e CLASSIFIER_ID=food -e WATSON_VISION_COMBINED_APIKEY=<APIKEY>
Please raplace <APIKEY> to your API KEI you get in the first step of this workshop.
oc logs -f bc/watson-vr-node-e
oc expose deployment watson-vr-node-e --port=3000 --type=LoadBalancer --name=watson-vr-node-ingress
oc expose service watson-vr-node-ingress
oc get route/watson-vr-node-ingress
```
You can see the applcation URL like 
 http://watson-vr-node-ingress-default.dte-ocp4-yt0ysu-915b3b336cabec458a7c7ec2aa7c625f-0000.us-south.containers.appdomain.cloud/
Please open new tab and access to that URL

# FAQ

1. **Will the workshop be recorded?** Yes, the workshop will be recorded and availalbe at the same URL on Crowdcast. It will take a few minutes to process at the end of the event, after which you'll be able to see it.
1. **Is this cluster all mine?** Depending on the number of participants, we may assign multiple people to each cluster, so please don't upload any personal information or protected code.
