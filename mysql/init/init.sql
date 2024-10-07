CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Optional: Insert some test data
INSERT INTO people (name) VALUES 
    ('John Doe'),
    ('Jane Smith');