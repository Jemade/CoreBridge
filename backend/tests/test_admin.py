def test_admin_audits_unauthorized(client):
    response = client.get("/api/v1/admin/audits")
    assert response.status_code == 401

def test_admin_audits_workflow(client, auth_headers):
    # 1. Submit a lead
    submit_res = client.post("/api/v1/audits", json={
        "name": "Audit Client",
        "company": "Enterprise Mining Zimbabwe",
        "email": "lead@mining.co.zw",
        "phone": "+263 774 999 888",
        "message": "Equipment tracking ERP integration needed."
    })
    assert submit_res.status_code == 201
    lead_id = submit_res.json()["id"]

    # 2. Retrieve list as admin
    list_res = client.get("/api/v1/admin/audits", headers=auth_headers)
    assert list_res.status_code == 200
    leads = list_res.json()
    assert any(l["id"] == lead_id for l in leads)

    # 3. Transition status from NEW to CONTACTED
    patch_res = client.patch(
        f"/api/v1/admin/audits/{lead_id}/status",
        headers=auth_headers,
        json={"status": "CONTACTED", "notes": "Called lead, scheduled discovery call for Thursday."}
    )
    assert patch_res.status_code == 200
    updated = patch_res.json()
    assert updated["status"] == "CONTACTED"
    assert "scheduled discovery call" in updated["notes"]

def test_admin_case_study_crud(client, auth_headers):
    # 1. Create case study
    create_res = client.post("/api/v1/admin/case-studies", headers=auth_headers, json={
        "title": "Automated Multi-Warehouse Sync for FMCG Distributor",
        "slug": "fmcg-warehouse-sync",
        "industry": "FMCG Wholesalers",
        "summary": "Centralized inventory sync across 4 regional warehouses reducing stockouts by 42%.",
        "technology": "Python, Odoo, Redis, PostgreSQL",
        "is_published": True
    })
    assert create_res.status_code == 201
    study_id = create_res.json()["id"]

    # 2. View in public case studies list
    pub_res = client.get("/api/v1/case-studies")
    assert pub_res.status_code == 200
    studies = pub_res.json()
    assert any(s["slug"] == "fmcg-warehouse-sync" for s in studies)
