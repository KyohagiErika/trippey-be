ALTER TABLE Place DROP COLUMN priceStart;
ALTER TABLE Place DROP COLUMN priceEnd;
ALTER TABLE Place DROP COLUMN unit;
ALTER TABLE Place DROP COLUMN experienceTimeStart;
ALTER TABLE Place DROP COLUMN experienceTimeEnd;
ALTER TABLE Place ADD content NVARCHAR(255) NOT NULL;