def test_submit_valid_contact(client):
    payload = {
        "name": "Kudzi Marere",
        "email": "kudzi@agritech.co.zw",
        "company": "Agritech Zimbabwe",
        "subject": "Odoo ERP Customization Consultation",
        "message": "We would like to consult on customizing Odoo Community modules for our seed distribution warehouses."
    }
    response = client.post("/api/v1/contact", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["success"] is True
    assert "id" in data

def test_contact_honeypot_spam(client):
    payload = {
        "name": "Bot Submitter",
        "email": "bot@spam.com",
        "message": "Spam payload message",
        "honeypot": "http://spamsite.com"
    }
    response = client.post("/api/v1/contact", json=payload)
    assert response.status_code == 400
