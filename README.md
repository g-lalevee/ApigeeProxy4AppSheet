[![PyPI status](https://img.shields.io/pypi/status/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/) 

# Appsheet / Apigee / Firestore demo

CRUD Apigee proxy to be used by AppSheet to use Firestore as Data Source.
As easy as 1_2_3_4...

## 1- Firestore

https://console.firebase.google.com/

- Create Collection

## 2- Google Cloud

https://console.cloud.google.com

- Create Service Account for Firestore

## 3- Apigee 

https://apigee.com

- Configure Firestore extension 
- Deploy Apigee proxy
- Create/upload specification
- Create Prooduct / Developer App. (copy API Key)

## 4- AppSheet 

https://www.appsheet.com/

- Create Apigee Data Source
    - You can use swagger samples from this repo (asset, user)
    - Use the API key copied just before
- Create Application
- Enjoy !


> NOTE:  
> Currently, the document ID used to create a new document is a field named >**name**< (must be in data structure).
