import requests

def test_healthz_endpoint():
    url = "https://vitalpath-backend.gentlepebble-9bae58f5.westus2.azurecontainerapps.io/healthz"
    response = requests.get(url)
    assert response.status_code == 200


