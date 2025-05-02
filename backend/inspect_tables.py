from sqlalchemy import inspect
from app.database.session import engine

inspector = inspect(engine)
tables = inspector.get_table_names()
print("Tables found:", tables)
