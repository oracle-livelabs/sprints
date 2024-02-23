#!/bin/bash

#===============================================================================================================================
# Solution to Add New User to FA_GSI_Administrator Role of the Oracle Applications Cloud (Fusion) Application in FA (SaaS) IDCS.
# Pre-Requisites: JSON Processor should be Installed (yum install jq -y)
# Enter the IDCS URL e.g., https://idcs-xxxxxxxxxxxxxxxxxxx.identity.oraclecloud.com
# Enter the ClientID and ClientSecret values of the Application "Oracle Applications Cloud (Fusion)" from the FA (SaaS) IDCS.
# Enter the IDCS UserName of the User needed to be added to the FA_GSI_Administrator Application Role.
#===============================================================================================================================

IDCS_URL=https://idcs-f5exxxxxxxxxxxxxxxxxxxxxxxx00403.identity.oraclecloud.com
Client_ID=8c881xxxxxxxxxxxxxxxxxxxxxxx8bcd752518f
Client_Secret=1a0xxxxxxx-xxxx-xxxx-xxxx-1a9xxxxxxx6b0
New_User=user@domain.com

# Get the IDCS Access Token using the Client ID, Client Secret and IDCS URL.
export ACCESS_TOKEN=`curl -k -i -u "${Client_ID}:${Client_Secret}" -H 'Conset=UTF-8' --request POST "${IDCS_URL}/oauth2/v1/token" -d 'grant_type=client_credentials&scope=urn:opc:idm:__myscopes__' | sed -rn 's/(\{"access_token":")([^"]+)(.*)/\2/p'`
#echo $ACCESS_TOKEN

# Get the Application with displayName as "Oracle Applications Cloud (Fusion)".
curl -k -X GET -H "Content-Type: application/scim+json" -H "Authorization: Bearer ${ACCESS_TOKEN}" "${IDCS_URL}/admin/v1/Apps?filter=displayName+eq+%22Oracle+Applications+Cloud+(Fusion)%22" | jq . > App.json

# Get the Application ID from the App.json file.
AppID=`jq .Resources[].id App.json |sed -rn 's/(")([^"]+)(.*)/\2/p'`
#echo $AppID

# Get the Application Role with displayName as "FA_GSI_Administrator".
curl -k -X GET -H "Content-Type: application/scim+json" -H "Authorization: Bearer ${ACCESS_TOKEN}" "${IDCS_URL}/admin/v1/AppRoles?filter=displayName+eq+%22FA_GSI_Administrator%22" | jq . > AppRole.json

# Get the Application Role ID from the AppRole.json file.
AppRoleID=`jq .Resources[].id AppRole.json |sed -rn 's/(")([^"]+)(.*)/\2/p'`
#echo $AppRoleID

# Get the ID of the New User to be added to FA_GSI_Administrator Role with userName as "${New_User}".
curl -k -X GET -H "Content-Type: application/scim+json" -H "Authorization: Bearer ${ACCESS_TOKEN}"  "${IDCS_URL}/admin/v1/Users?filter=userName+eq+%22${New_User}%22" | jq . > User.json

# Get the User ID from the User.json file.
UserID=`jq .Resources[].id User.json |sed -rn 's/(")([^"]+)(.*)/\2/p'`
#echo $UserID

# Create the Payload to grant the ${New_User} to the Application Role FA_GSI_Administrator.
echo '{
  "app": {
    "value": "'$AppID'"
  },
  "entitlement": {
    "attributeName": "appRoles",
    "attributeValue": "'$AppRoleID'"
  },
  "grantMechanism": "ADMINISTRATOR_TO_USER",
  "grantee": {
    "value": "'$UserID'",
    "type": "User"
  },
  "schemas": [
    "urn:ietf:params:scim:schemas:oracle:idcs:Grant"
  ]
}' > usergrant.json


curl -k -X POST -H "Content-Type: application/scim+json" -H "Cache-Control: no-cache" -H "Authorization: Bearer ${ACCESS_TOKEN}" "${IDCS_URL}/admin/v1/Grants" -d @usergrant.json

#curl -k -X POST -H "Content-Type: application/scim+json" -H "Cache-Control: no-cache" -H "Authorization: Bearer ${ACCESS_TOKEN}" "${IDCS_URL}/admin/v1/Grants" -d @usergrant.json | jq . > output.json

# Get the list of members of the Application Role FA_GSI_Administrator
curl -k -X GET -H "Content-Type: application/scim+json" -H "Authorization: Bearer ${ACCESS_TOKEN}" "${IDCS_URL}/admin/v1/AppRoles?filter=app.value+eq+%22${AppID}%22&attributes=members" | jq . > members.json
echo ""
echo "Members of the Application Role FA_GSI_Administrator:"
echo "-----------------------------------------------------"
jq .Resources[].members[].display members.json |sed -rn 's/(")([^"]+)(.*)/\2/p'
echo "-----------------------------------------------------"

rm -f members.json
rm -f usergrant.json
rm -f User.json
rm -f AppRole.json
rm -f App.json
rm -f output.json