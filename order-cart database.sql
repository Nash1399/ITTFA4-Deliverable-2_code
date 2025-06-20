-- create the cart database
CREATE TABLE IF NOT EXISTS cart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_email TEXT NOT NULL,   -- users can not have an active cart without log in 
    item_name TEXT NOT NULL,
    category TEXT NOT NULL,           
    subcategory TEXT CHECK ( -- checks the catgeroy of order places (read via js on html button)
        subcategory IN (
            'Flame Grilled',
            'Seafood',
            'Mexican',
            'Vegetarian',
            'BBQ',
            'Texan Style BBQ'
        )
    ),
    quantity INTEGER NOT NULL DEFAULT 1, 
    price REAL NOT NULL,  -- cant order something free
    total REAL NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
