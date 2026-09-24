def test_submit_valid_audit_request(client):
    payload = {
        "name": "Farai Ndlovu",
        "company": "Harare Freight Services",
        "email": "operations@hararefreight.co.zw",
        "phone": "+263 772 123 456",
        "message": "We need to integrate our truck GPS telematics with our local invoicing software to stop double entry."
    }
    response = client.post("/api/v1/audits", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["success"] is True
    assert "id" in data
    assert "Operational audit request received" in data["message"]

def test_audit_request_invalid_email(client):
    payload = {
        "name": "Farai Ndlovu",
        "company": "Harare Freight Services",
        "email": "not-an-email",
        "phone": "+263 772 123 456",
        "message": "Testing invalid email"
    }
    response = client.post("/api/v1/audits", json=payload)
    assert response.status_code == 422

def test_audit_request_missing_phone(client):
    payload = {
        "name": "Farai Ndlovu",
        "company": "Harare Freight Services",
        "email": "valid@email.com",
        "message": "Missing phone number"
    }
    response = client.post("/api/v1/audits", json=payload)
    assert response.status_code == 422

def test_audit_request_honeypot_spam(client):
    payload = {
        "name": "Bot Submitter",
        "company": "Spam Corp",
        "email": "spam@example.com",
        "phone": "12345678",
        "message": "Spam payload message",
        "honeypot": "http://spamsite.com"
    }
    response = client.post("/api/v1/audits", json=payload)
    assert response.status_code == 400
    assert "Automated submission detected" in response.json()["detail"]
