def test_login_invalid_credentials(client):
    response = client.post("/api/v1/auth/login", json={
        "email": "testadmin@corebridge.co.zw",
        "password": "WrongPassword!"
    })
    assert response.status_code == 401
    assert "Incorrect email or password" in response.json()["detail"]

def test_login_success(client):
    response = client.post("/api/v1/auth/login", json={
        "email": "testadmin@corebridge.co.zw",
        "password": "TestPassword123!"
    })
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"
    assert data["user"]["email"] == "testadmin@corebridge.co.zw"

def test_get_current_user_unauthorized(client):
    response = client.get("/api/v1/auth/me")
    assert response.status_code == 401

def test_get_current_user_authorized(client, auth_headers):
    response = client.get("/api/v1/auth/me", headers=auth_headers)
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == "testadmin@corebridge.co.zw"
    assert data["role"] == "superadmin"
