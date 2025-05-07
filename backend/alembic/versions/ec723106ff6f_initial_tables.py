"""Initial tables

Revision ID: ec723106ff6f
Revises: 
Create Date: 2025-05-06 21:23:25.155864
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = 'ec723106ff6f'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Create new tables
    op.create_table(
        'consents',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('user_id', sa.String(), nullable=True),
        sa.Column('consent_given', sa.String(), nullable=False),
        sa.Column('timestamp', sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_consents_id'), 'consents', ['id'], unique=False)
    op.create_index(op.f('ix_consents_user_id'), 'consents', ['user_id'], unique=False)

    op.create_table(
        'users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('email', sa.String(), nullable=False),
        sa.Column('full_name', sa.String(), nullable=True),
        sa.Column('hashed_password', sa.String(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_users_email'), 'users', ['email'], unique=True)
    op.create_index(op.f('ix_users_id'), 'users', ['id'], unique=False)

    # Drop outdated table if it exists
    op.execute('DROP TABLE IF EXISTS user_progress CASCADE')

    # Drop and re-add user_id with correct type and FK
    op.drop_column('discovery_data', 'user_id')
    op.add_column('discovery_data', sa.Column('user_id', sa.Integer(), nullable=False))
    op.create_foreign_key('fk_discovery_user_users', 'discovery_data', 'users', ['user_id'], ['id'])

    # Add new columns
    op.add_column('discovery_data', sa.Column('health_goal', sa.String(), nullable=True))
    op.add_column('discovery_data', sa.Column('current_status', sa.String(), nullable=True))

    # Drop deprecated columns
    op.drop_column('discovery_data', 'height_feet')
    op.drop_column('discovery_data', 'height_inches')
    op.drop_column('discovery_data', 'health_goals')
    op.drop_column('discovery_data', 'wellness')
    op.drop_column('discovery_data', 'gender')
    op.drop_column('discovery_data', 'weight')
    op.drop_column('discovery_data', 'location')
    op.drop_column('discovery_data', 'age')
    op.drop_column('discovery_data', 'marital_status')
    op.drop_column('discovery_data', 'name')
    op.drop_column('discovery_data', 'values')


def downgrade() -> None:
    # Reverse schema changes
    op.add_column('discovery_data', sa.Column('values', postgresql.JSON(astext_type=sa.Text()), nullable=True))
    op.add_column('discovery_data', sa.Column('name', sa.String(), nullable=True))
    op.add_column('discovery_data', sa.Column('marital_status', sa.String(), nullable=True))
    op.add_column('discovery_data', sa.Column('age', sa.Integer(), nullable=True))
    op.add_column('discovery_data', sa.Column('location', sa.String(), nullable=True))
    op.add_column('discovery_data', sa.Column('weight', sa.Integer(), nullable=True))
    op.add_column('discovery_data', sa.Column('gender', sa.String(), nullable=True))
    op.add_column('discovery_data', sa.Column('wellness', postgresql.JSON(astext_type=sa.Text()), nullable=True))
    op.add_column('discovery_data', sa.Column('health_goals', postgresql.JSON(astext_type=sa.Text()), nullable=True))
    op.add_column('discovery_data', sa.Column('height_inches', sa.Integer(), nullable=True))
    op.add_column('discovery_data', sa.Column('height_feet', sa.Integer(), nullable=True))

    op.drop_constraint('fk_discovery_user_users', 'discovery_data', type_='foreignkey')
    op.drop_column('discovery_data', 'user_id')
    op.add_column('discovery_data', sa.Column('user_id', postgresql.UUID(), nullable=True))
    op.create_foreign_key('fk_discovery_user', 'discovery_data', 'user_progress', ['user_id'], ['user_id'], ondelete='CASCADE')

    op.drop_column('discovery_data', 'current_status')
    op.drop_column('discovery_data', 'health_goal')

    op.create_table(
        'user_progress',
        sa.Column('user_id', postgresql.UUID(), primary_key=True),
        sa.Column('consent_complete', sa.Boolean(), server_default=sa.text('false')),
        sa.Column('discovery_complete', sa.Boolean(), server_default=sa.text('false')),
        sa.Column('created_at', postgresql.TIMESTAMP(), server_default=sa.text('now()')),
        sa.Column('updated_at', postgresql.TIMESTAMP(), server_default=sa.text('now()'))
    )

    op.drop_index(op.f('ix_users_id'), table_name='users')
    op.drop_index(op.f('ix_users_email'), table_name='users')
    op.drop_table('users')

    op.drop_index(op.f('ix_consents_user_id'), table_name='consents')
    op.drop_index(op.f('ix_consents_id'), table_name='consents')
    op.drop_table('consents')


