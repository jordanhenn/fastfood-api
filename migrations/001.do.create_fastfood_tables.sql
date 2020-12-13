CREATE TABLE fastfood_buns (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    bun_name TEXT NOT NULL,
    bun_description TEXT NOT NULL,
);

CREATE TABLE fastfood_sauces (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    sauce_name TEXT NOT NULL,
    sauce_description TEXT NOT NULL,
);

CREATE TABLE fastfood_fillings (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    filling_name TEXT NOT NULL,
    filling_description TEXT NOT NULL,
);

CREATE TABLE fastfood_items (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    item_name TEXT NOT NULL,
    item_description TEXT NOT NULL,
    price INTEGER NOT NULL,
    description TEXT NOT NULL,
    bun_id INTEGER
        REFERENCES fastfood_buns(id) ON DELETE CASCADE,
    filling_id INTEGER
        REFERENCES fastfood_fillings(id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE fastfood_creations (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    creation_name TEXT NOT NULL,
    user_name TEXT NOT NULL,
    price INTEGER NOT NULL,
    rating INTEGER,
    number_of_ratings INTEGER DEFAULT (0) NOT NULL,
    date_created TIMESTAMP DEFAULT now() NOT NULL,
    bun_id INTEGER
        REFERENCES fastfood_buns(id) ON DELETE CASCADE NOT NULL,
    fillingOne_id INTEGER
        REFERENCES fastfood_fillings(id) ON DELETE CASCADE NOT NULL,
    fillingTwo_id
        REFERENCES fastfood_fillings(id) ON DELETE CASCADE NOT NULL,
    sauce_id INTEGER
        REFERENCES fastfood_sauces(id) ON DELETE CASCADE NOT NULL
);
