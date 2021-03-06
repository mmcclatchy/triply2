"""Adjusted Cars Table


Revision ID: 0c77ff427e5e
Revises: f29ff29b7670
Create Date: 2020-11-24 13:38:43.558853

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0c77ff427e5e'
down_revision = 'f29ff29b7670'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cars', sa.Column('make', sa.String(length=100), nullable=False))
    op.add_column('cars', sa.Column('model', sa.String(length=100), nullable=False))
    op.add_column('cars', sa.Column('mpg', sa.Integer(), nullable=False))
    op.add_column('cars', sa.Column('year', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cars', 'year')
    op.drop_column('cars', 'mpg')
    op.drop_column('cars', 'model')
    op.drop_column('cars', 'make')
    # ### end Alembic commands ###
