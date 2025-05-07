from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import Field

class Settings(BaseSettings):
    azure_ad_b2c_client_id: str
    azure_ad_b2c_client_secret: str
    azure_ad_b2c_redirect_uri: str
    azure_ad_b2c_tenant: str
    azure_ad_b2c_policy: str
    azure_ad_b2c_issuer: str
    database_url: str = Field(..., alias="DATABASE_URL")

    model_config = SettingsConfigDict(
        extra='allow',
        env_file=".env",
        env_file_encoding="utf-8",
        populate_by_name=True
    )

settings = Settings()





