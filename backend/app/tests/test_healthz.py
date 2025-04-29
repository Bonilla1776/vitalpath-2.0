import requests

def test_healthz_endpoint():
    url = "https://api.vitalpathinnovations.com/healthz"
    response = requests.get(url)
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

