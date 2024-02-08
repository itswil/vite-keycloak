# Minimal Keycloak + Vite Setup

## Keycloak

In one terminal tab, run:

```
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:23.0.6 start-dev
```

Follow this guide: [Getting started](https://www.keycloak.org/getting-started/getting-started-docker)

### Realm Settings

Realm name:

```
wld
```

### Create Client

Client ID:

```
myclient
```

### Client Settings

> [!IMPORTANT]  
> Slashes (or lack of) are important

Valid redirect URIs:

```
http://localhost:5173/
```

Valid post logout redirect URIs:

```
http://localhost:5173/
```

Web origins:

```
http://localhost:5173
```

The port `5173` refers to the default port Vite uses

## End User (not Admin) Login URL

[localhost:8080/admin/wld/console/](http://localhost:8080/admin/wld/console/)

### How do I find this?

#### Log in to Master Realm

- Go to [localhost:8080](http://localhost:8080/)
- Click Admin Console
- Login (U: admin, P: admin)

#### Switch to your Realm

- Click the dowpdown with `master`
- Click Clients (sidebar)
- Click `security-admin-console` in Clients List
- Add Home URL to `localhost:8080` (or [localhost:8080/admin/wld/console/](http://localhost:8080/admin/wld/console/))

## Example Keycloak instance

```
{
    "didInitialize": true,
    "authenticated": true,
    "loginRequired": true,
    "silentCheckSsoFallback": true,
    "enableLogging": false,
    "messageReceiveTimeout": 10000,
    "responseMode": "fragment",
    "responseType": "code",
    "flow": "standard",
    "clientId": "myclient",
    "authServerUrl": "http://localhost:8080",
    "realm": "wld",
    "endpoints": {},
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhODczM2MxNS0xYzNmLTRiNDYtYWU0Zi1iYTIxZmFjOTExZmQifQ.eyJleHAiOjE3MDcyMDkzNTIsImlhdCI6MTcwNzIwNzU1MiwianRpIjoiM2IyMzQ4YjgtN2ZkZi00OGVjLWIwMTgtY2M5MmI0MjZhNDM2IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy93bGQiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL3dsZCIsInN1YiI6ImExYmEzNGVhLTgxYTktNGI0Yi04YThiLThmYzhiZTQ1OTRjOCIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJteWNsaWVudCIsIm5vbmNlIjoiOGZjOGRiNmEtY2EyZC00ZWNhLTlmNzktZmYwMzRkOTQ5YmIwIiwic2Vzc2lvbl9zdGF0ZSI6ImZiYjMwZDMxLTI0NDYtNDJjZi05N2Y0LTc5NzJkYjViOWQ1YiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiJmYmIzMGQzMS0yNDQ2LTQyY2YtOTdmNC03OTcyZGI1YjlkNWIifQ.GkkRd4N1geDMS0h9jRzE16vSkOHzTNxXRRJxsFY5_HU",
    "refreshTokenParsed": {
        "exp": 1707209352,
        "iat": 1707207552,
        "jti": "3b2348b8-7fdf-48ec-b018-cc92b426a436",
        "iss": "http://localhost:8080/realms/wld",
        "aud": "http://localhost:8080/realms/wld",
        "sub": "a1ba34ea-81a9-4b4b-8a8b-8fc8be4594c8",
        "typ": "Refresh",
        "azp": "myclient",
        "nonce": "8fc8db6a-ca2d-4eca-9f79-ff034d949bb0",
        "session_state": "fbb30d31-2446-42cf-97f4-7972db5b9d5b",
        "scope": "openid email profile",
        "sid": "fbb30d31-2446-42cf-97f4-7972db5b9d5b"
    },
    "idToken": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXUlgtcm1tc3NJcWFxSDhaZFVoU1hGUnR0ekdYbUdTdDhERzFWLURQMlc4In0.eyJleHAiOjE3MDcyMDc4NTIsImlhdCI6MTcwNzIwNzU1MiwiYXV0aF90aW1lIjoxNzA3MjA3MjEzLCJqdGkiOiJlYjYyNGNhNy0zNWFmLTQwMWMtYjQ3NC1hYzYxNDU2NzM0YjIiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL3dsZCIsImF1ZCI6Im15Y2xpZW50Iiwic3ViIjoiYTFiYTM0ZWEtODFhOS00YjRiLThhOGItOGZjOGJlNDU5NGM4IiwidHlwIjoiSUQiLCJhenAiOiJteWNsaWVudCIsIm5vbmNlIjoiOGZjOGRiNmEtY2EyZC00ZWNhLTlmNzktZmYwMzRkOTQ5YmIwIiwic2Vzc2lvbl9zdGF0ZSI6ImZiYjMwZDMxLTI0NDYtNDJjZi05N2Y0LTc5NzJkYjViOWQ1YiIsImF0X2hhc2giOiJkVHJqeWRSd1pkZ0kzcXc2S05VOUF3IiwiYWNyIjoiMCIsInNpZCI6ImZiYjMwZDMxLTI0NDYtNDJjZi05N2Y0LTc5NzJkYjViOWQ1YiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiSm9obiBEb2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhQGEuY29tIiwiZ2l2ZW5fbmFtZSI6IkpvaG4iLCJmYW1pbHlfbmFtZSI6IkRvZSJ9.cAolosAKeaD07hudn0up71NhejQ9kvKpe49wPoj9WGYMbaXAlLZEw3SPMWjlSRGApjyaJ7pEj0LSuH_sCW3p8gB5AleyP-4MhuYv4PkrIGh2H_5SSU47QHV9m3HWL2d3xMkSaMGeHJK__9rXUwWUotcFyC0PwufTX568quNx-ErFw2EfPSxrOg2MPvlVjiU15hVNly_6WEko23xKOIkp7CpvqJ26iDQWMrwOML8KRAPMD-90YNqXU1VoXepTsK-uwqY5RhleDe_aZYcypzhp_3dz_zOW-ypzPj-Ba6fdpG_CTuR0tXCmfrGTWCI5UPLikcz_wDgVkk8QZjZnN0gU4g",
    "idTokenParsed": {
        "exp": 1707207852,
        "iat": 1707207552,
        "auth_time": 1707207213,
        "jti": "eb624ca7-35af-401c-b474-ac61456734b2",
        "iss": "http://localhost:8080/realms/wld",
        "aud": "myclient",
        "sub": "a1ba34ea-81a9-4b4b-8a8b-8fc8be4594c8",
        "typ": "ID",
        "azp": "myclient",
        "nonce": "8fc8db6a-ca2d-4eca-9f79-ff034d949bb0",
        "session_state": "fbb30d31-2446-42cf-97f4-7972db5b9d5b",
        "at_hash": "dTrjydRwZdgI3qw6KNU9Aw",
        "acr": "0",
        "sid": "fbb30d31-2446-42cf-97f4-7972db5b9d5b",
        "email_verified": true,
        "name": "John Doe",
        "preferred_username": "a@a.com",
        "given_name": "John",
        "family_name": "Doe"
    },
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXUlgtcm1tc3NJcWFxSDhaZFVoU1hGUnR0ekdYbUdTdDhERzFWLURQMlc4In0.eyJleHAiOjE3MDcyMDc4NTIsImlhdCI6MTcwNzIwNzU1MiwiYXV0aF90aW1lIjoxNzA3MjA3MjEzLCJqdGkiOiI4ZjBmNzc3OS05YTU4LTQyNmItOTJlZi03YzIzN2Q0ZmUxOGYiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL3dsZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJhMWJhMzRlYS04MWE5LTRiNGItOGE4Yi04ZmM4YmU0NTk0YzgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJteWNsaWVudCIsIm5vbmNlIjoiOGZjOGRiNmEtY2EyZC00ZWNhLTlmNzktZmYwMzRkOTQ5YmIwIiwic2Vzc2lvbl9zdGF0ZSI6ImZiYjMwZDMxLTI0NDYtNDJjZi05N2Y0LTc5NzJkYjViOWQ1YiIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaHR0cDovL2xvY2FsaG9zdDo1MTczIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtd2xkIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiZmJiMzBkMzEtMjQ0Ni00MmNmLTk3ZjQtNzk3MmRiNWI5ZDViIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKb2huIERvZSIsInByZWZlcnJlZF91c2VybmFtZSI6ImFAYS5jb20iLCJnaXZlbl9uYW1lIjoiSm9obiIsImZhbWlseV9uYW1lIjoiRG9lIn0.QKwUJYvhuZIDSq9cuChbFPBDgLMvFN5BgERPURHGpL7TxLqvEeLgzRMTy_8l9Y1Jv67RffqHcUV3S5SttQYtOrJn1RwP8ryfgeTMqSHaH8GjpJd1IvJPSSgu8bkA4w14phq-H1SNAbxJuH6eYectw9fZCKzog0fWAHVBCTMLGcpWISQtwu0nWboX7BYR8t5bJjLeFAEYzafJZTZNrPOq_wLKCGl1kcivynDhhsJw-E49H8muw6h7ElOj08TqoAZyBEHPnNhPdAliMWvKtE2jSaCkHxReupX30mENQ8yAJYAW_xvCiPNnWSZwvI7kHDqMAZoUH1oBTZQCCgnub_jP9Q",
    "tokenParsed": {
        "exp": 1707207852,
        "iat": 1707207552,
        "auth_time": 1707207213,
        "jti": "8f0f7779-9a58-426b-92ef-7c237d4fe18f",
        "iss": "http://localhost:8080/realms/wld",
        "aud": "account",
        "sub": "a1ba34ea-81a9-4b4b-8a8b-8fc8be4594c8",
        "typ": "Bearer",
        "azp": "myclient",
        "nonce": "8fc8db6a-ca2d-4eca-9f79-ff034d949bb0",
        "session_state": "fbb30d31-2446-42cf-97f4-7972db5b9d5b",
        "acr": "0",
        "allowed-origins": [
            "http://localhost:3000",
            "http://localhost:5173"
        ],
        "realm_access": {
            "roles": [
                "offline_access",
                "default-roles-wld",
                "uma_authorization"
            ]
        },
        "resource_access": {
            "account": {
                "roles": [
                    "manage-account",
                    "manage-account-links",
                    "view-profile"
                ]
            }
        },
        "scope": "openid email profile",
        "sid": "fbb30d31-2446-42cf-97f4-7972db5b9d5b",
        "email_verified": true,
        "name": "John Doe",
        "preferred_username": "a@a.com",
        "given_name": "John",
        "family_name": "Doe"
    },
    "sessionId": "fbb30d31-2446-42cf-97f4-7972db5b9d5b",
    "subject": "a1ba34ea-81a9-4b4b-8a8b-8fc8be4594c8",
    "realmAccess": {
        "roles": [
            "offline_access",
            "default-roles-wld",
            "uma_authorization"
        ]
    },
    "resourceAccess": {
        "account": {
            "roles": [
                "manage-account",
                "manage-account-links",
                "view-profile"
            ]
        }
    },
    "timeSkew": 0,
    "tokenTimeoutHandle": 13
}
```
